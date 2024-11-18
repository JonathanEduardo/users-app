import React from 'react';

const TableHeader = ({ columns, onSort }) => (
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.key} onClick={() => onSort(column.key)}>
                    {column.label}
                </th>
            ))}
        </tr>
    </thead>
);

export default TableHeader;
