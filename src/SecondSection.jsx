import React from "react";
import styled from "styled-components";

const Section2 = styled.div`
    display: none;

    @media screen and (min-width: 1024px){
        display: block;
        border-radius: 2px;
        position: fixed;
        top: 150px;
        right: 10%;
        width: 33%;
        height: 320px;
        box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.3);
        transition: all .5s ease-out .2s;
        z-index: 50;

        .secondSection__header{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            background: none;
            margin: 0;
            font-family: "Lobster", sans-serif;
            text-align: center;
            text-shadow: 1px 1px 8px rgb(74, 75, 70);
            color: white;
            line-height: 320px;
            font-size: 3.5em;
            box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
            transition: all 1s ease-out .2s;           
        }
    }
`;

const SecondSection  = (props) => {
    return <Section2 style={props.bgStyle}>
        <p className="secondSection__header" style={props.sSStyle[0]}>My Tracks</p>
        <p className="secondSection__header" style={props.sSStyle[1]}>About Me</p>
        <p className="secondSection__header" style={props.sSStyle[2]}>Contact</p>
    </Section2>
}

export default SecondSection;