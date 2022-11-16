import React, { useEffect, useState } from 'react';
import styles from '../styles/Table.module.css';

interface ITableRow {
  [key: string]: string | number;
}

interface ITableProps {
  tableTitle?: string;
  columns: (string | number)[];
  rows: ITableRow[];
  checkboxSelection?: boolean;
  onCheckboxSelected?: (val: ITableRow[]) => void;
}

function Table({
  tableTitle,
  columns,
  rows,
  onCheckboxSelected,
  checkboxSelection
}: ITableProps) {
  const [selection, setSelection] = useState<string[]>([]);

  useEffect(() => {
    if (onCheckboxSelected)
      onCheckboxSelected(
        rows.filter((x) => selection.includes(x.id.toString()))
      );
  }, [selection, rows]);

  const toggleCheckboxRow = (id: string) =>
    setSelection((rowSelection) =>
      rowSelection.includes(id)
        ? rowSelection.filter((item) => item !== id)
        : [...rowSelection, id]
    );

  const toggleAllTable = () =>
    setSelection((rowSelection) =>
      rowSelection.length === rows.length
        ? []
        : rows.map((row) => row.id.toString())
    );

  const tableRows = rows.map((tableData) => {
    const selected = selection.includes(tableData.id.toString());
    const selectedClass = selected ? styles.selected : styles.unselected;

    return (
      <tr key={tableData.id}>
        {checkboxSelection && (
          <td
            key={`checkbox-${tableData.id}`}
            data-testid="table-cell"
            className={`${styles.tableCell} ${selectedClass}`}
          >
            <input
              data-testid="table-checkbox"
              type="checkbox"
              checked={selection.includes(tableData.id.toString())}
              onChange={() => toggleCheckboxRow(tableData.id.toString())}
            />
          </td>
        )}
        {Object.keys(tableData).map((key) => (
          <td
            key={`row-${tableData.id}-${key}`}
            data-testid="table-cell"
            className={`${styles.tableCell} ${selectedClass}`}
          >
            {tableData[key]}
          </td>
        ))}
      </tr>
    );
  });

  const tableColumns = columns.map((tableData) => (
    <th
      key={tableData}
      data-testid="table-cell"
      className={styles.columnHeader}
    >
      {tableData}
    </th>
  ));

  return (
    <div>
      {tableTitle ? <p className={styles.columnText}>{tableTitle}</p> : null}
      <table>
        <thead>
          <tr>
            {checkboxSelection ? (
              <th data-testid="table-cell" className={styles.checkboxColumn}>
                <input
                  data-testid="table-checkbox"
                  type="checkbox"
                  onChange={toggleAllTable}
                  checked={selection.length === rows.length}
                />
              </th>
            ) : null}
            {tableColumns}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
