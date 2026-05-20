//Pizza component hiển thị thông tin của 1 pizza,
// gom: id, name, price, description, imageUrl, orignalPrice,
// salePrice, tag
//Hien thị thông tin của pizza trong một card,
// sử dụng react-bootstrap để tạo giao diện đẹp mắt và dễ đọc.
//CSS cho card để nó có nên sáng, chữ màu tối và được căn giữa.
import { Card, Button } from 'react-bootstrap';
import React from 'react';

function Pizza({ pizza }) {
    return (
           <Card style={{ width: '100%' }} className="h-100 shadow-sm bg-light text-dark text-center position-relative">
            
            
            {pizza.tag && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    {pizza.tag}
                </span>
            )}
            
            <Card.Img variant="top" src={pizza.imageUrl} alt={pizza.name} style={{ height: '180px', objectFit: 'cover' }} />
            
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold">{pizza.name}</Card.Title>
                <Card.Text className="text-muted small">
                    {pizza.description}
                </Card.Text>
                
               
                <div className="my-2">
                    {pizza.salePrice ? (
                        <>
                            <span className="text-danger fw-bold me-2">${pizza.salePrice}</span>
                            <span className="text-muted text-decoration-line-through small">${pizza.originalPrice}</span>
                        </>
                    ) : (
                        <span className="fw-bold text-primary">${pizza.price}</span>
                    )}
                </div>

                <Button variant="secondary" className="mt-2w-100">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Pizza;