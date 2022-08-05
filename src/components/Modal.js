const Modal = () => {
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="ml-4">
                <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Modal Title
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-red opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div >
                                        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                                            <h2 className="text-xl font-semibold">Your cart</h2>
                                            <ul className="flex flex-col divide-y divide-gray-700">
                                                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                                        <img className="flex-shrink-0 object-cover w-10 h-10 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="Polaroid camera" />
                                                        <div className="flex flex-col justify-between w-full pb-4">
                                                            <div className="flex justify-between w-full pb-2 space-x-2">
                                                                <div className="space-y-1">
                                                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
                                                                    <p className="text-sm dark:text-gray-400">Classic</p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <p className="text-lg font-semibold">59.99€</p>
                                                                    <p className="text-sm line-through dark:text-gray-600">75.50€</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex text-sm divide-x">
                                                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" />
                                                                        <rect width={32} height={200} x={168} y={216} />
                                                                        <rect width={32} height={200} x={240} y={216} />
                                                                        <rect width={32} height={200} x={312} y={216} />
                                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" />
                                                                    </svg>
                                                                    <span>Remove</span>
                                                                </button>
                                                                <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" />
                                                                    </svg>
                                                                    <span>Add to favorites</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80" alt="Replica headphones" />
                                                        <div className="flex flex-col justify-between w-full pb-4">
                                                            <div className="flex justify-between w-full pb-2 space-x-2">
                                                                <div className="space-y-1">
                                                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
                                                                    <p className="text-sm dark:text-gray-400">White</p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <p className="text-lg font-semibold">99.95€</p>
                                                                    <p className="text-sm line-through dark:text-gray-600">150€</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex text-sm divide-x">
                                                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" />
                                                                        <rect width={32} height={200} x={168} y={216} />
                                                                        <rect width={32} height={200} x={240} y={216} />
                                                                        <rect width={32} height={200} x={312} y={216} />
                                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" />
                                                                    </svg>
                                                                    <span>Remove</span>
                                                                </button>
                                                                <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" />
                                                                    </svg>
                                                                    <span>Add to favorites</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>                                                
                                            </ul>
                                            <div className="space-y-1 text-right">
                                                <p>Total amount:
                                                    <span className="font-semibold">357 €</span>
                                                </p>
                                                <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                                            </div>
                                        </div>
                                        {/* {carts.map((item) => (
                                            <div key={item.id} className="relative p-6 flex-auto">
                                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                    {item.name}
                                                </p>
                                            </div>
                                        ))} */}

                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>


        </>
    );
}

export default Modal;