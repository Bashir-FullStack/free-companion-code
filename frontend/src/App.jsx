import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import { store } from './redux/store/store.js'; 
import './App.css'; 
 
function App() { 
  return ( 
    <Provider store={store}> 
      <Router> 
        <Routes> 
          <Route path="/" element={<h1>Welcome to Free-Companion-Code</h1>} /> 
        </Routes> 
      </Router> 
    </Provider> 
  ); 
} 
 
export default App; 
