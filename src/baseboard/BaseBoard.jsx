import React, { useState } from "react";

import "./baseStyle.css";

import emailBLK from '../IMGs/emailBLK.png'
import emailWTH from '../IMGs/emailWTH.png'
import githubBLK from '../IMGs/githubBLK.png'
import githubWTH from '../IMGs/githubWTH.png'
import linkedinBLK from '../IMGs/linkedinBLK.png'
import linkedinWTH from '../IMGs/linkedinWTH.png'
import whatsappBLK from '../IMGs/whatsappBLK.png'
import whatsappWTH from '../IMGs/whatsappWTH.png'



export default (props) =>{
    return(
        <div id="baseboard">
            <div className="container-base">
                <div className="top-baseboard">
                    <h1 className="contatos">Contatos</h1>
                </div>
                <div className="redes-sociais">
                    <div className="container-redes">
                        <a href="https://github.com/LuanRibeiroGit" target="_blank"><img id="imgs-redes" src={githubWTH} alt="Github" /></a>
                        <h1 className="redes-names">Github</h1>
                        <h1 className="sub-redes">@LuanRibeiroGit</h1>

                    </div>
                    <div className="container-redes">
                        <a href="https://www.linkedin.com/in/luan-ribeiro-63b60a234/" target="_blank"><img id="imgs-redes" src={linkedinWTH} alt="Linkedin" /></a>
                        <h1 className="redes-names">Linkedin</h1>
                        <h1 className="sub-redes">@LuanRibeiro</h1>

                    </div>
                    <div className="container-redes">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncVPzdKhTtrlvqGFHHhKXsmFfpJFGVdPhKvKkxjZdnSTsFsbDSzDcXqLFfPgVPZxgXGrW" target="_blank"><img id="imgs-redes" src={emailWTH} alt="E-mail" /></a>
                        <h1 className="redes-names">E-mail</h1>
                        <h1 className="sub-redes">luansoftwareengineer@gmail.com</h1>

                    </div>
                    <div className="container-redes">
                        <a href="https://api.whatsapp.com/send?phone=5541996447961" target="_blank"><img id="imgs-redes" src={whatsappWTH} alt="Whatsapp" /></a>
                        <h1 className="redes-names">Whatsapp</h1>
                        <h1 className="sub-redes">(41) 99644-7961</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}