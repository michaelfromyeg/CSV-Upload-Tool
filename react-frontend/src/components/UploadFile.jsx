import React, { useState } from 'react';

function UploadFile() {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose file');

    const onChange = e => {
        setFile(e.target.files[0]); // Will only take first file if multiple selected
        setFilename(e.target.files[0].name);
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
                        onChange={onChange}
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        { filename }
                    </label>
                </div>
            </div>
            <p>Drag and drop the uploaded groupings to match our groupings</p>
      </div>
    );
  }
  
  export default UploadFile;