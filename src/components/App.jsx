// import React from "react";
// import Entry from "./Entry";
// import emojipedia from "../emojipedia";

// function CreateEmoji(emojiTerm){
//   return (
//   <Entry
//   key={emojiTerm.id}
//   emoji={emojiTerm.emoji}
//   name={emojiTerm.name}
//   description={emojiTerm.meaning}
// />
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>
//         <span>EmojiPedia</span></h1>
//       <dl className="dictionary">
//         {emojipedia.map(CreateEmoji)}
//       </dl>
//     </div>
//   );
// }
// export default App;
import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState(emojipedia); // show all by default

  useEffect(() => {
    const term = searchTerm.trim();

    if (term === "") {
      // If no search, show all emojis
      setFilteredEmojis(emojipedia);
    } else {
      // Filter by emoji match (can extend for name/meaning too)
      const results = emojipedia.filter(
        (emoji) =>
          emoji.emoji.includes(term) || // match emoji character
          emoji.name.toLowerCase().includes(term.toLowerCase()) // optional: match name
      );
      setFilteredEmojis(results);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>

      {/* Search Input */}
      <div className="container">
        <input
          type="text"
          placeholder="Search emoji or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            width: "250px",
            textAlign: "center",
          }}
        />
      </div>

      {/* Emoji List */}
      <dl className="dictionary">
        {filteredEmojis.length > 0 ? (
          filteredEmojis.map((emojiTerm) => (
            <Entry
              key={emojiTerm.id}
              emoji={emojiTerm.emoji}
              name={emojiTerm.name}
              description={emojiTerm.meaning}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No emoji found.</p>
        )}
      </dl>
    </div>
  );
}

export default App;
