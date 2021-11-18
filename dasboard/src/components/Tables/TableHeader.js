import React from 'react';

const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map(column => <th className={column.customClass}>{column.columnName}</th>  )}
            </tr>
        </thead>
    );
};

export default TableHeader;