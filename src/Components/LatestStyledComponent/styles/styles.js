import styled from 'styled-components'

export const Latestwrapper = styled.div`
    height:180vh;
    background-color:black; 
    display:flex; 
    flex-direction:column;
    justify-content: center; 
    align-items: center;


    @media(max-width:660px){
        display:block; 
        height:251vh;
        overflow-y: hidden;
    }

    @media(max-width:540px){
        display:block; 
        height:251vh;
        overflow-y: hidden;
    }

    @media(max-width:420px){
        height:300vh; 
    }

`
export const Latestcontainer = styled.div`
    width:80%; /* make this equals to the height or the opposite */ 
    height:100%; /* if i make this equals to width, the images will be taller */ 
    margin:auto; 
    display:grid; 
    grid-template-columns:repeat(3,1fr);

    @media(max-width:660px){
        width:100%; 
        height:50%; 
        grid-template-columns:repeat(2,1fr);
    }

    @media(max-width:540px){
        width:100%; 
        height:50%; 
        grid-template-columns:repeat(2,1fr);
    }

    @media(max-width:420px){
        height:100%;
        display: flex;
        flex-direction: column;
        align-items:center; 
    }

    `

export const ImageTextContainer = styled.div`
    width:100%; 
    @media(max-width:420px){
        display:flex; 
        flex-direction:column;
    }

`

export const Latestbox = styled.div`
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width:420px){
        margin-top:10px; 
        width:100%; 
        height:250px;
    } 

`

export const LatestboxTitle = styled.h4`
    margin: 20px;
    color:red; 

    @media(max-width:420px){
        width:100%; 
        height:20px; 
        text-align:center;      
     }
`

export const LatestboxPhoneName = styled.p`
    color:red;

    @media(max-width:420px){

    }
`

export const LatestboxParagraph = styled.p`
   width:80%; 
   margin-top:10px;
   align-self: center;
   color:white; 

   @media(max-width:420px){
      
}
`

export const LatestboxImageContainer = styled.div`
    @media(max-width:420px){
        width:80%;
        height:100%;
        position: relative; 
        display: flex;
        flex-direction: column;
        text-align: center; 
        justify-content: center;
    
    }
`


export const LatestboxImage = styled.div`
    width:100%; 
    height:100%; 
    background:url("${props=>props.url}");
    background-size:cover;
    background-position:center; 

`

export const LatestboxImgSignsContainer = styled.div`
    display:none; 

    @media(max-width:420px){
        width:100%; 
        position: absolute;
        top:5px; 
        display: flex;
        justify-content: space-between;
        padding:0 10px;
    }
`

export const LatestboxIconContainer = styled.span`
    display:none; 
`
export const LatestboxRightArrow = styled.i`
    display:none;
    
    @media(max-width:420px){
        display:none; 
        width:30px; 
        height:30px;
        position: absolute;
        botom:35%;
        right:0px; 
        color: white;

    }
`

export const LatestboxCartIcon = styled.i`
    display:none; 

    @media(max-width:420px){
        color:white; 
    }
`

export const LatestboxInfoIcon = styled.i`
    display:none; 

    @media(max-width:420px){
        color:white; 
    }
`

export const LatestboxImageText = styled.p`
    @media(max-width:420px){
        position: absolute;
        text-align:center; 
        color:white; 
        top:0px; 
        left:0px; 
        transform: translateY(150%);

    }
`