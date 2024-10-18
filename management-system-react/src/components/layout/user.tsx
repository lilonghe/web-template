import { exitLogin } from '@/services/user'
import { Dispatch, RootState } from '@/store'
import { useRequest } from 'ahooks'
import { Avatar, Dropdown } from 'antd'
import useToken from 'antd/es/theme/useToken'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './basic-layout.module.less'

export default function User() {
  const [, token] = useToken()
  const { user } = useSelector((state: RootState) => state.session)
  const { loading, runAsync } = useRequest(exitLogin, { manual: true })
  const dispatch = useDispatch<Dispatch>()

  const navigate = useNavigate()

  const handleExitLogin = async () => {
    const { data } = await runAsync()
    if (data) {
      dispatch.session.clearState()
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
