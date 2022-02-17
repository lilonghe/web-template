import { useParams } from 'react-router'

export default function Info () {
  const { id } = useParams()
  return (
    <div>
      Info Page {id}
    </div>
  )
}
