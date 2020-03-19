import React, {useState, useEffect} from "react";
import Axios from "axios";
import ProductForm from '../components/ProductForm';
import {Link} from "@reach/router";

const Main = () => {
    const initialState = {title:"",price:"", description:""}
    const [newProduct, setNewProduct] = useState(initialState);
    const [isSubmit, setIsSubmit] = useState(false);
    const [products,setProducts] = useState([]);
    const [errors, setErrors] = useState(initialState);
    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/product", newProduct)
        .then(res => {
            setIsSubmit(!isSubmit);
            console.log(res.data);
        })
        .catch(err => { 
            console.log(err.response)
            setErrors(err.respose.data);
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data.products);
            setNewProduct({
                title:"",
                price: "",
                description:""
            });
        })
    },[isSubmit])
    return (
        <div>
            <ProductForm form={newProduct}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            errors = {errors}
            />
            <div>
                {
                    products.map((product,idx) => {
                    return <div key={idx}>
                        <br></br><Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
export default Main;