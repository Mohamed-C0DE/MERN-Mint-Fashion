import { Fragment } from "react";
import Header from "../components/header";
import Offers from "../components/offers";

const homepage = () => {
  return (
    <Fragment>
      <Offers />
      <Header />
    </Fragment>
  );
};

export default homepage;
