import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Routing
import { BrowserRouter } from "react-router-dom";

// Redux 
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import sellerAgentSignupReducer from "./store/reducers/sellerAgentSignup";
import themeReducer from "./store/reducers/theme";

// Material
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

const composeEnhancers =(process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null) || compose;



const rootReducer = combineReducers({
  auth: authReducer,
  sellerAgent: sellerAgentSignupReducer,
  theme: themeReducer,
});
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor= persistStore(store)

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

