import React from "react";
import { ExternalLink } from "react-external-link";
// import { Link } from "react-router-dom";
import will from "./will.jpeg"
import sherry from "./sherry.jpeg"
import James from "./James.jpeg"
import josemock from "./josemock.jpeg"


function AboutContent() {

    return (
        <div className="about">
            <h3>Meet the Developers...</h3>
            
       

        <section className="team">
            <div className="will">
                <img src={will} alt="Wil" />
            </div>
            <div className="info">
                <h4>Wil Santos</h4>
                <span>Full Stack Web Developer</span>
                <span>Pursuit Fellow 9.4 N&W</span>
                <p>Github: <ExternalLink href="https://github.com/Wilsantos1975" target="_blank">@Wilsantos1975</ExternalLink></p>
                <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/fausto-wilghen-santos-9083a9112/" target="_blank">Wil Santos</ExternalLink></p>
            </div>

            <hr />

            <div className="info">
                <h4>Shareeka Epps</h4>
                <span>Full Stack Web Developer</span>
                <span>Pursuit Fellow 9.4 N&W</span>
                <p>Github: <ExternalLink href="https://github.com/shaketastic" target="_blank">@shaketastic</ExternalLink ></p>
                <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/shareeka-epps/" target="_blank">Sherry Epps</ExternalLink></p>
            </div>
            <div className="sherry">
                <img src={sherry} alt="Sherry" />
            </div>

            <hr />
            <div className="info">
                <h4>James Lee</h4>
                <span>Full Stack Web Developer</span>
                <span>Pursuit Fellow 9.4 N&W</span>
                <p>Github: <ExternalLink href="https://github.com/aardvarkpepper" target="_blank">@aardvarkpepper</ExternalLink ></p>
                <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/james-lee-software-development/" target="_blank">James Lee</ExternalLink></p>
            </div>
            <div className="james">
                <img src={James} alt="James" />
            </div>

            <hr />
            <div className="info">
                <h4>Jose Cepeda</h4>
                <span>Full Stack Web Developer</span>
                <span>Pursuit Fellow 9.4 N&W</span>
                <p>Github: <ExternalLink href="https://github.com/JoseC620" target="_blank">@JoseC620</ExternalLink ></p>
                <p>Linkedin: <ExternalLink href="https://www.linkedin.com" target="_blank">Jose Cepeda</ExternalLink></p>
            </div>
            <div className="jose">
                <img src={josemock} alt="jose" />
            </div>
        </section>
    </div>
    );
    }


export default AboutContent;