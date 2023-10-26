import React from "react";
import Layouts from "../../layouts";
import Tables from "../../components/Tables";
import VistaSelector from "../../components/VistaSelector";

const Stats = () => {
  return (
    <>
      <Layouts>
        <VistaSelector title="Stats" arrowLeft="/contact" arrowRight="/"/>
        <Tables/>
      </Layouts>
    </>
  );
};

export default Stats;
