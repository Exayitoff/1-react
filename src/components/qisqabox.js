import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
export default function Qisqabox() {
  return (
    <div className="bg-dark">
      <Container>
        <Row className="justify-content-between gap-5 px-3">
            <Col className="px-3 py-2 bg-light d-flex justify-content-center mamuriyat bg-dark" xxl={3} xl={3} md={12} sm={12} xs={12}>
                <Link to="maktabhaqida" className="qisqabox-link">
                    <div className="qisqabox-dv d-flex justify-content-center align-items-center">
                    <i className='bx bx-buildings bx-md'></i>
                    </div>
                    <div className="qisqa-text">
                      <h3 className="text-light">Maktab haqida</h3>
                      <p className="text-light">Maktabimiz haqida, uning tarixi haqida ma'lumot  </p>
                    </div>
                </Link>
            </Col>
            <Col className="px-3 py-2 bg-light d-flex justify-content-center mamuriyat bg-dark" xxl={3} xl={3} md={12} sm={12} xs={12}>
                <Link to="oqituvchilar" className="qisqabox-link ">
                    <div className="qisqabox-dv d-flex justify-content-center align-items-center">
                    <i className='bx bxs-id-card bx-md'></i>
                    </div>
                    <div className="qisqa-text">
                      <h3 className="text-light">Ma'muriyat</h3>
                      <p className="text-light">Maktabimiz rahbar xodimlari haqida ma'lumot </p>
                    </div>
                </Link>
            </Col>
            <Col className="px-3 py-2 bg-light d-flex justify-content-center mamuriyat bg-dark" xxl={3} xl={3} md={12} sm={12} xs={12}>
                <Link to="maktabhayoti" className="qisqabox-link">
                    <div className="qisqabox-dv d-flex justify-content-center align-items-center">
                    <i className='bx bx-photo-album bx-md'></i>
                    </div>
                    <div className="qisqa-text">
                      <h3 className="text-light">Maktab hayoti</h3>
                      <p className="text-light">Maktabimizda tadbir va o'quv jarayonlaridan fotolavhalar  </p>
                    </div>
                </Link>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
