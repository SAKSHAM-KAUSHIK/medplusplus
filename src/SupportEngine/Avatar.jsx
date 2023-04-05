import React, { useState } from 'react'
import styled from 'styled-components'
import { RiChatSmile3Fill } from 'react-icons/ri';


const AvatarBox = styled.div`
        cursor: pointer;
        box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.33);
        // Border
        border-radius: 50%;
        // Background 
        background-image: url(https://cdn-icons-png.flaticon.com/512/4944/4944377.png);
        background-repeat: 'no-repeat';
        background-position: 'center';
        background-size: contain;
        background-size: '84px';
        // Size
        width: 64px;
        height: 64px;
        border: 4px solid #0f2648;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            border: 1px solid #f9f0ff;
        }
        &.transition-3 {
          transition: all 0.33s ease;
          -webkit-transition: all 0.33s ease;
          -moz-transition: all 0.33s ease;
        }
`

const TextBox = styled.div`
        position: absolute; 
        left: calc(-100% - 44px - 64px); 
        top: calc(50% - 38px); 
        // Layering
        z-index: 1000;
        box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.33);
        // Border
        padding: 12px 12px 12px 16px;
        border-radius: 24px; 
        border-bottom-right-radius: 0;
        // Color
        background-color: #f9f0ff;
        color: black;
        display: 0;
        &:hover{
            display: 1;
        }
`

const Avatar = (props) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div style={{ position: "fixed", bottom: "34px", right: "34px" , display: props.visible ? 'none' : '' }}>
            <TextBox
                className='transition-3'
                style={{
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >👋 Hi, May I Help!</TextBox>
            <AvatarBox
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=> props.onClick && props.onClick()}
                className='transition-3 ' >
                {/* <RiChatSmile3Fill style={{ fontSize: "3rem" }} /> */}
            </AvatarBox>
        </div>
    )
}

export default Avatar
