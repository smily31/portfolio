import React from 'react'
import './contact.scss'
import Footer from '../footer/Footer'
import { connect } from "../../connect"

export default function Contact() {
    return (
        <>
        <div className="contact" id="contact">
          <h1 className="title">Connect with Me</h1>
            <div className="wrapper">
              <div className="container">
                <div className="left">
                  <form> 
                    <input type="text" placeholder="Your Email"/>
                    <textarea placeholder="Write message for me...."></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              <div className="right">
                  <h2>Know me Closely</h2>
                  <div className="box">
                    {
                      connect.map( c => (
                        <div className="item">
                          <a href={c.link}>
                          <img src={c.logo} alt="logo" />
                          </a>
                          <h3>{c.title}</h3>
                        </div>
                      ))
                    }
                  </div>
              </div>

              </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}
