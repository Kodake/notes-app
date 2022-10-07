import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware
    ],
});

sagaMiddleware.run(rootSaga);

export default store;