import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <div className='bg-dark err-page'>
        <Container>
            <Row className='err-pg'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-light er-404">
                    <h1>404</h1>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-light">
                    <p>Sahifa topilmadi</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="text-light">
                    <Link to="/" className='btn btn-primary'> Bosh sahifa</Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
