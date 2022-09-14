import TabsNav from '@components/tabsNav'
import { useParams } from 'react-router'
import { Outlet } from 'react-router-dom'

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
