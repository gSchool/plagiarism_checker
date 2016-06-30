var sources = [
  {"author": "Sonia Gandhi",
   "quote": 'Together we can face any challenges as deep as the ocean and as high as the sky.'
  },
  {"author": "Nina Arianda",
   "quote": 'My favorite place to vacation is anyplace by the ocean.'
  },
  {"author": "Shawn Mendes",
   "quote": 'There is nothing that scares me more than, like, being in the ocean by myself.'
  }
]

//first we need to iterate through the sources and pull the key and values
//then we need to do an if statement that sajys if the key is shown then we need to append the dom
//we also need the phrase to be able to include
var user_input = document.getElementById('user_input');
var notice = document.getElementById('notice');
var button = document.getElementById('trigger')
var p1 = document.createElement('p');
var p2 = document.createElement('p')

sources[0].quote
console.log("*********first sources**********");
console.log(sources[0].quote);
console.log("**********first sources**********");
console.log("**********first sources**********");

button.addEventListener("click", function searching(){
  notice.innerHTML = "";
for (var i = 0; i < sources.length; i++) {
  var first = sources[i].quote;
  var workplease = first.includes(sources[i].quote)
  if(user_input.value.includes(sources[i].quote)){
    notice.innerHTML = "You have stolen from " + sources[i].author;
    return;
  }
    else{
    notice.innerHTML = "This is original work!";
  }
}
})
