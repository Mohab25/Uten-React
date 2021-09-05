import React, { Component, Fragment } from 'react'
import './styles/styles.css'

export default class index extends Component {

    constructor(props){
        super(props);
        this.state={
            bannerItem:[]
        }
    }
    

    async componentDidMount(){
        await fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/components/secondbanner/').then(res=>res.json()).then(data=>{
            this.setState({bannerItem:data})
        })
    }

    render() {
        if(this.state.bannerItem.length===0){
            return(<Fragment></Fragment>)
        }
        else{
            const banner = this.state.bannerItem[0]
            return (
                <Fragment>
                    <div className='banner' style={{backgroundImage:`url('${banner.image}')`}}>
                        <div className='background-color'>
                            <div className='banner-items'>
                            <h1 className='banner-title'>{banner.call_to_action_head}</h1>
                            <h3 className='banner-subtitle'>Let us Help, {banner.call_to_action_message}</h3>
                            <div className='btns'>
                                <button className='btn1'>{banner.btn_message}</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
                )
        }
    }
}
