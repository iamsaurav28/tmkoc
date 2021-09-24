var readlinesync = require("readline-sync");

var score = 0;

var username = readlinesync.question("Enter your name?");

console.log(username);

var welcomemessage = "welcome " + username;
console.log(welcomemessage);

var startgame = "lets start game?";
console.log(startgame);

var question1 = readlinesync.question(" gada electronic manager name ?");

if (question1 === "natukaka") {
  console.log(`you are right ${username}`);
  score = score + 1;
  console.log("score is:" + score)
} else { 
  console.log('you are wrong idiot')
  score = score - 1;
  console.log("score is:" + score)
}
//  console.log(question1);


var question2 = readlinesync.question(" do babita loves jethalal ?");

if (question2 === "yes") {
  console.log(`you are right ${username}`);
  score = score + 1;
  console.log("score is:" + score)
} else { 
  console.log('you are wrong idiot')
  score = score - 1;
  console.log("score is:" + score)
}

var question3 = readlinesync.question(" is popatlal married ?");

if (question3 === "no") {
  console.log(`you are right ${username}`);
  score = score + 1;
  console.log("score is:" + score)
} else { 
  console.log('you are wrong idiot')
  score = score - 1;
  console.log("score is:" + score)
}

var question4 = readlinesync.question(" whats goli full name ?");

if (question4 === "gulabkumar") {
  console.log(`you are right ${username}`);
  score = score + 1;
  console.log("score is:" + score)
} else { 
  console.log('you are wrong idiot')
  score = score - 1;
  console.log("score is:" + score)
}


var question5 = readlinesync.question("who is topibaaz?");

if (question5 === "sundar") {
  console.log(`you are right ${username}`);
  score = score + 1;
  console.log("score is:" + score)
} else { 
  console.log('you are wrong idiot')
  score = score - 1;
  console.log("score is:" + score)
}


