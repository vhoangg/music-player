import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
    <div className="flex flex-col">
        <h1 className="text-white font-bold text-3xl">Related Songs:</h1>

        <div className="w-full flex flex-col mt-6">
            {data?.map((song, i) => (
                <SongBar
                    key={`${song.key}-${artistId}`}
                    song={song}
                    i={i}
                    artistId={artistId}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />
            ))}
        </div>
    </div>
);

export default RelatedSongs;
