import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {


    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://calm-ridge-04381.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin ')
                }
                res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`SuccessFully Made An Admin`);
                }
            })
    }
    return (

        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td> {role !== 'admin' &&
                <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>} </td>
        </tr>


    );
};

export default UserRow;

