import React,{useEffect,useState} from 'react'
import './styles.css'

export default function Product(props){
    const [item,setItem] = useState()
    let lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam numquam magni nesciunt, dolore recusandae modi nam nemo eum natus expedita esse sequi tenetur enim quas nobis ullam eius eaque quod.'
    
    useEffect(()=>{
        setItem(props.location.state.item)
        return ()=>{}
    },[])

    if(item==undefined) return(<></>)
    let vendor = item.vendor.includes('.inc')?item.vendor.replace('.inc',''):item.vendor
    return(
        <div className='ProductPage'>
            <div className='productPage-container'>
                <div className='product-img-container'><img className='product-img' src={item.image}/></div>
                <div className='product-text'>
                    <b><h3 className="productTitle">{item.name}</h3></b>
                    <em><span className="productCategory">{item.product_type} - {vendor}</span></em>
                    <span className="productDescriptionTitle"></span>
                    <p className="productDescription">{item.description+lorem}</p>
                    <div className="productFooterNotes">
                        <span className="productTag1">#{item.feature}</span>
                        <span className="productTag2">#{item.product_type}</span>
                        <span className="productTag3">#{vendor}</span>
                        <span className="productTag4"></span>
                    </div>
                    <div className='productReview'>
                    <span>Reviews:&nbsp;</span>
                    {[...Array(5)].map(item=>{return <span className="productReviewStars">&#9733;</span>})}
                    </div>
                    <button className="productAddToCart"><span><i className='fa fa-shopping-cart'></i></span></button>
                </div>
            </div>
        </div>
    )
}
