import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiURLUser } from '../apiURL';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var userDetails={"email":email,"password":password};
      axios.post(_apiURLUser+"login",userDetails).then((response)=>{

          //to store user details in local storage
          const responseData=response.data.userDetails;
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",responseData._id);
          localStorage.setItem("name",responseData.name);
          localStorage.setItem("email",responseData.email);
          localStorage.setItem("password",responseData.password);
          localStorage.setItem("mobile",responseData.mobile);
          localStorage.setItem("address",responseData.address);
          localStorage.setItem("city",responseData.city);
          localStorage.setItem("gender",responseData.gender);
          localStorage.setItem("role",responseData.role);
          localStorage.setItem("info",responseData.info);  

          responseData.role=="admin"?navigate("/admin"):navigate("/user");
      }).catch((error)=>{
          setOutput("Invalid user or verify your account....");
          setEmail('');
          setPassword('');
        });
    }
    
  return(<div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-6">
<h2>Login Here!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <br/>
    <button type="submit" class="btn btn-success">Login</button>
  </form>                
</div>
<div class="col-lg-6">
<h2>Information</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, quidem sunt. Officiis laboriosam hic recusandae, ut ex soluta aliquam debitis dignissimos perferendis iure minima incidunt accusantium? Suscipit aspernatur ipsum maxime, pariatur doloremque id voluptatum nesciunt distinctio cum vero, omnis quidem labore error ut amet veritatis ducimus saepe, aliquam exercitationem. In eligendi quos non optio perspiciatis beatae similique harum, totam laborum, quaerat magnam earum dicta magni animi quasi numquam nesciunt? Autem sed distinctio vero quo corrupti. Commodi ipsum corrupti minima beatae nobis ea, neque perspiciatis sint illum delectus, alias ut velit eius et eum placeat rem vero! Totam commodi eius iste dolorum, eos laborum. Harum consequuntur, tempore mollitia vel beatae dolorem reiciendis libero molestias quasi ipsum nemo perspiciatis excepturi reprehenderit sequi voluptate aliquid officia sapiente quaerat aut? Sint accusantium corporis, quo ab non explicabo nobis maxime dolor placeat magnam corrupti eaque ipsam repudiandae animi numquam nisi totam vero iusto est voluptates, id consectetur libero ipsa consequuntur. Ab sit odio maxime optio harum, tempora, nihil a commodi animi ea hic architecto illum ipsum quae minus illo voluptatum aut accusantium. </p>
</div>
        </div>
    </div>
    {/* content End */}
    </div>);
}

export default Login;
