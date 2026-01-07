import { Form, InputGroup, Button, Dropdown } from "react-bootstrap";
import {
  BarChart3,
  AlertTriangle,
  Target,
  Search,
  SlidersHorizontal,
  Plus,
  Check
} from "lucide-react";
import "./TopBar.css";

function TopBar({
  onSearchChange,
  onStatusFilterChange,
  activeStatusFilter,
  statusCounts,
  onCreateClick,
}) {
  const isActive = (status) => activeStatusFilter === status;

  return (
    <div className="topbar">
      {/* Row 1 */}
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

      {/* Row 2 */}
      <div className="topbar-row">
        <div className="status-filters">
          {["all", "New", "Under Mitigation", "Closed"].map((status) => (
            <button
              key={status}
              className={`status-tab ${isActive(status) ? "active" : ""}`}
              onClick={() => onStatusFilterChange(status)}
            >
              {status === "all" ? "All" : status}
              <span>
                {status === "all"
                  ? statusCounts.all
                  : status === "New"
                  ? statusCounts.new
                  : status === "Under Mitigation"
                  ? statusCounts.underMitigation
                  : statusCounts.closed}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Row 3 */}
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

          {/* 🔽 Filters Dropdown with Highlight */}
          <Dropdown>
            <Dropdown.Toggle variant="light" className="filters-btn">
              <SlidersHorizontal size={16} /> Filters
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter-menu">
              <Dropdown.Item
                onClick={() => onStatusFilterChange("all")}
                className={isActive("all") ? "active-filter" : ""}
              >
                {isActive("all") && <Check size={14} className="me-2" />}
                All ({statusCounts.all})
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => onStatusFilterChange("New")}
                className={isActive("New") ? "active-filter" : ""}
              >
                {isActive("New") && <Check size={14} className="me-2" />}
                New ({statusCounts.new})
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => onStatusFilterChange("Under Mitigation")}
                className={isActive("Under Mitigation") ? "active-filter" : ""}
              >
                {isActive("Under Mitigation") && <Check size={14} className="me-2" />}
                Under Mitigation ({statusCounts.underMitigation})
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => onStatusFilterChange("Closed")}
                className={isActive("Closed") ? "active-filter" : ""}
              >
                {isActive("Closed") && <Check size={14} className="me-2" />}
                Closed ({statusCounts.closed})
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
