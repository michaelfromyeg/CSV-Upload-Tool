import React, { useState } from "react";
import axios from 'axios';
import * as constants from './constants.jsx'

function UploadFile() {
  const headers = constants.HEADERS;
  const choices = {};
  headers.map(header => {
    choices[header] = '';        
  })

  const [choice, setChoice] = useState(choices);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose file');
  const [options, setOptions] = useState(['None']);
  const [chosenOptions, setChosenOptions] = useState([]);

  const chooseFile = e => {
    console.log('chooseFile');
    setFile(e.target.files[0]); // Will only take first file if multiple selected
    setFilename(e.target.files[0].name);
  };

  const submitFile = e => {
    console.log('submitFile');
    const data = new FormData();
    data.append('file', file);

    axios
      .post('/upload', data)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("res.data[0]" + res.data[0])
        setOptions(res.data[0]);
      })
      .catch(err => console.warn(err));
  };

  const newChoice = e => {
    console.log('newChoice');

    choices[e.target.name] = e.target.value;
    console.log('new choices: ' + choices);
    setChoice(choices);
    setChosenOptions([...chosenOptions, e.target.value]);

    let oldOptions = [...options];
    oldOptions.splice(oldOptions.indexOf(e.target.value), 1);
    console.log(oldOptions);  
    setOptions(oldOptions);
    
    console.log('new chosen options: ' + chosenOptions);
  }

  return (
    <div className="import">
      <h3>Import steps</h3>
      <p>Download our csv templates and add all of your lot information</p>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload your file
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            onChange={ chooseFile }
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            { filename }
          </label>
        </div>
      </div>

      <button onClick={ submitFile }>Upload</button>

      <p>Drag and drop the uploaded groupings to match our groupings</p>

      { headers.map(header => 
        <div>
          <p>{ header }</p>
          <select value={ choices.header } name={ header } onChange={ newChoice }>
          { options.map(option =>
            <option value={ option }>{ option }</option>
          )}
          </select>
        </div>
      )}

    </div>
  );
}

export default UploadFile;
