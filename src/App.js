
import Buttons1 from './components/Buttons.js'
import { Input } from './components/Input.js'

function App() {

  const mystyle = {
    color:"blue",
    backgroundColor:"yellow"
  }

  return (
    <div>
      <h1 style={{ color: "red" }}>hello kiya hal hy </h1>
      <h1 style={mystyle}>hello kiya hal hy </h1>
      <Buttons1 />
      <Buttons1 />
      <Input />
      <Input />

    </div>
  )
}

export default App
