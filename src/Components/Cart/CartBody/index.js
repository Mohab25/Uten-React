import React,{Fragment} from 'react'

export default function index(props) {
    if(typeof props.handleClick!=='function'){
        return(
            <div>
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                     </tr>
                </thead>
                <tbody>
                {props.products.map((product,index)=>
                    <Fragment>
                    <tr key={index}>
                    <td><div style={{width:'100px',height:'100px',background:`url(${product.image})`,backgroundPosition:'center',backgroundSize:'cover'}}></div></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><span>{props.quantity[index]}</span></td>
                    <td>{props.total_price[index].toFixed(2)}$</td>
                    </tr>
                    </Fragment>
                )}
                </tbody>
        </table>
            </div>
        )
    }
    else{
        console.log(props.total_price,props.quantity,props.products)
    return (
        <div>
        <table>
            <thead>
                <tr>
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                 </tr>
            </thead>
            <tbody>
            {props.products.map((product,index)=>
                <Fragment key={index}>
                <tr>
                <td><div style={{width:'100px',height:'100px',background:`url(${product.image})`,backgroundPosition:'center',backgroundSize:'cover'}}></div></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><span>{props.quantity[index]}</span><div id='quantity-icons-holder'><i className='fas fa-arrow-alt-circle-up up-arrow' onClick={(e)=>props.handleClick(index,e)}></i><i className='fas fa-arrow-alt-circle-down down-arrow' onClick={(e)=>props.handleClick(index,e)}></i></div></td>
                <td>{props.total_price[index].toFixed(2)}$</td>
                </tr>
                </Fragment>
            )}
            </tbody>
    </table>
        </div>
    )
}
}