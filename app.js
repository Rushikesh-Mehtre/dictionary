let input = document.getElementById("input");
let button = document.getElementById("btn");
let alert = document.getElementById("alert");
button.addEventListener("click", getMeaning);

async function getMeaning() {
  document.getElementById("container1").style.display = "none";

  document.getElementById("img").style.display = "block";
  if (input.value.length == 0) {
    document.getElementById("alert").style.display = "none";
    document.getElementById("img").style.display = "block";
    setTimeout(function () {
      document.getElementById("alert").style.display = "block";
      document.getElementById("img").style.display = "none";
    }, 1000);
  } else {
    document.getElementById("alert").style.display = "none";

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    let data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
    );
    let response = await data.json();
    document.getElementById("container1").style.display = "block";
    let meaning = response[0].meanings[0].definitions[0].definition;
    let example = response[0].meanings[0].definitions[0].example;
    let synonyms = response[0].meanings[0].definitions[0].synonyms.slice(0, 4);
    let antonyms = response[0].meanings[0].definitions[0].antonyms.slice(0, 4);
    let partsofspeech = response[0].meanings[0].partOfSpeech;
    let listen = response[0].phonetics[0].audio;

    if (response.length > 0) {
      document.getElementById("alert").style.display = "none";
      document.getElementById("meaning").innerHTML = meaning;
      document.getElementById("example").innerHTML = example;
      document.getElementById("synonyms").innerHTML = synonyms;
      document.getElementById("antonyms").innerHTML = antonyms;
      document.getElementById("partsofspeech").innerHTML = partsofspeech;
      document.getElementById("listen").setAttribute("src", listen);
      document.getElementById("img").style.display = "none";
    } else {
      document.getElementById("container1").style.display = "none";

      document.getElementById("alert1").style.display = "none";
      document.getElementById("img").style.display = "block";
      setTimeout(function () {
        document.getElementById("alert1").style.display = "block";
        document.getElementById("img").style.display = "none";
      }, 1000);
    }
  }
}
