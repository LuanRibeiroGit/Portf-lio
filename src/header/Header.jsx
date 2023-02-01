import React,{ useState } from "react";

import menu from '../IMGs/menu.png'
import HandleModal from './modal/Modal'

import "./headerStyle.css";


export default (props) =>{
    const [color, setColor] = useState(1)
    const [isModal, setModal] = useState(false)

    function transformAll (props){
        const circle = document.getElementById('circle')
        const header = document.getElementById('header-main')
        const transform = document.getElementById('box-transform')
        const app = document.getElementById('App')
        const baseboard = document.getElementById('baseboard')

        if(color == 1){
            circle.style.transform = 'translateX(37px)'
            app.style.color = 'rgb(22, 21, 31)'
            header.style.backgroundColor = 'rgb(235, 235, 235)'
            transform.style.backgroundColor = 'rgb(22, 21, 31)'
            app.style.backgroundColor = 'white'
            baseboard.style.backgroundColor = 'rgb(235, 235, 235)'
            setColor(2)
        }else{
            circle.style.transform = 'translateX(0px)'
            app.style.color = 'white'
            header.style.backgroundColor = 'rgb(22, 21, 31)'
            transform.style.backgroundColor = 'white'
            app.style.backgroundColor = 'rgb(24, 23, 34)'
            baseboard.style.backgroundColor = 'rgb(22, 21, 31)'
            setColor(1)
        }
    }

    return(
        <header id="header-main">
            <div className="container-header">
                <div className="box-menu">
                    <button id="button-modal" onClick={() =>{setModal(true)}}><img id='menu' src={menu} alt="menu" /></button>
                    {isModal ? (
                        <HandleModal onClose={ ()=>setModal(false) }>
                        </HandleModal>
                    ) : null}
                </div>
                <div className="title-header">
                    <h1>Portfólio</h1>
                </div>
                <div className="transform">
                    <div onClick={transformAll} id="box-transform">
                        <button id="circle"></button>
                    </div>
                </div>
            </div>
        </header>
    )
}