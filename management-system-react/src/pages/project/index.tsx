import { Table } from 'antd'
import { Link } from 'react-router-dom'

export default function Index () {
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
  const data = [
    {
      id: 1,
      name: 'Project 1'
    },
    {
      id: 2,
      name: 'Project 2'
    }
  ]
  return (
    <div>
      <Table rowKey={r => r.id} dataSource={data} columns={columns} />
    </div>
  )
}
