
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
import AddProducts from './Pages/Dashboard/AddProducts';
import AllUser from './Pages/Dashboard/AllUser';

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>


        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

          <Route index element={<Profile></Profile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myorder' element={<Myorders></Myorders>}></Route>


          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='addproduct' element={<AddProducts></AddProducts>}></Route>
          <Route path='alluser' element={<AllUser></AllUser>}></Route>







        </Route>

      </Routes>

    </div>
  );
}

export default App;
