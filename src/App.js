import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import About from './pages/About';
import EventInfo from './pages/EventInfo';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { path: '/event', element: <EventInfo />},
      { path: '/about', element: <About />}
    ]
  },
]);



function App() {
  return <RouterProvider router={router}/>;
    
}

export default App;
