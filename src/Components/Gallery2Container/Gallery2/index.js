import React, { Component,Fragment } from 'react'
import './styles/styles.css'
import '../../Product_Cards_Holder/Card-product 2/styles/font-awesome.css'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div className='gallery-2'>
                    <div id='gallery-2-container'>
                        <div id='mobile-view-bg'>
                            <p>And we got much more collections </p>
                            <button className='primary'>Browse for more </button>
                        </div>
                        <div className='gallery-2-col'>
                            <div className='gallery-col-inner-div'>
                                <div id='galler-col-inner-img1'></div>
                                
                                <p className='galler-col-inner-text'>Descriptive text goes here</p>
                            </div>
                            <div className='gallery-col-inner-div'>
                                <div id='galler-col-inner-img2'></div>
                                
                                <p className='galler-col-inner-text'>Descriptive text goes here</p>
                            </div>
                        </div>
                        <div className='gallery-2-col'>
                            <div className='gallery-col-inner-div'>
                                    <div id='galler-col-inner-img3'></div>
                                    
                                    <p className='galler-col-inner-text'>Descriptive text goes here</p>
                                </div>
                                <div className='gallery-col-inner-div'>
                                    <div id='galler-col-inner-img4'></div>
                                    
                                    <p className='galler-col-inner-text'><i className='icon-phone'></i><br/>Descriptive text goes here</p>
                                </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
