import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, changeSearch } from "../../../redux/slices/cart";

// import Modal from "../../../components/Modal";

export default function Header({ fixed }) {
    const dispatch = useDispatch();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { products, cartTotalAmount, search, filter } = useSelector(state => state.cart);

    const inpRef = useRef();
    const timeout = useRef();

    const onHome = () => {
        // Trường hợp mà chưa hết 0.3s mà hàm handleSearch đã được gọi lại, ta sẽ clearTimeout để huỷ bỏ callback func trong setTimeout => hàm onSearch sẽ không được gọi tới
        clearTimeout(timeout.current);

        // Khi hàm handleSearch đc gọi, ta tạo setTimeout để delay 0.3s trước khi gọi prop onSearch để call API
        // Gán Timeout lại cho timeout.current để có thể clear timeout
        timeout.current = setTimeout(() => {
            window.location.reload();
        }, 300);
    };

    const onSearch = () => {
        const value = inpRef.current.value; // input value
        // Lưu trữ value trên url bằng search params: ?
        dispatch(changeSearch(value))
    };
    const handleSearch = (value) => {        
        dispatch(changeSearch(value))
    };

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3 bg-opacity-40 fixed z-10 w-full">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white "
                            href="#pablo"
                        >
                            <img src="./img/letter-h.png" alt="cyberlearn" className="h-20" />
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className="h-8 w-8 text-white-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>

                        </button>
                    </div>
                    <div className="relative ml-2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button onClick={onSearch} type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                                </svg>
                            </button>
                        </span>
                        <input ref={inpRef} type="search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                    </div>

                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >

                        <ul className="flex flex-col lg:flex-row list-none lg:m-auto ">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={"flex items-center px-4 -mb-0.5 border-transparent uppercase mt-2 text-white"}
                                    onClick={onHome}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a                                    
                                    className="flex items-center px-4 -mb-1 dark:border-transparent uppercase mt-2 text-white"
                                    onClick={() => handleSearch("Iphone")}
                                >
                                    Iphone
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center px-4 -mb-1 dark:border-transparent uppercase mt-2 text-white"
                                    onClick={() => handleSearch("Samsung")}
                                >
                                    Samsung
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center px-4 -mb-1 dark:border-transparent uppercase mt-2 text-white"
                                    href="#pablo"
                                >
                                    Pin
                                </a>
                            </li>
                            <Link to="/carts" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Cart
                            </Link>
                            <span className="boder-2 border-black-500 rounded-full ml-3 mt-1 bg-white p-2 w-7 text-center">{cartTotalAmount}</span>
                        </ul>
                        {/* <button type="button" className="flex px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Log in</button> */}

                    </div>
                </div>
            </nav>

        </>
    );
}