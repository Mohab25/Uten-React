import React, { Component,Fragment } from 'react'
import {Latestwrapper,Latestcontainer,Latestbox,
    LatestboxTitle,LatestboxPhoneName,LatestboxParagraph,LatestboxImageContainer,LatestboxImage,LatestboxImgSignsContainer,
    LatestboxImageText, LatestboxIconContainer,LatestboxInfoIcon,LatestboxCartIcon,LatestboxRightArrow,
    LatestImagesContainer,ImageTextContainer   
}
     from './styles/styles.js'

import img1 from './images/jakob-owens-50LI_TgaB3k-unsplash.jpg'
import img2 from './images/jonathan-kemper-t6Wmvbw_MdI-unsplash.jpg'
import img3 from './images/claudio-schwarz-purzlbaum-0-DjV_Tk1cQ-unsplash.jpg'
import img4 from './images/arnold-francisca-OQ2B6W2CQ_E-unsplash.jpg'
import img5 from './images/claudio-schwarz-purzlbaum-0-DjV_Tk1cQ-unsplash.jpg'
import img6 from './images/jakob-owens-50LI_TgaB3k-unsplash.jpg'



export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            urls:[img1,img2,img3,img4,img5,img6]
        }
    }

    render() {
     let item = this.state.urls.map((item,index)=>
                    <ImageTextContainer key={index}>
                            <LatestboxImageContainer>
                                <LatestboxImage url={item}></LatestboxImage>
                                <LatestboxImgSignsContainer>
                                <LatestboxIconContainer><LatestboxInfoIcon className='icon-info'></LatestboxInfoIcon></LatestboxIconContainer>    
                                    <LatestboxIconContainer><LatestboxCartIcon className='icon-shopping-cart'></LatestboxCartIcon></LatestboxIconContainer>    
                                </LatestboxImgSignsContainer>
                                <LatestboxImageText></LatestboxImageText>
                                <LatestboxIconContainer><LatestboxRightArrow className='icon-chevron-right'></LatestboxRightArrow></LatestboxIconContainer>    
                            </LatestboxImageContainer>
                            <Latestbox>
                                <LatestboxTitle>Huawei <LatestboxPhoneName>P11$&</LatestboxPhoneName></LatestboxTitle>
                                <LatestboxParagraph>Laborum commodo veniam anim ea ex cupidatat reprehenderit sunt ad aliqua. Exercitation commodo.</LatestboxParagraph>
                            </Latestbox>
                        </ImageTextContainer>
        
        )   
        return (
            <Fragment>
                <Latestwrapper>
                    <Latestcontainer>
                        {item}
                    </Latestcontainer>
                </Latestwrapper>
            </Fragment>
        )
    }
}
