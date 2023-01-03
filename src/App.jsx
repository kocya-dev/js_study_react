import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0); // 変数名=num(初期値=0),  setter = setNum

  return (
    <>
      <ColorfulMessage color="Red">hello</ColorfulMessage>
      <ColorfulMessage color="blue">hello2</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App; // Appを他ファイルへ公開
