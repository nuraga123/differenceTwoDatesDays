import { useState } from "react";
import "./App.css";

function App() {
  const [data1, setDate1] = useState("");
  const [data2, setDate2] = useState("");
  const [result, setResult] = useState("X gun");

  // date1 - date2
  let daysLag = "";
  const myFunction = () => {
    // input value format Date
    const dateOne = new Date(data1);
    const dateTwo = new Date(data2);

    daysLag = Math.ceil(
      Math.abs(dateTwo.getTime() - dateOne.getTime()) / (1000 * 3600 * 24)
    );

    if (isNaN(daysLag)) {
      setResult("tarix sefdir");
    } else setResult(`${daysLag} gun`);
  };

  return (
    <div className="App">
      <h1>app working</h1>

      <div id="main">
        <h1>{`date 1 - date 2 = ${result}`}</h1>
        <h3>ay gun il</h3>
        <div className="date">12-28-2023</div>
        <div>3-1-2023</div>
        <span>date 1</span>
        <input
          id="data1"
          type="text"
          placeholder="12-28-2023"
          value={data1}
          onChange={(e) => setDate1(e.target.value)}
        />

        <span>date 2</span>
        <input
          id="data2"
          type="text"
          placeholder="12-28-2023"
          value={data2}
          onChange={(e) => setDate2(e.target.value)}
        />

        <div className="btn__cont">
          <button className="btn" onClick={myFunction}>
            hesabla
          </button>

          <a className="btn" href="/">
            reset
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
