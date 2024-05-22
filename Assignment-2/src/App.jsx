import SingleCard from "./Components/SingleCard";
import "./App.css";
import { useState } from "react";
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function App() {
  const [OutputString, setOutputString] = useState("");
  const HandleOutputString = (alphabet) => {
    console.log(alphabet);
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-5 gap-4  my-10">
        {alphabets.map((alphabet, index) => (
          <SingleCard
            key={index}
            alphabet={alphabet}
            HandleOutputString={HandleOutputString}
          />
        ))}
      </div>
      <div
        id="outputString"
        className="text-2xl font-semibold text-purple-400
      "
      >
        OutputString:
      </div>
    </div>
  );
}

export default App;
