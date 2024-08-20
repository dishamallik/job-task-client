import React, { useState } from 'react';
import useAuth from '../hook/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import imo1 from "../assets/Online shopping-cuate.png"

const Login = (user) => {
     // error massage
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
   
     const handleLogin = () => {
       
       if (email === user.email && password === user.password) {
      
         alert('Login successful!');
       }
     };
   
   
      
           const {sigInUser} = useAuth();
           const {
               register,
               handleSubmit,
              
               formState: { errors },
             } = useForm()
   
             // navigation 
   const navigate = useNavigate();
   const location = useLocation();
   
   const  from = location?.state || "/";
   // 
           
             const onSubmit = data => {
               const {email, password} = data;
   
               sigInUser(email, password)
               .then(result => {
                   if(result.user){
                       Swal.fire({
                           icon: 'success',
                           title: 'Login Successful!',
                           text: 'You have been successfully Login.',
                           confirmButtonText: 'OK'
                       }).then(() => {
                           navigate(from);
                       });
                    
                   } 
                   
                   
                })
                .catch(error => {
                   setError('Invalid email or password');
                   console.error('Login Error:', error); 
               });
               
   
             };
  





    return (
        <div>
            <div>
    
    
            
    <div className="hero min-h-screen bg-base-200" >
<div className="hero-content  flex-col lg:flex-row">
<div>
<div className="max-w-96">
            <img src={imo1} alt="" />
        </div>
</div>
<div>
<div className="text-left">
  <h1 className="text-5xl mb-5 text-orange-500 font-bold">Login now!</h1>
  
</div>
<div className="card shrink-0 lg:w-96 max-w-sm shadow-2xl bg-orange-50">
  <form onSubmit={handleSubmit(onSubmit)} className="card-body">

    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="input input-bordered" 
      {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered" 
      {...register("password", { required: true })} 
      />
      {errors.password && <span>This field is required</span>}
      <label className="label">
        
      </label>
    </div>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <div onClick={handleLogin} className="form-control mt-6">
      <button className="btn btn-outline bg-orange-400">Login</button>
    </div>
    <p>new to trueMart? please <Link to="/reg"><button className=" btn-link">Register</button></Link></p>
    

   
    
  </form>

<div className="mb-5">
<SocialLogin></SocialLogin>
</div>
  
 
</div>
</div>
</div>









</div>

</div>
        </div>
    );
};

export default Login;