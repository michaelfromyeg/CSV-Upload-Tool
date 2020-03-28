import React, { useState } from "react";
import axios from "axios";

import * as constants from "./Constants.jsx";

import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DownloadTemplate() {
  const step1 = constants.STEPS[0];

  return (
      <Row>
        <Col>
          <div className="ordered-list-icon">1</div>&emsp;{step1}&emsp;
          <Button color="primary">
            Download (csv)&nbsp;&nbsp;
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </Col>
      </Row>
  );
}

export default DownloadTemplate;
