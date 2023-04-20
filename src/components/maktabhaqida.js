import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import maktabim from '../rasmlar/maktabim.jpg'
export default function Maktabhaqida() {
  return (
    <div className='bg-dark bg-black text-light py-4 '>
      <Container >
        <Row >
            <Col xs={12} sm={12} md={12} xl={6} className='p-5 d-flex justify-content-center align-items-center'>
            <p>
                <h2>Maktab ilmiy hayoti</h2>
                29-sonli maktabda faoliyat olib borayotgan ustozlar o'quvchilarga bugungi kun talablari asosida chuqur bilim berishmoqda. Maktabda o'quvchilar qiziqishlariga ko'ra turli to'garaklar muntazam faoliyat olib bormoqda. o'qituvchilarning o'zaro hamkorligi, tajriba almashinib faoliyat yuritishi, darslarni kuzatib tahlil qilishlari dars samaradorligi yuksalishiga zamin yaratmoqda.
            </p>
            </Col>
            <Col xs={12} sm={12} md={12} xl={6} className='p-5 maktab-rasm'>
                <img src='https://96-maktab.uz/images/about_03.jpg' alt='' width='100%' className='mk_rasm'/>
            </Col>
        </Row>

        <Row >
            <Col xs={12} sm={12} md={12} xl={6} className='p-5 maktab-rasm'>
                <img src={maktabim} alt='' width='100%' className='mk_rasm' height='315px'/>
            </Col>
            <Col xs={12} sm={12} md={12} xl={6} className='p-5 d-flex justify-content-center align-items-center '>
            <p>
                <h2 >Maktab ilmiy hayoti</h2>
                29-sonli maktabda faoliyat olib borayotgan ustozlar o'quvchilarga bugungi kun talablari asosida chuqur bilim berishmoqda. Maktabda o'quvchilar qiziqishlariga ko'ra turli to'garaklar muntazam faoliyat olib bormoqda. o'qituvchilarning o'zaro hamkorligi, tajriba almashinib faoliyat yuritishi, darslarni kuzatib tahlil qilishlari dars samaradorligi yuksalishiga zamin yaratmoqda.
            </p>
            </Col>

        </Row>
      </Container>
    </div>
  )
}
