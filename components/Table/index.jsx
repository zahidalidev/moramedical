import DataTable from 'react-data-table-component'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'

import { defaultPageCount } from 'utils/constants/common'

export default ({
  data, count, columns, loading,
}) => {
  const table = (
    <DataTable
      columns={columns}
      data={data}
      theme='solarized'
      defaultSortFieldId={1}
      highlightOnHover
      paginationTotalRows={count}
      paginationPerPage={defaultPageCount}
    />
  )

  const skeleton = (
    <Skeleton>
      <Table rows={5} />
    </Skeleton>
  )

  const load = loading ? skeleton : table

  return data.length !== 0 ? table : load
}
