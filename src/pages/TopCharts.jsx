import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByGenreQuery('genre-global-chart-2');

    if (isFetching) return <Loader title="Loading top chart" />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.tracks?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopCharts;
