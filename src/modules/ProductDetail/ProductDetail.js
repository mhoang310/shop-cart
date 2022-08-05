import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart, getTotals } from "../../redux/slices/cart";

export default function ProductDetail() {
  const dispatch = useDispatch();
  // Để lấy ra params trên url ta dùng hook useParams
  // path: /movies/:movieId => useParams trả về 1 object có key movieId bên trong
  const { productId } = useParams();
  // Dùng useNavigate để điều hướng url
  // const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const { carts, search, filter } = useSelector(state => state.cart);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://625a7352cda73d132d1f54c3.mockapi.io/api/products/${productId}`
      );
      setProduct(data);
    } catch (error) {
      console.log(error);
      // Nhảy xuông catch nghĩa là id không hợp lệ để lấy chi tiết phim
      // Chuyển url về trang not-found
      // navigate("/not-found", { replace: true });
    }
  };

  useEffect(() => {
    // Dùng movieId để call API lấy chi tiết phim
    fetchProduct();
    dispatch(getTotals());
  }, [productId, carts]);

  if (!product) {
    return null;
  }

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [carts, dispatch]);

  const handleAddToCart = (product) => {
    // dispatch({ type: "ADD_TO_CART", data: product });
    dispatch(addToCart(product));
  };
  

  return (
    <div className="container">
      <div className="h-40 bg-white"></div>
      <div className="row py-30">
        <div className="col-sm-6 mb-5">
          <img className="w-auto h-full" src={product.img} alt={product.name} />
        </div>


        <div className="col-sm-6">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <p>{product.desc}</p>
          <p>${product.price}</p>          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddToCart(product)}
          >
            Add cart
          </button>
        </div>
      </div>
    </div>
  );
}