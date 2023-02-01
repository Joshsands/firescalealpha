import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import approval from '../assets/approval.jpg'
import engineering from '../assets/engineering.jpg'
import easy from '../assets/easy.jpg'


function InfoCards() {
  return (
    <CardGroup>
      <Card bg='light' className='m-2 infoCard'>
        <Card.Img variant="top"  className='min-vh-25' src={approval} />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-center roundTitles bg-secondary text-center m-2 h-50'><h3>AHJ approval on first submittal</h3></Card.Title>
          <Card.Text className='mb-3'>
            Get your approved fire alarm permit on the first try or we will credit back the difference of your resubmittal fees!
          </Card.Text>
        </Card.Body>
        <Card.Footer className='my-4 text-center bg-secondary roundFooter'>
          <small>First try design approval guarantee</small>
        </Card.Footer>
      </Card>
      <Card bg='light' className='m-2 infoCard'>
        <Card.Img variant="top" className='min-vh-25' src={engineering} />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-center roundTitles bg-secondary text-center m-2 px-1 h-50'><h3>Valued Engineering</h3></Card.Title>
          <Card.Text className='mb-3'>
            Provide cost saving device layouts with cost efficent product selection.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='my-4 text-center bg-secondary roundFooter'>
          <small>Over 50-years of design experience</small>
        </Card.Footer>
      </Card >
      <Card bg='light' className='m-2 infoCard'>
        <Card.Img variant="top" className='min-vh-25' src={easy} />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-center roundTitles bg-secondary text-center m-2 h-50'><h3>Simple and guided instructions</h3></Card.Title>
          <Card.Text className='mb-3'>
            Code compliant installation diagrams for easy-to-follow guides and successful installs.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='my-4 text-center bg-secondary roundFooter'>
          <small>Reduce the need for field oversight</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default InfoCards;