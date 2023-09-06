import { Dropdown, Avatar } from 'antd'
import styles from './basicLayout.module.less'
import useToken from 'antd/es/theme/useToken'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '@/store'
import { useRequest } from 'ahooks'
import { exitLogin } from '@/services/user'
import { useNavigate } from 'react-router-dom'

export default function User () {
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
    <Dropdown menu={{ items: [{ key: 'exit', label: 'Exit', disabled: loading, onClick: handleExitLogin }] }}>
        <Avatar className={styles.avatar} style={{ background: token.colorPrimary }}>{user?.name[0]}</Avatar>
    </Dropdown>
  )
}
