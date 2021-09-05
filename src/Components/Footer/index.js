import React, { Component, Fragment } from 'react'
import './styles/styles.css'
import logo from './images/Binga.png'

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            url:logo
        }
    }
    render() {
        return (
            <Fragment>
                <div className='footer'>
                    <div id='footer-container'>
                        <div id='footer-upper'>
                            <div id='first-col'>
                                <div id='footer-logo'></div>
                                <p style={{color:'white'}}>Minim irure deserunt velit ullamco duis aute sit non cillum.</p>
                            </div>
                            <div id='sec-col'>
                                <h5>Contacts info</h5>
                                <span><i className='icon-map-marker'></i> Baledia st.-Khartoum-Sudan</span>
                                <span><i className='icon-twitter-sign icon-large'></i><i className='icon-facebook-sign icon-large'></i>
                                <i className='icon-pinterest-sign icon-large'></i><i className='icon-google-plus-sign icon-large'></i>
                                <i className='icon-linkedin-sign icon-large'></i>
                                </span>
                                <span><i className='icon-envelope'></i> Sadiq@4Ustore - <i className='icon-mobile-phone'></i> +249121088555</span>

                            </div>
                            <div id='third-col'>
                            <h5>Product Series</h5>
                            <span><span></span>Huawei - P-series</span>
                            <span><span></span>Huawei - Max-series</span>
                            <span><span></span>Huawei - D-series</span>
                            <span><span></span>Huawei - Pro-series</span>
                            </div>
                            <div id='fourth-col'>
                                <h4>About 4U</h4>
                                <p>Magna sint reprehenderit dolo Laboris veniam elit consectetur nisi esse est veniam id amet amet nulla pariatur.
                                Laboris veniam elit consectetur nisi esse est veniam id amet amet nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div id='footer-lower'></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
