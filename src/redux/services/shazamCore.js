import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '09e33a6ef9msheabea68e7c69727p113340jsn431ee8d60670');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/track?listId=${genre}` }),
        getSongDetails: builder.query({
            query: (songid) => `/shazam-songs/get-details?id=${songid}`,
        }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
        getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}` }),
        getSongsByCountry: builder.query({
            query: (countryCode) => `/charts/track?listId=ip-country-chart-${countryCode}`,
        }),
        getSongBySearch: builder.query({
            query: (searchTerm) => `/search?term=${searchTerm}`,
        }),
        getSongRelated: builder.query({
            query: (songid) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistTopSongsQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongBySearchQuery,
} = shazamCoreApi;
