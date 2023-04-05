import React from 'react';
import HospitalAverage from './HospitalAverage';
import styled from 'styled-components';
import IPVis from './IPVis';
import HCCG from './HCCG';

const Container= styled.div`
display:flex;
flex-direction:column;
`
const Wrapper= styled.div`
display:flex;
flex-direction:row;
`

const Stats=(props)=>{
    return(
        <Wrapper>
         <HospitalAverage item={props.item} mon={props.mon} />
            <Container>
                <IPVis item={props.item} mon={props.mon} />
                <HCCG item={props.item} mon={props.mon} />
        </Container>

        </Wrapper>
    )
}

export default Stats;