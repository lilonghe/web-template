import { Button, Card, Modal } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthWrapper from '@components/auth/AuthWrapper'
import { NavLink } from 'react-router-dom'

export default function Home () {
  const dispatch = useDispatch()
  const { user, permissions } = useSelector(state => state.session)

  useEffect(() => {
    dispatch.session.fetchUserInfo()
  }, [])

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
