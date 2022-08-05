import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { increaceQuantity, decreaceQuantity, removePro, getTotals, clearCart } from '../redux/slices/cart';

const Cart = () => {
    const { carts, search, cartTotalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // const totalPrice = carts.reduce((price, item) => price + item.quantity * item.price, 0);

    useEffect(() => {
        dispatch(getTotals())
    }, [carts, dispatch]);
    const handleIncreaceQuantity = (productId) => {
        // dispatch({ type: "INCREASE_QUANTITY", data: productId });
        dispatch(increaceQuantity(productId));
    };
    const handleDecreaceQuantity = (productId) => {
        // dispatch({ type: "INCREASE_QUANTITY", data: productId });
        dispatch(decreaceQuantity(productId));
    };
    const handleRemovePro = (productId) => {        
        dispatch(removePro(productId));
    };
    const handleClearCart = () => {        
        dispatch(clearCart());
    };

    return (
        <>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="h-40 bg-white"></div>
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">Shop Carts</h2>
                <div className="overflow-x-auto">
                    {carts.length === 0 && (
                        <div className="h-20 bg-white text-center">No item are adds</div>
                    )}

                    <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="dark:bg-gray-700">
                                <th className="p-3">Num</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Total</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                            {carts.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="px-3 text-xl font-medium dark:text-gray-400">{index + 1}</td>
                                    <td className="px-3 py-2">
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="px-3 py-2 flex justify-center">
                                        <img className="h-20 " src={item.img} alt={item.name} />
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>$ {item.price}</p>
                                    </td>
                                    <td className="px-3 py-2 dark:text-gray-400">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded m-2"
                                            onClick={() => handleDecreaceQuantity(item.id)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded m-2"
                                            onClick={() => handleIncreaceQuantity(item.id)}
                                        >
                                            +
                                        </button>

                                    </td>
                                    <td className="px-3 py-2">
                                        <p className="font-bold">$ {item.quantity * item.price}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <button
                                            type="button"
                                            title="Open details"
                                            className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700 text-red-500"
                                            onClick={() => handleRemovePro(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-400">$</td>
                                <td className="px-3 py-2">
                                    <p></p>
                                </td>
                                <td className="px-3 py-2">

                                </td>
                                <td className="px-3 py-2">
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                                        onClick={handleClearCart}
                                    >
                                        Clear
                                    </button>
                                </td>
                                <td className="px-3 py-2 text-sm font-bold">
                                    <p>Total Price:</p>
                                </td>
                                <td className="px-3 py-2 text-sm font-bold">
                                    {/* <p>${totalPrice}</p> */}
                                    <p>${cartTotalQuantity}</p>
                                </td>
                                <td className="px-3 py-2">

                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="flex justify-center m-5">
                        <Link
                            to="/"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"

                        >
                            Back to home
                        </Link>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

                        >
                            Check out
                        </button>
                    </div>


                </div>
            </div>


        </>
    );
}

export default Cart;
