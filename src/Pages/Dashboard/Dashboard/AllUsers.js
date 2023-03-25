import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-two-beta.vercel.app/users');
            const data = res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-two-beta.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('making admin successful');
                refetch();
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( (user, i) =>
                            <tr className="hover" key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn text-white btn-primary'>Make Admin</button>}</td>
                                {/* <td><button className='btn text-white btn-danger'>Delete</button></td> */}
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;