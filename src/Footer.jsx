import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
    position: fixed;
    font-family: "Lobster", sans-serif;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, .7);
    z-index: 99999;
`;

const Footer = (props) => {

    return <div>
        <Foot>{'\u00A9'} possible sollutions</Foot>
    </div>
}

export default Footer;