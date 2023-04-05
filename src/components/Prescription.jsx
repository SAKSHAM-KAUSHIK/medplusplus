import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
width:100%;
flex:0.94;
background-color:#fff;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
color:"#0f2648";
align-items:center;
`


const Wrapper = styled.div`
display:flex;
flex-direction:column;
padding:20px 0px;
gap:22px;
margin-top:20px;
flex:3.33;
`

const Image = styled.img`
width: 75%;
height: 80%;
margin: 10px;
`


const Prescription = () => {
    return (
        <Wrapper>
            <Container>
                <div style={{ display: 'flex', alignItems: "center", color: "#0f2648" }}>
                    <img src="https://i.ibb.co/4dRVRbm/image.png" style={{ height: "40px" }} />
                    <p style={{ fontSize: "1.3rem", marginLeft: "5px", fontWeight: "600" }} >MED++ Recommendations</p>
                </div>
                <div style={{height:"15%", backgroundColor:"#f0f1f6", borderRadius:"10px", width:"90%", textAlign:"center", color: "#0f2648" }}>
                    <h4 style={{marginTop:"7px"}}>Potenially missed CPT codes</h4>
                    <div style={{display:"flex", flexDirection:"row",  marginTop:"15px", justifyContent:"center",gap:"20px", color:"#fff", fontSize:"0.8rem"}}>
                     <div style={{height:"25px", backgroundColor:"#0f2648", borderRadius:"7px", width:"30%", display:"flex",alignItems: "center", justifyContent: "space-around"}}>CPT-92227</div>
                     <div style={{height:"25px", backgroundColor:"#0f2648", borderRadius:"7px", width:"30%",display:"flex",alignItems: "center", justifyContent: "space-around"}}>CPT-99211</div>
                    </div>
                </div>
                <div style={{height:"65%", backgroundColor:"#f0f1f6", borderRadius:"10px", width:"90%",textAlign:"center", color: "#0f2648"}}>
                    <h4 style={{ marginTop: "7px" }}>Prescriptions</h4>
                    <Image src='https://www.researchgate.net/publication/6249623/figure/tbl2/AS:601697894273066@1520467365779/Overview-of-prescription-drugs-related-to-diabetes-co-mor-bidities-used-by-the-study.png' alt="prescription"/>
                </div>
            </Container>

        </Wrapper>
    )
}

export default Prescription;