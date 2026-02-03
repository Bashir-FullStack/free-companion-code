import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx'; 
import './styles/main.css'; 
import style from '@monaco-editor/react';
import { loginSuccess } from './redux/slices/authSlice.js';
import { JSAnimation } from 'framer-motion';
export default{
  loginSuccess ,
  JSAnimation,
}
 
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode> 
    <App /> 
  </React.StrictMode> 
); 
