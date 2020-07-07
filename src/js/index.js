/* eslint-disable */
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon", "taco", "us"];
  let extensions = [".com", ".es", ".us", ".co"];
  let domain = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          if (compareEnding(noun, extension)) {
            let regularExp = new RegExp(extension.slice(1, extension.length));
            let modifiedNoun = noun.replace(regularExp, "");
            //console.log(noun,regularExp,modifiedNoun);
            domain.push(pronoun.concat(adjective, modifiedNoun, extension));
            domain.push(pronoun.concat(adjective, noun, extension));
          } else {
            domain.push(pronoun.concat(adjective, noun, extension));
          }
        }
      }
    }
  }
  console.log(domain);
  domain.forEach(element => {
    document.getElementById("domain").innerHTML += element + "<br>";
  });
};

function compareEnding(aString, bString) {
  bString = bString.slice(1, bString.length); //remove the dot of the extension
  aString = aString.slice(-bString.length, aString.length); //take just the last words of the noun according to the extension`s length
  //aString=aString.toLocaleLowerCase(); //not needed bc everything is in lower case already
  return aString.includes(bString);
}
