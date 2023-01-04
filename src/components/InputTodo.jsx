import React from "react";

export const InputTodo = (props) => {
  const { inputTodoName, onChange, onClick } = props;
  return (
    <div class="input-area">
      <input
        placeholder="TODOを入力"
        value={inputTodoName}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
