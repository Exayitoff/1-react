import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sinflar from './Sinflar';
import  kalendar  from "../../rasmlar/calendar.jpg";
import  noyabr22  from "../../rasmlar/Noyabr.jpg";
import  dekabr22  from "../../rasmlar/2022-dekabr.png";
import  yanvar23  from "../../rasmlar/yanvar-2023.png";
import  fevral23  from "../../rasmlar/fevral-2023.png";
import  mart23  from "../../rasmlar/mart-2023.png";
import  aprel23  from "../../rasmlar/aprel-2023.png";
import  may23  from "../../rasmlar/may-2023.png";
import  iyun23  from "../../rasmlar/iun-2023.png";
// console.log(noyabr22);
const yillar = new Date();
const oylar = yillar.getUTCMonth()+1;
const yil = yillar.getFullYear();
const kunlar = yillar.getDate();
let oy = "";
console.log(oylar);
  switch (oylar) {
    case 1:
      oy = "Yanvar"
      break;
    case 2:
      oy = "Fevral"
      break;
    case 3:
      oy = "Mart"
      break;
    case 4:
      oy = "Aprel"
      break;
    case 5:
      oy = "May"
      break;
    case 6:
      oy = "Iyun"
      break;
    case 7:
      oy = "Iyul"
      break;
    case 8:
      oy = "Avgust"
      break;
    case 9:
      oy = "Sentabr"
      break;
    case 10:
      oy = "Oktabr"
      break;
    case 11:
      oy = "Noyabr"
      break;
    case 12:
      oy = "Dekabr"
      break;
    default:
      break;
  }
  // let kalendarlar = "";


export default function Maktabhaq() {

  return (
    <div className='bg-dark text-light'>
      <Container>
        <Row >
          <Row>
            <Col>
            <Col xs={12} sm={12} md={12} xl={12}>
              <h2 className='form-control-sm fw-light'><i class='bx bxs-calendar'></i> {kunlar}-{oy}, {yil}</h2>
            </Col>
            <Col xs={12} sm={12} md={12} xl={12}>
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
            <Col xs={0} sm={0} md={0} xl={3} className="calendar_pic">
              <img src={} alt="Kalendar jpg" width="100%"/>
              
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}
