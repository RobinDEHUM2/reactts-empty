import { makeStyles } from "@material-ui/core/styles"
import React from "react"

import { GenericTable } from "../../component/table/GenericTable"
import { columns, rows } from "./data"

const useStyles = makeStyles({
  container: {
    maxHeight: 440
  }
})

export default function SearchCompany() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <GenericTable
      className={classes.container}
      columns={columns}
      rows={rows}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}
