import './Searchtenders.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiURLCategory } from '../apiURL';
import { Link } from 'react-router-dom';

function Searchtenders() {
  
  const [ cDetails , setCategoryDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_apiURLCategory+"fetch").then((result)=>{
        setCategoryDetails(result.data);
    });   
  },[]);    

  return(<div>
{/* content Start */}
<div class="container-fluid py-6 px-5">
<div class="row g-5">
<div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">Category List >> </h1>
<center>
<div id="category_main">

{
 cDetails.map(
    ele => {
        const image = '/assets/uploads/caticons/'+ele.caticonnm;
        const path = '/viewsubcat/'+ele.catnm;
    return(     
    <Link to={path} >    
    <div class="category_part">
    <img src={image} height="100" width="150" />
    <br/>
    <b>{ele.catnm}</b>
    </div></Link>)
    } 
 )  
}

</div>
</center>
</div>
</div>
</div>
{/* content End */}
</div>);
}

export default Searchtenders;
