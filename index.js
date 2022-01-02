// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  names = ["Ada", "Brendan", "Ali"];
  function writeCards(names){
    const card = [];
    for (let i = 0; i < names.length; i++) {
        card.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return card
}

function countDown(i){
    while (i >= 0){
    console.log(i);
    i--
}
    
}