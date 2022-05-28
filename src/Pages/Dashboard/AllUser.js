import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Pages/Shared/Loading'
import UserRow from './UserRow';

const AllUser = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://calm-ridge-04381.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th> SL No</th>
                            <th>Email</th>
                            <th>Admin Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <UserRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                >

                                </UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;