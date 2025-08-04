import React from 'react';
import { Table, type TableColumn, type TableData } from '../index';

const TableExample: React.FC = () => {
  // Basic Table 컬럼 정의
  const basicColumns: TableColumn[] = [
    { key: 'patientCode', label: 'Patient Code' },
    { key: 'department', label: 'Department' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
    { key: 'actions', label: 'Actions' },
  ];

  // 테이블 데이터
  const tableData: TableData[] = [
    {
      id: '1',
      patientCode: 'P2024-001',
      department: 'Pediatrics',
      status: 'completed',
      date: '2024-01-15',
    },
    {
      id: '2',
      patientCode: 'P2024-002',
      department: 'Emergency',
      status: 'in-progress',
      date: '2024-01-15',
    },
    {
      id: '3',
      patientCode: 'P2024-003',
      department: 'Psychiatry',
      status: 'pending',
      date: '2024-01-14',
    },
  ];

  const handleRowClick = (row: TableData) => {
    console.log('Row clicked:', row);
  };

  const handleActionClick = (action: string, row: TableData) => {
    console.log(`${action} action clicked for:`, row);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Tables</h1>

      {/* Basic Table */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Table</h2>
        <Table
          variant="basic"
          columns={basicColumns}
          data={tableData}
          onRowClick={handleRowClick}
          onActionClick={handleActionClick}
        />
      </div>

      {/* Compact Table */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Compact Table</h2>
        <Table
          variant="compact"
          columns={basicColumns}
          data={tableData}
          onRowClick={handleRowClick}
          onActionClick={handleActionClick}
        />
      </div>

      {/* Empty State Example */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Empty Table</h2>
        <Table
          variant="basic"
          columns={basicColumns}
          data={[]}
          onRowClick={handleRowClick}
          onActionClick={handleActionClick}
        />
      </div>

      {/* Compact Table with more data */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Compact Table with More Data</h2>
        <Table
          variant="compact"
          columns={basicColumns}
          data={[
            ...tableData,
            {
              id: '4',
              patientCode: 'P2024-004',
              department: 'Cardiology',
              status: 'completed',
              date: '2024-01-13',
            },
            {
              id: '5',
              patientCode: 'P2024-005',
              department: 'Neurology',
              status: 'in-progress',
              date: '2024-01-12',
            },
          ]}
          onRowClick={handleRowClick}
          onActionClick={handleActionClick}
        />
      </div>
    </div>
  );
};

export default TableExample;
