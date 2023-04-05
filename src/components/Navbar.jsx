import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { VscClippy } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdLocalHospital, } from 'react-icons/md';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FaClipboard, FaStarOfLife } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Conatiner = styled.div`
max-width: 300px;
min-width: 250px;
height: 94vh;
border-radius: 10px;
background-color: #fff;
padding: 6px;
flex: 1.5;
`;
const Logo = styled.img`
margin: 20px 15px;
width: 85%;
height: 6rem;
`;
const Menu = styled.p`
padding: 15px 20px;
margin: 3px;
font-weight: 500;
 ${prop => prop.status === true ? `color:grey` : `color:#0f2648`};
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content:flex-start;
&:hover{
    background-color:#f0f1f6;
}
&.active{
    background-color:#f0f1f6;
}
cursor: pointer;

`;


const Navbar = () => {
  const [isActive, setIsActive] = useState(() => localStorage.getItem('active_tab'));

  useEffect(() => {
    const data = (localStorage.getItem('active_tab'));
    setIsActive(data);
  }, [])

  const handleClick = event => {
    setIsActive("claims");
    localStorage.setItem('active_tab', ("claims"));
    toast.info('LoggedIn as Admin!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const handleClick1 = event => {
    setIsActive("prior_auth");
    localStorage.setItem('active_tab', ("prior_auth"));
    toast.info('LoggedIn as Admin!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handleClick2 = event => {
    setIsActive("patient");
    localStorage.setItem('active_tab', ("patient"));
    toast.success('LoggedIn as Doctor!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handleClick3 = event => {
    setIsActive("/");
    localStorage.setItem('active_tab', ("/"));
  };

  return (
    <Conatiner>
      <Logo src="https://i.ibb.co/Cbz3Rkf/image.png" alt="logo"></Logo>

      <Link to="/" style={{ textDecoration: "none" }}><Menu className={isActive === "/" ? 'active' : ''} onClick={handleClick3}><HiDocumentReport style={{ margin: "0px 5px", fontSize: "1.5rem", }} /> Score Card</Menu></Link>

      <Link to="/patient" style={{ textDecoration: "none" }}><Menu className={isActive === "patient" ? 'active' : ''} onClick={handleClick2}><FaClipboard style={{  margin: "0px 5px", fontSize: "1.5rem", }} /> Patient Summary</Menu></Link>

      <Link to="/prior_auth" style={{textDecoration: "none", }}><Menu className={isActive === "prior_auth" ? 'active' : ''} onClick={handleClick1}><VscClippy style={{ margin: " 0px 5px", fontSize: "1.5rem" }} />  Prior Authorization</Menu></Link>
      
      <Link to="/claim" style={{ textDecoration: "none", }}><Menu className={isActive === "claims" ? 'active' : ''} onClick={handleClick}><RxHamburgerMenu style={{ margin: "0px 5px", fontSize: "1.5rem" }} />  Claims</Menu></Link>

      <Menu status={true} style={{
       ...{ display: (isActive === "prior_auth" || isActive === "claims") ? 'none' : '' },
      }} ><FaStarOfLife style={{ margin: "0px 5px", fontSize: "1.5rem" }} /> Utilization Management</Menu>

      <Menu status={true}><MdLocalHospital style={{ margin: "0px 5px", fontSize: "1.5rem" }} />  Medical Records</Menu>
      <Menu ><IoPersonCircleSharp style={{ margin: "0px 5px", fontSize: "1.5rem" }} />  My Profile</Menu>

      <ToastContainer/>
    </Conatiner>
  )
}

export default Navbar
