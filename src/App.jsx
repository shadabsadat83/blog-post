import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>❤️ Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>
        Like ❤️
      </button>
    </div>
  );
}

export default App;