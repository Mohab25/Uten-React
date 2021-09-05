import {ACTIVELINK} from '../types'

let setActiveLink=(LinkPosition)=>dispatch=>{
    /* the idea is to take the sections position from the window, and pass them to
        a state holds those position, so the navbar can set the active link according 
        to these positions. 
    */
    dispatch({
        type:ACTIVELINK,
        payload:LinkPosition
    })
}

export default setActiveLink