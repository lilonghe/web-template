import { Popconfirm, Table, message } from 'antd'
import { Link } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { deleteProject, getProjectList } from '@/services/project'
import { useState } from 'react'

export default function Index () {
  const [params, setParams] = useState({ page: 1, pageSize: 20 })
  const { loading, data, refresh: refreshProjectList } = useRequest(() => getProjectList(params), {
    refreshDeps: [params]
  })
  const { loading: deleteLoading, runAsync: runDeleteProject } = useRequest(deleteProject, {
    manual: true
  })

  const handleDeleteProject = async (id: string) => {
    const res = await runDeleteProject({ id })
    if (res.data) {
      message.success('删除成功')
      if (data?.data?.list && data.data.list.length > 1) {
        refreshProjectList()
      } else {
        handlePageChange(params.page - 1)
      }
    }
  }

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
      render: (t:string) => <div>
        <Link to={'/project/' + t + '/info'}>View</Link>
        <Popconfirm title='Confirm delete the project?' onConfirm={() => handleDeleteProject(t)}>
          <a style={{ marginLeft: 10 }}>Delete</a>
        </Popconfirm>
      </div>
    }
  ]

  const handlePageChange = (page: number) => {
    setParams({ ...params, page })
  }

  return (
    <div>
      <Table
        loading={loading || deleteLoading}
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
