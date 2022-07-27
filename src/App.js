import "./styles.css";
import Gallery from "./components/Gallery";
import Thumbnails from "./components/Thumbnails";
import { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState("");

  const handleClick = (e) => {
    setCurrent(e.target.currentSrc);
  };

  return (
    <div className="App">
      <Thumbnails handleClick={handleClick} setCurrent={setCurrent} />
      <Gallery current={current} setCurrent={setCurrent} />
    </div>
  );
}
