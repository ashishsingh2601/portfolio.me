import React from 'react'
import './ProductList.css';
import Product from '../product/Product';
import {products} from '../../data';

const ProductList = () => {
    return (
        <div className="pl">
                <div className="pl-texts">
                    <h1 className="pl-title">Create <span id="title-and">&</span> Inspire</h1>
                    <p className="pl-desc">
                        Projects that I've built during my coursework.
                    </p>
                </div>
                <div className="pl-list">
                    {products.map((item) => (
                        <Product key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc} />
                    ))};    
                </div>
        </div>
    )
}
export default ProductList;
