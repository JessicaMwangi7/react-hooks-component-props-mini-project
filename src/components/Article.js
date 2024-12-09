import React from "react";

// Default props for the Article component
function Article({ title, date, preview, minutes }) {
  // Handle default date if not provided
  const formattedDate = date || "January 1, 1970";

  // Safeguard for minutes (ensure it's a positive number and set a default value)
  const readMinutes = Math.max(minutes || 0, 0);

  // Calculate the "minutes to read" emoji
  let readTime = "";
  if (readMinutes < 30) {
    // Use '☕️' emoji for reading time under 30 minutes
    readTime = "☕️ ".repeat(Math.ceil(readMinutes / 5)) + `${readMinutes} min read`;
  } else {
    // Use '🍱' emoji for reading time over 30 minutes
    readTime = "🍱 ".repeat(Math.ceil(readMinutes / 10)) + `${readMinutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{readTime}</p> {/* Display the reading time with emojis */}
    </article>
  );
}


export default Article;
