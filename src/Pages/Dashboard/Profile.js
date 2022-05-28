import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Profile = () => {
    const [user] = useAuthState(auth);

    const [user1, setUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Beared ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const updateProfile = event => {
        event.preventDefault();
        const update = {
            address: event.target.address.value,
            linkedin: event.target.linkedin.value,
            education: event.target.education.value,
        }
        const url = `http://localhost:5000/user/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ update })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toast("Update Successfully");
            })

    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title"> Name :{user1.displayName}</h2>
                    <h2> Email : {user._id}</h2>
                    <h2> Education : {user1.education}</h2>
                    <h2> Address : {user1.address}</h2>
                    <h2> Linkdin : {user1.linkdin}</h2>
                    <form onSubmit={updateProfile}>
                        <input class="input input-bordered input-primary w-full max-w-xs mb-5" type="text" name="education" placeholder='Education' id="eduction" />
                        <input class="input input-bordered input-primary w-full max-w-xs mb-5" type="text" name="address" placeholder='Address' id="address" />
                        <input class="input input-bordered input-primary w-full max-w-xs mb-5" type="text" name="linkedin" placeholder='Linkdin Profile Address' id="linkedin" />

                        <input class="input input-bordered bg-primary w-full max-w-xs mb-5 text-white font-bold" type="submit" value="Update" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Profile;