import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditRuleModal = ({ show, handleClose, handleEditChanges, ruleInfo, setRuleInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRuleInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(ruleInfo);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Rule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="editRuleTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={ruleInfo.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group controlId="editRuleContext">
            <Form.Label>Context</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="context"
              value={ruleInfo.context}
              onChange={handleChange}
              placeholder="Enter context"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditRuleModal;
