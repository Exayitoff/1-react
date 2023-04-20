import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
const yillar = new Date();
const oylar = yillar.getUTCMonth()+1;
const yil = yillar.getFullYear();
const kunlar = yillar.getDate();
let oy = "";
let calpic = "";
  switch (oylar) {
    case 1:
      oy = "Yanvar"
      calpic = "https://calendarbox.ru/wp-content/uploads/2021/06/yanvar-2023.png"
      break;
    case 2:
      oy = "Fevral"
      calpic = "https://calendarbox.ru/wp-content/uploads/2021/06/fevral-2023.png"
      break;
    case 3:
      oy = "Mart"
      calpic = "https://calendarbox.ru/wp-content/uploads/2021/06/mart-2023.png"
      break;
    case 4:
      oy = "Aprel"
      calpic = 'https://calendarbox.ru/wp-content/uploads/2021/06/aprel-2023.png'
      break;
    case 5:
      oy = "May"
      calpic = 'https://calendarbox.ru/wp-content/uploads/2021/06/may-2023.png'
      break;
    case 6:
      oy = "Iyun"
      calpic = 'https://calendarbox.ru/wp-content/uploads/2021/06/iun-2023.png'
      break;
    case 7:
      oy = "Iyul"
      calpic = 'https://calendarbox.ru/wp-content/uploads/2021/06/iul-2023.png'
      break;
    case 8:
      oy = "Avgust"
      calpic = 'https://calendarbox.ru/wp-content/uploads/2021/06/avgust-2023.png'
      break;
    case 9:
      oy = "Sentabr"
      calpic = 'https://calendarbox.ru/wp-content/uploads/2021/06/sentiabr-2023.png'
      break;
    case 10:
      oy = "Oktabr"
      calpic = "https://calendarbox.ru/wp-content/uploads/2021/06/oktiabr-2023.png"
      break;
    case 11:
      oy = "Noyabr"
      calpic = "https://calendarbox.ru/wp-content/uploads/2021/03/noiyabr-2022.png"

      break;
    case 12:
      oy = "Dekabr"
      calpic = "https://calendarbox.ru/wp-content/uploads/2021/03/dekabr-2022.png"
      break;
    default:
      calpic = ""
      break;
  }



export default function Maktabhayoti() {
  
    return (
      <div className='bg-dark text-light '>
        <Container>
          <Row >
            <Row>
              <Col>
               <Col xs={12} sm={12} md={12} lg={12} xl={12}>
               <h2 className='form-control-sm fw-light'><i class='bx bxs-calendar'></i> {kunlar}-{oy}, {yil}</h2>
               </Col>
               <Col>
                 <h1 > Maktab galereyasi</h1>
                 <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Row className='maktab-galery'>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-2">
                      <img src="https://pbs.twimg.com/media/DjasrQNXgAA0VA5.jpg" width="100%" alt="galery"/>
                    </Col>
                  </Row>
                  <Row>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2 " aria-label="First group ">
                      <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                      <Button>4</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  </Row>
                 </Col>
               </Col>
              </Col>
              <Col xs={0} sm={0} md={0} xl={3} className="calendar_pic d-xl-block d-lg-none d-md-none d-sm-none d_xs_none">
                <img src={calpic} alt="Kalendar jpg" width="100%"/>
                <div className="form-group d-flex flex-column gap-2">
                  <p className='text-muted text-center my-2 border-bottom'>ARXIVLAR</p>
                  <Link to="arxiv-noyabr" className='btn btn-outline-light form-control'>Noyabr 2022</Link>
                  <Link to="arxiv-oktabr" className='btn btn-outline-light form-control'>Oktabr 2022</Link>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    )
}
  