import React, { Component,Fragment } from 'react'
import './styles/styles.css'
import Card from '../PopupCard/index'


export default class index extends Component {
    /**
     * the class performs an action of fetch on components did mount
     * It grabs the data from the server, changes the state then renders it. 
     */
    constructor(props){
        super(props);
        this.state={
            gallery_items:[],
            GalleryMainItem:{},
            gallery_items_sub:[],
            modalDisplay:'none',
            modalImageSource:''
        };
        this.subDivider = this.subDivider.bind(this)
        this.handleModal = this.handleModal.bind(this)
        this.iconfinder = this.iconfinder.bind(this)
        this.CloseDrop=this.CloseDrop.bind(this)
    }
    async componentDidMount(){
        switch(this.props.id){
            case 'Knife':{
            await fetch('http://127.0.0.1:8000/store/Knife_Gallery/').then(res=>res.json()).then(
            (data)=>{this.setState({gallery_items:data})})
            };break; 
            case 'Spoon':{           
            await fetch('http://127.0.0.1:8000/store/Spoon_Gallery/').then(res=>res.json()).then(
            (data)=>{this.setState({gallery_items:data})})};break; 
            case 'Pan':{           
                await fetch('http://127.0.0.1:8000/store/Pan_Gallery/').then(res=>res.json()).then(
                (data)=>{this.setState({gallery_items:data})})};break; 
            default:{
                await fetch('http://127.0.0.1:8000/store/Collection_Gallery/').then(res=>res.json()).then(
                    (data)=>{this.setState({gallery_items:data})}
                )
            }    
            }
            this.subDivider()
        }

     subDivider=()=>{
        /*
            consider that you should subdivide the data in the server for performance?
            
            because the gallery has a main image and other images, these others are
            been put in a sub array. 
        */
       
        //this is the main image 
        this.setState({GalleryMainItem:this.state.gallery_items[0]})
        // other images  
        let division = []
        
        for(let i=1;i<this.state.gallery_items.length;i++){
            division.push(this.state.gallery_items[i])
        }
        
        this.setState({gallery_items_sub:division})

    }

    handleModal(imageSource){
        this.setState({modalDisplay:'block',modalImageSource:<Card/>})
    }

    iconfinder(){
        switch(this.props.id){
            case 'Samsung':return <i className='fa fa-android'></i>
            case 'Apple':return <i className='fa fa-apple'></i>
            case 'Huawei':return <i className='fa fa-phone'></i>
            default: return this.props.id 
        }
    }

    CloseDrop(e){
        if(e.target.classList.contains('backdrop')){
        this.setState({modalDisplay:'none'})
        }
    }
    render() { 
        //Checking if the state is empty, because state elements are used after fetching
        // first the state will be empty, if used this how, it will cause error. 
        
        if(this.state.gallery_items_sub.length===0){
            return(
                <Fragment>

                </Fragment>
            )
        }

        else {
            // construct gallery items other than the first main image 
            let sub_gallery_items = this.state.gallery_items_sub.map((item,index)=>{
                return(
                <div key={index} style={{backgroundImage:`url(${item.image})`}} className='Gallery-grid-sub-img' onClick={()=>this.handleModal(item.image)}></div>
                )
            });
            return (
                    <div id={this.props.id} style={this.props.id=='Apple'?{marginTop:'-85px'}:{}}>
                        <div className='Gallery-container'>
                            <div className='Gallery-title-container'>
                                <h1 className='Gallery-title'>{this.iconfinder()} Brand Products</h1>
                                <h2 className='Gallery-subtitle'>Check out the our colloection of {this.props.id} Best peices</h2>
                            </div>
                            <div id='Gallery-grid'>
                                <div id='Gallery-grid-container-1'>
                                    <div style={{backgroundImage:`url(${this.state.GalleryMainItem.image})`}} id='Gallery-grid-main-img' onClick={()=>this.handleModal(this.state.GalleryMainItem.image)}></div>
                                </div>
                                <div id='Gallery-grid-container-2'>
                                        {sub_gallery_items}
                                </div>
                            </div>
                        </div>
                        <div className='backdrop' style={{display:this.state.modalDisplay}} onClick={this.CloseDrop}>
                            <div className='modal-img' style={{backgroundColor:'white'}}>
                                {this.state.modalImageSource}
                            </div>
                        </div>
                    </div>
                
            )
        }
    }
}

