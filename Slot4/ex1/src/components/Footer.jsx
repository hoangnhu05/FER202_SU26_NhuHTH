//1. Footer component hiển thị thông tin quyền và liên kết
// đến trang chủ của tác giả: ID, Tên, Email, Link Github
//Hiền thị Footer ở cuối trang web, đảm bảo rằng nó luôn nằm ở cuối
// trang bất kể nội dung chính có dài hay ngắn.
//Thông tin hien thị Container, Row, Col của Bootstrap để tạo bố cục đẹp mắt
// và dễ đọc.
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
    return (
        <Container fluid className="bg-light text-dark text-center py-3">
      <Row>
        <Col>
           
            <p>&copy; ID: {props.id}.</p>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>GitHub: <a href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a></p>
        </Col>
      </Row>
    </Container>
    );
}

export default Footer;