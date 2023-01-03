import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <p style={contentStyle}>test</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App; // Appを他ファイルへ公開
