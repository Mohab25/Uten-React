import styled from 'styled-components'

export const Portfolio = styled.div`

`

export const  Portfolio_container = styled.div`
    padding:40px 0px; 
`

export const Portfolio_title = styled.h2`
    color:#3f3f3f;
    margin:20px 0px; 
    padding-left:20px; 
`
export const  Portfolio_nav = styled.ul`
    width:70%;
    list-style:none;
    margin:auto;
    text-align:center; 
`

export const  Nav_item = styled.li`
    display:inline-block;
    width:100px; 
    padding:10px 0px;
    margin-right:20px;  
    background-color:orangered; 
    color:white; 
`

export const  Nav_anchor = styled.a``
export const  Portfolio_item = styled.div`
    width:${props=>props.width}px; 
    width:${props=>props.height}px;
    float:left; 
    background:url() no-repeat; 
    background-size:100% 100%;

`