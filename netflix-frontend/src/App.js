import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { createBrowserRouter } from "react-router-dom"

function App() {
  return (
    createBrowserRouter([
      {
        path: "/",
        element: <div>Fuck you bitch</div>,
      }
    ])
    
  );
}

// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   }
// ])

export default App;
