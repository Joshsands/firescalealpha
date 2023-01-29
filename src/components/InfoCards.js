import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function InfoCards() {
  return (
    <CardGroup>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='bg-success text-center m-2 h-50'><h3>AHJ approval on first submittal</h3></Card.Title>
          <Card.Text className='mb-3'>
            Get your approved fire alarm permit on the first try or we will credit back the difference of your resubmittal fees!
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <small className="text-muted">First try approval guarantee</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='bg-info text-center m-2 h-50'><h3>Valued Engineering</h3></Card.Title>
          <Card.Text className='mb-3'>
            Provide cost saving device layouts with cost efficent product selection.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <small className="text-muted">Over 50-years of design experience</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='bg-danger text-center m-2 h-50'><h3>Simple and guided instructions</h3></Card.Title>
          <Card.Text className='mb-3'>
            Code compliant installation diagrams for easy-to-follow guides and successful installs.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <small className="text-muted">Reduce the need for field oversight</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default InfoCards;