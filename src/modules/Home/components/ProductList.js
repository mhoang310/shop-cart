import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, addToCart, getTotals } from "../../../redux/slices/cart";

const ProductList = () => {
       
    const dispatch = useDispatch();
    const { products, carts, search, filter, isLoading, error } = useSelector(
        (state) => state.cart
    );    

    useEffect(() => {
        // Gọi trực tiếp tới function gọi API trong component
        // Nhược điểm là function gọi API không thể tái sử dụng được
        // fetchTodos();
    
        // dispatch 1 async action nhờ sử dụng redux-thunk
        // trong action này sẽ thực hiện việc gọi API và sau đó dispatch tiếp 1 action mới lên store để cập nhật state
        dispatch(getProducts());                
    }, [search, filter]);    

    useEffect(() => {
        dispatch(getTotals())
    }, [carts, dispatch]);

    const handleAddToCart = (product) => {
        // dispatch({ type: "ADD_TO_CART", data: product });
        dispatch(addToCart(product));
    };
    
    if (isLoading) {
        // return <Loading />
        return <h1>Loading...</h1>;
    }
    
    if (error) {
        // return <ErrorMessage error={error} />
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container text-center">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map(product => (
                            <div key={product.id} className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <p className="leading-relaxed mb-3 h-30">
                                        <img src={product.img} alt={product.name} />
                                    </p>
                                    <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-30">{product.name}</h3>
                                    <h5 className="title-font sm:text-2xl text-xl font-medium text-gray-700 mb-3 h-30">{product.screen}</h5>
                                    <p className="leading-relaxed mb-3">Cam: {product.backCamera}</p>
                                    <p className="leading-relaxed mb-3">Phụ: {product.frontCamera}</p>
                                    <p className="leading-relaxed mb-3">{product.desc}</p>
                                    <h5 className="title-font sm:text-2xl text-xl font-medium text-gray-700 mb-3 h-30">$ {product.price}</h5>
                                    {/* <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a> */}
                                    <button 
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleAddToCart(product)}
                                        >
                                        Add cart
                                    </button>
                                    <Link to={`/products/${product.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                                        Detail
                                    </Link>

                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductList;
