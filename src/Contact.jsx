import React from "react";
import mail from './assets/images/email.png';
import ArrowScroll from "./ArrowScroll";
import styled from "styled-components";

const ContactInfo = styled.div`
    width: 100%;
    font-family: "Lobster", sans-serif;
    color: white;
    min-height: 100vh;
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

    .contact__text{
        padding: 15px 0;
        width: 90%;
        text-align: center;
        text-justify: inter-word;
        margin: 150px auto auto auto;
        border-radius: 2%;
        text-shadow: 1px 1px 1px rgb(74, 75, 70);
        font-size: 1.1em;
    }

    .contact__container{
        width: 90%;
        margin: 0 auto;
        border-radius: 2px;
    }
    
    .contact__mediaContainer{
        height: 50px;
        width: 250px;
        text-align: center;
        margin: 10px auto;
    }

    .contact__mailText{
        line-height: 50px;
        height: 50px;
        font-size: 2em;
        float: right;
    }
    
    .contact__phoneIco, .contact__mailIco{
        height: 50px;
        width: 50px;
        float: left;
    }

    @media screen and (min-width: 1024px){
        padding-top: 70px;
        transition: all .2s ease-out .1s;
        z-index: 100;

        .sectionHeader{
            display: none;
        }

        .contact__text{
            width: 95%;
            box-shadow: none;
            text-shadow: 1px 1px 8px rgb(74, 75, 70);
            font-size: 1.2em;
        }
    }
}`;

const Contact = (props) => {
    return <ContactInfo id="contact" className="contact section" ref={props.cRef} style={props.mSDisplay}>
        <p className="sectionHeader">Contact</p>
        <div className="contact__container">
        <p className="contact__text">Jeżeli jesteś zainteresowany współpracą lub też chcesz wyrazić swoją opinię na temat mojej muzyki:</p>
            {/* <div className="contact__mediaContainer">
                <img src={phone} className="contact__phoneIco"></img><span></span>
            </div> */}
            <div className="contact__mediaContainer">
                <img src={mail} className="contact__mailIco" alt="mail icon"></img><span className="contact__mailText">szamon@o2.pl</span>
            </div>
        </div>
        <ArrowScroll handleScroll={props.handleScroll} part="tRef" text="Do początku" reverted="true"/>
    </ContactInfo>
}

export default Contact;