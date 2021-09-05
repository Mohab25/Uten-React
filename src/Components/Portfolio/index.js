import React,{Fragment,useState,useEffect} from 'react'
import axios from 'axios'; 
import {Portfolio,Portfolio_container,Portfolio_title,Portfolio_nav,Nav_item,Nav_anchor,Portfolio_item_div,Portfolio_item} from './style/styles'

const Index=()=>{
    const [images,setImages] = useState([]);
    useEffect(() => {
        axios.get('data.json').then(res=>{setImages(res.data.portfolio)},console.log(images)).catch(err=>console.log(err)); 
    }, [])

    return (
        <Fragment>
            <Portfolio>
                <Portfolio_container>
                    <Portfolio_title>OUR PROTFOLIO</Portfolio_title>
                    <Portfolio_nav>
                        <Nav_item><Nav_anchor>SAMSUNG</Nav_anchor></Nav_item>
                        <Nav_item><Nav_anchor>APPLE</Nav_anchor></Nav_item>
                        <Nav_item><Nav_anchor>HUWAIUAI</Nav_anchor></Nav_item>
                        <Nav_item><Nav_anchor>XIAOMI</Nav_anchor></Nav_item>
                        <Nav_item><Nav_anchor>TABLETS</Nav_anchor></Nav_item>
                    </Portfolio_nav>
                        <Portfolio_item></Portfolio_item>
                </Portfolio_container>
            </Portfolio>
        </Fragment>
    )
}

export default Index; 