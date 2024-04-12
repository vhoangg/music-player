import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => {
        return state.player;
    });

    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'genre-global-chart-1');

    if (isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />;

    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
                <select
                    onChange={(e) => {
                        dispatch(selectGenreListId(e.target.value));
                    }}
                    value={genreListId || 'Pop'}
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full flex flex-wrap sm:justify-start justify-center gap-8">
                {data.tracks.map((item, index) => (
                    <SongCard
                        key={item.key}
                        song={item}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data?.tracks}
                        i={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
