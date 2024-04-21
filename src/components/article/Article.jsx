import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pic from '../../assets/pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './article.scss';
import Like from './Actions/Like';
import Comment from './Actions/Comment';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import articles from '../toparticles/articlesData'; // Assuming you have your articles data in a file

const Article = () => {
  const { id } = useParams(); // Get article ID from URL params
  const article = articles.find(article => article.id === parseInt(id)); // Find article by ID

  if (!article) {
    return <div>Article not found</div>; // Handle case where article is not found
  }

  const articleDate = article.date ? moment(article.date, "DD-MM-YYYY") : moment();

  return (
    <div className='ARTICLE'>
      <Container>
        <figure className='position-relative'>
          <h1 className='title mb-3'>{article.title}</h1>
          <h7 className='subtitle mt-2'>{article.caption}</h7>
          <Row className='d-flex flex-row align-items-center mt-3'>
            <Col xs={1}>
              <img className='object-fit-fill rounded-full author-img' src={pic} alt='Author' />
            </Col>
            <Col xs={4}>
              <h4 className='author'>{article.author}</h4>
            </Col>
            <Col xs={7}>
              <h4 className='author'>{articleDate.format("DD MMM YYYY")}</h4>
            </Col>
          </Row>
          <div className='line'></div>
          <Row className='d-flex flex-row align-items-center justify-content-between'>
            <Col xs={5}>
              <h4 className='author d-inline'>Type of article: </h4> 
              <h4 className='Type d-inline'>{article.type}</h4>
            </Col> 
            <Col xs={3} className='d-flex align-items-center justify-content-between'>
              <Like />
              <Comment />
            </Col>
          </Row>

          <div className='line'></div>
          <img src={pic} alt='pic' className='img-fluid my-2' />
          <figcaption>
            <p className='par'>{article.picap}</p>

            <div style={{ marginTop: '3rem', marginBottom:'3rem' }} >{article.content}</div>
          
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Article;
