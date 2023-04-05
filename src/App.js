import styled from 'styled-components';
import './App.css';
import Navbar from "./components/Navbar";
import Prior_Auth from './pages/Prior_Auth';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Claim from './pages/Claim';
import PatientSummary from './pages/PatientSummary';
import Welcome from './pages/Welcome';
import Chatbot from './SupportEngine/Chatbot';



const Container = styled.div`
display: flex;
`

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='prior_auth' element={<Container><Navbar /><Prior_Auth /><Chatbot/></Container>} />
        <Route path='claim' element={<Container><Navbar /><Claim /><Chatbot/></Container>} />
        <Route path='patient' element={<Container><Navbar/><PatientSummary /><Chatbot/></Container>} />
        <Route path='/' element={<Container><Navbar /><Welcome/></Container>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
