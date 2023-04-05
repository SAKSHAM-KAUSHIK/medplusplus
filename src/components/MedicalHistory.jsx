import React, { useState } from 'react';
import styled from 'styled-components';
// import {details} from '../data';
import {history} from '../data';



const Container = styled.div`
width:100%;
flex:6.3;
background-color:#fff;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
color:"#0f2648";
align-items:center;
`

const Container2 = styled.div`
width:100%;
flex:3.7;
background-color:#fff;
display:flex;
flex-direction:column;
justify-content:flex-end;
gap:20px;
align-items:center;
border-radius:10px;
margin-bottom:30px;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
padding:20px 0px;
gap:22px;
margin-top:20px;
flex:3.85;
`

const Box = styled.div`
display:flex;
flex-direction:row;
gap:10px;
justify-content:space-evenly;
height:75%;
width:95%
`
const Button = styled.button`
background-color:#f0f1f6;
color:#0f2648;
width:100%;
border-radius:5px;
height:30px;
border:none;
cursor:pointer;
&.active{
    background-color:#0f2648;
    color:#fff;

}
`
const Bar= styled.div`
background-color:${props => props.color};
width:${props => props.per};
height:100%;
`


const MedicalHistory = (props) => {


    const [md, setMd] = useState(0);

    const handleClick = (e) => {

        var elements = document.getElementsByClassName("btn");
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i]?.classList.remove("active");
        }  
        console.log(e.target);
       setMd(e.target.getAttribute("data-index"));
       elements[e.target.getAttribute("data-index")]?.classList.add("active");
       console.log(e.target.getAttribute("data-index"));
        
    }

    


    const pstyle = { fontWeight: "500", fontSize: "0.9rem" };
    return (
        <Wrapper>
            <Container>
                <h2 style={{ color: "#0f2648" }}>Medical History</h2>
                <Box>
                    <div style={{ flex: "6.25", backgroundColor: "#f0f1f6", color: "#6e94f2", borderRadius: "10px",display:"flex",alignItems:"flex-start",justifyContent:"flex-start", flexDirection:"column",gap:"15px"}}>
                        <h3 style={{color:"#0f2648",margin:"4px 7px 0px 7px"}}>{history[md].title}</h3>
                        <div style={{margin:"0px 5px",display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column",gap:"6px"}}>{history[md].p.map(item=><p style={pstyle}>{item}</p>)}</div>
                    </div>
                    <div style={{ flex: "3.75", display: "flex", gap: "5px", flexDirection: "column" }}>
                        <Button data-index={0} className='btn active' onClick={(e)=>handleClick(e)}><p data-index={0} style={pstyle}>Diagnoses</p></Button>
                        <Button data-index={1} className='btn' onClick={(e)=>handleClick(e)}><p data-index={1} style={pstyle}>Paitent Risk Score</p></Button>
                        <Button data-index={2} className='btn' onClick={(e)=>handleClick(e)}><p data-index={2} style={pstyle}>Social Determinant</p></Button>
                        <Button data-index={3} className='btn' onClick={(e)=>handleClick(e)}><p data-index={3} style={pstyle}>Smoking Status</p></Button>
                        <Button data-index={4} className='btn' onClick={(e)=>handleClick(e)}><p data-index={4} style={pstyle}>Allergies</p></Button>
                        <Button data-index={5} className='btn' onClick={(e)=>handleClick(e)}><p data-index={5} style={pstyle}>Medicines</p></Button>
                        <Button data-index={6} className='btn' onClick={(e)=>handleClick(e)}><p data-index={6} style={pstyle}>Connections</p></Button>
                    </div>
                </Box>

            </Container>
            <Container2>
             <h2 style={{ color: "#0f2648" }}>AGP Report</h2>
             <div style={{backgroundColor:"#f0f1f6",width:"100%", height:"70%",borderRadius:" 0px 0px  10px 10px ", display:"flex", flexDirection:"column", justifyContent:"flex-end", gap:"10px"}}>
                <div style={{display:"flex", justifyContent:"space-around",color: "#0f2648",alignItems: "center"}}>
                    <div><h3>Time in</h3>
                     <h5>Target Range</h5>
                     <small>70-180 mg/dL</small>
                    </div>
                    <div>
                        <h1 style={{fontSize:"2.2rem", fontWeight:"500"}}>{props.data.percentage+"%"}</h1>
                        <small>({props.data.time})</small>
                    </div>
                    <button style={{background:"none", border:"solid 2px #6e94f2", color:"#6e94f2",borderRadius:"5px",height:"30px", cursor:"pointer"}}>Full Report</button>
                </div>
                <div style={{height:"45px",display:"flex", flexDirection:"row"}}>
                    <Bar per="12%" color="#b85716" style={{borderRadius:"0px 0px 0px 10px"}} />
                    <Bar per="24%" color="#e0a628" />
                    <Bar per={props.data.percentage+"%"} color="#58a11b" />
                    <Bar per={(100-props.data.percentage-36)/2 + "%"} color="#D9232A" />
                    <Bar per={(100-props.data.percentage-36)/2 + "%"} color="#982c2e"  style={{borderRadius:"0px 0px 10px 0px"}}/>
                </div>
             </div>

            </Container2>
        </Wrapper>
    )
}

export default MedicalHistory;