
import React, { useEffect, useState, useCallback } from "react";
import { getuser ,deleteuser} from "../usercrud";
import styles from "./profile.module.css"

const Users = () => {

  const [users, setusers] = useState([]);
  const [userId, setUserId] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const loaduser = useCallback(async () => {
    const response = await getuser();
    const userById = response.filter((user) => user.id === userId);
    setusers(userById);
  },[userId])

  const removeFromUi = async (userId) => {
    await deleteuser(userId);
    setusers([]);
    setusers("");
  }

  useEffect(() => {
    if(userId){
    loaduser();
    }
  }, [userId, loaduser])

  return (
    <>
    <div className={styles.inputcontainer}>
            <label>Enter User ID To View User Profile:</label>
            <input
              type="text"
              value={userId}
              onChange={handleUserIdChange}
              placeholder="Enter user ID"
            />
          </div>
    <div className={styles.container}>
    
      {users.map((user) => (
        <div key={user.id} className={styles.card}> 
          <div className={styles.deleteicon} onClick={() => removeFromUi(user.id)}>
                <i className="fa-solid fa-trash-can"></i>
          </div>
          <img
            src={user.Image}
            alt={user.Namenp}
           className={styles.image}
          />
          <div className={styles.details}>
              <h3>{user.Name}</h3>
              <p>Age: {user.Age}</p>
              <p>Gender:{user.Gender}</p>
          </div>
        </div>
      ))}
     </div> 
    </>
  );
};

export default Users;
