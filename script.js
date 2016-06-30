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

var input = document.getElementById("user_input")

$(document).ready(function(){
  $("#trigger").click(function(){
    for (var i = 0; i < sources.length; i++) {
      if (input.value.toLowerCase().includes(sources[i].quote.toLowerCase())) {
        var callOut = document.createElement("p")
        callOut.innerHTML = "You have stolen from " + sources[i].author
        document.getElementById("notice").appendChild(callOut)
      }
    }
  })
})
