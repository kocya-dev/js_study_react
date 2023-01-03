import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <ColorfulMessage color="Red">hello</ColorfulMessage>
      <ColorfulMessage color="blue">hello2</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App; // Appを他ファイルへ公開
