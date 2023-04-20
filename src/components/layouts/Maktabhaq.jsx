import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sinflar from './Sinflar';
import { Link } from 'react-router-dom';
// console.log(noyabr22);
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



export default function Maktabhaq() {
// let calpic = "";
// if (oylar=11) {
//   calpic="https://calendarbox.ru/wp-content/uploads/2021/03/noiyabr-2022.png"
// }
  return (
    <div className='bg-dark text-light '>
      <Container>
        <Row >
          <Row>
            <Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h2 className='form-control-sm fw-light'><i class='bx bxs-calendar'></i> {kunlar}-{oy}, {yil}</h2>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}  xl={12}>
               <h1>Maktab haqida</h1>
               <p>
                 Navoiy viloyati Uchquduq tuman xalq ta’limi muassasalari faoliyatini metodik ta’minlash va tashkil etish bo‘limi tasarrufidagi 10-umumiy o‘rta ta’lim maktabi Uchquduq shahar Kosmonavtlar 6-uyda joylashgan. Telefon raqami +99879 593-30-89 “Mustaqillik” MFYda joylashgan, pochta indeksi 210900. Elektoron pochta manzili:uchquduq 10-maktab.vn.uz
               </p>
               <p>
               Maktab direktori <b>Xolmurodova Dilafruz Eshmurodovna </b>  haqida umumiy ma’lumotlar:
               </p>
               <p>
               1974 yilda tug‘ilgan, ma’lumoti oliy, 2005 yilda Navoiy davlat pedagogika institutini boshlang‘ich sinf o‘qituvchisi mutaxassisligi bo‘yicha tugatgan, Diplom raqami V№006041, ish staji 12 yil, rahbarlik staji 10 yil. 2012 yil ikkinchi malaka toifasini olgan.
               </p>
               <p>
               Maktab Ustavi maktabning 2011-yil 30-avgustdagi 1-sonli pedagogika kengashida ishlab chiqilgan va maqullangan, 2011 yil 24-iyunda Uchquduq tuman xalq ta’limi bo‘limi mudiri M.X.Shamuratov tomonidan tasdiqlangan, 2011 yil 24-iyundagi Uchquduq tuman hokimligining № Q-175 –sonli qarori bilan ro‘yxatdan o‘tkazilgan.
               </p>
               <p>
               Maktab pasporti TXTMFMTTEB mudiri M.Shamuratov tomonidan 2016 yil 12 sentyabrda tasdiqlangan. Maktab pasporti 6 bo‘limdan iborat. Pasportda maktab haqida umumiy ma’lumotlar, me’yoriy xujjatlar, ta’lim berish,ta’lim oluvchilar, bino,inshootlar va yer uchastkalar, moddiy o‘quv baza va kadrlar bo‘limidan tashkil topgan.
               </p>
               <p>
               Ta’lim muassasasi loyihasi asosida 1964 yilda qurilgan, binolar soni 1 ta, maktabda 41 ta sinfda jami 1270 nafar o‘quvchilar ta’lim oladi. Maktabda ta’lim o‘zbek tilida olib boriladi. Maktabda o‘qitish 2 smenada olib boriladi.
               </p>
               <Sinflar/>

               <p>
               Maktabda 2016-2017 o‘quv yilida shtat jadvali bo‘yicha jami 103 nafar pedagog xodim faoliyat ko‘rsatmoqda. Pedagog xodimlarning 83 nafari ham oliy ma’lumotli, 9 nafari o‘rta-maxsus ma’lumotli, o‘qituvchilarning 17 nafari (16%) 1-toifali, 51 nafari (49.5 %) 2-toifali, 37 nafari (36%) mutaxassis o‘qituvchilardir.
               </p>
               <p>
               Maktab 2012-yil 6-fevraldan 15-fevralgacha attestatsiya va akkreditatsiyadan o‘tkazilgan. 2012-yil 25-apreldagi UO’ № 002657 sonli Davlat test markazi sertifikat berilgan. Maktabning attestatsiyadan o‘tganligi va akkreditatsiya qilinganligi to‘g‘risidagi hujjatlari to‘plam shaklida bir nusxasi maktabda saqlanmoqda.
               </p>
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
