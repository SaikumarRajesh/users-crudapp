import React, {useState,useEffect} from "react";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import Content from "./Content";
import MainContent from "./MainContent";


const Sidebar = () => {


    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon:<i className="fa fa-th-large" aria-hidden="true"></i>
    },
    {
        path: "/users",
        name: "Users List",
        icon:<i className="fa fa-users" aria-hidden="true"></i>
    },
    {
        path: "/addusers",
        name: "Addusers",
        icon:<i className="fa fa-user-plus" aria-hidden="true"></i>
    },
    {
        path: "/editusers",
        name: "Editusers",
        icon:<i className="fa fa-pencil-square" aria-hidden="true"></i>
    },
    {
      path: "/profile",
      name: "Profiles",
      icon:<i className="fa fa-users" aria-hidden="true"></i>
    },
    {
        path: "/editprofile",
        name: "Editprofiles",
        icon:<i className="fa fa-pencil-square" aria-hidden="true"></i>
    },
  ];
  

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
     <div className={styles.header}>
        <h1>Crud Page</h1>
      </div>
      <div style={{width: isOpen ? "200px" : "50px"}} className={styles.sidebar}>
         
      <div className={styles.topsection}>
        <h1  style={{display: isOpen ? "block" : "none"}} className={styles.logo}>CRUD</h1>
        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={styles.bars}>
            <i className="fa fa-bars" aria-hidden="true" onClick={toggle}></i>
        </div>
      </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={styles.link}
            activeclassname={styles.active}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div  style={{display: isOpen ? "block" : "none"}} className={styles.linktext}>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div
        style={{
          marginLeft: isOpen ? "200px" : "60px",
          transition: "margin-left 0.5s ease-in-out",
        }}
      >
        <Content>
         <MainContent/>
        </Content>
      </div>
      </>

  );
};

export default Sidebar;
