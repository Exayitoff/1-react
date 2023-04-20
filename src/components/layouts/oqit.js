import Card from 'react-bootstrap/Card';

function Oqituvchicard(props) {
  return (
    <Card style={{ width: '100%' }} className="bg-dark my-2">
      <Card.Img variant="top" src={props.rasm} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.haqida}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Oqituvchicard;