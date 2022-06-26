import React from 'react'
import { Card , Button } from 'react-bootstrap'

 const Note = ({note,removeNotes}) => {
const {id,title,body}=note

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {body}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={ ()=>removeNotes(id) }>Sil</Button>
        </Card.Footer>
  </Card>
  )
}

export default Note