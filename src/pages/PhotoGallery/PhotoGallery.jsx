import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Gallery from '../../components/Gallery/Gallery'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const PhotoGallery = () => {
  return (
    <>
    <Breadcrumbs title="Photo Gallery" pagename="Gallery " childnamed="d-none" />
    <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col class md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
    
  )
}

export default PhotoGallery
