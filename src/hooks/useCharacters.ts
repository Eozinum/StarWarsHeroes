import {useState} from 'react';
import {useGetCharactersByPageQuery} from '../redux/charactersApi';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {clearLikes} from '../redux/likesSlice';

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const {data, isFetching} = useGetCharactersByPageQuery(page);
  const likes = useAppSelector(state => state.likes.likes);
  const dispatch = useAppDispatch();

  const loadMoreCharacters = () => {
    if (!isFetching && data?.next) {
      setPage(currentPage => currentPage + 1);
    }
  };

  const hanldleClearLikes = () => dispatch(clearLikes());

  let likesCounter = {
    femaleLikes: 0,
    maleLikes: 0,
    otherLikes: 0,
  };

  if (data?.results) {
    likesCounter.femaleLikes = data?.results.filter(
      char => char.gender === 'female' && likes.includes(char.url),
    ).length;

    likesCounter.maleLikes = data?.results.filter(
      char => char.gender === 'male' && likes.includes(char.url),
    ).length;

    likesCounter.otherLikes = data?.results.filter(
      char =>
        !['male', 'female'].includes(char.gender) && likes.includes(char.url),
    ).length;
  }

  return {
    characters: data?.results,
    likes,
    likesCounter,
    hanldleClearLikes,
    loadMoreCharacters,
    isFetching,
  };
};
