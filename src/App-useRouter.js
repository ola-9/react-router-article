
import {
  BrowserRouter,
  useRoutes,
  useLocation
} from 'react-router-dom';
import { MainPage } from './MainPage';
import { PageOne, PageTwo } from './Pages';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log(`Current location is ${location}`)
  }, [location]);

  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
      children: [
        { index: true, element: <div>No page is selected</div> },
        { path: '*', element: <PageOne /> },
        { path: 'two', element: <PageTwo /> },
      ],
    },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;