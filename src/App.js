import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Alex"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: '18rem' }} className="text-center p-3 shadow">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 className="mt-3">
        {firstName ? `Bonjour, ${firstName} !` : "Bonjour !"}
      </h3>

      {firstName && <img src="https://via.placeholder.com/100" alt="Profile" className="mt-2 rounded-circle" />}
    </Container>
  );
}

export default App;