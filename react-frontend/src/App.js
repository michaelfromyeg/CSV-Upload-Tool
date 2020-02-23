import React, { useState } from 'react';
import './App.css';
import UploadFile from './components/UploadFile';
//import MatchFields from './components/matchFields';
//<MatchFields></MatchFields>

function App() {
  return (
    <div className="App">
      <p>My token is { window.token }</p>
      <h1>User Import</h1>
      <UploadFile />
    </div>
  );
}

export default App;
