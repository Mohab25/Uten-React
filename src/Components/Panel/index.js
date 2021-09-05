import React, { Component, Fragment } from 'react'
import './styles/styles.css'
import '../Product_Cards_Holder/Card-product 2/styles/font-awesome.css'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div className='Panel'>
                    <div className="panel-container">
                        <p className='panel-backdrop'></p>
                    <div className="bg1">
                        <h2>16 <span>| 24</span></h2>
                        <p>Goals Completed</p>
                    </div>
                    <div className="bg1">
                        <h2><i className="icon-desktop"></i></h2>
                        <p>Respiration</p>
                    </div>
                    <div className="bg2">
                        <h2><i className="icon-laptop"></i></h2>
                        <p>Miles</p>
                    </div>
                    <div className="bg1">
                        <h2>36 &deg;</h2>
                        <p>Temperature</p>
                    </div>
                    <div className="bg1">
                        <h2><i className="icon-tablet"></i></h2>
                        <p>Sleep Keep</p>
                    </div>
                    <div className="bg2">
                        <h2>98 <span>bpm</span></h2>
                        <p>Heart Rate</p>
                    </div>
                    <div className="bg1">
                        <h2>170 <span>lbs</span></h2>
                        <p>Weight</p>
                    </div>
                    <div className="bg1">
                        <h2>28 <span>%</span></h2>
                        <p>Fat Percentage</p>
                    </div>
                    <div className="bg2">
                        <h2>118 <span>mgdl</span></h2>
                        <p>Blood Glucose</p>
                    </div>
                    <div className="bg2">
                        <h2>680 <span>kcal</span></h2>
                        <p>AVG Consumption</p>
                    </div>
                    <div className="bg2">
                        <h2><i className="icon-mobile-phone"></i></h2>
                        <p>Workouts</p>
                    </div>
                    <div className="bg2">
                        <h2>85 <span>%</span></h2>
                        <p>Body Hydration</p>
                    </div>
                    </div>
                    <div className='mobile-panel'>
                        <div className='mobile-panel-bg'></div> 
                    </div>
                </div>
            </Fragment>
        )
    }
}
