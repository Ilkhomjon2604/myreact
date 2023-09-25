import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CrudTable } from './context/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <CrudTable>
            <App />
        </CrudTable>
        
    
  </React.StrictMode>
);

