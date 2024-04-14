import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
    return (
        <div className="relative w-full flex flex-col">
            <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

            <div className="absolute inset-0 flex items-center">
                <img
                    src={
                        artistId
                            ? artistData?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
                            : songData?.attributes?.images?.coverArt
                    }
                    alt="art"
                    className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
                />

                <div className="ml-5">
                    <p className="text-white font-bold text-xl sm:text-3xl">
                        {artistId ? artistData?.attributes?.name : songData?.attributes?.title}
                    </p>
                    {!artistId && (
                        <Link to={`/artists/${songData?.relationships?.artists?.data[0]?.id}`}>
                            <p className="text-base text-gray-400 mt-2">{songData?.attributes?.artist}</p>
                        </Link>
                    )}

                    <p className="text-base text-gray-400 mt-2">
                        {artistId ? artistData?.attributes?.genreNames : songData?.attributes?.genres?.primary}
                    </p>
                </div>
            </div>

            <div className="w-full sm:h-44 h-24"></div>
        </div>
    );
};

export default DetailsHeader;
