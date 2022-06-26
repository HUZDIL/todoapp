import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Note from "./Note";

const Notes = ({ data ,removeNotes}) => {

  return (
    <Container>
      <Row className="g-5">
       
        {data.map((item) => (
          <Col md={4} key={item.id}>
            <Note note={item} removeNotes={removeNotes} />
          </Col>
        ))}
        
      </Row>
    </Container>
  );
};
export default Notes;