import React, { Component } from 'react'
import './styles/styles.css'

export default class Services_1 extends Component {
    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }

    componentDidMount(){
        let width = window.innerWidth
        if(width<=540){
            let newContent = 'Reprehenderit consequat labore et in irure exercitation consectetur tempor,exercitation consectetur tempor.Magna ex duis id eiusmod laboris velit et minim deserunt. Dolor et,Magna ex duis id eiusmod laboris velit et minim deserunt. Dolor et.'
            this.setState({content:newContent})
        }
        //if(width<=540){
            // Magna ex duis id eiusmod laboris velit et minim deserunt. Dolor et in amet esse do eiusmod. Aliquip officia mollit dolore eu amet officia in magna non tempor.
            // Magna nulla minim nulla cupidatat aliquip culpa pariatur commodo ullamco et consequat elit. Quis minim qui cupidatat consequat laborum tempor amet nostrud enim proident exercitation. Quis cillum exercitation irure id aute non proident ut ad aliquip aute non. Magna id minim voluptate ullamco id magna eiusmod. Duis id adipisicing occaecat sint Lorem qui ad ex ex eu sint enim. Non elit et sunt fugiat reprehenderit ad deserunt laboris ipsum ad.
            // Aute tempor deserunt commodo dolore in adipisicing fugiat esse. Non ullamco Lorem ipsum Lorem et commodo ad. Deserunt eu nisi esse cillum magna nulla consequat. Velit excepteur ad velit ullamco irure consectetur esse cillum commodo ullamco irure irure<span className='square'></span></p>
        
        //}

    }

    render() {
        return (
            <div id='serivces'>
                <div id='serivces-left-col-2'>
                    <div id='serivces-left-col-txt-2'>
                    <h3>Modern Trends </h3>
                        <p>{this.state.content}</p>
                    </div>
                </div>
                <div id='serivces-right-col-2'>
                    <div id='serivces-right-col-img-2'>
                    </div>
                </div>
            </div>
        )
    }
}
