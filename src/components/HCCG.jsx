import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsTriangleFill } from 'react-icons/bs';

var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];


const Wrapper = styled.div`
margin-left:15px;
display:flex;
flex-direction:row;

`

const Container = styled.div`
margin-top:15px;
width:325px;
height:218px;
background-color:#fff;
border-radius:10px;
padding:10px 20px;
display:flex;
flex-direction:row;
justify-content:space-between;
`

const Container2 = styled.div`
margin-left:15px;
margin-top:15px;
width:305px;
height:218px;
background-color:#fff;
border-radius:10px;
padding:10px 20px;
display:flex;
flex-direction:column;
justify-content:space-around;

.multi-graph {
  width: 300px;
  height: 150px;
  position: relative;
  color: #0f2648;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;

  &:before {
    content: '';
    width: 300px;
    height: 150px;
    border: 15px solid rgba(0, 0, 0, .15);
    border-bottom: none;
    position: absolute;
    box-sizing: border-box;
    transform-origin: 50% 0%;
    border-radius: 300px 300px 0 0;
    left: 0;
    top: 0;
  }

  .graph {
    width: 300px;
    height: 150px;
    border: 15px solid var(--fill);
    border-top: none;
    position: absolute;
    transform-origin: 50% 0% 0;
    border-radius: 0 0 300px 300px;
    left: 0;
    top: 100%;
    z-index: 5;
    animation: 3s fillGraphAnimation ease-in;
    transform: rotate(calc(1deg * (var(--percentage) * 1.8)));
    box-sizing: border-box;
    overflow: hidden;

  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .pA {
      padding: 3px;
      margin-top: 2px;
      color: #fff;
      font-size: 1rem;
      background-color: #0f2648;
      border-radius: 8px;
    }
  }
}

@keyframes fillGraphAnimation {
  0% {
    transform: rotate(0deg);
  }
}

`

const Bar = styled.div`
width:20px;
border: dotted 1px #0f2648;
border-radius:10px;
height:100%;
display:flex;
align-items: flex-end;

.bar-graph{
    animation : 3s fillBarAnimation ease-in;
@keyframes fillBarAnimation {
    0%{height:0%;}
    100%{height:64.1%}
}
}

`

const Pie = styled.div`
--percentage:${props =>props.percentage};
--fill:${props =>props.fill};
`


const HCCG = (props) => {
    return (
        <Wrapper>
            <Container>

                <div style={{ display: "flex", flexDirection: "column", color: "#0f2648", gap: "20px" }}>
                    <p style={{ fontSize: "1.3rem", fontWeight: "700" }} >HCC Gap</p>
                    <div style={{ display: 'flex', justifyContent: "flex-start", flexDirection: "column", color: "#0f2648" }}>
                        <p style={{ fontSize: "1.3rem", fontWeight: "350" }}>Closure Rate</p>
                        <h1 style={{ fontSize: "3.5rem" }}>{props.item?.hcc}%</h1>
                        <div style={{ display: "flex", alignItems: "center" }}><AiOutlineArrowUp style={{ marginRight: "3px" }} /> <p style={{ fontSize: "1.1rem", fontWeight: "600" }}> 2.3% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>
                    </div>

                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>

                    <div style={{ display: 'flex', marginBottom: `${props.item?.hcc *2.45}%`, color: "#0f2648", position: "relative", left: "30px", flexDirection: "column-reverse" }}><BsTriangleFill style={{ transform: "rotate(90deg)" }} /></div>
                    <div style={{ display: 'flex', justifyContent: "space-between", flexDirection: "column", color: "grey", fontSize: "0.8rem", marginRight: "5px", textAlign: "right" }}><p>100%</p><p>0%</p></div>

                    <Bar>
                        <div className='bar-graph' style={{ height: `${props.item?.hcc}%`, width: "100%", borderRadius: "10px", backgroundColor: "#0f2648" }} />

                    </Bar>

                </div>

            </Container>
            <Container2>
                <p style={{ fontSize: "1.3rem", fontWeight: "700", color: "#0f2648" }} >ED Vists per 1000</p>
                <div className="multi-graph">
                    <div className='text'>
                    <h1>{props.item?.edn}</h1>
                    <div style={{ display: "flex", alignItems: "center" }}><AiOutlineArrowUp style={{ marginRight: "3px" }} /> <p style={{ fontSize: "1.1rem", fontWeight: "600" }}> 8.9% from {months[(props.mon-2)==-1?11:(props.mon-2)]}</p></div>
                    <div  className='pA'>143 Potentially Avoidable</div>
                    </div>
                    <Pie className='graph' percentage="100" fill="#d4dcf1" />                    
                    <Pie className='graph' percentage={`${props.item?.ed1}`} fill="#225290" />
                    <Pie className='graph' percentage={`${props.item?.ed2}`} fill="#0f2648" />
                    
                </div>


            </Container2>


        </Wrapper>
    )
}

export default HCCG;

