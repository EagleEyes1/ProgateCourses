import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  // Definisikan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem}>
      {/* Menambahkan checkbox */}
      <input
        type="checkbox"
        style={styles.checkbox}
        //  Memberikan id dari todo sebagai argument
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)} style={styles.button}>
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    display: "flex",
    border: "2px solid #f4f4f4",
    fontSize: "20px",
  },
  checkbox: {
    marginRight: "10px",
    marginTop: "25px",
    height: "18px",
    width: "18px",
  },
  button: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "23px",
    backgroundColor: "#BB0000",
    color: "#fff",
    padding: "0",
    lineHeight: "0",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default TodoItem;
