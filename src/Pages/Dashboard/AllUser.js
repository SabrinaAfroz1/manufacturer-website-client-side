import React, { useState, useEffect } from 'react';

import UserRow from './UserRow';


const AllUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = 'https://calm-ridge-04381.herokuapp.com/user';
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

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