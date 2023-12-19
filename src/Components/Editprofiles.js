/* eslint-disable react-hooks/exhaustive-deps */
import React , {useState,useEffect} from "react";
import styles from "./editprofile.module.css";
import {getusers, updateuser} from "../usercrud.js"
import { useNavigate } from "react-router-dom";



const Editusers = () =>
{
    const initialstate ={
        Name:'',
        Age:'',
        Gender:'',
        Image:''
    }

    const [formdata, setdata] = useState(initialstate);

    const [userId, setUserId] = useState("");
    
    let navigate = useNavigate();

    

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

    const handlechange =(e)=> {
        const {name,value} = e.target;
        setdata({
            ...formdata,
            [name]:value,
        })
    }
  
   
    useEffect(() => {
        if (userId) {
          const fetchUserData = async () => {
              const user = await getusers(userId);
              setdata(user); 
          };
      
          fetchUserData();
        }
      }, [userId]);


      const handleSubmit = async (e) => {
        e.preventDefault();
       await updateuser(userId,formdata)
       navigate('/profile');
      };
        
        
      
  
    return (
        <div className={styles.addbody}>
      <div className={styles.container}> 
      <form onSubmit={handleSubmit} >
      <div className={styles.inputcontainer}>
            <label>Enter User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={handleUserIdChange}
              placeholder="Enter user ID"
            />
          </div>
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

export default Editusers;
