import { Link } from "react-router-dom";
import { useState } from 'react'
import bellaLogo from '/bellaicon.svg'
import './Home.css'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome</h1>
      <p>Sorry that this is so bare bones</p>
      <div>
        <Link to="/cat-pics">
          <img src={bellaLogo} className="logo" alt="Bella's face icon" />
        </Link>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          I imagine this is where standout projects would be or something
        </p>
      </div>
      <p className="gray-text">
        Yeah...
      </p>
    </>
  )
}

export default Home