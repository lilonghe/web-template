import { RootState } from '@/store'
import AuthWrapper from '@components/auth/AuthWrapper'
import { Button, Card, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Home () {
  const dispatch = useDispatch()
  const { user, permissions } = useSelector((state: RootState) => state.session)

  return (
    <Card title='Home'>
      <p>Welcome to the Home page, {user?.name}</p>
      <AuthWrapper authority='user-confirm'>
        <Button
          onClick={() => {
            dispatch.session.savePermissions([...permissions, 'private'])
            Modal.success({
              title: 'Now you can access [Private] page.'
            })
          }}
        >
          Inject Private Permission
        </Button>
      </AuthWrapper>

      <NavLink to='/project/123/info'>TabNav</NavLink>
    </Card>
  )
}
