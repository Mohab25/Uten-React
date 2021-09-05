import React, { Component, Fragment } from 'react'
import './styles/styles.css'

export default class index extends Component {
    constructor(props){
    super(props);
    this.state = {
        // defaultActiveColor:'red',
        // colorActive:'color',
        //colorHolder:<div></div>,
        sizeActive:7,
        gallery_items:[],
        selectImage:''
    }
    this.makeActive = this.makeActive.bind(this)
//    this.colors = this.colors.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.images = this.images.bind(this)
    this.sizes = this.sizes.bind(this)
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/store/Pan_Gallery/').then(res=>res.json()).then(
            (data)=>{this.setState({gallery_items:data,selectImage:data[0].image})}
        )
        
    }

    makeActive(attr,e){
        // let c = e.target.getAttribute('color')  // this is another way of accessing the attributes of the same element 
        // this.colors(c)
        // //this.setState({defaultActiveColor:''}) 
        this.setState({sizeActive:attr})
    }

    handleChangeImage(url){
        this.setState({selectImage:url})
    }

    // Here to handle images in the slider 

    images(){
        // change the image slider 
        let image_data = this.state.gallery_items
        let images=[] 
        image_data.map(item=>{
            images.push(item.image)
        })
        // make div contains images thumbnails 
        let bing = images.map((image,index)=>{return <div onClick={()=>this.handleChangeImage(image)} key={index} style={{width:'25px',height:'25px',background:`url(${image})`,backgroundSize:'cover',backgroundPosition:'center',margin:'0px 10px',cursor:'pointer',transition:'0.25s'}}></div>})
        //
        return <div className='colors'>{bing}</div> 
    }

    // Here to handle the sizes 

    sizes(size){
      /* 
        the main functionality here is to loop over a set of sizes (an array),
        returns a jsx element each time and stores all the element in a var which will be 
        stored in another jsx container, and return this container. if condition is used
        with the looped elements to change the active class   
    */  
        // the sizes array 
        let sizes = [7,8,9,10,11]
        let classActive = ''
        let sizes_elems = sizes.map((elem,index)=>{
            if(elem==size){classActive='size active';
        }
            else{classActive='size';
        }
        return <span key={index} className={classActive} onClick={(e)=>this.makeActive(elem,e)}>{elem}</span>
            })
        
        return <div className='sizes'>{sizes_elems}</div>
        
    }


    // colors(addevalue){
    //   /* 
    //     the main functionality here is to loop over a set of colors (an array),
    //     returns a jsx element each time and stores all the element in a var which will be 
    //     stored in another jsx container, and return this container.  
    // */
      
    //     // changing the class active, for different colors. 
    //     let colors = {'green':'#29b846','red':'#f84848','orange':'#ff5521','blue':'#2175f5','black':'#000'}
    //     let cclass=''
    //     let n = Object.keys(colors)  // getting the keys as an array ['green','red'..]
    //     let bing = n.map((i,index)=>{
    //          if(i==addevalue){       // i is the key 'green','red' .. etc. 
    //              if (i!=this.state.defaultActiveColor){this.setState({defaultActiveColor:i})} // default color is red, if i is not red set the state 
    //              cclass = 'color active'      // cc is defined above, set it to color active to change the class  
    //          }
    //          else{cclass='color'}    // if the key is red, use the default active class 
    //   return <span key={index} className={cclass} primary={colors[i]} color={i} onClick={this.makeActive}></span> // this is inside the loop, each time it is going to be returned, the matching color will have a class active.  
    //     })
    // return <div className='colors'>{bing}</div>} // this what is going to be returned from this function
    
    
    render() {
        if(this.state.gallery_items.length==0){return <div></div>}
        return (
            <div className='Popup-Card'>
            <div className='Popup-Card-container'>
                <div className='Popup-Card-subcontainer'>
                    <div className='ProductBackground' style={{background:`url(${this.state.selectImage})`}}>
                        <div className='gradients'>
                            <div className="gradient" color='blue'></div>
                            <div className="gradient first second" color='red'></div>
                            <div className="gradient" color='green'></div>
                            <div className="gradient" color='orange'></div>
                            <div className="gradient" color='black'></div>
                        </div>
                            
                        <a href='#' className='share'><i className='fafaicon'></i></a>
                        <img className='productImage' src={''} color='blue'/>
                        <img className="productImage show" src={''} color='red'/>
                        <img className='productImage' src={''} color='green'/>
                        <img className='productImage' src={''} color='orange'/>
                        <img className='productImage' src={''} color='black'/>
                    </div>

                    <div className='info'>
                        <div className='productName'>
                            <div>
                                <h1 className='big'>Nike Zoom KD12</h1>
                                <span>NEW</span>
                            </div>
                            <h4 className='small'>Men's running shoes</h4>
                        </div>
                        <div className='description'>
                            <h3 className='title'>PRODUCT INFO</h3>
                            <p className='text'>amco ex cupidatat irure excepteur elit cillum. Irure irure laborum consectetur sint culpa aliqua nostrud.
                            </p>
                        </div>
                        <div className='colors-container'>
                            <h3 className='title'>COLORS</h3>
                                {this.images()}
                        </div>
                        <div className='sizes-container'>
                            <h3 className='title'>SIZE</h3>
                            {this.sizes(this.state.sizeActive)}
                        </div>
                        <div className='cart-price'>
                            <a className='add-to-cart' href='#'><i className='fafaicon'></i>Add to cart</a>
                            <h1 className='price'>$180.90</h1>
                        </div>
                    </div>
                </div>
        </div>

            </div>
        )
    }
}

