import React, { Component } from "react";
import { Button, Label } from "reactstrap";
import { Control, Form } from "react-redux-form";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(values) {
    this.props.postQuery(values);
  }
  handleSubmit(values) {
    this.props.postQuery(values);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 m-auto">
          <Form
            model="query"
            onSubmit={(values) => this.handleSubmit(values)}
            onChange={(values) => this.handleChange(values)}
          >
            <div className="col-12 col-sm-4 col-md-3 formElement ">
              <Control
                type="text"
                model=".query"
                id="query"
                name="query"
                placeholder="Search cases by incident"
                className="form-control "
              />
            </div>

            <div className="col-6 col-sm-4 col-md-3 formElement">
              <Label for="occurred_after" className="formLabel">
                From:
              </Label>
              <Control
                type="date"
                model=".occurred_after"
                id="occurred_after"
                name="occurred_after"
                placeholder="From"
                className="form-control"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 formElement">
              <Label for="occurred_before" className="formLabel">
                To
              </Label>
              <Control
                type="date"
                model=".occurred_before"
                id="occurred_before"
                name="occurred_before"
                placeholder="To"
                className="form-control"
              />
            </div>
            <div className="col-12 mt-3 col-md-3 formElement">
              <Button className="col-12" type="submit">
                Find Cases
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
