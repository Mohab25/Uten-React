import styled,{keyframes} from 'styled-components/macro'

export const Slider = styled.div`
    width:100%;
    height:100vh; 
    overflow-x: hidden;
`

export const SliderContent = styled.div`
    width:${props=>props.width}px; 
    height:100%; 
    transform:translateX(-${props=>props.translate}px); 
    transition:ease-out 0.75s; 
    display: flex;
    background-color:brown;     
`

export const Slide = styled.div`
    width:100%; 
    height:100%; 
    background:url(${props=>props.url}); 
    background-size:cover; 
    background-position:center; 
`

export const LeftArrow = styled.i`
    position:absolute;
    top:50%;
    left:25px;
    transform:translateY(-50);
    color:white;
    z-index:1;
    cursor:pointer;
    &:hover{
        transform:scale(1.3);
    }

`

export const RightArrow = styled.i`
    position:absolute;
    top:50%;
    right:25px;
    transform:translateY(-50);
    color:white;
    z-index:1;
    cursor:pointer;
    &:hover{
        transform:scale(1.3);
    }
`

export const DotContainer = styled.div`
    position:absolute;
    width:100%; 
    height:40px;
    bottom:0px;  
    display:flex; 
    justify-content: center;
    align-items:center; 
    background-color:rgba(0,0,0,0.3);

`

export const Dot = styled.div`
    width:10px; 
    height:10px; 
    border-radius: 50%;
    background-color:${props=>props.dotcolor};
    margin-left:5px; 

`