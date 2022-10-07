import { Fragment } from "react";
import Header from "../components/header";
import Offers from "../components/offers";

const homepage = () => {
  return (
    <Fragment>
      <Header />
      <Offers />
    </Fragment>
  );
};

export default homepage;
