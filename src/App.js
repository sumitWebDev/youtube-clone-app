
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer'
import WatchPage from './components/watchPage';
const appRouter = createBrowserRouter([{
  path: '/',
  element:<Body/>,
  children :[
    {
      path: '/',
      element : <MainContainer/>
    },
    {
      path:'/watch',
      element:<WatchPage />
    }
  ]
}])
function App() {
  return (
    <Provider store={store} >
    <div className="App">
    <Head />
    <RouterProvider router={appRouter}/>

     {
      /**
       * Head
       * Body
       *  Sidebar
       *    MenuItems
       * Main Container
       *  ButtonsList
       *  Video Container
       *    Video Card
       */
     }
    </div>
    </Provider>
  );
}

export default App;
