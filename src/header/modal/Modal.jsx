import React from "react";
import './modalStyle.css'


export default ({id = 'modal', onClose = ()=>{}})=>{

    const handleOutSideClick = (event) =>{
        if(event.target.id == id) onClose();
    }

    return(
        <div id={id} className="modal" onClick={handleOutSideClick}>
            <div className="container-modal">
                <button className="closeModal" onClick={onClose}/>
                <div className="top-modal">
                    <h1 className="first-title">Olá, bem-vindo ao meu portfólio</h1>
                    <h1 className="second-title">Oque desejá saber sobre mim?</h1>
                </div>
                <div className="content-modal">
                    <button className="list-modal">Home</button>
                    <button className="list-modal">Sobre mim</button>
                    <button className="list-modal">Linguagens</button>
                    <button className="list-modal">Contatos</button>
                </div>
            </div>
        </div>
    )
}