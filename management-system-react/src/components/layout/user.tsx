import { exitLogin } from '@/services/user'
import { useRequest } from 'ahooks'
import { Avatar, Dropdown } from 'antd'
import useToken from 'antd/es/theme/useToken'
import { useNavigate } from 'react-router-dom'
import styles from './basic-layout.module.less'
import { useSessionStore } from '@/stores/useSessionStore'

export default function User() {
  const [, token] = useToken()
  const { user, clearState } = useSessionStore(state => state)
  const { loading, runAsync } = useRequest(exitLogin, { manual: true })

  const navigate = useNavigate()

  const handleExitLogin = async () => {
    const { data } = await runAsync()
    if (data) {
      clearState()
      navigate('/login')
    }
  }

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'exit',
            label: 'Exit',
            disabled: loading,
            onClick: handleExitLogin,
          },
        ],
      }}
    >
      <Avatar
        className={styles.avatar}
        style={{ background: token.colorPrimary }}
      >
        {user?.name[0]}
      </Avatar>
    </Dropdown>
  )
}
