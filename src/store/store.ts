import { createStore, applyMiddleware } from 'redux';
import authReducer from '../store/auth/auth.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(authReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;