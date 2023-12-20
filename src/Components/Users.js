
import React, { useEffect, useState } from "react";
import { getuser ,deleteuser} from "../usercrud";
import styles from "./user.module.css"

const Users = () => {

  const [users, setusers] = useState([]);

  const loaduser = async () => {
    const response = await getuser();
    setusers(response);
  }

  const removeFromUi = async (userId) => {
    await deleteuser(userId);
    const updateUsers = users.filter(({ id }) => userId !== id);
    setusers(updateUsers);
  }

  useEffect(() => {
    loaduser();
  }, [])

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
          <th>Profile</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> <img
                  src={user.Image}
                  alt={user.Name}
                  className={styles.thumbnail}
                /></td>
              <td>{user.Name}</td>
              <td>{user.Age}</td>
              <td>{user.Gender}</td>
              <td>
                <div
                  onClick={() => removeFromUi(user.id)}
                  className={styles.deleteButton}
                >
                   <i className="fa-solid fa-trash-can"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
