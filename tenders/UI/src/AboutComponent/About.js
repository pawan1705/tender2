import './About.css';
import axios from 'axios'; 

function About() {

  const test=()=>{
    axios.get("http://localhost:3001/user/").then((result)=>{
        console.log(result);
    });    
  }

  return(<div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
                <h1 class="display-5 text-uppercase mb-4">Welcome To Tenders , About page</h1>
                <h2>API Test</h2>
                <button onClick={test} >Click here to make API work</button>
            </div>
        </div>
    </div>
    {/* content End */}
    </div>);
}

export default About;
