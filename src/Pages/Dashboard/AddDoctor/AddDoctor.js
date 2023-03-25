import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const nagigate = useNavigate();

    const {data: specialities, isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async (value) =>{
            const res = await fetch('https://doctors-portal-server-two-beta.vercel.app/appointmentSpeciality')
            const data = await res.json();
            return data;
        }
    })
    
    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            if(imageData.success){
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: imageData.data.url
                }

                //save doctors information
                fetch('https://doctors-portal-server-two-beta.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(result => {
                    console.log(result)
                    toast.success(`${data.name} is added successfully`);
                    nagigate('/dashboard/manageDoctors')
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 border rounded-lg ml-[100px]'>
            <h1 className="text-3xl mb-5">Add a Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Name can not be empty" })} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: "Email address is required" })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialist</span>
                    </label>
                    <select {...register("speciality", { required: "speciality is required" })} className="select input-bordered w-full max-w-xs">
                        {
                            specialities.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}
                            >{speciality.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register("image", { required: "Photo is required" })} className="input input-bordered w-full" />
                    {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                </div>
                <input type="submit" className='mt-5 btn btn-accent w-full text-white' value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;