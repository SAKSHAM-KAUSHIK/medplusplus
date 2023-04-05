import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { IoMdNotifications, } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';
// import { claims } from '../data';
import ClaimDetails from '../components/ClaimDetails';
import axios from "axios";



const Container = styled.div`
flex: 4;
margin: 0px 20px;
`

const Head = styled.div`
display:flex;
justify-content: space-between;
color: #0f2648;
`
const Heading = styled.h1`
margin-top: 0;
margin-bottom: 0.67em;
`
const Iconbox = styled.span`
font-size: 1.6rem;
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Search = styled.input`
position: sticky;
left: 100%;
padding: 5px;
margin: 10px 0px;
width: 15rem;
border: none;
border-radius: 5px;
font-size: medium;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: grey;
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

const Tile = styled.div`
background-color: #fff;
color: #0f2648;
margin: 10px;
padding: 20px;
min-width: 15rem;
border-radius:10px;
&:hover{
    background-color: rgb(0 0 0 / 0) ;
    backdrop-filter: blur(50px);
    border: #0f2648;
    border-left: 1px solid #0f2648;
    border-top:1px solid #0f2648;
    border-right: 5px solid #0f2648;
    border-bottom: 5px solid #0f2648;
}
`
const Box = styled.div`
flex-direction: column;
`
const BigBox = styled.div`
display: flex;
flex-direction: column;
text-align: start;
`
const Span = styled.span`
`
const H4 = styled.h4`
margin: 1.33em 0;
`
const P = styled.p`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 15px;
font-weight: 600;
`

const Button = styled.button`
color: #fff;
background-color: #0f2648;
border-radius: 4px;
height: 30px;
cursor: pointer;
font-weight: bold;
&:hover{
    color: #0f2648;
    background-color: #fff;
}
`


const Claim = () => {
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState("");
    const [modalData, setModalData] = useState({
        id: 1,
        claimid: "20003",
        dos: "1/10/2023",
        status: "Pending",
        name: "Linda Harris",
        dob: "11/09/1945(76 yrs),F",
        smokes: false,
        empi: "P078645",
        phone: "512-265-4081",
        pcp: "Dr. Karen Carter",
        doctor: "Dr. Roger Lenon",
        docimg: "",
        docdetail: "MD, NPI 43212",
        docgrp: "Holtzman Medical Group",
        contact: "2380181221",
        rid: "200003",
        authid: "63c8cef16328c39de555111f",
        services: "CPT 92227 x2 visits Annually",
        payer1: "VETERANS ADMINISTRATION - PRESCOTT VA [199311] 123456789 (Contracts)",
        edi1: "199311",
        assignment: "Not Assigned",
        fdtp: "No",
        payer1: "Humana (Medicare Replacement/Advantage - PPO) [47006] 123456789",
        edi1: "47006",
        assignment: "Not Assigned",
        fdtp: "No",
        cpt: "92227",
        diagnosis: "Imaging of Retinna for detection or monitoring of disease",
        units: 2,
        price: 432,
    });
    const [claims,setClaims] = useState([])
    const BASE_URL = `${process.env.REACT_APP_BASE_URL}/claim`;
    console.log(BASE_URL);
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get(BASE_URL)
                console.log(res.data);
                setClaims(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])


    const handleClick = (e) => {
        // console.log(e.name);
        setModalData(e);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <Container>
      <p style={{ color: "#0f2648", fontSize: "0.8rem", marginBottom: "0px", marginTop:"1em" }}><em>*This is a demo login with limited but essentail functionality</em></p>
            <Head>
                <Heading>Welcome Bayer!</Heading>
                <Iconbox>
                    <AiOutlineSearch style={{ margin: "5px", color: "grey" }} />
                    <IoMdNotifications style={{ margin: "5px" }} />
                    <IoPersonCircleSharp style={{ fontSize: "3rem", margin: "5px" }} />
                    <MdLogout style={{ margin: "5px" }} />
                </Iconbox>
          </Head>
          <Search type="text" placeholder=" Claim ID or Date" onChange={e=>setQuery(e.target.value)}/>
          <Wrapper>
              {claims.filter((user)=>(user.claimid.includes(query)||user.dos.includes(query))).map((e) =>
                  <div>
                      <Tile value={e.name} >
                         <h3 style={{textAlign:"center",fontWeight:"900",margin:"1em 0"}}> {e.name} </h3>
                          <BigBox>
                          <Box>
                              <Span style={{display:"flex",justifyContent:"space-between"}}><H4>Claim ID</H4> <P>{e.claimid}</P> </Span>
                              </Box>
                              <Box>
                              <Span style={{display:"flex",justifyContent:"space-between"}}><H4>Date of services</H4> <P>{e.dos}</P> </Span>
                              </Box>
                              <Box>
                              <Span style={{display:"flex",justifyContent:"space-between"}}><H4>Status</H4> <P>{e.status}</P> </Span>
                          </Box>
                          <Button onClick={()=>handleClick(e)}>
                                 View
                              </Button>
                          </BigBox>

                      </Tile>
                      {/* {console.log(modalData)} */}
                  </div>
                     
              )}
              {showModal && <ClaimDetails item={modalData} close={closeModal} item_key={ modalData.id } />}

          </Wrapper>
    </Container>
  )
}

export default Claim
