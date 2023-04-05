import React, { useState } from 'react'
import styled from 'styled-components'
import { MdPendingActions } from 'react-icons/md';
import { ImClipboard } from 'react-icons/im';
import axios from "axios";



const Conatiner = styled.div`
padding: 10px;
display: flex;
background-color: #fff;
margin-bottom: 25px;
border-radius: 10px;
color: #0f2648;
flex-wrap: wrap;
&:hover{
    background-color: #0f2648;
    color: #fff;
    
}
`
const Status = styled.div`
flex: 1;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
`
const Box = styled.div`
flex: 2;
flex-direction: column;
`
const ButtonBox = styled.div`
flex: 1;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
`

const Button = styled.button`
color: #fff;
background-color: #0f2648;
border-radius: 4px;
height: 30px;
cursor: pointer;
font-weight: bold;
&.active{
    color: #0f2648;
    background-color: #fff;
}
`

const Span = styled.span`
display: flex;
align-items: center;
margin: 5px;
`

const H4 = styled.h4`
margin: 0;
padding: 0;
`
const P = styled.p`
margin: 0;
padding: 0;
font-size: 13px;
font-weight: 600;
${prop=>prop.link&&`text-decoration:underline;cursor:pointer;font-weight:700`}
`

const Requests = (item) => {
    const [btn, setbtn] = useState(false);

    const handleClick=async(id)=>{

        try {
            await axios.put(`http://localhost:5500/prior_auth`, {id:id,status:"Accepted"});
            item.reFtech();
          } catch (err) {
            console.log(err);
          }

    }

    const handleMouseOut = () => {
        setbtn(false);
    };

    const handleMouseOver = () => {
        setbtn(true);
    };

    return (
        <Conatiner className={item.item.id===2 ? "active":""}
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
        >
            <Status>
                
                {(item.item.status === "Pending") ? (<div><H4>Pending</H4> <MdPendingActions style={{fontSize:"2.2rem",margin: "2px 15px"}}/></div>) : <div><H4>Accepted</H4><ImClipboard style={{fontSize:"2rem",margin: "4px 19px"}}/></div>}
            </Status>
            <Box>
                <Span><H4>Request ID : </H4><P>{item.item.requetid}</P></Span>
                <Span><H4>Date : </H4><P>{item.item.date}</P></Span>
                <Span><P>{ item.item.urgency} Urgency</P></Span>
            </Box>
            <Box>
                <H4>Services</H4>
                {item.item.services!==null &&
                    <P>- {item.item.services}</P>}
                    {item.item.services2!==null &&
                    <P>- {item.item.services2}</P>}
            </Box>
            <Box>
                <H4>Requested By</H4>
                <P><b>{item.item.requestedby}</b></P>
            </Box>
            <ButtonBox>
                <div>{(item.item.status === "Pending") && <Button className={btn ? "active":""}  onClick={()=>handleClick(item.item.id)} >Approve</Button>}</div>
                
                <P link={true}>View Details</P>
            </ButtonBox>

        </Conatiner>
    )
}

export default Requests
