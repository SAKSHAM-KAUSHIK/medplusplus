import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];



const Wrapper = styled.div`
margin-left:15px;
display:flex;
flex-direction:row;

`

const Container = styled.div`
margin-top:15px;
width:250px;
height:145px;
background-color:#fff;
border-radius:10px;
padding:10px 20px;
display:flex;
flex-direction:column;
justify-content:space-between;

`

const Container2 = styled.div`
margin-top:15px;
margin-left:15px;
width:380px;
height:145px;
background-color:#fff;
border-radius:10px;
padding:10px 20px;
display:flex;
flex-direction:row;
justify-content:space-between;

`

const Container3= styled.div `
display:flex;
flex-direction:column;
justify-content:space-between;
flex:4;

`

const BarBox = styled.div`
.bar1{
    animation : 1s fillBarAnimationZ1 ease-in ;
    /* animation-fill-mode: backwards; */
@keyframes fillBarAnimationZ1 {
    0%{height:0%;}
    100%{height:17.7%}
}
}
.bar2{
    animation : 2s fillBarAnimationZ2 ease-in ;
    /* animation-fill-mode: backwards; */
@keyframes fillBarAnimationZ2 {
    0%{height:0%;}
    100%{height:50.7%}
}
}
.bar3{
    animation : 3s fillBarAnimationZ3 ease-in ;
    /* animation-fill-mode: backwards; */
@keyframes fillBarAnimationZ3 {
    0%{height:0%;}
    100%{height:27.6%}
}
}
`

const Bar = styled.div`
background-color:${props=> props.color};
height:${props=>props.percentage};
width:35px;
border-radius:3px;

`



const IPVis = (props) => {
    return (
        <Wrapper>
            <Container>
                <h2 style={{ color: "#0f2648" }}>30-day Readmissions</h2>
                <h1 style={{ fontSize: "3.5rem", color: "#0f2648" }}>{props.item?.ra}%</h1>
                <div style={{ display: "flex", alignItems: "center", color: "#0f2648" }}><AiOutlineArrowUp style={{ marginRight: "3px" }} /> <p style={{ fontSize: "1.1rem", fontWeight: "600" }}> 8.8% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>

            </Container>

            <Container2>
                <Container3>
                    <h2 style={{ color: "#0f2648" }}>IP Vists per 1000</h2>
                    <h1 style={{ fontSize: "3.5rem", color: "#0f2648" }}>{props.item?.ipn}</h1>
                    <div style={{ display: "flex", alignItems: "center", color: "#0f2648" }}><AiOutlineArrowDown style={{ marginRight: "3px" }} /> <p style={{ fontSize: "1.1rem", fontWeight: "600" }}> 1.5% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>

                </Container3>
                <div style={{height:"100%",display:"flex", flexDirection:"row",flex:"2.5", gap:"5px"}}>
                    <BarBox style={{height:"100%",display:"flex", flexDirection:"column", gap:"3px"}}>
                        <Bar className='bar1' color='#0f2648' percentage={`${props.item?.ipp}%`} />
                        <Bar className='bar2' color='#225290' percentage="50.7%" />
                        <Bar className='bar3' color='#d4dcf1' percentage={`${45.3-props.item?.ipp}%`} />
                    </BarBox>
                    <div>
                        <p style={{fontSize:"1.2rem",fontWeight:"800"}}>-- {props.item?.ipp}%</p>
                        <p>Potentially Avoidable</p>
                    </div>
                </div>
            </Container2>


        </Wrapper>
    )
}

export default IPVis;