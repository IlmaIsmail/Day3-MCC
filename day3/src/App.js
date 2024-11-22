import './App.css';
import Books from './components/Books';
import Mycont from './components/Mycont';
import Student from './components/Student';
import Container from './react-bootstrap/Container';
import Raw from './react-bootstrap/Row';



function App() {
  const sum=(num1,num2)=>{
    const s=num1+num2;
    console.log(`Sum is `+s);
    return s;
  }

  const books=[
    {id:"uov125",name:"fundamentals of programming",page:200},
    {id:"uov126",name:"js for beginners",page:150},
    {id:"uov127",name:"knowledge base:guide book",page:200},
    {id:"uov128",name:"newsletter issue 2,vol1",page:20},
    {id:"uov129",name:"modern web app",page:450}, 
  ];
  const selectedBook =(book)=>{
    console.log(`selected book is ${book.name} which has ${book.pages} pages`)
  }
  return (
     <Container>
        <Row>
          <Col>
            <image src={logo}/>
          </Col>
          <Col>
            <Mycont msg="Hello react!" dosum={sum}/>
          </Col>
        </Row>
     </Container>
  );
}

export default App;
