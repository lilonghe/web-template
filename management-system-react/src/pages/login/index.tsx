import { useSessionStore } from '@/stores/useSessionStore'
import { Button, Spin } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const fetchUserInfo = useSessionStore((state) => state.fetchUserInfo)
  const [loading, setLoading] = useState(false)

  const onSuccess = async () => {
    setLoading(true)
    const res = await fetchUserInfo()
    if (res) {
      navigate('/')
    }
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
