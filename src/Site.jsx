import React from "react";
import MainSection from './MainSection';
import SecondSection from './SecondSection';
import Nav from './Menu';
import Logo from './Logo';
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Anton|Lobster|Red+Hat+Display&display=swap");
    
    overflow: hidden;
    margin: 0;
    width: 100%;

    &:before {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background: url('./assets/images/bgSs.jpg') no-repeat center center;
        background-size: 500%;
        background-position: 10% 30%;
        background-attachment: fixed;        
    }

    @media screen and (min-width: 1024px){

        &:before {
            background-size: 200%;
            background-position: 0 0;
            background-attachment: fixed;
        }
    }
`;

const bgStyles = [
    {
        background: "rgba(255,155,23, .9)"
    },
    {
        background: "rgba(80, 160, 109, .9)"
    },
    {
        background: "rgba(62, 79, 122, .9)"
    }
];

const sSHStyle = [[{opacity: "1"}, {opacity: "0"}, {opacity: "0"}],[{opacity: "0"}, {opacity: "1"}, {opacity: "0"}],[{opacity: "0"}, {opacity: "0"}, {opacity: "1"}]];

const mSDisplay = [
    [{opacity: "1"}, {opacity: "0"}, {opacity: "0"}], 
    [{opacity: "0"}, {opacity: "1"}, {opacity: "0"}], 
    [{opacity: "0"}, {opacity: "0"}, {opacity: "1"}],
    [{opacity: "1"}, {opacity: "1"}, {opacity: "1"}]
];

class Site extends React.Component{
    constructor(props){
        super(props);
        this.state={
            section: "tRef",
            mSectionColor: "",
            bgStyle: bgStyles[0],
            secondS: "tRef",
            sSHStyle: sSHStyle[0],
            mSDisplay: mSDisplay[3],
            height: {height: "auto"}
        }
        this.handleMenu=this.handleMenu.bind(this);
        this.handleScroll=this.handleScroll.bind(this);
        this.handlePosition=this.handlePosition.bind(this);
        this.handleSecondSection=this.handleSecondSection.bind(this);
        this.tRef=React.createRef();
        this.aRef=React.createRef();
        this.cRef=React.createRef();
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handlePosition);
    }
    componenWillUnmount(){
        window.removeEventListener("scroll", this.handlePosition);
    }
    handleSecondSection(section){
        if(window.innerWidth>=760){
            switch(section){
                case "tRef":
                    this.setState({sSHStyle: sSHStyle[0], mSDisplay: mSDisplay[0]});
                    break;
                case "aRef":
                    this.setState({sSHStyle: sSHStyle[1], mSDisplay: mSDisplay[1]});
                    break;
                case "cRef":
                    this.setState({sSHStyle: sSHStyle[2], mSDisplay: mSDisplay[2]});
                    break;
                default: break;
            }
        }else{
            this.setState({mSDisplay: mSDisplay[3]});
        }
    }
    handlePosition(){
        let position = window.pageYOffset;
        let tSec = document.getElementsByClassName("tracks")[0].offsetTop;
        let aSec = document.getElementsByClassName("aboutMe")[0].offsetTop;
        let cSec = document.getElementsByClassName("contact")[0].offsetTop;
        if(true){
            switch(true){
                case position >= tSec - 150 && position <= tSec + 500:
                    this.handleBg("tRef");
                    this.handleSecondSection('tRef');
                    break;
                case position >= aSec - 150 && position <= aSec + 300:
                    this.handleBg("aRef");
                    this.handleSecondSection('aRef');
                    break;
                case position >= cSec - 150 && position <= cSec + 300:
                    this.handleBg("cRef");
                    this.handleSecondSection('cRef');
                    break;
                default: break;
            }
        }  
    }
    handleBg(section){
        switch(section){
            case 'tRef':
                this.setState({mSectionColor: 'orange', bgStyle: bgStyles[0]});
                break;
            case 'aRef':
                this.setState({mSectionColor: 'green', bgStyle: bgStyles[1]});
                break;
            case 'cRef':
                this.setState({mSectionColor: 'blue', bgStyle: bgStyles[2]});
                break;
            default:
                break;
        }
    }
    handleMenu(){
        if(!document.getElementsByClassName("menu__overlay")[0].classList.contains("menu__overlay_open")){
            document.getElementsByClassName("menu__overlay")[0].classList.add("menu__overlay_open");
            document.getElementsByClassName("menu__span")[0].classList.add("menu__span_open");
            document.getElementsByClassName("menu__span")[1].classList.add("menu__span_open");
            document.getElementsByClassName("menu__span")[2].classList.add("menu__span_open");
        }else{
            document.getElementsByClassName("menu__overlay")[0].classList.remove("menu__overlay_open");
            document.getElementsByClassName("menu__span")[0].classList.remove("menu__span_open");
            document.getElementsByClassName("menu__span")[1].classList.remove("menu__span_open");
            document.getElementsByClassName("menu__span")[2].classList.remove("menu__span_open");
        } 
    }
    handleScroll(e){
        console.log("handleScroll", e.target);
        let attr = e.target.getAttribute('part');
        let menu = e.target.getAttribute('menu');
        console.log(menu);
        let part = "this." + e.target.getAttribute('part') + ".current.scrollIntoView({behavior: 'smooth'})";
        if(true){eval(part)};
        this.setState({section: attr});
        this.handleBg(attr);
        this.handleSecondSection(attr);
        if(menu===null){this.handleMenu()};
    }
    render(){
        return <Wrapper className="site" style={this.state.height}>
            <Logo />
            <Nav handleMenu={this.handleMenu} handleScroll={this.handleScroll} />
            <MainSection tRef={this.tRef} aRef={this.aRef} cRef={this.cRef} bgStyle={this.state.bgStyle} mSDisplay={this.state.mSDisplay} handleScroll={this.handleScroll}/>
            <SecondSection bgStyle={this.state.bgStyle} sSStyle={this.state.sSHStyle} />
            <Footer />
        </Wrapper>
    }
}

export default Site;