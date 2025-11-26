import './App.css'
import Dashboard from "./component/Dashboard.jsx";


function App() {


  return (
    <div className="relative">
        <div className='w-full min-h-96 bg absolute top-0 right-0 left-0'></div>
        <div className="max-w-7xl mx-auto">
            <div><Dashboard/></div>
        </div>
    </div>
  )
}

export default App
