import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    //for jwt token
    const [loggedUserEmail, setLoggedUserEmail] = useState('');
    const [token] = useToken(loggedUserEmail);

    if (token) {
        toast.success('logged in successfully');
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoggedUserEmail(data.email);
                console.log('token:', token);
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })

    }
    return (
        <div className='h-[600px] flex justify-center items-center drop-shadow-lg'>
            <div className='w-96 p-7 border rounded-lg'>
                <h2 className="text-[36px] text-center font-bold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Passowrd must be longer than 5 characters" } })} />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='btn btn-accent w-full text-white' value="Login" />
                    <div>
                        {
                            loginError && <p className='text-red-500 text-center'>Try with valid credintial</p>
                        }
                    </div>
                </form>
                <p className='text-center'>New to Doctor's Portal <Link className='text-secondary' to="/signup">Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;