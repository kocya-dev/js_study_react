import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onComplete, onDelete } = props;
  return (
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
                    onComplete(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onDelete(index);
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
  );
};
