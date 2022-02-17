import { useParams } from 'react-router'

export default function Setting () {
  const { id } = useParams()
  return (
    <div>
      Setting Page {id}
    </div>
  )
}
