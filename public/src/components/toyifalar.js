import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import maktabrasm from '../rasmlar/maktabim.jpg'

export default function Toyifalar() {
  return (
    <div className='bg-dark'>
         <Container >
        <Row className=''>
            <Col className='py-5 tadbir-sarlavha d-flex justify-content-center align-items-cener flex-column text-center'>
                <h3 className='text-light'>
                Maktab pedagogik jamoasi tarkibi
				</h3>
                <p className='td-line'></p>
            </Col>
        </Row>
        <Row className='gap-5 d-flex justify-content-center py-3'>
            <Col xs={12} sm={12} md={12} xl={3} xxl={2} className='borderuchun d-flex flex-column align-items-center justify-content-center flex-wrap shadow-uchun'>
                <div className='qisqa-hed'>
                    <img src="https://uchquduq10-maktab.uz/wp-content/uploads/2021/11/teach.png" width="100%" height='100%' className='toifapng'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light text-center'> 16</h3>
                    <p className='text-light text-center'>oliy toifali o'qituvchilar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={2} className='borderuchun d-flex flex-column align-items-center justify-content-center flex-wrap shadow-uchun'>
                <div className='qisqa-hed'>
                    <img src="https://uchquduq10-maktab.uz/wp-content/uploads/2021/11/teach.png" width="100%" height='100%' className='toifapng'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light text-center'> 34</h3>
                    <p className='text-light text-center'>1-tofali o'qituvchilar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={2} className='borderuchun d-flex flex-column align-items-center justify-content-center flex-wrap shadow-uchun'>
                <div className='qisqa-hed'>
                    <img src="https://uchquduq10-maktab.uz/wp-content/uploads/2021/11/teach.png" width="100%" height='100%' className='toifapng'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light text-center'> 25</h3>
                    <p className='text-light text-center'>2-toifali o'qituvchilar</p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={3} xxl={2} className='borderuchun d-flex flex-column align-items-center justify-content-center flex-wrap shadow-uchun'>
                <div className='qisqa-hed'>
                    <img src="https://uchquduq10-maktab.uz/wp-content/uploads/2021/11/teach.png" width="100%" height='100%' className='toifapng'/>
                </div>
                <div className='rasm-sarlav'>
                    <h3 className='text-light text-center'> 26</h3>
                    <p className='text-light text-center'>mutaxassis toifali o'qituvchilar</p>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
