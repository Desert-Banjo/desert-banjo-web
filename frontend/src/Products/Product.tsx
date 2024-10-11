import React from 'react';
import data from "./data";


const styles: { [key: string]: React.CSSProperties } = {
    products: {
        listStyleType: "none", 
        padding: 0, 
    },
};
// the image came out looking weird so we added styles for it so that it comes out looking normal and the dot will disappear from it 
function Products() {
    return (
        <div className="content">
            <ul className="products" style={styles.products}>
                {data.products.map((product, index) => (
                    <li key={`${product.name}-${index}`}>
                        <div className="product" style={styles.product}>
                            <img
                                className="product-image"
                                src={product.imageUrl}
                                alt="product"
                                style={styles.productImage}
                            />
                            <div className="product-name">
                                <a href="product.html">{product.name}</a>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">
                                {product.rating} Stars ({product.numberOfReviews} reviews)
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;