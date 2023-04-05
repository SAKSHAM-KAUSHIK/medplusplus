import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { IoMdNotifications, } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';
import Requests from '../components/Requests';
// import { prior_auth } from '../data';
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

const Iconbox = styled.span`
font-size: 1.6rem;
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Heading = styled.h1`
margin-top: 0;
margin-bottom: 0.83em;
`

const Box = styled.div`
padding: 10px;
`

const Prior_Auth = () => {
    const [data, setData] = useState([]);
    const BASE_URL = `${process.env.REACT_APP_BASE_URL}/prior_auth`;
    console.log(BASE_URL);
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get(BASE_URL)
                console.log(res.data);
                setData(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks();
    }, [])

    const reFtech = async () => {
        try {
            const res = await axios.get("http://localhost:5500/prior_auth");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
        // console.log(data);
    }


    return (
        <Container>
            
            <p style={{ color: "#0f2648", fontSize: "0.8rem", marginBottom: "0px", marginTop: "1em" }}><em>*This is a demo login with limited but essentail functionality</em></p>
            <Head>
                <Heading>Welcome Bayer!</Heading>
                <Iconbox>
                    <AiOutlineSearch style={{ margin: "5px", color: "grey" }} />
                    <IoMdNotifications style={{ margin: "5px" }} />
                    <IoPersonCircleSharp style={{ fontSize: "3rem", margin: "5px" }} />
                    <MdLogout style={{ margin: "5px" }} />
                </Iconbox>
            </Head>
            <h2 style={{ color: "#0f2648", margin: "0.83em 0" }}>Manage Requests</h2>
            <div>
                <h4 style={{ color: "#0f2648", marginBottom: "0px" }}>Pending</h4>

                {data.map((item) => item.status === "Pending" && <Requests item={item} key={item.id} reFtech={reFtech} />)}

            </div>
            <div>
                <h4 style={{ color: "#0f2648", marginBottom: "0px" }}>Accepted</h4>
                {data.map((item) => item.status === "Accepted" && <Requests item={item} key={item.id} reFtech={reFtech} />)}
            </div>
        </Container>
    )

}

export default Prior_Auth
