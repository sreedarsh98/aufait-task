import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import RiskTable from './RiskTable';
import CreateRiskModal from './CreateRiskModal';
import risksDataImport from '../data/risksData.json';
import './Dashboard.css';

function Dashboard() {
  const [risksData, setRisksData] = useState(risksDataImport);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const getStatusCounts = () => {
    return {
      all: risksData.length,
      new: risksData.filter(r => r.status === 'New').length,
      underMitigation: risksData.filter(r => r.status === 'Under Mitigation').length,
      closed: risksData.filter(r => r.status === 'Closed').length
    };
  };

  const filteredRisks = risksData.filter(risk => {
    const matchesSearch =
      risk.riskId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.phase.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || risk.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreateRisk = (newRisk) => {
    setRisksData([newRisk, ...risksData]);
    setShowCreateModal(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <TopBar
          onSearchChange={setSearchQuery}
          onStatusFilterChange={setStatusFilter}
          activeStatusFilter={statusFilter}
          statusCounts={getStatusCounts()}
          onCreateClick={() => setShowCreateModal(true)}
        />
        <div className="content-area">
          <RiskTable risks={filteredRisks} />
        </div>
      </div>
      <CreateRiskModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onSubmit={handleCreateRisk}
      />
    </div>
  );
}

export default Dashboard;
