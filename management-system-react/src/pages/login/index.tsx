import { Dispatch, RootState } from '@/store'
import { Button, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<Dispatch>()
  const loadings = useSelector((state: RootState) => state.loading)
  const loading = loadings.effects.session.fetchUserInfo

  const onSuccess = async () => {
    await dispatch.session.fetchUserInfo()
    navigate('/')
  }

  return (
    <div>
      <Spin spinning={loading}>
        <Button
          type="primary"
          disabled={loading}
          onClick={() => {
            onSuccess()
          }}
        >
          Login
        </Button>
      </Spin>
    </div>
  )
}

export default Login
