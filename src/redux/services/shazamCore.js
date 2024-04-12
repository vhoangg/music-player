import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '76b9b162c3mshe6159a44c42980dp1d8fddjsn322db8b1ca4e');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/track?listId=${genre}` }),
        getSongDetails: builder.query({
            query: (songid) => `/songs/get-details?key=${songid}`,
        }),
        getSongRelated: builder.query({ query: (songid) => `/songs/list-recommendations?key=${songid}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
        getSongsByCountry: builder.query({
            query: (countryCode) => `/charts/track?listId=ip-country-chart-${countryCode}`,
        }),
        getSongBySearch: builder.query({
            query: (searchTerm) => `/search?term=${searchTerm}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongBySearchQuery,
} = shazamCoreApi;
