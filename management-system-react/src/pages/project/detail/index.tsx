import TabsNav from '@/components/tabs-nav'
import { IMyRoute } from '@/routes'
import { Outlet, useParams } from 'react-router-dom'

export default function Detail({ routes }: { routes: IMyRoute[] }) {
  const { id } = useParams()

  return (
    <div>
      <div>Detail {id}</div>
      <div>
        <TabsNav routes={routes} />
        <Outlet />
      </div>
    </div>
  )
}
