import { useState } from "react"

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  
  return (
    <div className="card">
      <h1>{title}</h1>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
    </div>
  )
}

export default App
