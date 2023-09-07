import logo from './logo.svg';
import './App.css';
import MainHeader from './MainDisplayPage/MainDisplay.js';
import SingleData from './SingleUserData/SingleData.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddItem from './UserForm/AddItem';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHeader/>
    },
    {
      path: "/additem",
      element: <AddItem />
    },
    {
      path: "/display",
      element: <SingleData />
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
