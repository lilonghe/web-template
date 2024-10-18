import AuthWrapper from '@/components/auth/auth-wrapper'
import { RootState } from '@/store'
import { Button, Card, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const { user, permissions } = useSelector((state: RootState) => state.session)

  return (
    <Card title="Home">
      <p className="text-xl">Welcome to the Home page, {user?.name}</p>
      {!permissions.includes('private') && (
        <AuthWrapper authority="user-confirm">
          <Button
            onClick={() => {
              dispatch.session.savePermissions([...permissions, 'private'])
              Modal.success({
                title: 'Now you can access [Private] page.',
              })
            }}
          >
            Inject Private Permission/开启私有权限
          </Button>
        </AuthWrapper>
      )}

      <NavLink to="/project/123/info">TabNav</NavLink>
    </Card>
  )
}
