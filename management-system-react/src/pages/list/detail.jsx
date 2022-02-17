import { useParams } from 'react-router'

export default function Detail () {
  const params = useParams()
  return (
    <div>
      List Detail {params.id}
    </div>
  )
}
