import './App.css';
import ComplainceForm from './Components/CommentForm/ComplainceForm';
import Tablero from './Components/Tablero/Tablero';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap'
import shortid from 'shortid';

function App() {
  return (
    <Container>
      <Row >
        <Col>
          <Tablero/>
        </Col>
        <Col>
          <ComplainceForm/>
        </Col>
        <Col>
          {shortid.generate()}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
