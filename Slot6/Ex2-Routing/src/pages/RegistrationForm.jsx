import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  // Cập nhật dữ liệu khi người dùng nhập
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Xóa lỗi của field đang nhập lại
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Hàm kiểm tra validation
  const validateForm = () => {
    const newErrors = {};

    // Username không được để trống
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
    }

    // Email không được để trống và phải đúng định dạng
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email format is invalid.';
      }
    }

    // Password không được để trống
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          'Password must be at least 6 characters and include uppercase, lowercase, number, and special character.';
      }
    }

    // Confirm password không được để trống và phải khớp
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Confirm password does not match password.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Xử lý khi bấm Register
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Validation thành công thì chuyển về trang Blog Home
     navigate('/home');
    }
  };

  // Xử lý khi bấm Cancel
  const handleCancel = () => {
  navigate('/home');
};

  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white text-center">
          <h4 className="mb-0">Register Account</h4>
        </Card.Header>

        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>

              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />

              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />

              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col>
                <Button type="submit" variant="primary" className="w-100">
                  Register
                </Button>
              </Col>

              <Col>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-100"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegistrationForm;