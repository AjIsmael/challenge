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
    }else if (i%3 == 0){
      console.log("Fizz");
    }
    else{

      console.log(i);
    }
    i++
  }
}
