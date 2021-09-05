import React, { Component,Fragment } from 'react'
import './styles/styles.css'
import swal from 'sweetalert'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            contactItem:[],
            step:1,
            name:'',email:'',message:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.showSuccessPopup = this.showSuccessPopup.bind(); 
    }
    
    componentDidMount(){
        fetch('http://ec2-18-118-61-96.us-east-2.compute.amazonaws.com/edda/components/contactsection/').then(res=>res.json()).then(data=>{
            this.setState({contactItem:data})
        })

    }
    
    handleChange=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})        
    }
    handleClick(){
        let {step} = this.state
        if(step>=3){
            this.showSuccessPopup()
            step=1; 
            this.setState({step,name:'',email:'',message:''})
        }
        else{
        this.setState({step:step+1})
    }
    }
    handleSubmit(e){
        e.preventDefault();
        this.handleClick()
    }
    showSuccessPopup(){
        swal("Message Sent", "Click Anywhere to close", "success");
    }
    render() {
        if(this.state.contactItem.length===0){
            return(<Fragment></Fragment>)
        }
        else{
            const item = this.state.contactItem[0]
            let {step,name,email,message} = this.state
            let binga
            switch(step){
                case 1: binga = <div><input onChange={this.handleChange} name='name' value={name}   placeholder='name'/><i style={{color:'white'}}className='icon-long-arrow-right' onClick={this.handleClick}></i></div>;break; 
                case 2: binga = <div><input onChange={this.handleChange} name='email' value={email} placeholder='email'/><i style={{color:'white'}} className='icon-long-arrow-right' onClick={this.handleClick}></i></div>;break;  
                case 3: binga  = <div><textarea onChange={this.handleChange} name='message' value={message} placeholder='message'/><i className='icon-long-arrow-right message-icon' onClick={this.handleClick}></i></div>;break;                
            }
        return (
            <Fragment>
                <div id='contact' className='contact'>
                    <div id='contact-container' style={{backgroundImage:`url('${item.image}')`}}>
                        <div className='form-container'>
                            <form id='contact-form'onSubmit={this.handleSubmit}>
                                <h1>{item.title}</h1>
                                <h5>{item.call_to_action}</h5>
                                {binga}
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
        }
    }
}