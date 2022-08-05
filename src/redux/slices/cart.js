import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk(
  "cart/getProducts",
  // Hàm call API: nhận vào 2 tham số:
  // - Tham số 1: params truyền vào khi gọi hàm
  // - Tham số 2: là thunkAPI là 1 object gồm dispatch, getState
  // Chỉ cần gọi API và return về data, việc dispatch các action pending, fullfiled, rejected sẽ được createAsyncThunk quản lý giúp mình
   async (_, { getState }) => {
    try {
      const { search, filter } = getState().cart;
      const { data } = await axios.get(
        "https://625a7352cda73d132d1f54c3.mockapi.io/api/products",
        {
          params: {
            name: search,
          },
        }
      );      
      return data;
      
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  products: [],
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  search: "",
  filter: "all",
  isLoading: false, // display loading when call API
  error: null, // call error from API
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeSearch(state, action) {
      return { ...state, search: action.payload };
    },
    addToCart(state, action) {
      const product = action.payload;
      // console.log("state cart", product)

      const index = state.carts.findIndex((item) => item.id === product.id);
      //chua ton tai (index === -1) | (index >= 0)
      if (index === -1) {
        const carts = [...state.carts, { ...product, quantity: 1 }];
        localStorage.setItem("carts", JSON.stringify(carts));
        return { ...state, carts };
        // state.carts[index] = {
        //   ...state.carts[index],
        //   quantity: state.carts[index].quantity + 1,
      };
      // } else {
      //   let tempProductItem = { ...action.payload, quantity: 1 };
      //   state.carts.push(tempProductItem);
      // };
      // da ton tai
      const carts = state.carts.map((item) => {
        return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
      });
      localStorage.setItem("carts", JSON.stringify(carts));
      return { ...state, carts };            
    },        
    increaceQuantity(state, action) {
      const productId = action.payload; // payload (data) la id cua product muon tang so luong       

      const newCarts = state.carts.map(item => {
        // Duyet qua tung san pham trong gio hang, kiem tra
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("carts", JSON.stringify(newCarts));
      return { ...state, carts: newCarts };
    },
    decreaceQuantity(state, action) {
      const productId = action.payload // payload (data) la id cua product muon giam so luong

      // Neu so luong dang la 1 => xoa san pham
      // Tim san pham co id trung voi productId muon xoa de kiem tra so luong
      const { quantity } = state.carts.find((item) => item.id === productId);

      // Neu so luong dang la 1 => xoa san pham
      if (quantity === 1) {
        const newCarts = state.carts.filter(item => item.id !== productId);
        localStorage.setItem("carts", JSON.stringify(newCarts));
        return { ...state, carts: newCarts };
      }

      // So luong lon hon 1 => giam so luong
      const newCarts = state.carts.map(item => {
        // Duyet qua tung san pham trong gio hang, kiem tra
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem("carts", JSON.stringify(newCarts));
      return { ...state, carts: newCarts };
    },
    removePro(state, action) {
      const productId = action.payload // data la id cua product muon 
      const carts = state.carts.filter((item) => item.id !== productId);
      localStorage.setItem("carts", JSON.stringify(carts));
      return { ...state, carts: carts };      
    },
    getTotals(state, action) {
      let { total, toQuantity } = state.carts.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.toQuantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          toQuantity: 0,
        }
      );
      state.cartTotalQuantity = total;
      state.cartTotalAmount = toQuantity;
    },
    clearCart(state, action) {
      state.carts = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },

  // Dùng để xử lý thunk actions
  extraReducers: {
    [getProducts.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getProducts.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, products: action.payload };
    },
    [getProducts.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export const { changeSearch, addToCart, increaceQuantity, decreaceQuantity, removePro, getTotals, clearCart } = cartSlice.actions;
export default cartSlice.reducer;