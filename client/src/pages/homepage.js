import { Fragment } from "react";
import Header from "../components/header";
import Offers from "../components/offers";

const homepage = () => {
  return (
    <Fragment>
      <Offers />
      <Header />
      <div className="container">
        {/* Hero Image Section */}
        <section className="before:bg-hero-image before:absolute before:bg-top before:bg-cover before:bg-no-repeat before:top-0 before:left-0 before:bottom-0 before:right-0 before:overflow-hidden before:opacity-95 flex justify-center content-center flex-col overflow-hidden w-full h-screen relative">
          <h2 className="relative text-center text-3xl text-white">
            Shop our Fall 21 Collection
          </h2>
        </section>
      </div>
    </Fragment>
  );
};

export default homepage;
