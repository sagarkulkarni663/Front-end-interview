import { useDispatch, useSelector } from "react-redux";
import { handleFormOpen, handleInput, handleSubmit } from "./store/todoSlice";
const Form = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.todoList.inputDetails)
  return (
    <div
      style={{
        background: "white",
        border: "solid black 1px",
        borderRadius: "10px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backdropFilter: "blur(105px)",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        <div style={{ textAlign: "end", padding: "10px" }}>
          <button
            style={{
              background: "red",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
              padding: "4px 10px",
            }}
            onClick={() => dispatch(handleFormOpen())}
          >
            Close modal
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 20px",
            gap: "20px",
            marginTop: "10px",
            justifyContent: "center",
          }}
        >
          <input name="name" placeholder="Enter your name " value={data['name']} onChange={(e)=>dispatch(handleInput({name: e.target.value}))}/>
          <input name="age" placeholder="Enter your age" type="number" value={data['age']}onChange={(e)=>dispatch(handleInput({age: e.target.value}))}/>
          <input name="gender" placeholder="Enter your gender" value={data['gender']} onChange={(e)=>dispatch(handleInput({gender: e.target.value}))} />
        </div>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <button
            style={{
              background: !(!data['name'] || !data['age'] || !data['gender'])?"green":"#cccccc",
              color: "white",
              borderRadius: "10px",
              padding: "3px 10px",
            }}
            disabled={!data['name'] || !data['age'] || !data['gender']}
            onClick={()=>dispatch(handleSubmit())}
          >
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
