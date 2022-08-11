import "./styles.css";
import Gallery from "./components/Gallery";
import Thumbnails from "./components/Thumbnails";
import { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState("");
  const [blur, setBlur] = useState(false)

  const handleClick = (e) => {
    setCurrent(e.target.currentSrc);
    setBlur(false)
  };

  return (
    <div className="App">
      <Thumbnails handleClick={handleClick} setBlur={setBlur} />
      {current && <Gallery current={current} blur={blur} />}
    </div>
  );
}
