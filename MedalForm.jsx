import React, { useState } from "react";

function MedalForm({ onAddMedal }) {
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddMedal({
      ...formData,
      gold: parseInt(formData.gold) || 0,
      silver: parseInt(formData.silver) || 0,
      bronze: parseInt(formData.bronze) || 0,
    });

    setFormData({
      country: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} style={Styles.form}>
      <input
        type="text"
        name="country"
        placeholder="나라 이름"
        value={formData.country}
        onChange={handleChange}
        required></input>
      <input
        type="number"
        name="gold"
        placeholder="금메달"
        value={formData.gold}
        onChange={handleChange}></input>
      <input
        type="number"
        name="silver"
        placeholder="은메달"
        value={formData.silver}
        onChange={handleChange}></input>
      <input
        type="number"
        name="bronze"
        placeholder="동메달"
        value={formData.bronze}
        onChange={handleChange}></input>
      <button type="submit">추가</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "coulmn",
    gap: "10px",
    width: "300px",
    marginBottom: "20px",
  },
};


export default MedalForm;