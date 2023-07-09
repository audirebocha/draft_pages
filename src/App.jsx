import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { isMobile } from 'react-device-detect';
import ReactDOM from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)

  const [width, set_width] = useState(window.innerWidth)

  const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:


  if (isMobile  || width<=400) {
    root.render(
      <>
        <h1>Share space</h1>
        <h3>Please check later, only for desk top</h3>
      </>
    );
  }
  useEffect(() => {
    window.addEventListener('resize', window.addEventListener('resize',()=>{set_width(window.innerWidth)}));
    return () => {
      window.removeEventListener('resize', window.addEventListener('resize',()=>{set_width(window.innerWidth)}) );
    }
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{width}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
