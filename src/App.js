
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import Profile from './Pages/Dashboard/Profile';
import AddReview from './Pages/Dashboard/AddReview';
import Myorders from './Pages/Dashboard/Myorders';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import AllUser from './Pages/Dashboard/AllUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfound from './Pages/Shared/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import AddTool from './Pages/Dashboard/AddTool';

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:toolId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

          <Route index element={<Profile></Profile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myorder' element={<Myorders></Myorders>}></Route>


          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='addtool' element={<AddTool></AddTool>}></Route>
          <Route path='alluser' element={<AllUser></AllUser>}></Route>
        </Route>




        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
