import TableLogic from "./TableLogic";

const CalculationLogic = (props) => {
  function calcInterest(comingData) {
    console.log(comingData);
  }
  return <TableLogic logic={calcInterest} />;
};
export default CalculationLogic;
