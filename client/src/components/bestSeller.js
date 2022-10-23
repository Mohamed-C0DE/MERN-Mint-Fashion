import { useState, useEffect } from "react";
import axios from "axios";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bestSellersList = products.map((product) => {
    setTimeout(() => {
      setDisplayProducts(true);
    }, 500);
    if (product.bestSeller) {
      return (
        <div
          className="max-w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          key={product._id}
        >
          <a href="#">
            <img className="rounded-t-lg" src={product.image} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="inline-block">
                <svg
                  className="w-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </span>
              {product.rating}
            </p>
            <div className="flex justify-between content-center">
              <p className=" font-normal text-gray-700 flex items-center">
                ${product.price}
              </p>
              <a
                href="#"
                className="inline-flex items-center py-1 px-2 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                View
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="w-5/6 min-w-fit mx-auto flex justify-center flex-col">
      <h2 className="text-center text-2xl pt-2">Best Sellers</h2>

      {displayProducts ? (
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
          {bestSellersList}
        </div>
      ) : (
        <p className="text-center fs-4">Loading...</p>
      )}
    </div>
  );
};

export default BestSeller;
