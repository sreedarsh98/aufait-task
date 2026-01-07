import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-icon menu-icon">☰</div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-icon active">
          <i className="icon">🏠</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon">⚡</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon">📊</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon">📋</i>
        </div>
        <div className="sidebar-icon">
          <i className="icon">⚙️</i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
