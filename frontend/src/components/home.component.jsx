import React, { Component } from 'react'
import Pic1 from "../assets/homepic1.jpg"
import Pic2 from "../assets/homeskill.jpg"

export default class home extends Component {
    render() {
        return (
            <div className="Home">
                <img className="Pic1" src={Pic1} alt="pic1"/>
                <div className="Homewelcome">
                <h3>WELCOME TO DIVINE CARE LLC</h3>
                <h6>When it comes to healthcare assistance, 
                    it is essential to make sure that the person seeking
                    assistance receives holistic care. Divine Care LLC is
                    primarily engaged inproviding personalized medical assistance
                    such as skilled nursing, home care aide and therapeutic services 
                    through person-centered assistance living for people of all ages.</h6>
                <h6>Aging adults and senior residents require special healthcare 
                    assistance that should focus not only on physical and mental 
                    health but also on their spiritual and social well-being.
                    At Divine Care LLC, we not only aim to optimize the health
                    of our client but also encourage them to engage 
                    within the community and be independent. </h6>
                </div>
                <div className="Homeservices">
                    <img className="Homeskillpic" src={Pic2} alt="pic2"/>
                    <div className="Homeskilltext">
                    <h3>Skilled Nursing Facilities at Divine Care LLC</h3>
                    <h6>Our residential home, customized person center is
                         equipped to accommodate a maximum of 4 residents per house 
                         to create the environment of home away from home.There can 
                         be many occasions when you or your family member might require 
                         medical attention. Divine Care provides home care aide service 
                         wherein licensed medical professionals, and skilled nurses deliver 
                         therapeutic services and day to day care and assistance in the comfort 
                         of our customized living/ assisted living. We are here to provide you 
                         with all the support you need towards living a better life.</h6>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
