import React from "react";
import Tracks from './Tracks';
import AboutMe from './AboutMe';
import Contact from './Contact';
import styled from "styled-components";

const Main = styled.div`
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.75);
    transition: all 1s ease-out .2s;

    @media screen and (min-width: 1024px){
        position: absolute;
        top: 0;
        left: 0;
        width: 62%;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.75);
    }
`;

const MainSection = (props) => {
    return <Main className="mainSection" style={props.bgStyle}>
        <Tracks tRef={props.tRef} mSDisplay={props.mSDisplay[0]} handleScroll={props.handleScroll}/>
        <AboutMe aRef={props.aRef} mSDisplay={props.mSDisplay[1]} handleScroll={props.handleScroll}/>
        <Contact cRef={props.cRef} mSDisplay={props.mSDisplay[2]} handleScroll={props.handleScroll}/>
    </Main>
}

export default MainSection;