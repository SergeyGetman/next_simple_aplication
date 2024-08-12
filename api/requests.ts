import { END } from 'redux-saga';
import { REQUEST_POSTS } from '../store/actions/action';
import { AppStore } from '../store/store';

export const fetchPosts = async (store: AppStore) => {
  store.dispatch({ type: REQUEST_POSTS });

  store.dispatch(END);
  await store.sagaTask?.toPromise();

  return { props: {} };
};
