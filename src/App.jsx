import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0); // 変数名=num(初期値=0),  setter = setNum
  const [faceShowFlag, setFaceShowFlag] = useState(false); // 変数名=num(初期値=0),  setter = setNum
  useEffect(() => {
    console.log("init");
  }, []); // 最初の1回しか呼ばれない
  useEffect(() => {
    if (num == 0) return;
    if (num % 3 === 0) {
      setFaceShowFlag(true);
    } else {
      setFaceShowFlag(false);
    }
  }, [num]); // numが変化した時だけ呼ばれる

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    // ボタン押下でステート変更 -> ステート変化を受けて再レンダリングされる
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <ColorfulMessage color="Red">hello</ColorfulMessage>
      <ColorfulMessage color="blue">hello2</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>

      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>face </p>}
    </>
  );
};

export default App; // Appを他ファイルへ公開
