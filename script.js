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

$("#trigger").click(function(){
  var input = $("#user_input").val();
  var arr = input.split(". ");
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < sources.length; j++){
      if (arr[i].replace(/\./g, '') === sources[j].quote.replace(/\./g, '')){
        $("<p>You've stolen from " + sources[j].author + ".</p>").appendTo("#notice")
      }
    }
  }
})
