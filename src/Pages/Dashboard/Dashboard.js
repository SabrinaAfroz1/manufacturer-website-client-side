import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id=" dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-2xl text-primary'> Welcome to your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor=" dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Profile</Link></li>

                        {!admin && <li><Link to="/dashboard/addreview">Add Reviews</Link></li>
                        }
                        {!admin && <li><Link to="/dashboard/myorder">My Orders</Link></li>
                        }




                        {admin && <li><Link to="/dashboard/alluser">All User</Link></li>}
                        {admin && <li><Link to="/dashboard/addtool">Add Product</Link></li>}
                        {admin && <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>}
                        {admin && <li><Link to="/dashboard/manageorder">Manage Order</Link></li>}



                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;