import { Table } from 'antd'
import { Link } from 'react-router-dom'

export default function Index () {
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
      <Table dataSource={data}>
        <Table.Column dataIndex='id' key='id' title='No.' />
        <Table.Column dataIndex='name' key='name' title='Name' />
        <Table.Column render={(_, r: typeof data[0]) => <Link to={'/project/' + r.id + '/info'}>View</Link>} />
      </Table>
    </div>
  )
}
