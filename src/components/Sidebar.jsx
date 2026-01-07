import {
  Home,
  LayoutGrid,
  Pencil,
  FileText,
  Layers,
  Settings
} from "lucide-react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Top Section */}
      <div className="sidebar-header">
        <div className="sidebar-icon menu-icon">
          <LayoutGrid size={20} />
        </div>
      </div>

      {/* Middle Menu */}
      <div className="sidebar-menu">
        <div className="sidebar-icon active">
          <Home size={20} />
        </div>
        <div className="sidebar-icon">
          <Pencil size={20} />
        </div>
        <div className="sidebar-icon">
          <FileText size={20} />
        </div>
        <div className="sidebar-icon">
          <Layers size={20} />
        </div>
      </div>

      {/* Bottom Settings */}
      <div className="sidebar-footer">
        <div className="sidebar-icon">
          <Settings size={20} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
