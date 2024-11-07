import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";

function App() {
  const [medals, setMedals] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((PrevData) => ({
      ...PrevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 데이터:", formData);

    setFormData({
      country: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };

  //메달 추가 기능
  const addMedal = (newMedal) => {
    setMedals((prevMedals) => [...prevMedals, newMedal]);
  };

  //메달 업데이트 기능
  const updareMedal = (updatedMedal) => {
    setMedals((prevMedals) =>
      prevMedals.map((medal) =>
        medal.country === updatedMedal.country ? updatedMedal : medal
      )
    );
  };

  //메달 삭제 기능
  const deleteMedal = (country) => {
    setMedals((prevMedals) =>
      prevMedals.filter((medal) => medal.country !== country)
    );
  };

  return (
    <>
     
      <div style={styles.container}>
        <h1> 메달 현황 입력 </h1>
        <form onSubmit={handleSubmit} style={Styles.form}>
          <label>
            나라이름 :
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}></input>
            <label>
              금메달 :
              <input
                type="number"
                name="gold"
                value={formData.gold}
                onChange={handleChange}></input>
            </label>
            <label>
              은메달 :
              <input
                type="number"
                name="silver"
                value={formData.silver}
                onChange={handleChange}></input>
            </label>
            <label>
              <input
                type="number"
                name="bronze"
                value={formData.bronze}
                onChange={handleChange}></input>
            </label>
            <button type="submit">제출</button>
          </label>
        </form>
      </div>
      <div style={styles.container}>
        <h1>메달 집계</h1>
        <MedalForm onAddMedal={addMedal}></MedalForm>
        <MedalList medals={medals}></MedalList>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
};

export default App;
