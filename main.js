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
function changePlace(list){
  let cutLetter = letters.shift()
  cutLetter
  letters.push(cutLetter)
  return letters
}
let vowels = ["a", "e", "i", "o", "u", "A","E","I","O","U"]
function pigLatin() {
  let sentence = prompt("enter a sentence")
  let newSentence = []
  words = sentence.split(' ')
  for (word in words){
    letters = words[word].split('')
    var evalu = vowels.includes(letters[0])
    if (vowels.includes(letters[0])){
      letters.push("ay")
      x = letters.join('')
      newSentence.push(x)
    } else {
      changePlace(letters)
      var x
      if (!(vowels.includes(letters[0]))){
        x = true
      } else {
        x = false
      }
      while (x){
        changePlace(letters)
        if (!(vowels.includes(letters[0]))){
          x = true
        } else {
          x = false
        }
      }
      letters.push("ay")
      x = letters.join('')
      newSentence.push(x)
    }
  }
let outPut = newSentence.join(' ')
console.log(outPut);
}
