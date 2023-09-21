import { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [YearlySavings, setYearlySaavings] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");

  const handleCurrentSavings = (event) => {
    setCurrentSavings(event.target.value);
  };
  const handleYearlySavings = (event) => {
    setYearlySaavings(event.target.value);
  };
  const handleInterest = (event) => {
    setInterest(event.target.value);
  };
  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      currentSaving: currentSavings,
      savings: YearlySavings,
      rate: interest,
      time: duration
    };
    props.getFormData(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Current Savings(s)</label>
        <input
          type="number"
          value={currentSavings}
          onChange={handleCurrentSavings}
        />
      </div>
      <div>
        <label>YearlySavings(s)</label>
        <input
          type="number"
          value={YearlySavings}
          onChange={handleYearlySavings}
        />
      </div>
      <div>
        <label> Expected Interest Per Year(s)</label>
        <input type="number" value={interest} onChange={handleInterest} />
      </div>
      <div>
        <label>InvestMent Duration</label>
        <input type="number" value={duration} onChange={handleDuration} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InvestmentForm;
