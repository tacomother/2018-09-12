(() => {
  let words = ["AVROSOFT", "IS", "IT", "COMPANY"],
    text = document.getElementById("text"),
    count = 0;

  function displayWord(word) {
    let charCount = 0,
      charInterval = setInterval(() => {
        text.textContent += word[charCount];

        charCount++;

        if (charCount >= word.length) {
          if (count < words.length) {
            setTimeout(function() {
              deleteWord(word);
            }, 300);
          }
          clearInterval(charInterval);
        }
      }, 150);
  }

  function deleteWord() {
    let deleteCount = text.textContent.length,
      deleteInterval = setInterval(() => {
        text.textContent = text.textContent.slice(0, -1);

        deleteCount--;

        if (deleteCount <= 0) {
          clearInterval(deleteInterval);
        }
      }, 150);
  }

  setTimeout(() => {
    displayInterval = setInterval(() => {
      displayWord(words[count]);

      count++;

      if (count >= word.length) {
        clearInterval(charInterval);
      }
    }, 1500);
  }, 2750);

  function init() {
    displayWord(words[count]);
    count++;
  }

  init();
})();
