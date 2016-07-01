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

$("document").ready(function(){
  $("#trigger").on("click", function(){
        var userInput =  $("#user_input").val().replace(/\s/g,"");
        var gandhiName = sources[0].author;
        var ariandaName = sources[1].author;
        var mendesName = sources[2].author;
        $("#notice").html("");
        if(userInput.indexOf(sources[0].quote.replace(/\s/g,"")) != -1){
          $("#notice").append("<p>You copied from "+gandhiName+"</p>")
      }
        if(userInput.indexOf(sources[1].quote.replace(/\s/g,"")) != -1){
          $("#notice").append("<p>You copied from "+ariandaName+"</p>")
      }
        if(userInput.indexOf(sources[2].quote.replace(/\s/g,"")) != -1){
          $("#notice").append("<p>You copied from "+mendesName+"</p>")
      }
   })
})
