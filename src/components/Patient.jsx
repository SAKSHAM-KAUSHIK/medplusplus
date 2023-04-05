import {React,useEffect,useState} from 'react';
import styled from 'styled-components';
// import details from '../data';
import { MdVerifiedUser } from "react-icons/md"
import { IoPersonCircleSharp } from 'react-icons/io5';
import axios from 'axios';


const Container = styled.div`
width:100%;
flex:2;
background-color:#fff;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
color:"#0f2648";
`

const Container2 = styled.div`
width:100%;
flex:3.5;
background-color:#fff;
border-radius:10px;
margin-bottom:30px;
display:flex;
flex-direction:column;
${'' /* padding:10px 20px; */}
`
const Wrapper= styled.div`
display:flex;
flex-direction:column;
padding:20px 0px;
gap:22px;
margin-top:20px;
flex:2.8;

.patient-2 {
  .patient-2-1 {
    flex: 5;
    background-image: var(--back);
    color: white;
    display: flex;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    align-items: end;
    border-radius: 10px 10px 0px 0px;
  }

  .patient-2-2 {
    flex: 2;
    color: #0f2648;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 7px;
    margin-top: 14px;
  }
}

`
const Pic=styled.div`
--back:url(${props => props.back});

`


const Patient = (props) => {
  
    return(
      <Wrapper>
            <Container>
            <div style={{margin:"10px 10px 0px 10px",display:"flex",flexDirection:"row"}}>
            <IoPersonCircleSharp style={{ fontSize: "5rem", color: "grey"}} />
                <div style={{color:"#0f2648",marginLeft:"15px"}}>
                    <h3>{props.data.name}</h3>
                    <p style={{fontSize:"0.8rem"}}>{props.data.dob}({props.data.age}), {props.data.gender}</p>
                    <p style={{fontWeight:"800",fontSize:"0.9rem"}}>{props.data.type}</p>
                </div>
            </div>
            <div style={{margin:"5px 10px 0px 10px",display:"flex",flexDirection:"row", gap:"10px",color:"#0f2648"}}>
                <div style={{fontSize:"0.8rem"}}><p>EMPI/MRN</p><p>{props.data.EMPIMRN}</p></div>
                <div style={{fontSize:"0.8rem"}}><p>Phone</p><p>{props.data.phone}</p></div>
                <div style={{fontSize:"0.8rem"}}><p>PCP</p><p>{props.data.PCP}</p></div>
            </div>
          <div style={{ margin: "0px 10px 5px 10px", display: "flex", flexDirection: "row" }}>
          <button style={{background:"none", border:"solid 2px #6e94f2", color:"#6e94f2",borderRadius:"5px",height:"25px", cursor:"pointer"}} onClick={props.change} >Change</button>
            </div>

            </Container>
            <Container2 className='patient-2'>
            <Pic className="patient-2-1" back={props.data.photo}><h3>{props.data.title}</h3></Pic>
            <div className='patient-2-2'>
            <p style={{fontWeight:"800",fontSize:"0.9rem"}}>{props.data.subtitle}</p>
            <div style={{display:"flex",alignItems:"center"}}><MdVerifiedUser style={{marginRight:"3px",fontSize:"1rem"}}/> <p style={{fontSize:"0.9rem",fontWeight:"600"}}>{props.data.doctor}</p></div>
            <p style={{textDecoration:"underline",color:"#6e94f2",cursor:"pointer",fontSize:"0.75rem"}} >View Recommendation</p> 
            </div>

            </Container2>
        </Wrapper>
    )
}

export default Patient;