import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
import { MdPendingActions } from 'react-icons/md';
import { IoPersonCircleSharp } from 'react-icons/io5';


const Container = styled.div`
background-color: rgba(15,38,72,0.3);
backdrop-filter: blur(2px);
position: fixed;
max-width: 80rem;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
border-radius:10px;
margin: 10px;
padding: 18px;
display: flex;
color: #0f2648;
`

const CloseButton = styled.button`
color: #fff;
background-color: transparent;
border: none;
height: 20px;
cursor: pointer;
font-weight: 900;
font-size: 1.4rem;
position: fixed;
left: 62rem;
top: 5px;
`

const ApproveButton = styled.button`
color: white;
background-color: #0f2648;
position: fixed;
left: 56rem;
top: 38rem;
border-radius:5px;
padding: 8px 15px;
border: none;
cursor: pointer;

`
const RejectButton = styled.button`
color: white;
background-color: #ba1c1b;
position: fixed;
left: 47rem;
top: 38rem;
border-radius:5px;
padding: 8px 15px;
border: none;
cursor: pointer;

`

const Wrapper = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
background-color: rgba(189,189,189,0.15);
`

const Box = styled.div`
background-color: white;
padding: 20px;
margin: 20px;
display: flex;
border-radius: 6px;

`

const BigBox = styled.div`
`
const Span = styled.span`
`
const H5 = styled.h5`
margin: 0;
padding: 0;
`
const P = styled.p`
margin: 0px;
padding-left: 2px;
display: flex;
justify-content: space-between;
align-items: initial;
font-size: 12px;
font-weight: 600;
`
const Column = styled.div`
display: flex;
flex-direction:column;
`
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const H6 = styled.h6`
margin: 0;
`
const H4 = styled.h4`
margin: 0;
`
const Image = styled.img`
max-width: 8rem;
max-height: 6.3rem;
border-radius: 10px;
`
const Textbox = styled.textarea`
width: 30rem;
max-width: 30rem;
min-height: 3rem;
max-height: 4rem;
border: none;
`

const ClaimDetails = ({ item, close }) => {
    return (
        <>
            <Wrapper></Wrapper>
            <Container>
                <BigBox>
                    <Box>
                        <MdPendingActions style={{ fontSize: "3rem", margin: "10px",marginRight:"15px" }} />
                        <div>
                            <Span style={{ display: "flex", justifyContent: "space-between" }}><H5>Claim ID</H5><P style={{ width: "7rem" }}>{item.claimid}</P> </Span>
                            <Span style={{ display: "flex", justifyContent: "space-between" }}><H5>Date of services</H5> <P style={{ width: "7rem" }}>{item.dos}</P> </Span>
                            <Span style={{ display: "flex", justifyContent: "space-between" }}><H5 style={{ marginRight: "8rem" }}>Status</H5> <P style={{ width: "7rem", }}>{item.status}</P> </Span>
                        </div>
                    </Box>
                    <Box style={{ display: "block" }}>
                        <Row>
                            <IoPersonCircleSharp style={{ fontSize: "5rem", color: "grey", margin: "8px 20px 15px 5px" }} />
                            <div style={{ marginBottom: "15px" }}>
                                <h3>{item.name}</h3>
                                <P>{item.dob}</P>
                                <P>{item.smokes ? "Smoker" : "Non-Smoker"}</P>
                            </div>
                        </Row>
                        <div>
                            <Span style={{ display: "flex", justifyContent: "space-between" }}>
                                <Column><H6>EMPI/MRN</H6><P>{item.empi}</P></Column>
                                <Column><H6>Phone</H6><P>{item.phone}</P></Column>
                                <Column><H6>PCP</H6><P>{item.pcp}</P></Column>
                            </Span>
                        </div>
                    </Box>
                    <Box>
                        <Column style={{ width: "15rem" }}>
                            <h3 style={{marginBottom:"15px"}}>{item.doctor}</h3>
                            <P>{item.docdetail}</P>
                            <P>{item.docgrp}</P>
                            <P>Conatct No. {item.contact}</P>
                        </Column>
                        <Image src={item.docimg} alt="Doctor's Image" />
                    </Box>

                    <Box>
                        <Column>
                            <H4>Prior Authorization</H4>
                            <Row><H6>RID: </H6><P>{item.rid}</P></Row>
                            <Row><H6>AuthID: </H6><P>{item.authid}</P></Row>
                            <Row><H6>Services Requested:</H6></Row>
                            <Row><P>{item.services}</P></Row>
                        </Column>
                    </Box>
                </BigBox>
                <BigBox>
                    <Box style={{ width: "30rem" }}>
                        <Column>
                            <H4>Primary Payer</H4>
                            <Row><P>{item.payer1}</P></Row>
                            <Row><H6>EDI- </H6><P>{item.edi1}</P></Row>
                            <Row><H6>Assignment- </H6><P>{item.assignment}</P></Row>
                            <Row><H6>Force Drop To Paper- </H6><P>{item.fdtp}</P></Row>
                        </Column>
                    </Box>
                    <Box>
                        <Column>
                            <H4>Secondary Payer</H4>
                            <Row><P>{item.payer2}</P></Row>
                            <Row><H6>EDI- </H6><P>{item.edi2}</P></Row>
                            <Row><H6>Assignment- </H6><P>{item.assignment2}</P></Row>
                            <Row><H6>Force Drop To Paper- </H6><P>{item.fdtp2}</P></Row>
                        </Column>
                    </Box>
                    <Box style={{padding:"0",borderRadius:"10px"}}>
                        <Column style={{borderRadius:"10px"}}>
                        <table style={{borderSpacing:"0",borderRadius:"10px !important",width:"100%",textAlign:"left"}}>
                            <tr style={{ margin:"2px 0px",backgroundColor:"#0f2648",color:"white",border:"none"}}>
                                <th style={{borderTopLeftRadius:"10px",padding:"5px 15px"}}>CPT</th>
                                <th style={{width:"20rem",padding:"5px 15px"}}>Diagnosis</th>
                                <th style={{padding:"5px 15px"}}>Unit</th>
                                <th style={{borderTopRightRadius:"10px",padding:"5px 15px",width:"5rem"}}>Price</th>
                            </tr>
                            <tr >
                                <td style={{padding:"5px 8px"}}>{item.cpt}</td>
                                <td style={{maxWidth:"20rem",padding:"5px 8px"}}>{item.diagnosis}</td>
                                <td style={{padding:"5px 8px"}}>{item.units}</td>
                                <td style={{padding:"5px 8px"}}>{item.price}</td>
                            </tr>
                        </table>
                        <Row style={{justifyContent:"right",margin:"0 3.5rem"}}><H4>Total: ${ item.price*item.units}</H4></Row>
                        </Column>
                    </Box>
                    <Box>
                        <Column>
                        <H4>Note for Provider</H4>
                        <Textbox type="text" placeholder="Text goes here..."></Textbox>
                        </Column>
                    </Box>
                </BigBox>
                <CloseButton onClick={close}><AiOutlineClose /></CloseButton>
                
                <RejectButton>Reject with note</RejectButton>
                <ApproveButton>Approve</ApproveButton>
            </Container>
        </>
    )
}

export default ClaimDetails
