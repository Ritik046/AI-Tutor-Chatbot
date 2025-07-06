async function askQuestion() {
  const question = document.getElementById("question").value;

  const res = await fetch("http://localhost:3000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();

  const answerDiv = document.getElementById("answer");
  answerDiv.innerText = data.answer;
  answerDiv.classList.add("show");

  const videoDiv = document.getElementById("video");
  if (data.videoId) {
    const embedHtml = `
      <iframe
        src="https://www.youtube.com/embed/${data.videoId}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;
    videoDiv.innerHTML = embedHtml;
    videoDiv.classList.add("show");
  } else {
    videoDiv.innerHTML = "No video found.";
    videoDiv.classList.add("show");
  }
}
