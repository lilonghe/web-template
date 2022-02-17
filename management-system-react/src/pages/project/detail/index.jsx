import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router'
import TabsNav from '@components/tabsNav'

export default function Detail ({ routes }) {
  const { id } = useParams()

  return (
    <div>
      <div>
        Detail {id}
      </div>
      <div>
        <TabsNav routes={routes} />
        <Outlet />
      </div>
    </div>
  )
}
