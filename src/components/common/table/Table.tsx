// ${column?.Header === "Action" && "text-center"}

const Table = ({ useTableData }: { useTableData: any }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
  } = useTableData;

  return (
    <div className="border-stroke  shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm bg-white">
      <div className="max-w-full overflow-x-auto">
        <table className=" w-full table-auto" {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup: any, indx: any) => (
              <tr
                key={indx}
                className="dark:bg-meta-4 bg-[#f7f9fc]  text-left"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column: any) => {
                  return (
                    <th
                      className={` min-w-[180px] px-4 py-4 font-medium text-secondary-5 dark:text-white xl:pl-11`}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row?.cells.map((cell: any) => {
                    return (
                      <td
                        className="dark:border-strokedark border-b border-[#eee] px-4 py-5 pl-9 xl:pl-11"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
