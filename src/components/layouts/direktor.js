import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import direktor from "../../rasmlar/direktor.jpg"
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



export default function Maktabdirektor() {
    function murojaatdr(){
      let form = document.querySelector("form");
      form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let ism = document.getElementById("ism").value;
        let msg = document.getElementById("msg").value;
        fetch(`https://api.telegram.org/bot5947812930:AAEx4fQKfei9r2crT4-DxgPgh-K9qa8tcC8/sendMessage?chat_id=-1001874623127&parse_mode=html&text=👤Ismi: <b> ${ism} </b> %0A ✅Murojaat: <i> ${msg} </i>`);
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
                 <h1 > Maktab direktori</h1>
                 <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Row className='direktor-galery justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                      <img src={direktor} alt="direktor" className='dr-pic'/>
                      <h2 className='fw-light'>Karimov Azamat</h2>
                      <p >Yangiariq tuman 29-o’rta maktab direktori</p>
                      <p>Telefon raqami: +998-97-362-40-48</p>
                      <p>Pochta manzili: Yangiariq Yangiobod,Beruniy ko'chasi 1-uy</p>
                    </div>
                  </Row>
                  <Row className=' justify-content-center my-5'>
                  <Col  xs={12} sm={12} md={12} lg={12} xl={8}>
                    <form className='form-direktor'>
                      <h3>
                        Direktorga murojaat
                      </h3>
                      <div className='form-group'>
                        <label for="ism">Ismingiz</label>
                        <input type="text" id="ism" className='form-control' placeholder='Ismingizni kiriting' required/>
                        <small></small>
                      </div>
                      <div className='form-group'>
                        <label for="msg">Murojaat</label>
                        <textarea cols={50} rows="8" id='msg'  className='form-control' placeholder='Murojaatingizni kiriting' required></textarea>
                      </div>
                      <div className='form-group'>
                        <input type="submit" value="Yuborish" onClick={murojaatdr} className='form-control my-2 btn btn-success'/>
                      </div>
                    </form>
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
  