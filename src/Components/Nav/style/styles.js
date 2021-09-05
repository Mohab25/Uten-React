import styled from 'styled-components/macro';

export const Nav = styled.div`
    width:100%; 
    position:${props=>props.position};// setting based on user scroll down the page or not? 
    top:${props=>props.show}px;  // same as above 
    left:0px; 
    background-color:rgba(0,0,0,1) ;
    transition:0.8s;
    z-index:10;


    @media(max-width:660px){ 
        top:0px;
        height:80px     
    }

    @media(max-width:540px){ 
        position:fixed; 
        width:100vw; 
        top:0px;
        height:80px     
    }
`
/* Navbar container */
export const Nav_container = styled.div`
    width:100%;
    position: relative;
    
    @media(max-width:660px){
        display:flex; 
        justify-content:space-between; 
        align-items:center;    
        padding:0 10px; 
    }


    @media(max-width:540px){
        display:flex; 
        justify-content:space-between; 
        align-items:center;    
        padding:0 10px; 
    }
`

/* Navbar Title */
export const Nav_title = styled.h2`
    font-size:25px; 
    font-weight: bold;
    color:white;
    padding:30px 20px; 


    @media(max-width:767px){
        visibility:hidden; 
    }

    @media(max-width:660px){
        visibility:hidden; 
    }

    @media(max-width:540px){
        visibility:hidden; 
    }

`

/* Navbar List */
export const Nav_links_list = styled.ul`
    position: absolute;
    top:3px; 
    right:0px;  
    padding:25px 20px; 
    transition:1.3s;

    
    @media(max-width:767px){
        width:45vw; 
        height:100vh; 
        position:fixed; 
        top:0px; 
        right:${props=>props.right}px; 
        background-color:black; 
        padding-top:100px;   
        z-index:1; 
    }


    @media(max-width:660px){
        width:45vw; 
        height:100vh; 
        position:fixed; 
        top:0px; 
        right:${props=>props.right}px; 
        background-color:black; 
        padding-top:100px;   
        z-index:1; 
    }

    @media(max-width:540px){
        width:45vw; 
        height:100vh; 
        position:fixed; 
        top:0px; 
        right:${props=>props.right}px; 
        background-color:black; 
        padding-top:100px;   
        z-index:1; 
    }
    
/*
    @media(max-width:889px){
        display: none;
        position: relative;
        transform: translate(15%,-10%);
        background-color: yellowgreen;
    }

    @media(min-width:890px){
        display:block; 
        transform: translate(20%,0px);
    }
    @media(max-width:540px){
        display:block; 
        width:100%; 
         
    }
*/
`
/* Navbar List items */
export const Nav_links_items=styled.li`
    display:inline;
    width:75px;
    height: 30px; 
    padding:7.5px 15px; 
    color:white;


    @media(max-width:767px){
        width:100%;
        display: block;
        margin-top:5px;
        text-align: center;
        cursor:pointer;

        &hover{
            background-color:#3f3f3f
        }
    }


    @media(max-width:660px){
        width:100%;
        display: block;
        margin-top:5px;
        text-align: center;
        cursor:pointer;

        &hover{
            background-color:#3f3f3f
        }
    }

    @media(max-width:540px){
        width:100%;
        display: block;
        margin-top:5px;
        text-align: center;
        cursor:pointer;

        &hover{
            background-color:#3f3f3f
        }
    }
`



/* Navbar Checkbox icon container */
export const Nav_icon_container = styled.div`


@media(max-width:767px){
    width:30px; 
    height:30px; 
    background: url(${props=>props.sr});
    background-position:center; 
    background-size:cover; 
    z-index:2;
    position:fixed;
    top:30px; 
    right:25px; 
}



@media(max-width:660px){
    width:30px; 
    height:30px; 
    background: url(${props=>props.sr});
    background-position:center; 
    background-size:cover; 
    z-index:2;
    position:fixed;
    top:30px; 
    right:25px; 
}


@media(max-width:540px){
    width:30px; 
    height:30px; 
    background: url(${props=>props.sr});
    background-position:center; 
    background-size:cover; 
    z-index:2;
    position:fixed;
    top:22px; 
    right:55px; 
}
`
/* Navbar Checkbox */
export const Nav_icon_checkbox = styled.input`
    &:checked,&:not(:checked){
        display:none; 
    }
 `
/* Navbar Checkbox label */
export const Label=styled.label`
    display: none;
    width:40px; 
    height:30px; 
    background: url('./images/output-onlinepngtools.png') no-repeat;
    cursor:pointer; 

    @media(max-width:767px){
        display: block;
    }

    @media(max-width:660px){
        display: block;
    }

    @media(max-width:540px){
        display: block;
    }

`
