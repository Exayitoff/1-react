import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
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



export default function Anonim() {
  function murojaata(){
    let form = document.querySelector("form");
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      let p = document.querySelector(".mvfq");
      p.style= `display: block`
      let aism = document.getElementById("aism").value;
      let amsg = document.getElementById("amsg").value;
      fetch(`https://api.telegram.org/bot5947812930:AAEx4fQKfei9r2crT4-DxgPgh-K9qa8tcC8/sendMessage?chat_id=-1001874623127&parse_mode=html&text=👤Ismi sirli: <b> ${aism} </b> %0A ✅Murojaat: <i> ${amsg} </i>`);
    })
  }
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
                 <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Row className=' justify-content-center my-5'>
                  <Col  xs={12} sm={12} md={12} lg={12} xl={8}>
                    <form className=''>
                      <h3>
                        Anonim murojaat
                      </h3>
                      <div className='form-group'>
                        <label for="aism">Ismingiz</label>
                        <input type="text" id="aism" className='form-control' placeholder='Ismingizni kiriting' required/>
                        <small className='text-muted'>Asl ismingizni kiritmang</small>
                      </div>
                      <div className='form-group'>
                        <label for="amsg">Murojaat</label>
                        <textarea cols={50} rows="8" id='amsg'  className='form-control' placeholder='Murojaatingizni kiriting' required></textarea>
                      </div>
                      <div className='form-group'>
                        <input type="submit" onClick={murojaata} value="Yuborish" className='form-control my-2 btn btn-success'/>
                      </div>
                    </form>
                    <p className='text-muted mvfq'>Sizning murojaatingiz <a href='https://t.me/yangiariq_29m'className=' text-decoration-none' >@yangiariq_29m</a> kanalida ko'rib chiqilmoqda</p>
                  </Col>
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
  