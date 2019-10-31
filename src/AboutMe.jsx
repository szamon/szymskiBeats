import React from "react";
import ArrowScroll from "./ArrowScroll";
import styled from "styled-components";
import img from "./assets/images/justdoit.jpg";

const About = styled.div`
    font-family: "Lobster", sans-serif;
    color: white;
    overflow: hidden;
    margin-top: 25px;
    margin-bottom: 10px;
    padding-bottom: 15px;
    width: 100%;
    min-height: 97vh;
    z-index: 100;

    .sectionHeader{
        font-family: "Lobster", sans-serif;
        font-size: 1.2em;
        margin: 0 auto;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 25px;
        background: rgb(74, 75, 70);
        color: white;
        box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    }

    .aboutMe__text{
        padding: 15px 0;
        width: 90%;
        text-align: justify;
        text-justify: inter-word;
        margin: 0 auto;
        border-radius: 2%;
        text-shadow: 1px 1px 1px rgb(74, 75, 70);
    }

    .aboutMe__logo{
        height: 150px;
        width: 150px;
        margin: 50px auto 0 auto;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
        background: url(${img}) no-repeat 10% 30%/300px;;
        display: block;
    }

    @media screen and (min-width: 1024px){
        padding-top: 25px;

        .sectionHeader{
            display: none;
        }
    
        .aboutMe__logo{
            height: 250px;
            width: 250px;
            background-size: 400px;
        }
    
        .aboutMe__text{
            width: 95%;
            box-shadow: none;
            text-shadow: 1px 1px 8px rgb(74, 75, 70);
            font-size: 1.2em;
        }
    }   
`;

const AboutMe = (props) => {
    return <About className="aboutMe" ref={props.aRef} style={props.mSDisplay}>
        <p className="sectionHeader">About Me</p>
        <div className="aboutMe__logo"></div>
        <p className="aboutMe__text">Witaj! Jestem zwykłym gościem, który od zawsze posiadał w sobie ogromne zamiłowanie do muzyki. Już jako 6 letni małolat nagrywałem z kumplem i jego siostrą tzw. "kocią muzykę" - każde napieprzało bez składu i ładu - czy to w cymbałki, czy kijkiem o krzesło. To wszystko było nagrywane na klasycznym magnetofonie marki Hitachi sprowadzonym prosto z Singapuru. Zamiłowanie do przygrywek pozostało ze mną. Uczęszczałem  do osiedlowego klubiku żeby rozwijać umiejętności gry na keyboardzie, a później dostałem się do szkoły muzycznej. Po jakimś czasie odkryłem Fruity Loops`a... ;)</p>
        <ArrowScroll handleScroll={props.handleScroll} part="cRef" text="Dalej"/>
    </About>
}

export default AboutMe;