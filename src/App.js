import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000e23';
      showAlert("Dark Mode Has Been Enable", "success");
      // document.body.style.color = 'white'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enable", "success");
      // document.body.style.color = 'black'
      // document.body.style.color = 'black'
    }
  }
  return (
    <>
     <Router>
        <Navbar title="TextEditer" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Updated from Switch to Routes */}
            <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> }  /> 
            <Route path="/" element={
              <TextForm heading="Enter Text To Analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
