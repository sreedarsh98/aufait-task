import { useState } from 'react';
import { Table, Badge, Pagination } from 'react-bootstrap';
import './RiskTable.css';

function RiskTable({ risks }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const getStatusClass = (status) => {
    switch (status) {
      case 'Open Mitigation':
        return 'status-open';
      case 'New':
        return 'status-new';
      case 'Under Mitigation':
        return 'status-under';
      case 'Closed':
        return 'status-closed';
      case 'Exposed':
        return 'status-exposed';
      default:
        return '';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'Opportunity' ? '🔵' : '🔴';
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedRisks = [...risks].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedRisks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedRisks.length / itemsPerPage);

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return '⇅';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="risk-table-container">
      <Table hover responsive className="risk-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('riskId')} style={{ cursor: 'pointer' }}>
              Risk ID {getSortIndicator('riskId')}
            </th>
            <th onClick={() => handleSort('description')} style={{ cursor: 'pointer' }}>
              Risk Activity Description {getSortIndicator('description')}
            </th>
            <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
              Status {getSortIndicator('status')}
            </th>
            <th onClick={() => handleSort('type')} style={{ cursor: 'pointer' }}>
              Type {getSortIndicator('type')}
            </th>
            <th onClick={() => handleSort('phase')} style={{ cursor: 'pointer' }}>
              Phase {getSortIndicator('phase')}
            </th>
            <th onClick={() => handleSort('department')} style={{ cursor: 'pointer' }}>
              Department {getSortIndicator('department')}
            </th>
            <th onClick={() => handleSort('likelihood')} style={{ cursor: 'pointer' }}>
              Likelihood score (Unstr... - Intrisic) {getSortIndicator('likelihood')}
            </th>
            <th onClick={() => handleSort('impact')} style={{ cursor: 'pointer' }}>
              Impact score (Unstr... - Intrisic) {getSortIndicator('impact')}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((risk) => (
            <tr key={risk.id}>
              <td className="risk-id">{risk.riskId}</td>
              <td className="description">{risk.description}</td>
              <td>
                <Badge className={`status-badge ${getStatusClass(risk.status)}`}>
                  {risk.status}
                </Badge>
              </td>
              <td>
                <span className="type-cell">
                  {getTypeIcon(risk.type)} {risk.type}
                </span>
              </td>
              <td>{risk.phase}</td>
              <td>{risk.department}</td>
              <td className="text-center">{risk.likelihood}</td>
              <td className="text-center">{risk.impact}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="table-footer">
        <div className="showing-info">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedRisks.length)} of {sortedRisks.length} items
        </div>
        <Pagination className="custom-pagination">
          <Pagination.Prev
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          />
          <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>
            1
          </Pagination.Item>
          {currentPage > 3 && <Pagination.Ellipsis />}
          {currentPage > 2 && currentPage < totalPages && (
            <Pagination.Item active onClick={() => setCurrentPage(currentPage)}>
              {currentPage}
            </Pagination.Item>
          )}
          {currentPage < totalPages - 1 && <Pagination.Ellipsis />}
          {totalPages > 1 && (
            <Pagination.Item
              active={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </Pagination.Item>
          )}
          <Pagination.Next
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default RiskTable;
