import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const ProductDetail = ({id}) => {
    const [product,setProduct] = useState({});
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data.product)
        })
    },[id])
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>price: ${product.price}</p>
            <p>Desciption: {product.description}</p>
        </div>
    )
}
export default ProductDetail;