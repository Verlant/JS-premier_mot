let ask_phrase = prompt(
  "Veuillez saisir une phrase et la console renverra le premier mot de cette phrase"
);
function first_word(phrase) {
  console.log(phrase.search());
  if (phrase.indexOf(" ") > 0) {
    alert(
      "Le premier mot de votre phrase est : " +
        phrase.substring(0, phrase.indexOf(" "))
    );
  } else if (phrase.indexOf(" ") == 0 || phrase.length == 0) {
    ask_phrase = prompt(
      "Votre phrase ne contient aucun mot, veuillez saisir une phrase"
    );
    first_word(ask_phrase);
  } else {
    alert(
      "Votre phrase ne contient qu'un seul mot qui est : " + phrase.substring(0)
    );
  }
}

console.log(first_word(ask_phrase));
