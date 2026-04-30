import { useEffect, useState } from "react";
import { listProduct } from "../services/ProductServices";




export const ProductApp = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        const result = listProduct();
        setProducts(result);
    }, []);
    return (
        <>
            <h1>Productos</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return(
                        <tr key={product.name}>
                            <th>{product.name}</th>
                            <th>{product.description}</th>
                            <th>{product.price}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}