import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element: <SignUp />
  },
  {
    path:"/profile",
    element: <ProfilePage />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
      </React.StrictMode>
    
     
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
