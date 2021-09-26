import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Member from './components/Member/Member';

function App() {
  return (
    <div>
      <Header />
      <Member></Member>
    </div>
  );
}
function Test() {
  const [state, setSate] = useState([]);
  useEffect(() => {
    fetch('./name.JSON')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div>

    </div>
  )
}

export default App;
