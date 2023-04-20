import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import gerb from '../rasmlar/gerb.png'
export default function Footer() {
  return (
    <div className='bg-dark text-light py-5'>
        <Container className='py-5 '>
            <Row className=' footer-class'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center">
                    <img src={gerb} alt={gerb} width="60px" height="60px"  />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center">
                    <p className='text-light'>29-maktab</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center py-2">
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center">
                    <p className='text-light'>29-maktab © {new Date().getFullYear()} All Rights Reserved.</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center">
                    <p className='text-light'>Powered by Xayitov E'zozbek. </p>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}
