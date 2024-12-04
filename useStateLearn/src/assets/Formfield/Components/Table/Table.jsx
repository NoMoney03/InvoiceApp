import { useState } from "react";
import "./Table.css";

export default function Table({tableRow, setTableRow}) {
  

  const addRow = () =>
    setTableRow([
      ...tableRow,
      {
        No: Date.now(),
        Description: "",
        Quantity: "",
        Price: "",
        Total: "",
        Action: "",
      },
    ]);

  return (
    <>
      <div className="container">
        <h2 className="h2Class">Items</h2>
        <table className="tableMaster">
          <thead>
            <tr>
              <th className="hideClass thlabel">No.</th>
              <th className="hideClass thlabel">Description</th>
              <th className="hideClass thlabel">Quantity</th>
              <th className="hideClass thlabel">Price</th>
              <th className="hideClass thlabel">Total</th>
              <th className="hideClass thlabel">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableRow.map((row, index) => (
              <tr key={row.No} className="tableRow">
                <td>{index + 1}</td>
                <td>
                  <input
                    className="tableInput inputDesc"
                    placeholder="Description"
                    onChange={(e) =>
                      setTableRow((prevRows) =>
                        prevRows.map((row, i) =>
                          i === index
                            ? { ...row, Description: e.target.value }
                            : row
                        )
                      )
                    }
                  ></input>
                </td>
                <td className="inputQty">
                  <input
                    className="tableInput no-arrow inputQty"
                    placeholder="Quantity"
                    type="number"
                    min="0"
                    onChange={(e) => {
                      setTableRow((prevRows) =>
                        prevRows.map((row, i) =>
                          i === index
                            ? {
                                ...row,
                                Quantity: e.target.value,
                              }
                            : row
                        )
                      );

                      setTableRow((prevRows) =>
                        prevRows.map((row, i) =>
                          i === index
                            ? {
                                ...row,
                                Total: row.Price * row.Quantity,
                              }
                            : row
                        )
                      );
                    }}
                  ></input>
                </td>
                <td className="inputPrice">
                  <input
                    className="tableInput no-arrow inputPrice"
                    placeholder="Price"
                    type="number"
                    min="0"
                    onChange={(e) => {
                      setTableRow((prevRows) =>
                        prevRows.map((row, i) =>
                          i === index
                            ? {
                                ...row,
                                Price: e.target.value,
                              }
                            : row
                        )
                      );

                      setTableRow((prevRows) =>
                        prevRows.map((row, i) =>
                          i === index
                            ? {
                                ...row,
                                Total: row.Price * row.Quantity,
                              }
                            : row
                        )
                      );
                    }}
                  ></input>
                </td>
                <td>{row.Total || 0}</td>
                <td>
                  {tableRow.length > 1 ? (
                    <button
                      onClick={() => {
                        setTableRow(
                          tableRow.filter((item) => item.No !== row.No)
                        );
                      }}
                    >
                      X
                    </button>
                  ) : (
                    <button
                      className="hideBtn"
                      onClick={() => {
                        setTableRow(
                          tableRow.filter((item) => item.No !== row.No)
                        );
                      }}
                      disabled
                    >
                      X
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={addRow}>Add Row</button>
      </div>
    </>
  );
}
