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
      const res = await fetch("https://f7aa73ae-c426-45e5-b840-f50c1ee5f069-00-1r88rj5wtpw2w.kirk.replit.dev/chatbot", {
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
  