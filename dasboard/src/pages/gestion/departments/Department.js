import React from 'react'
import CardHeader from '../../../components/Tables/CardHeader'
import TableContainer from '../../../components/Tables/TableContainer'
import TablePaginationButtons from '../../../components/Tables/TablePaginationButtons'
import Wraptable from '../../../components/Tables/WrapTable'
import Layout from '../../Layout'
import AddUser from '../Users/components/AddUser'

export default function Department() {
    return (
        <Layout>
        <Wraptable>
            <AddUser title={''} />
          <CardHeader
            nameTable={"DGDevelopers > Table > Users"}
            searchable={true}
          />
          <TableContainer>
            <SimpleTable columns={columns} data={data} />
          </TableContainer>
        </Wraptable>
        <TablePaginationButtons options={options} fetchData={fetchData} />
      </Layout>
    )
}
