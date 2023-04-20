import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import maktabrasm from '../rasmlar/maktabim.jpg'
export default function Tadbirlar() {
  return (
    <div className='bg-dark w-100'>
    <Container >
        <Row className=''>
            <Col className='py-5 tadbir-sarlavha d-flex justify-content-center align-items-cener flex-column text-center'>
                <h3 className='text-light'>
					Maktabimizda o'tkazilgan tadbir va ochiq darslar
				</h3>
                <p className='td-line'></p>
            </Col>
        </Row>
        <Row className='gap-5 d-flex justify-content-center py-3'>
            <Col xs={12} sm={12} md={12} xl={3} xxl={3} className='borderuchun'>
                <div className='qisqa-hed'>
                    <img src={maktabrasm} width="100%" height='320px'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light'> Tadbir sarlavhasi</h3>
                    <p className='text-light'>Tadbir haqida qandaydir ma'lumotlar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={3} className='borderuchun'>
                <div className='qisqa-hed'>
                    <img src={maktabrasm} width="100%" height='320px'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light'> Tadbir sarlavhasi</h3>
                    <p className='text-light'>Tadbir haqida qandaydir ma'lumotlar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={3} className='borderuchun'>
                <div className='qisqa-hed'>
                    <img src={maktabrasm} width="100%" height='320px'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light'> Tadbir sarlavhasi</h3>
                    <p className='text-light'>Tadbir haqida qandaydir ma'lumotlar</p>
                </div>
            </Col>
        </Row>
        <Row className='gap-5 d-flex justify-content-center py-3'>
            <Col xs={12} sm={12} md={12} xl={3} xxl={3} className='borderuchun'>
                <div className='qisqa-hed'>
                    <img src={maktabrasm} width="100%" height='320px'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light'> Tadbir sarlavhasi</h3>
                    <p className='text-light'>Tadbir haqida qandaydir ma'lumotlar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={3} className='borderuchun'>
                <div className='qisqa-hed'>
                    <img src={maktabrasm} width="100%" height='320px'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light'> Tadbir sarlavhasi</h3>
                    <p className='text-light'>Tadbir haqida qandaydir ma'lumotlar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={3} className='borderuchun'>
                <div className='qisqa-hed'>
                    <img src={maktabrasm} width="100%" height='320px'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light'> Tadbir sarlavhasi</h3>
                    <p className='text-light'>Tadbir haqida qandaydir ma'lumotlar</p>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
