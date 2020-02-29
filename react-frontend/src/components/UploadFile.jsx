import React, { useState } from "react";
import axios from 'axios';

function UploadFile() {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");
  const [url, setURL] = useState("");
  const [options, setOptions] = useState(["Default Headers"]);
  const [choice, setChoice] = useState('');

  const onChange = e => {
    console.log("onChange");
    setFile(e.target.files[0]); // Will only take first file if multiple selected
    setFilename(e.target.files[0].name);
  };

  const submitFile = e => {
    console.log("submitFile");
    const data = new FormData();
    data.append("file", file);

    axios
      .post("/upload", data)
      .then(res => {
        console.log(res);
        console.log(res.header);
        console.log(res.rows);
        console.log(res.rows[0]);
        //setOption(res.data);
        setOptions([...options, "hello world!"]);
      })
      .catch(err => console.warn(err));
  };

  const newChoice = e => {
    console.log("newChoice");
    setChoice(e.target.value);
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
            onChange={ onChange }
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            { filename }
          </label>
        </div>
      </div>

      <button onClick={ submitFile }>Upload</button>

      <p>Drag and drop the uploaded groupings to match our groupings</p>
      <select value={ choice } onChange={ newChoice }>
        { options.map(option =>
          <option value={ option }>{ option }</option>
        )}
      </select>
    </div>
  );
}

export default UploadFile;
