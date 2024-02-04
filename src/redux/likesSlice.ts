import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '.';
import type {PayloadAction} from '@reduxjs/toolkit';

type LikesState = {
  likes: string[];
};

const initialState: LikesState = {
  likes: [],
};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    handleLike: (state, action: PayloadAction<string>) => {
      if (state.likes.includes(action.payload)) {
        state.likes = state.likes.filter(likeUrl => likeUrl !== action.payload);
      } else {
        state.likes.push(action.payload);
      }
    },
    clearLikes: state => {
      state.likes = [];
    },
  },
});

export const {handleLike, clearLikes} = likesSlice.actions;
export const selectLikes = (state: RootState) => state.likes;

export default likesSlice.reducer;
