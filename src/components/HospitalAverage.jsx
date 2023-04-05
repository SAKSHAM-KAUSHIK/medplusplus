import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import {BsTriangleFill} from "react-icons/bs";

var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

const Container = styled.div`
margin-top:15px;
width:300px;
height:250px;
background-color:#fff;
border-radius:10px;
display:flex;
flex-direction:column;
padding:10px 20px;
justify-content:space-around;
color:"#0f2648";
`
const Bar = styled.div`
height:20px;
border: dotted 1px #0f2648;
border-radius:10px;
width:100%;

.bar-graph1{
    animation : 3s fillBarAnimationW ease-in;
@keyframes fillBarAnimationW {
    0%{width:0%;}
    100%{width:63.7%}
}
}
`
const Container2 = styled.div`
margin-top:15px;
width:300px;
height:113px;
background-color:#fff;
border-radius:10px;
padding:10px 20px;
`

const HospitalAverage=(props)=>{
    return(<div>
        <Container>
        <div style={{display:'flex', alignItems:"center",color:"#0f2648"}}>
            <img src="https://i.ibb.co/4dRVRbm/image.png" style={{height:"40px"}}/>
            <p style={{fontSize:"1.3rem", marginLeft:"5px", fontWeight:"600"}} >MED++ Score</p>
        </div>
        <div style={{display:'flex', justifyContent:"flex-start",flexDirection:"column",color:"#0f2648"}}>
        <p style={{fontSize:"1.3rem",fontWeight:"350"}}>Hospital Average</p>
        <h1 style={{fontSize:"3.5rem"}}>{props.item?.ha}%</h1>
        <div style={{display:"flex",alignItems:"center"}}><AiOutlineArrowUp style={{marginRight:"3px"}}/> <p style={{fontSize:"1.1rem",fontWeight:"600"}}> 0.1% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>
        </div>
        <div>
            <Bar>
            <div className='bar-graph1' style={{width:`${props.item?.ha}%`, height:"100%", borderRadius:"10px",backgroundColor:"#0f2648"}} />           

            </Bar>
            <div style={{display:'flex', justifyContent:"space-between",flexDirection:"row",color:"grey", fontSize:"0.8rem"}}><p>0%</p> <p>100%</p></div>
            <div style={{display:'flex',marginLeft:`${props.item?.ha -2}%`, color:"#0f2648",position: "relative", bottom: "12px"}}><BsTriangleFill /></div>

        </div>

        </Container>
        <Container2>
        <div style={{display:"flex",flexDirection:"row",color:"#0f2648", justifyContent: "space-between"}}>
            <div>
            <h3>Risk adjusted pmpm</h3>
            <h1 style={{fontSize:"2.8rem"}}>${props.item?.rap}</h1>
            <div style={{display:"flex",alignItems:"center"}}><AiOutlineArrowDown style={{marginRight:"3px"}}/> <p style={{fontSize:"1.1rem",fontWeight:"600"}}> 5.4% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>            

            </div>
            <div style={{display:"flex",flexDirection:"row", gap: "10px",alignItems: "flex-end"}}>
            <div style={{width:"25px", height:"113px",backgroundColor:"#d4dcf1",display:"flex",flexDirection: "column-reverse"}}> <p style={{transform:"rotate(-90deg)",marginBottom: "8px",color:"#0f2648", fontWeight:"600"}}>{months[(props.mon-1)]}</p></div>
            <div style={{width:"25px", height:"105px",backgroundColor:"#0f2648",display:"flex", flexDirection: "column-reverse"}}><p style={{transform:"rotate(-90deg)",marginBottom: "8px", color:"#fff", fontWeight:"600"}}>{months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>
            </div>
        </div>

        </Container2>
        </div>
    )
}

export default HospitalAverage;