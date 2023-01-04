import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onBack } = props;
  return (
    <div class="complete-area">
      <p class="title">完了済みのTODO</p>
      <ul>
        {completeTodos.map((todoName, index) => {
          return (
            <li>
              <div class="list-row">
                <p class="list-content">{todoName}</p>
                <button onClick={() => onBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
