function reverseString(){
  let word = prompt("write the string you want")
  reverseWord= word.split('').reverse().join('')
  alert(reverseWord)
}

function fizzBuzz(){
  let i = 1
  while (i != 101){
    if (i%3 == 0 && i%5==0){
      console.log("FizzBuzz")
    } else if (i%3 == 0){
      console.log("Fizz");
    } else if (i%5==0) {
      console.log("Buzz");
    } else{

      console.log(i);
    }
    i++
  }
}

let vowels = ["a", "e", "i", "o", "u"]
function pigLatin() {
  let sentence = prompt("enter a sentence")
  let newSentence = []
  words = sentence.split(' ')
  for (word in words){
    letters = words[word].split('')
    if (vowels.includes(letters[0])){
      letters.push("ay")
      x = letters.join('')
      newSentence.push(x)
    } else {
      let i = 0
      let cutLetter = letters.shift()
      cutLetter
      letters.push(cutLetter)
      letters.push("ay")
      x = letters.join('')
      newSentence.push(x)
      // for (i = 0; i < letters.length; i++){
      //   if(vowels.includes(letters[i]) == false){
      //    }
      // }
    }
  }
let outPut = newSentence.join(' ')
console.log(outPut);
}
