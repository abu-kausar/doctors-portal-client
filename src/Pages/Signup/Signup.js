import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: 'xyz',
            email: 'xyz@gmail.com',
            password: 'password'
        }
    });

    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignup = data => {
        // if exists any errors, then we will clear them
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully');
                // to update the name
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('https://doctors-portal-server-two-beta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log('saveuser: ', data);
            setCreatedUserEmail(email);
        })
    }


    return (
        <div className='h-[600px] flex justify-center items-center drop-shadow-lg'>
            <div className='w-96 p-7 border rounded-lg'>
                <h2 className="text-[36px] text-center font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: "Password can be empty",
                                minLength: { value: 8, message: "Password must be 8 characters at least" },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&%*])(?=.*[0-9])(?=.*[a-z]).{8}$/, message: "Have to follow Aa$1asds format" }
                            })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='btn btn-accent w-full text-white' value="Sign Up" />
                    {
                        signupError && <p className='text-red-500 text-center'>Already a user.</p>
                    }
                </form>
                <p className='text-center'>Already have an account? <Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;