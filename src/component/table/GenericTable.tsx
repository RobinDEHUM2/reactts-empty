import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core"
import React from "react"

export type ColumnType<Attributes> = {
  id: Attributes
  label: String
  minWidth: number
  align?: "left" | "center" | "right" | "justify" | "inherit" | undefined
  format?: (value: number) => {}
  type?: string
}

export function GenericTable<
  Values,
  Attributes extends React.Key,
  Row extends Record<"code" | Attributes | string, Values> & { code: React.Key }
>({
  className,
  columns,
  rows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage
}: {
  className: string
  columns: ColumnType<Attributes>[]
  rows: Row[]
  rowsPerPage: number
  page: number
  handleChangePage: (
    _event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    newPage: number
  ) => void
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <Paper>
      <TableContainer className={className}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
