import React from "react";
import styled, {keyframes} from "styled-components";
import Arrow from './assets/images/arrowDownWhite.png';

const scrollText = keyframes`
	from {
		-webkit-transform: translateY(0px);
		   		transform: translateY(0px);
		opacity: 1;
	}

	to {
		-webkit-transform: translateY(5px);
				transform: translateY(5px);
		opacity: 0;
    }
`;

const scrollTextRev = keyframes`
	0% {
		-webkit-transform: translateY(5px) rotate(0deg);
		        transform: translateY(5px) rotate(0deg);
		opacity: 1;
	}

	50% {
		-webkit-transform: translateY(5px) rotate(-180deg);
		        transform: translateY(5px) rotate(-180deg);
		opacity: 1;
	}

	100% {
		-webkit-transform: translateY(0px) rotate(-180deg);
		        transform: translateY(0px) rotate(-180deg);
		opacity: 0;
	}
`;

const Scroller = styled.div`
    height: 60px;
    width: 100%;
	font-family: "Lobster", sans-serif;
    font-size: 1em;
    margin: 30px auto 0 auto;
    cursor: pointer;

	.scrollText__p{
        color: white;
        margin: 0 auto;
        text-align: center;
	}

	.scrollText__img{
        display: block;
        margin: 0 auto;
		height: 40px;
		width: 50px;
		animation-name: ${props=>props.reverted==="true" ? scrollTextRev : scrollText};
        animation-duration: 2s;
	    animation-iteration-count: infinite;
		animation-direction: normal;
	}
`;

const ArrowScroll = (props) => {
    return <Scroller className="scrollText" onClick={props.handleScroll} part={props.part} menu="no-menu" reverted={props.reverted}>
        <p className="scrollText__p" part={props.part} menu="no-menu">{props.text}</p>
        <img className="scrollText__img" src={Arrow} alt="scroll down arrow" part={props.part} menu="no-menu"></img>
    </Scroller>
}

export default ArrowScroll;