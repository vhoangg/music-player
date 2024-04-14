import { Error, Loader, ArtistCard } from '../components';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
    const { data, isFetching, error } = useGetSongsByGenreQuery('genre-global-chart-2');

    if (isFetching) return <Loader title="Loading top Artists" />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10"> Top Artists</h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.tracks?.map((track, i) => (
                    <ArtistCard key={track.key} track={track} />
                ))}
            </div>
        </div>
    );
};

export default TopArtists;
