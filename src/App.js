import {Container,Row,Col} from "react-bootstrap";
import Notes from "./component/Notes";
import NoteForm from "./component/NoteForm";
import axios from "axios"
import {useState, useEffect} from "react";



function App() {

  const [notes, setnotes] = useState([])

useEffect(() => {
loadNotes();
},[])

const loadNotes = () => { 
  axios("https://jsonplaceholder.typicode.com/posts")
.then((resp)=>setnotes(resp.data))
 };


 const removeNotes = (id) => {
  if(!id) return;

  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((resp)=>{
const arr = notes.filter(item=>item.id != id);
setnotes(arr);
alert("deleted");
    });
 };

 const createNotes =(note)=>{
  axios.post("https://jsonplaceholder.typicode.com/posts", note)
  .then(resp=>{
    setnotes([resp.data, ...notes])
  })
  


  return (
    <Container>
     <Row>
        <Col md={3}>
              
          <NoteForm createNotes={createNotes} />
        </Col>
        <Col md={9}>

          <Notes data={notes} removeNotes={removeNotes}/>

        </Col>
     </Row>
    </Container>
  );
}
}


export default App