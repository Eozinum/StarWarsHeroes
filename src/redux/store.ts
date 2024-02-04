import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {charactersApi} from './charactersApi';
import createDebugger from 'redux-flipper';
import likesReducer from './likesSlice';

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    likes: likesReducer,
  },
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware().concat(charactersApi.middleware);
    if (__DEV__) {
      middleware.push(createDebugger() as any);
    }
    return middleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
