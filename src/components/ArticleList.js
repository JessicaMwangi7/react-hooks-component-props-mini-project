import React from "react";
import Article from "./Article"; // Import the Article component to display individual posts

function ArticleList({ posts }) {
  return (
    <main className="ArticleList"> {/* Wrap the list of articles in <main> */}
      {posts.map((post) => (
        <Article 
          key={post.id} // Use unique 'id' as the key for each article
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
