import "./styles.css";
import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  /*
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
  */

  const [inputTodoName, setInputTodoName] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onTextChange = (event) => setInputTodoName(event.target.value);
  const onClickAdd = () => {
    if (inputTodoName === "") return; // 空文字では何もしない
    // 既存の未完了TODOに新規追加
    const newTodos = [...incompleteTodos, inputTodoName];
    setIncompleteTodos(newTodos);
    setInputTodoName("");
  };
  const onClickDelete = (deleteIndex) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(deleteIndex, 1); // deleteIndex番目から1つ削除する
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (completeIndex) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [
      ...completeTodos,
      newIncompleteTodos[completeIndex],
    ];

    newIncompleteTodos.splice(completeIndex, 1); // deleteIndex番目から1つ削除する
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (backIndex) => {
    const newCompleteTodos = [...completeTodos];
    const newIncompleteTodos = [
      ...incompleteTodos,
      newCompleteTodos[backIndex],
    ];

    newCompleteTodos.splice(backIndex, 1); // deleteIndex番目から1つ削除する
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div class="input-area">
        <input
          placeholder="TODOを入力"
          value={inputTodoName}
          onChange={onTextChange}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todoName, index) => {
            return (
              <li>
                <div key={todoName} class="list-row">
                  <p class="list-content">{todoName}</p>
                  <button
                    onClick={() => {
                      onClickComplete(index);
                    }}
                  >
                    完了
                  </button>
                  <button
                    onClick={() => {
                      onClickDelete(index);
                    }}
                  >
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了済みのTODO</p>
        <ul>
          {completeTodos.map((todoName, index) => {
            return (
              <li>
                <div class="list-row">
                  <p class="list-content">{todoName}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App; // Appを他ファイルへ公開
