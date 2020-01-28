import React from 'react';

function Food({ fav }) {
  
  return <h1>I like {fav}</h1>
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food
        fav="kimchi"
        something={true}
        papapapapa={["hello", 1, 2, 3, 4, true]}
      />
      <Food
        fav="ramen"
        something={true}
        papapapapa={["hello", 1, 2, 3, 4, true]}
      />
      <Food
        fav="samgiopsal"
        something={true}
        papapapapa={["hello", 1, 2, 3, 4, true]}
      />
      <Food
        fav="chukumi"
        something={true}
        papapapapa={["hello", 1, 2, 3, 4, true]}
      />
    </div>
  );
}

export default App;
