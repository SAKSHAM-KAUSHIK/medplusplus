import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { IoMdNotifications, } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';
import PatientCount from '../components/PatientCount';
import Stats from '../components/Stats';
import axios from 'axios';
// import { data } from '../data';



const Container = styled.div`

flex: 4;
margin: 0px 0px 0px 20px;
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
const Dates = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:22px 0px;
margin-right: 5rem;
align-items:center;
`

const DatesIn = styled.div`
display:flex;
flex-direction:column;
width :150px;
height:40px;
border-radius:5px;
border: solid 1px #0f2648; 
color: #0f2648;
align-items:center;
justify-content:center;

`

const Welcome = () => {

    const [startDate, setStartDate]= useState("2023-03");
    const [endDate, setEndDate] = useState("2023-04");
    const [data, setData] = useState([]);
    const BASE_URL = `${process.env.REACT_APP_BASE_URL}/psum`;
    console.log(BASE_URL);
    useEffect(() => {
      const fetchAllBooks = async () => {
        try {
          const res = await axios.get(BASE_URL);
          setData(res.data);
        //   console.log(res.data);
        } catch (err) {
            console.log(err);
        }
      };
      fetchAllBooks();
    }, []);


    const inputStyle={
        backgroundColor:"#d4dcf1",
        width: "130px",
        border:"none",
        fontWeight:"600",
        color: "#0f2648",
        marginLeft:"8px"
    }
    return (
        <Container>
            <p style={{ color: "#0f2648", fontSize: "0.8rem", marginBottom: "0px", marginTop:"1.33em" }}><em>*This is a demo login with limited but essentail functionality</em></p>
            <Head>
                <Heading>Welcome Mervin!</Heading>
                <Iconbox>
                    <AiOutlineSearch style={{ margin: "5px", color: "grey" }} />
                    <IoMdNotifications style={{ margin: "5px" }} />
                    <IoPersonCircleSharp style={{ fontSize: "3rem", margin: "5px" }} />
                    <MdLogout style={{ margin: "5px" }} />
                </Iconbox>
            </Head>
            <Dates>
                <h2 style={{ color: "#0f2648" }}>Scorecard</h2>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <DatesIn>
                        <p style={{fontSize:"0.9rem"}}>Start Date</p>
                        <input style={inputStyle} type="month" value={startDate} pattern="[0-9]{4}-[0-9]{2}" onChange={(e)=> {
                            setStartDate(e.target.value); 
                            let en=parseInt(e.target.value.substring(0,4));
                            console.log(en);
                            let end=parseInt(e.target.value.substring(5,7))+1;
                            if(end>12){ en++;
                             setEndDate(en.toString()+e.target.value.substring(4,5)+"01");}
                             else { if(end>=10)setEndDate(en.toString()+e.target.value.substring(4,5)+end.toString());
                              else setEndDate(en.toString()+e.target.value.substring(4,5)+"0"+end.toString())
                              }
                            }} />
                    </DatesIn>
                    <DatesIn>
                        <p style={{fontSize:"0.9rem"}}>End Date</p>
                        <input style={inputStyle} type="month" value={endDate} pattern="[0-9]{4}-[0-9]{2}" disabled={true} />
                    </DatesIn>
                </div>

            </Dates>
            <div style={{display:"flex", flexDirection:"column", flex:"6"}}>
            <PatientCount item={data[parseInt(startDate.substring(5,7))]} mon={parseInt(startDate.substring(5,7))} />
            <Stats item={data[parseInt(startDate.substring(5,7))]} mon={parseInt(startDate.substring(5,7))} />
            </div>
        </Container>
    )
}

export default Welcome;
