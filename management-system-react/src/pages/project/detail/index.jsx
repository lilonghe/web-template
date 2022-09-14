import TabsNav from '@components/tabsNav'
import { Outlet, useParams } from 'react-router-dom'

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
