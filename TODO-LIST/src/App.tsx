import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import {
  deleteFromList,
  editFromList,
  handleFormOpen
} from "./store/todoSlice";
const App = () => {
  const list = useSelector((item) => item.todoList.list);
  const isOpen = useSelector((item) => item.todoList.isOpen);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {list.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                background: "orange",
                border: "2px solid black",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
                width: "200px",
                height: "200px",
              }}
            >
              <div style={{ textAlign: "end" }}>
                <button
                  style={{ background: "black", color: "white" }}
                  onClick={() => dispatch(editFromList(item.id))}
                >
                  {" "}
                  Edit ✏️{" "}
                </button>
                <button
                  style={{
                    background: "red",
                    color: "white",
                    marginLeft: "4px",
                  }}
                  onClick={() => dispatch(deleteFromList(item.id))}
                >
                  {" "}
                  Delete🗑️
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <div>Name:- {item.name}</div>
                <div>Age:- {item.age}</div>
                <div>Gender:-{item.gender}</div>
              </div>

            </div>
          );
        })}
        <div>
          <button
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "12px 24px",
              background: !isOpen?"#2d8cff":"#cccccc",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: isOpen?"not-allowed":"pointer",

            }}
            disabled={isOpen}
            onClick={() =>
              dispatch(handleFormOpen())
            }
          >
            + Add New Item
          </button>
        </div>
      </div>
      {isOpen && <Form />}
    </div>
  );
};

export default App;
