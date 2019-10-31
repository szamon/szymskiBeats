import React from 'react';
import styled from 'styled-components';

const LogoSign = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    height: 50px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 9999;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);

    .logo__szymski, .logo__BEATS{
        display: inline-block;
        padding: 4px;
        line-height: 50px;
        height: 50px;
        margin: 0;
        font-size: 1.2em;
    }

    .logo__szymski{
        background: white;
        color: black;
        font-family: "Lobster", sans-serif;
        float:left;
    }

    .logo__BEATS{
        background: rgb(74, 75, 70);
        color: white;
        font-style: bold;
        font-family: "Red Hat Display", sans-serif;
        float: right;
    }

    @media and screen and (min-width: 1024px){
        position: fixed;
        left: 15%;
        z-index: 9999;
    }`;

const Logo = (props) => {
 return<LogoSign >
     <div className="logo__szymski">szymski</div>
     <div className="logo__BEATS">BEATS</div>
 </LogoSign>
}

export default Logo;