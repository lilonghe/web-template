
export default function About () {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      {Array(100).fill('test').map(item => <p key={Math.random()}>{item}</p>)}
    </div>
  )
}
