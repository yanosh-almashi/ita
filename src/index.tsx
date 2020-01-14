
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import  App  from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import {
  ThemeProvider,
  StylesProvider
} from "@material-ui/core/styles";
import { theme } from "./index.style";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import "./styles/index.css";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index.sagas";
import { GlobalCSS } from "./index.style";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <GlobalCSS />
          <App />
        </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
