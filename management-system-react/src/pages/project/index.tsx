import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getProjectList } from '@/services/project'
import { useState } from 'react'

export default function Index () {
  const [params, setParams] = useState({ page: 1, pageSize: 20 })
  const { loading, data } = useRequest(() => getProjectList(params), {
    refreshDeps: [params]
  })

  const columns = [
    {
      key: 'id',
      title: 'No.',
      dataIndex: 'id'
    },
    {
      key: 'name',
      title: 'name',
      dataIndex: 'name'
    },
    {
      key: 'action',
      title: 'name',
      dataIndex: 'id',
      render: (t:string) => <Link to={'/project/' + t + '/info'}>View</Link>
    }
  ]

  const handlePageChange = (page: number) => {
    setParams({ ...params, page })
  }

  return (
    <div>
      <Table
        loading={loading}
        rowKey={r => r.id}
        dataSource={data?.data?.list || []}
        pagination={{
          total: data?.data?.total,
          onChange: handlePageChange,
          showQuickJumper: true,
          showSizeChanger: false
        }}
        columns={columns} />
    </div>
  )
}
