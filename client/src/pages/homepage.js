import { Fragment } from "react";
import Header from "../components/header";
import Offers from "../components/offers";
import BestSeller from "../components/bestSeller";
import Categories from "../components/categories";
import Story from "../components/story";
import LineBreak from "../UI/LineBreak";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <Fragment>
      <Offers />
      <Header />
      {/* Hero Image Section */}
      <section className="before:bg-hero-image before:absolute before:bg-top before:bg-cover before:bg-no-repeat before:top-0 before:left-0 before:bottom-0 before:right-0 before:overflow-hidden before:opacity-95 flex justify-center content-center flex-col overflow-hidden w-full h-screen relative">
        <h2 className="relative text-center text-3xl md:text-5xl text-white">
          Shop our Fall Collection
        </h2>
        <div className="w-full flex justify-center ">
          <button
            type="button"
            className=" relative lg:text-xl w-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mt-2"
          >
            Shop Now
          </button>
        </div>
      </section>
      <BestSeller />
      <LineBreak />
      <Categories />
      <LineBreak />
      <Story />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
