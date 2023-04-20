import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

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



export default function Oquvchilar() {
  
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
                 <h1 className='nws'>Namunali o'quvchilar</h1>
                 <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                 <Table striped bordered  className='text-light'>
      <thead>
        <tr>
          <th>Sinfi </th>
          <th>Ism</th>
          <th>Reyting</th>
          <th>Haftalik ball</th>
        </tr>
      </thead>
      <tbody className='text-light text_light'>
        <tr>
          <td>1</td>
          <td>Xayitov E'zozbek</td>
          <td>1-orin</td>
          <td>47</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>52</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>47</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>52</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>47</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>52</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>47</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>52</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Xayitov E'zozbek</td>
          <td>1-orin</td>
          <td>47</td>
        </tr>
        <tr>
          <td>10</td>
          <td>1Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>52</td>
        </tr>
        <tr>
          <td>11</td>
          <td>1Xayitov E'zozbek</td>
          <td>2-o'rin</td>
          <td>52</td>
        </tr>
      </tbody>
    </Table>

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
  