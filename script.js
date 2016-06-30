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


var button = document.getElementById('trigger')
var userInput = document.getElementById('user_input')
var bucket = document.getElementById('notice')
button.addEventListener('click', function(){


for (var i = 0; i < sources.length; i++) {
  var quote = sources[i].quote
  var y = userInput.value
  var noSpaces = y.replace(/\s/g, '')
  var n = quote.indexOf(noSpaces)
  console.log(n);
  if(n > -1){
    console.log("we got it")
    var newNode = document.createElement("h2")
    bucket.appendChild(newNode)
    newNode.innerHTML = "You have stolen from " + sources[i].author
  }
}


})
