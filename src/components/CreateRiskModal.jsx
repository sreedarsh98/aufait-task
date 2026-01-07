import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function CreateRiskModal({ show, onHide, onSubmit }) {
  const [formData, setFormData] = useState({
    riskId: '',
    description: '',
    status: 'New',
    type: 'Opportunity',
    phase: 'Acquired',
    department: 'Finance',
    likelihood: 1,
    impact: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: formData.riskId,
      likelihood: parseInt(formData.likelihood),
      impact: parseInt(formData.impact)
    });
    setFormData({
      riskId: '',
      description: '',
      status: 'New',
      type: 'Opportunity',
      phase: 'Acquired',
      department: 'Finance',
      likelihood: 1,
      impact: 1
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Create New Risk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Risk ID</Form.Label>
                <Form.Control
                  type="text"
                  name="riskId"
                  value={formData.riskId}
                  onChange={handleChange}
                  placeholder="e.g., ERM-0001"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="New">New</option>
                  <option value="Open Mitigation">Open Mitigation</option>
                  <option value="Under Mitigation">Under Mitigation</option>
                  <option value="Exposed">Exposed</option>
                  <option value="Closed">Closed</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Risk Activity Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter risk description..."
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Opportunity">Opportunity</option>
                  <option value="Threat">Threat</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Phase</Form.Label>
                <Form.Select
                  name="phase"
                  value={formData.phase}
                  onChange={handleChange}
                  required
                >
                  <option value="Acquired">Acquired</option>
                  <option value="Transit">Transit</option>
                  <option value="Testing">Testing</option>
                  <option value="Iterative">Iterative</option>
                  <option value="Staffing">Staffing</option>
                  <option value="Procurement">Procurement</option>
                  <option value="Warranty">Warranty</option>
                  <option value="Financing">Financing</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Department</Form.Label>
                <Form.Select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="Finance">Finance</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Mfg. Assembly">Mfg. Assembly</option>
                  <option value="Sales">Sales</option>
                  <option value="CEESO/OA-OBO">CEESO/OA-OBO</option>
                  <option value="Products Sales">Products Sales</option>
                  <option value="SCM LMD">SCM LMD</option>
                  <option value="HR">HR</option>
                  <option value="Mfg. Subcontracting">Mfg. Subcontracting</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Likelihood Score (1-5)</Form.Label>
                <Form.Control
                  type="number"
                  name="likelihood"
                  min="1"
                  max="5"
                  value={formData.likelihood}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Impact Score (1-5)</Form.Label>
                <Form.Control
                  type="number"
                  name="impact"
                  min="1"
                  max="5"
                  value={formData.impact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="warning" type="submit" style={{ backgroundColor: '#ff6b2c', borderColor: '#ff6b2c' }}>
              Create Risk
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateRiskModal;
