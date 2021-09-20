import React, { Component,useEffect } from 'react'
import Loader from '../Loader/index'
import Nav from '../Nav'
import Panel from '../Panel'
import Latest from '../Latest'
import Main from '../Main'
import Gallery from '../Gallery'
import Cards from '../Product_Cards_Holder'
import Values from '../Values'
import Contact from '../Contact'
import PopupCard from '../PopupCard'
import Footer from '../Footer'
export default class index extends Component {

componentWillUnmount(){
    return 
}
    render() {
        return (
                <div style={{width:'100%'}}>
                    <Nav/>
                    <Panel/>
                    <Latest/>
                    <Cards filter='latest'/>
                    <Main/>
                    <Cards filter='Best'/>
                    <Gallery id='Pan'/>
                    <Cards filter='Pan'/>
                    <Gallery id='Knife'/>
                    <Cards  filter='Knife'/>
                    {/*<Featuring/>*/}  
                    <Values/>
                    <Gallery id='Spoon'/>
                    <Cards filter='Spoon'/>
                    <Contact/>
                    <Footer/>
                </div>
                
        )
    }
}

