import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Monday 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo.trim()) {
              setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setTodo('');
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        <div className="uncompleted">
          <h3>Uncompleted Tasks</h3>
          {toDos
            .filter((obj) => !obj.status)
            .map((obj) => (
              <div className="todo" key={obj.id}>
                <div className="left">
                  <input
                    type="checkbox"
                    checked={obj.status}
                    onChange={(e) => {
                      setTodos(
                        toDos.map((item) =>
                          item.id === obj.id ? { ...item, status: e.target.checked } : item
                        )
                      );
                    }}
                  />
                  <p className={obj.status ? 'strikethrough' : ''}>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => setTodos(toDos.filter((item) => item.id !== obj.id))}
                  ></i>
                </div>
              </div>
            ))}
        </div>

        <div className="completed">
          <h3>Completed Tasks</h3>
          {toDos
            .filter((obj) => obj.status)
            .map((obj) => (
              <div className="todo" key={obj.id}>
                <div className="left">
                  <input
                    type="checkbox"
                    checked={obj.status}
                    onChange={(e) => {
                      setTodos(
                        toDos.map((item) =>
                          item.id === obj.id ? { ...item, status: e.target.checked } : item
                        )
                      );
                    }}
                  />
                  <p className={obj.status ? 'strikethrough' : ''}>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => setTodos(toDos.filter((item) => item.id !== obj.id))}
                  ></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
