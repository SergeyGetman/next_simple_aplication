import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootReducer from './slice';
import rootSaga from '../api/saga/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = EnhancedStore<RootState> & {
  sagaTask?: Task;
};

export default store;
