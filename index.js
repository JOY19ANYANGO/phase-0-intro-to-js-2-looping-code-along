// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
 let names=["Guadalupe", "Ollie", "Aki"]
 let event="surprise"
 function writeCards(names, event){
  let message=[]
  for(let i=0;i<names.length;i++){
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return message;
 }
 function countDown(){
 let countDown = 10;
while (countDown >=0) { 
  console.log(countDown--)
  }
}
countDown()
