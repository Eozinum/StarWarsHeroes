import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Character} from '../types';

type ApiResult = {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
};

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/people/'}),
  endpoints: builder => ({
    getCharactersByPage: builder.query<ApiResult, number>({
      query: (page = 1) => `?page=${page}`,
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newResponse) => {
        return {
          ...currentCache,
          results: [...currentCache.results, ...newResponse.results],
          next: newResponse.next,
          previous: newResponse.previous,
        };
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {useGetCharactersByPageQuery} = charactersApi;
