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
 $("#notice").empty();
  for (var i = 0; i < sources.length; i++) {
    var x = $("#user_input").val().trim();
    x = x.replace(/\s\s+/g, ' ');
    if(x.indexOf(sources[i].quote) > -1){
      $("#notice").append("You have stolen from "+sources[i].author);
    };
  };
})
