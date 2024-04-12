import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

    if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

    if (error) return <Error />;

    const artistData = data?.data[0];

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />

            {/* <RelatedSongs
                data={Object.values(artistData?.song)}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
            /> */}
        </div>
    );
};

export default ArtistDetails;
