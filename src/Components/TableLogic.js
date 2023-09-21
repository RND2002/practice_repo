import { useState } from "react";
import InvestmentForm from "./InvestmentForm";

const TableLogic = (props) => {
  const handleComingData = (comingData) => {
    const data = {
      currSaving: comingData.currentSaving,
      yearSaving: comingData.savings,
      rt: comingData.rate,
      tm: comingData.time
    };
    // const interest=(Number(data.currSaving)*Number(data.rt))/100;
    // const total=interest+Number(data.currSaving)+Number(data.yearSaving);

    // console.log(total);
    for (var i = 0; i < Number(data.tm); i++) {
      const interest = (Number(data.currSaving) * Number(data.rt)) / 100;
      const total =
        interest + Number(data.currSaving) + Number(data.yearSaving);
      data.currSaving = total;
      console.log(total);
    }
  };

  return (
    <div>
      <InvestmentForm getFormData={handleComingData} />
    </div>
  );
};

export default TableLogic;
