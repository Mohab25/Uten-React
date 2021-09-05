import React,{useState,useEffect,useRef, Fragment} from 'react'
import {Slider,SliderContent,Slide,LeftArrow,RightArrow,DotContainer,Dot} from './styles/styles'

export default function Index(props) {
    const [products,setProducts] =useState([])
    let interv = useRef()
    useEffect(()=>{
        const fetcher=async()=>{
        await fetch('http://127.0.0.1:8000/store/Latest/').then(res=>res.json()).then(
            (data)=>{setProducts(data)}
        )
        }
        fetcher()
    },[])
    let [translate,setTranslate] = useState(window.innerWidth) 
    let setDotNumber = useRef(1)
    if(products.length!=0){
    let w_width = window.innerWidth;
    let widther = w_width*products.length
    let Slideitems = products.map((item,index)=>{return <Slide key={index} url={item.image}></Slide>})    
    
    const slide=(name)=>{

        if(name=='left'){
            let new_trans_value = translate - window.innerWidth
            if(new_trans_value>0){
                setDotNumber.current = new_trans_value/window.innerWidth
                setTranslate(new_trans_value)
            }
            else if(new_trans_value<=0){
                setDotNumber.current = products.length
                setTranslate(window.innerWidth*(products.length-1))
            }
        }
        //evaluate right 
        else{
            if((translate + window.innerWidth)<window.innerWidth*products.length){
                setDotNumber.current = (translate + window.innerWidth)/window.innerWidth
                setTranslate((translate + window.innerWidth)) // this cause a re-render
               }
            else if((translate + window.innerWidth)>=window.innerWidth*products.length){
                setDotNumber.current = 1
                setTranslate(window.innerWidth)

            }
        }
        }
    // setting the slider dots sliding. 
        let dots = products.map((item,index)=>{
        let dotActive='rgb(255,255,255)';
        let new_index=index+1; 
        if(setDotNumber.current==new_index){dotActive='rgb(4, 67, 104)'}
        return (<Dot dotcolor={dotActive} key={index}></Dot>)
    })
        // setting interval for slide
        setTimeout(()=>{slide('right')},5000) 

        return (
        <Slider style={{position:'relative'}}> 

        <LeftArrow className="fa fa-arrow-circle-left" onClick={()=>slide('left')}></LeftArrow>
        <RightArrow name='right' className="fa fa-arrow-circle-right" onClick={()=>slide('right')}> </RightArrow>
            <SliderContent width={widther} translate={translate}>
                {Slideitems}
            </SliderContent>
            <DotContainer>{dots}</DotContainer>
        </Slider>
    )}
    else{
        return(<Fragment></Fragment>)
    }
}
