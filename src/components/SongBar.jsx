import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
    <div
        className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
            activeSong?.title === (song?.attributes?.name || song?.attributes?.title)
                ? 'bg-[#4c426e]'
                : 'bg-transparent'
        } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
        <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
        <div className="flex-1 flex flex-row justify-between items-center">
            <img
                className="w-20 h-20 rounded-lg"
                src={
                    artistId
                        ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')
                        : song?.attributes?.images?.coverArt
                }
                alt={song?.title || song?.attributes?.title}
            />
            <div className="flex-1 flex flex-col justify-center mx-3">
                {!artistId ? (
                    <Link to={`/songs/${song.id}`}>
                        <p className="text-xl font-bold text-white">{song?.attributes?.title}</p>
                    </Link>
                ) : (
                    <p className="text-xl font-bold text-white">{song?.attributes?.name}</p>
                )}
                <p className="text-base text-gray-300 mt-1">
                    {artistId ? song?.attributes?.albumName : song?.attributes?.artist}
                </p>
            </div>
        </div>
        {!artistId ? (
            <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song?.attributes}
                handlePause={handlePauseClick}
                handlePlay={() => handlePlayClick(song?.attributes, i)}
            />
        ) : null}
    </div>
);

export default SongBar;
