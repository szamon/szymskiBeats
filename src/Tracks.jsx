import React from "react";
import ArrowScroll from "./ArrowScroll";
import styled from "styled-components";

const Music = styled.div`
    overflow: hidden;
    margin-top: 50px;
    margin-bottom: 10px;
    padding-bottom: 15px;
    width: 100%;
    min-height: 97vh;

    .tracks__iframe{
        padding-top: 25px;
        width: 100%;
        overflow: hidden;
        display: block;
        height: 20px;
        margin: 30px auto 0 auto;
    }

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

    .tracks__iframeBg{
        background: white;
        height: 70px;
        box-shadow: 2px 2px 7px 0px rgba(0,0,0,0.75);;
    }

    @media screen and (min-width: 1024px){
        transition: all .2s ease-out .1s
        z-index: 100;
        margin-top: 0;
        padding-top: 50px;

        .sectionHeader{
            display: none;
        }

        .tracks__iframe{
            padding-top: 0;
            height: 117px;
            transition: all .2s ease-out .2s;
            box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
            width: 98%;
        }

        .tracks__iframeBg{
            background: none;
            height: auto;
            box-shadow: none;
        }
    }
`;

const Tracks = (props) => {
    return <Music className="section tracks" ref={props.tRef} style={props.mSDisplay}>
        <p className="sectionHeader">My Tracks:</p>
        <div className="tracks__iframeBg"><iframe className="tracks__iframe" style={props.mSDisplay} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/660956141&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        <div className="tracks__iframeBg"><iframe className="tracks__iframe" style={props.mSDisplay} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324262990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        <div className="tracks__iframeBg"><iframe className="tracks__iframe" style={props.mSDisplay} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264590682&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        <div className="tracks__iframeBg"><iframe className="tracks__iframe" style={props.mSDisplay} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227891854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        <div className="tracks__iframeBg"><iframe className="tracks__iframe" style={props.mSDisplay} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/214173850&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        <div className="tracks__iframeBg"><iframe className="tracks__iframe" style={props.mSDisplay} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/126287365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></div>
        <ArrowScroll handleScroll={props.handleScroll} part="aRef" text="Dalej"/>
    </Music>
}

export default Tracks;