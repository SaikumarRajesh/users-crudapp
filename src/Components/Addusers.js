import React , {useState} from "react";
import styles from "./Add.module.css";
import {createuser} from "../usercrud.js"
import { useNavigate } from "react-router-dom";

const Addusers = () =>
{
    const initialstate ={
        Name:'',
        Age:'',
        Gender:'',
        Image:''
    }

    const [formdata, setdata] = useState(initialstate);
    let navigate = useNavigate();


    const handlechange =(e)=> {
        const {name,value} = e.target;
        setdata({
            ...formdata,
            [name]:value,
        })
    }
  
    const handleSubmit =  (event) => {
      event.preventDefault();
      createuser(formdata)
      setdata(initialstate)
      alert("User Added successfully")
      navigate('/users');
    };
  
    return (
        <div className={styles.addbody}>
      <div className={styles.container}> 
      <form onSubmit={handleSubmit} >
        <div className={styles.inputcontainer}>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formdata.Name}
            onChange={handlechange}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <label>Age:</label>
          <input
            type="number"
            name="Age"
            value={formdata.Age}
            onChange={handlechange}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <label>Gender:</label>
          <select  name="Gender" value={formdata.Gender} onChange={handlechange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.inputcontainer}>
          <label>Image URL:</label>
          <input
            type="text"
            name="Image"
            value={formdata.Image}
            onChange={handlechange}
            required
          />
        </div>
        <div>
        <button>Submit</button>
        </div>
      </form>
      </div> 
      </div>
    );
  };

export default Addusers;