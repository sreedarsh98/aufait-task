import { Form, InputGroup, Button, Badge } from "react-bootstrap";
import {
  BarChart3,
  AlertTriangle,
  Target,
  Search,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import "./TopBar.css";

function TopBar({
  onSearchChange,
  onStatusFilterChange,
  activeStatusFilter,
  statusCounts,
  onCreateClick,
}) {
  return (
    <div className="topbar">
      {/* Row 1: Title + KPI Pills */}
      <div className="topbar-row-h topbar-header">
        <h1 className="dashboard-title">Enterprise Risk Management</h1>

        <div className="stats-pills">
          <div className="pill">
            <BarChart3 size={16} />
            <strong>213</strong> Open Risks
          </div>
          <div className="pill">
            <AlertTriangle size={16} />
            <strong>23</strong> High Priority
          </div>
          <div className="pill">
            <Target size={16} />
            <strong>121</strong> Threats
          </div>
        </div>
      </div>

      {/* Row 2: Status Tabs */}
      <div className="topbar-row">
        <div className="status-filters">
          <button
            className={`status-tab ${
              activeStatusFilter === "all" ? "active" : ""
            }`}
            onClick={() => onStatusFilterChange("all")}
          >
            All <span>{statusCounts.all}</span>
          </button>
          <button
            className={`status-tab ${
              activeStatusFilter === "New" ? "active" : ""
            }`}
            onClick={() => onStatusFilterChange("New")}
          >
            New <span>{statusCounts.new}</span>
          </button>
          <button
            className={`status-tab ${
              activeStatusFilter === "Under Mitigation" ? "active" : ""
            }`}
            onClick={() => onStatusFilterChange("Under Mitigation")}
          >
            Under Mitigation <span>{statusCounts.underMitigation}</span>
          </button>
          <button
            className={`status-tab ${
              activeStatusFilter === "Closed" ? "active" : ""
            }`}
            onClick={() => onStatusFilterChange("Closed")}
          >
            Closed <span>{statusCounts.closed}</span>
          </button>
        </div>
      </div>

      {/* Row 3: Search + Filters + Create (BELOW like screenshot) */}
      <div className="topbar-row search-row">
        <div className="search-left">
          <InputGroup className="search-input">
            <InputGroup.Text>
              <Search size={16} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Find..."
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </InputGroup>

          <Button variant="light" className="filters-btn">
            <SlidersHorizontal size={16} />
            Filters
          </Button>
        </div>

        <Button
          variant="warning"
          className="create-btn"
          onClick={onCreateClick}
        >
          <Plus size={16} />
          Create
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
