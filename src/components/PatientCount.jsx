import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

const Container= styled.div`
background-color:#fff;
height:100px;
padding:10px 5px;
border-radius:10px;
display:flex;
justify-content:space-evenly;
flex-direction:row;
max-width: 67rem;
`
const PC1 =styled.div`
height:100%;
display:flex;
justify-content:space-evenly;
flex-direction:column;
text-align:center;
color:#0f2648;
`
const PC2 = styled.div`
height:100%;
display:flex;
justify-content:space-evenly;
flex-direction:column;
text-align:center;
color:#0f2648;
width:30%
`

const Bar=styled.div`
width:${props => props.percentage};
display:flex;
flex-direction:column;
animation : 2s fillBarAnimationX ease-in;
@keyframes fillBarAnimationX {
    0%{width:12%}
}
`

const PC3 =styled.div`
height:100%;
display:flex;
justify-content:;
flex-direction:column;
color:#0f2648;
justify-content: center;
gap:5px;
`

const Circle=styled.div`
border-radius:100%;
margin-right:5px;
height:10px;
width:10px;
background-color:${props => props.color};
`
const PatientCount=(props)=>{
    return(
        <Container>
        <PC1>
            <h2>Patient Count</h2>
            <h1>{props.item?.pc}</h1>
            <div style={{display:"flex",alignItems:"center"}}><AiOutlineArrowUp style={{marginRight:"3px"}}/> <p style={{fontSize:"0.9rem"}}> 7.6% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>
        </PC1>
        <PC2>
        <p>Clinical Risk</p>
        <div style={{width:"100%", display:"flex",flexDirection:"row"}}>
            <Bar percentage="23.2%">
                <p style={{fontSize:"0.9rem"}}>23.2%</p>
                <div style={{backgroundColor:"#102348", height:"15px"}}/>
            </Bar>
            <Bar percentage="46.7%">
                <p style={{fontSize:"0.9rem"}}>46.7%</p>
                <div style={{backgroundColor:"#225290", height:"15px"}}/>
            </Bar>
            <Bar percentage="30.1%">
                <p style={{fontSize:"0.9rem"}}>30.1%</p>
                <div style={{backgroundColor:"#d4dcf1", height:"15px"}}/>
            </Bar>
        </div>

        </PC2>
        <PC2>
        <p>Social Risk</p>
        <div style={{width:"100%", display:"flex",flexDirection:"row"}}>
            <Bar percentage="15%">
                <p style={{fontSize:"0.9rem"}}>15%</p>
                <div style={{backgroundColor:"#102348", height:"15px"}}/>
            </Bar>
            <Bar percentage="56.7%">
                <p style={{fontSize:"0.9rem"}}>56.7%</p>
                <div style={{backgroundColor:"#225290", height:"15px"}}/>
            </Bar>
            <Bar percentage="28.3%">
                <p style={{fontSize:"0.9rem"}}>28.3%</p>
                <div style={{backgroundColor:"#d4dcf1", height:"15px"}}/>
            </Bar>
        </div>

        </PC2>

        <PC3>
            <div style={{display:"flex", alignItems:"center"}}><Circle color="#102348"/><p>High</p></div>
            <div style={{display:"flex", alignItems:"center"}}><Circle color="#225290" /><p>Medium</p></div>
            <div style={{display:"flex", alignItems:"center"}}><Circle color="#d4dcf1" /><p>Low</p></div>
        </PC3>

        </Container>        
            
        
    )

}

export default PatientCount;