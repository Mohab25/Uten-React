import React,{useEffect} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {HashLink,NavHashLink} from 'react-router-hash-link'
import {Nav,Nav_container,Nav_title,Nav_links_list,Nav_links_items,Nav_icon_container,Nav_icon_checkbox,Label}
from './style/styles'
//import * as Scroll from 'react-scroll';
//import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {useState,useRef} from 'react'
import logo from './images/menu-white.png'
import {useSelector} from 'react-redux'


export default function Index() {
    /*first hide the nav, until the user scrolls down a bit to keep the look of the
        panel image 
        refer to scroll function below 
    */
    let [position,setPosition] = useState('absolute')
    let [Navposition,setNavposition] = useState('-100') 

    // setting active state 
    let top = useRef()
    let latest = useRef()
    let offers = useRef()
    let knife = useRef()
    let pan = useRef()
    let spoon = useRef()
    let contact = useRef()
        
    // grab the cart number of items from redux 
    let icon_number = useSelector(store=>store.CartIconReducer)['icon_total'] 
    
    // grab the sections positions from redux 
    //let linksPositions = useSelector(store=>store.ActiveLinkReducer)['linksPositions']

    /**
     * set the right position of the navbar on mobile screen and change it 
     * when the user click the humberger icon 
     * refer also to mobileNavPositionChange method 
     */

    let [mobileNavPosition,setmobileNavPosition] = useState('-340')
    let place = window.location.href
    
    useEffect(() => {        
    // executed when component mounted
    if(place.includes('top')){window.scrollTo({top:0,behavior: "smooth"})} // also tried ref.scrollIntoView but not worked
    if(place.includes('latest')){window.scrollTo({top:1200,behavior: "smooth"})}
    if(place.includes('Offer')){window.scrollTo({top:3016,behavior: "smooth"})}
    if(place.includes('Pan')){window.scrollTo({top:5000,behavior: "smooth"})}
    if(place.includes('Knife')){window.scrollTo({top:7328,behavior: "smooth"})}
    if(place.includes('Spoon')){window.scrollTo({top:9680,behavior: "smooth"})}
    if(place.includes('contact')){window.scrollTo({top:14180,behavior: "smooth"})}
    
    
    return () => {
    // // executed when unmount
    //     top.current = null;
    //     latest.current = null;
    //     offers.current = null;
    //     knife.current = null;
    //     pan.current = null;
    //     spoon.current = null;
    //     contact.current = null;
      }
    }, [])    
    
    let toggle=()=>{
        /**
         * the main functionality here is to toggle the menu on and off, based on a 
         * checkbox behind the humburger icon,
         */
        const list = document.getElementById('nav_list');
        let checkbox = document.getElementById('checkbox');
        if (checkbox.checked==false){
            setmobileNavPosition('0');
            checkbox.checked=true;
        }
        
        else if(checkbox.checked==true && window.innerWidth<=540){
            checkbox.checked=false;
            setmobileNavPosition('-340');
        }

        else if(checkbox.checked==true && window.innerWidth>540){
            checkbox.checked=false;
            setmobileNavPosition('-340');
        }
    }
    
    let scroll=()=>{
        /**
         * this funciton is about changing the hidden navbar after the user scrolls 
         * down and reach to more than 100px below the top of the page. 
         */
        if(window.scrollY>100){  // there are two properties: scrollY and PageYOffset, this later is better for old browsers. 
            setNavposition('0'); 
            setPosition('fixed')
    
            
        }
        else{
            setNavposition('-100')
            
        }
    

        // console.log('latest',link.latest)
        if(window.scrollY>=1200 && window.scrollY<=1600){
            if(latest.current==null){} // for some reason this returns null 
            else{latest.current.style.color='#007bff'}
        }
        // what will coming next should be changed with more dynamic architecture (using the redux store, in case new sections added), 
        else if(window.scrollY>=3016 && window.scrollY<=4975){
            if(latest.current==null){} // for some reason this returns null 
            else{latest.current.style.color='white'
            offers.current.style.color = '#007bff' }   
        }

        else if(window.scrollY>=5000 && window.scrollY<=7328){
            if(offers.current==null){} // for some reason this returns null 
            else{
            offers.current.style.color = 'white'    
            pan.current.style.color = '#007bff'    }

        }

        else if(window.scrollY>=7328 && window.scrollY<=9680){
            if(pan.current==null){} // for some reason this returns null 
            else{
            pan.current.style.color='white'
            knife.current.style.color = '#007bff'
        }
    }

        else if(window.scrollY>=9680 && window.scrollY<=11120){
            if(knife.current==null){} // for some reason this returns null 
            else{
            knife.current.style.color='white'}
        }

        else if(window.scrollY>=11120 && window.scrollY<=13470){
            if(spoon.current==null){} // for some reason this returns null 
            else{
            spoon.current.style.color='#007bff'
            } 
        }
        else if(window.scrollY>=14180 && window.scrollY<=14450){
            if(spoon.current==null){} // for some reason this returns null 
            else{spoon.current.style.color='white'
            contact.current.style.color='#007bff'
        }
    }
    
    
    }
    /*
        there must be a better way to call scroll method to change navbar visibility,
         without using scroll event, as it is costly, it will just keep calling 
         scroll  
    */
    window.addEventListener('scroll',scroll)


    return (
            <Nav show={Navposition} position={position}>
                <Nav_container>
                    <Nav_title> 4U STORE</Nav_title>
                    <Nav_links_list right={mobileNavPosition} id='nav_list'>
                        <Nav_links_items><NavHashLink smooth to='/#top'  style={{color:'white'}} activeStyle={{color:'#007bff'}} activeClassName='active'>Home</NavHashLink></Nav_links_items>
                        <Nav_links_items><NavHashLink smooth to='/#latest' style={{color:'white'}} activeStyle={{color:'#007bff'}}><span ref={latest}>Latest</span></NavHashLink></Nav_links_items>
                        <Nav_links_items><NavHashLink smooth to='/#Offer' style={{color:'white'}} activeStyle={{color:'#007bff'}}><span ref={offers}>Offers</span></NavHashLink></Nav_links_items>
                        <Nav_links_items><NavHashLink smooth to='/#Pan' style={{color:'white'}} activeStyle={{color:'#007bff'}}><span ref={pan}>Pan</span></NavHashLink></Nav_links_items>
                        <Nav_links_items><NavHashLink smooth to='/#Knife' style={{color:'white'}} activeStyle={{color:'#007bff'}}><span ref={knife}><i className='fa fa-cutlery'  style={{marginRight:'4px'}}></i></span></NavHashLink></Nav_links_items>
                        <Nav_links_items><NavHashLink smooth to='/#Spoon' style={{color:'white'}} activeStyle={{color:'#007bff'}}><span ref={spoon}><i className='fa fa-spoon'  style={{marginRight:'4px'}}></i></span></NavHashLink></Nav_links_items>
                        <Nav_links_items><NavHashLink smooth to='/#contact' style={{color:'white'}} activeStyle={{color:'#007bff'}} ><span ref={contact}>Contact</span></NavHashLink></Nav_links_items>
                        <Nav_links_items><Link  to='/cart' style={{color:'white'}} activeStyle={{color:'#007bff'}} ><i className='fas fa-shopping-cart'></i><span className='icon_number'>{icon_number}</span></Link></Nav_links_items>
                    </Nav_links_list>

                </Nav_container>
                
                <Nav_icon_container sr={logo}>
                        <Label onClick={toggle}></Label>
                        <Nav_icon_checkbox id='checkbox'></Nav_icon_checkbox>    
                </Nav_icon_container>

            </Nav>           
    )
}



// what do want to do, and how we can do it
/*
    one i should know how to set the active link. it's a matter of setting the class active. 
    two i want to get all the items id, and accordingly i want to set the active link 
    
    */
