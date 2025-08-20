
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counterSlice'
import FolderTree from './folder-structure'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch=useDispatch()
return (
  <div>
    {/* <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div> */}
    <FolderTree/>
  </div>
)
}

export default App
