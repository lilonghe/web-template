import { Table } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'

export default function List () {
  const data = [
    { id: 1, name: 'haha' },
    { id: 2, name: 'yaya' }
  ]

  return (
    <div>
      <Table dataSource={data}>
        <Table.Column dataIndex='id' title='id' />
        <Table.Column dataIndex='name' title='name' />
        <Table.Column dataIndex='id' title='action' render={(t, r) => <NavLink to={'/list/' + t}>View</NavLink>} />
      </Table>
      <Outlet />
    </div>
  )
}
