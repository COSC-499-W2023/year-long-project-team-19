import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddRuleModal = ({ show, handleClose, handleSaveChanges, setRuleInfo, ruleInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRuleInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Rule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRuleOrder">
            <Form.Label>Order</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter order"
              name="order"
              value={ruleInfo.order}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formRuleTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={ruleInfo.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formRuleContext">
            <Form.Label>Context</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter context"
              name="context"
              value={ruleInfo.context}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRuleModal;
