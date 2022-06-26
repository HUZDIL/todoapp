import  React , { useState } from 'react'
import {Button,Form} from "react-bootstrap"


 const NoteForm = ({ createNotes }) => {
const [title, settitle] = useState("");
const [desc, setdesc] = useState("")

const handleTitle =(e)=>{
  settitle(e.target.value)
}



  return (
    <>
      <Form.Group className="mb-3" >
        <Form.Label>Baslik</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitle}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Aciklama</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={(e)=>setdesc(e.target.value)}/>
      </Form.Group>
      <Button variant="warning"
      onClick={ ()=>
      createNotes(

        {
        title:title,
        body:desc,
        userId:1,
      })

        }>  Ekle</Button>
    </>
  );
};

export default NoteForm;