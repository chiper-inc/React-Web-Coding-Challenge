import React from "react";
import { Input, Button, Row, Col } from "reactstrap";
import { FormGroup, Form } from "./styles";

export const StolenBikesSearcher = () => (
  <Form>
    <Row className='justify-content-md-center' form>
      <Col md={3}>
        <FormGroup>
          <Input placeholder="Search case descriptions" />
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <Input type="date" />
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <Input type="date" />
        </FormGroup>
      </Col>
      <Col md='auto'>
        <Button color="primary">Find cases</Button>
      </Col>
    </Row>
  </Form>
);
