import React from "react";

const Categories = () => {
  return (
    <section className="w-5/6 max-w-fit mx-auto flex justify-evenly">
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
        {/* TOPS */}
        <div className="border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Tops
            </h5>
          </a>
        </div>
        {/* BOTTOMS */}
        <div className="border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.unsplash.com/photo-1580644228275-2b826dbec5bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Bottoms
            </h5>
          </a>
        </div>
        {/* ATHLETIC */}
        <div className="border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/6740822/pexels-photo-6740822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Athletics
            </h5>
          </a>
        </div>
        {/* FORMAL */}
        <div className="border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/4965000/pexels-photo-4965000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Formal
            </h5>
          </a>
        </div>
        {/* SHOES */}
        <div className="border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Shoes
            </h5>
          </a>
        </div>
        {/* COATS */}
        <div className="border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Coats
            </h5>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
