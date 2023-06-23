import './Addcategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiURLCategory } from '../apiURL';

function Addcategory() {

    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [output , setOutput] = useState();
    
    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiURLCategory+"save", formData, config).then((response) => {
        setCatName("");
        setOutput("Category Added Successfully....");
      });
    }


  return(<div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
                
<h2>Add Category!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="catnm">Category Name:</label>
      <input class="form-control" type="text" value={catName}
onChange={e => setCatName(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="caticon">Category Icon:</label>
      <input type="file" onChange={handleChange} />
    </div>
    <br/>
    <button type="submit" class="btn btn-success">Add Category</button>
  </form>                
                
</div>
        </div>
    </div>
    {/* content End */}
    </div>);
}

export default Addcategory;
