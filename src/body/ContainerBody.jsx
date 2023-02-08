import React, { useEffect, useState } from "react";

import "./bodyStyle.css";

import myimg from '../IMGs/eu.jpg'
import HTML from '../IMGs/html5.png'
import CSS from '../IMGs/css3.png'
import js from '../IMGs/js.png'
import react from '../IMGs/react.png'
import cssInJs from '../IMGs/css-in-js.png'

import CV from './File/LuanRibeiro.pdf'


export default (props) =>{
    const handleDownload = () => {
        const Curriculo = document.createElement('a');
        Curriculo.href = CV;
        Curriculo.download = 'LuanRibeiro.pdf';
        Curriculo.dispatchEvent(new MouseEvent('click'));
    }  

    return(
        <div className="main">
            <div className="body-main">
                <div className="container-body">
                    <div id="contents-body">
                        <h1 className="title">Welcome to my Portfolio</h1>
                        <h1 className="myName">Luan Ribeiro</h1>
                        <button onClick={handleDownload} id="download" className="download-cv">download cv</button>
                    </div>
                    <div id="container-IMG">
                        <a href="https://github.com/LuanRibeiroGit" target="_blank"><img id="my-img" src={myimg} alt="Minha foto" /></a>
                    </div>
                </div>
            </div>
            <div className="container-sobre">
                <div className="top-sobre">
                    <h1 className="title-sobre-mim">Sobre mim</h1>
                </div>
                <div className="contents-sobre">
                    <div className="sobre-mim">
                        <div className="box-sobre">
                            <h2>Olá meu nome é Luan Ribeiro curso análise e desenvolvimento de sistemas, busco uma chance no mercado de trabalho para mostrar o que eu sei.</h2>
                        </div>
                        <div className="box-title-sobre">
                            <h1 className="">SOBRE</h1>
                            <h1 className="mim">-Mim&</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-praticando">
                <div className="top-praticando">
                    <h1 className="praticando">Praticando</h1>
                </div>
                <div className="contents-praticando">
                    <div className="box-praticando">
                        <div id='cards-pratic'>
                            <div className="cards-top">
                                <h1>HTML5</h1>
                            </div>
                            <div className="cards-container-img">
                                <img className="cards-img" src={HTML} alt="HTML" />
                            </div>
                        </div>
                        <div id='cards-pratic'>
                            <div className="cards-top">
                                <h1>CSS3</h1>
                            </div>
                            <div className="cards-container-img">
                                <img className="cards-img" src={CSS} alt="CSS" />
                            </div>
                        </div>
                        <div id='cards-pratic'>
                            <div className="cards-top">
                                <h1>JavaScript</h1>
                            </div>
                            <div className="cards-container-img">
                                <img className="cards-img" src={js} alt="JavaScript" />
                            </div>
                        </div>
                        <div id='cards-pratic'>
                            <div className="cards-top">
                                <h1>React.js</h1>
                            </div>
                            <div className="cards-container-img">
                                <img className="cards-img react" src={react} alt="React" />
                            </div>
                        </div>
                        <div id='cards-pratic'>
                            <div className="cards-top">
                                <h1>Css-in-js</h1>
                            </div>
                            <div className="cards-container-img">
                                <img className="cards-img" src={cssInJs} alt="Css-in-js" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}