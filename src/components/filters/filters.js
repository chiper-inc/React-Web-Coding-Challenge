import React from 'react';
import './filters.scss';

import { FormControl, Button } from 'react-bootstrap';


export default class Filters extends Component {

  render() {

    return (
      <div className="Filters">
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      <Button variant="primary">Primary</Button>
      </div>

    );
  }
}