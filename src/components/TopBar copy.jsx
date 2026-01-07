import { Form, InputGroup, Button, Badge } from 'react-bootstrap';
import './TopBar.css';

function TopBar({
  onSearchChange,
  onStatusFilterChange,
  activeStatusFilter,
  statusCounts,
  onCreateClick
}) {
  return (
    <div className="topbar">
     
      <div className="dashboard-header">
        <h1 className="dashboard-title">Enterprise Risk Management</h1>

        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-value">213</div>
              <div className="stat-label">Open Risks</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon priority">⚠️</div>
            <div className="stat-content">
              <div className="stat-value">23</div>
              <div className="stat-label">High Priority High Priority</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon threats">🎯</div>
            <div className="stat-content">
              <div className="stat-value">121</div>
              <div className="stat-label">Threats</div>
            </div>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <div className="status-filters">
          <Button
            variant={activeStatusFilter === 'all' ? 'warning' : 'light'}
            className={`status-filter-btn ${activeStatusFilter === 'all' ? 'active' : ''}`}
            onClick={() => onStatusFilterChange('all')}
          >
            All <Badge bg="secondary">{statusCounts.all}</Badge>
          </Button>
          <Button
            variant={activeStatusFilter === 'New' ? 'warning' : 'light'}
            className={`status-filter-btn ${activeStatusFilter === 'New' ? 'active' : ''}`}
            onClick={() => onStatusFilterChange('New')}
          >
            New <Badge bg="warning">{statusCounts.new}</Badge>
          </Button>
          <Button
            variant={activeStatusFilter === 'Under Mitigation' ? 'warning' : 'light'}
            className={`status-filter-btn ${activeStatusFilter === 'Under Mitigation' ? 'active' : ''}`}
            onClick={() => onStatusFilterChange('Under Mitigation')}
          >
            Under Mitigation <Badge bg="secondary">{statusCounts.underMitigation}</Badge>
          </Button>
          <Button
            variant={activeStatusFilter === 'Closed' ? 'warning' : 'light'}
            className={`status-filter-btn ${activeStatusFilter === 'Closed' ? 'active' : ''}`}
            onClick={() => onStatusFilterChange('Closed')}
          >
            Closed <Badge bg="secondary">{statusCounts.closed}</Badge>
          </Button>
        </div>

        <div className="search-section">
          <InputGroup className="search-input">
            <InputGroup.Text></InputGroup.Text>
            <Form.Control
              placeholder="Search..."
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </InputGroup>
          <Button variant="light" className="filters-btn">
             Filters
          </Button>
          <Button variant="warning" className="create-btn" onClick={onCreateClick}>
            + Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
