async function getResponse() {
    const input = document.getElementById("userQuery");
    const responseDiv = document.getElementById("chatResponse");
    const query = input.value.trim();
  
    // if (!query) {
    //   responseDiv.innerText = "Please enter a question!";
    //   return;
    // }
  
    responseDiv.innerText = "Thinking...";
  
    try {
      const res = await fetch("https://website-chatbot-niconymand.replit.app/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: query })
      });
  
      if (!res.ok) {
        throw new Error("Server error: " + res.status);
      }
  
      const data = await res.json();
      responseDiv.innerText = data.answer || "No answer returned.";
    } catch (err) {
      console.error(err);
      responseDiv.innerText = "Sorry, something went wrong.";
    }
  }
  