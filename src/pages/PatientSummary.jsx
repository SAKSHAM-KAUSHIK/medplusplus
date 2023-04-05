import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { IoMdNotifications, } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';
import Patient from '../components/Patient';
import MedicalHistory from '../components/MedicalHistory';
import Prescription from '../components/Prescription';
import axios from 'axios';


const Container = styled.div`
flex: 4;
margin: 5px 0px 0px 35px;
padding:20px 0px;
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
`

const Wrapper= styled.div`
display:flex;
flex-direction:row;
height:93.5%;
gap:20px;

`

const PatientSummary = () => {

    const [i,setI]= useState(0);
    const onChange=()=>{
        setI((i+1)%3);
    }
    const [data, setData] = useState([
        {
        "name": "Linda Harris",
        "dob":"11/09/1945",
        "age":"76yrs",
        "gender":"F",
        "type":"Non-Smoker",
        "EMPIMRN":"P078645",
        "phone":"512-265-4081",
        "PCP": "Dr. Karen Carter",
        "title":"Current Period Diabetic Retinopathy Scan",
        "subtitle":"DR Present,moderate",
        "doctor":"Verified by Dr. Domingo Sanchez",
        "photo":"https://www.nih.gov/sites/default/files/news-events/research-matters/2017/20170502-eye.jpg",
        "percentage":52,
        "time":"12h 28min"
        
        }
    ]);
    const BASE_URL = `${process.env.REACT_APP_BASE_URL}/pdetail`;
    console.log(BASE_URL);
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get(BASE_URL)
                // console.log(res.data);
              setData(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks();
    }, [])


    const inputStyle={
        backgroundColor:"#d4dcf1",
        width:"130px",
        border:"none",
        fontWeight:"600",
        color:"#0f2648"
    }
    return (
        <Container>
            <p style={{ color: "#0f2648", fontSize: "0.8rem", marginBottom: "0px" }}><em>*This is a demo login with limited but essentail functionality</em></p>
            <Head>
                <Heading>Hi, Dr.Lennon!</Heading>
                <Iconbox>
                    <AiOutlineSearch style={{ margin: "5px", color: "grey" }} />
                    <IoMdNotifications style={{ margin: "5px" }} />
                    <IoPersonCircleSharp style={{ fontSize: "3rem", margin: "5px" }} />
                    <MdLogout style={{ margin: "5px" }} />
                </Iconbox>
            </Head>
            <Wrapper>
            <Patient ind={i} data={data[i]} change={onChange} />
            <MedicalHistory  ind={i} data={data[i]}/>
            <Prescription  />
            </Wrapper>
            

        </Container>
    )
}

export default PatientSummary;

