import React from "react";

const Categories = () => {
  return (
    <section className="py-2 w-5/6 mx-auto flex justify-evenly">
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 md:gap-2 xl:grid-cols-3">
        {/* TOPS */}
        <div className="max-w-sm bg-white rounded border border-gray-200 shadow-md">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-2 text-4xl font-bold tracking-tight text-gray-900">
              Tops
            </h5>
          </a>
        </div>
        {/* BOTTOMS */}
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/4109797/pexels-photo-4109797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-2 text-4xl font-bold tracking-tight text-gray-900">
              Bottoms
            </h5>
          </a>
        </div>
        {/* ATHLETIC */}
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/6740822/pexels-photo-6740822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-2 text-4xl font-bold tracking-tight text-gray-900">
              Athletics
            </h5>
          </a>
        </div>
        {/* FORMAL */}
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-2 text-4xl font-bold tracking-tight text-gray-900">
              Formal
            </h5>
          </a>
        </div>
        {/* SHOES */}
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-2 text-4xl font-bold tracking-tight text-gray-900">
              Shoes
            </h5>
          </a>
        </div>
        {/* COATS */}
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md rounded">
          <a className="relative" href="#">
            <img
              className="hover:opacity-75"
              src="https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
              alt=""
            />
            <h5 className="absolute bg-black text-white px-2 pt-1 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mb-2 text-4xl font-bold tracking-tight text-gray-900">
              Coats
            </h5>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
