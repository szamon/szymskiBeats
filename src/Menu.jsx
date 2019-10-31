import React from "react";
import styled from "styled-components";

const Menu = styled.div`

.menu{
    position: absolute;
    top: 0;
    right: 15px;
    font-family: "Red Hat Display", sans-serif;
    cursor: pointer
}

.menu__title{
    display: none;
}

.menu__checker {
    position: fixed;
    top: 1rem;
    right: 1rem;
    height: 24px;
    width: 40px;
    z-index: 9999;
    cursor: pointer;
    -webkit-transition: 1s;
    transition: 1s;
  }
  
  .menu__span {
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: white;
    z-index: 1000;
    border: 1px solid white;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
  }

  .menu__span:nth-of-type(2) {
    top: 10px;
  }
  
  .menu__span:nth-of-type(3) {
    top: 20px;
  }

  .menu__span_open:nth-of-type(1) {
    transform: translateY(10px) translateX(0) rotate(45deg);
  }
  
  .menu__span_open:nth-of-type(2) {
    opacity: 0;
  }
  
  .menu__span_open:nth-of-type(3) {
    transform: translateY(-10px) translateX(0) rotate(-45deg);
  }

.menu__list{
    list-style: none;
    color: white;
}

.menu__li{
    font-size: 3em;
    margin-top: 50px;
    &:hover{
        color: silver;
    }
}

.menu__overlay{
    position: fixed;
    top: -100%;
    left: 0;
    height: 100vh;
    width: 100%;
    font-family: "Lobster", helvetica;
    background: rgba(0, 0, 0, 0.9);
    z-index: 999;
    opacity: 0;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

.menu__overlay_open{
    top: 0;
    opacity: 1;
}

@media screen and (min-width: 1024px){
    .menu__checker{
        display: none;
    }
    .menu__overlay{
        top: 0;
        left: 70%;
        opacity: 1;
        height: 58px;
        background: none;
    }
    .menu__list{
        margin: 0;
    }
    .menu__li{
        font-size: 1em;
        display: inline-block;
        line-height: 58px;
        margin: 0 2px;
        padding: 0 4px;
        cursor: pointer;
        background: rgb(74, 75, 70);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    }  
}
`;

const Nav = (props) => {
    return <Menu className="menu">
        <div className="menu__title">Menu</div>
        <div className="menu__checker" onClick={props.handleMenu}>
            <span className="menu__span"></span>
            <span className="menu__span"></span>
            <span className="menu__span"></span>
        </div>
        <div className="menu__overlay" >
            <ul className="menu__list">
                <li onClick={props.handleScroll} part="tRef" className="menu__li">Tracks</li>
                <li onClick={props.handleScroll} part="aRef" className="menu__li">About Me</li>
                <li onClick={props.handleScroll} part="cRef" className="menu__li">Contact</li>
            </ul>
        </div>
    </Menu>
}

export default Nav;