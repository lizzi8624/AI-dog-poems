function displayLyric(response) {
  new Typewriter("#lyric", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateLyric(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "93b084b6to4250fb8d980f6fba780ad2";
  let context =
    "You are a creative Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'Liz AI' inside a <strong> element at the end of the poem and NOT at the beginning. Don't use any markdown. It can't rhyme";
  let prompt = `User instructions: Generate a poem about dogd with the name ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let lyricElement = document.querySelector("#lyric");
  lyricElement.classList.remove("hidden");
  lyricElement.innerHTML = `<div class="generating"> Loading..... </div>`;

  axios.get(apiURL).then(displayLyric);
}

let lyricFormElement = document.querySelector("#lyric-generator-form");
lyricFormElement.addEventListener("submit", generateLyric);
