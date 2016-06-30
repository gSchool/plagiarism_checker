







$( document ).ready(function() {
    $("#trigger").click(function() {
      var userInput = $("#user_input").val().replace(/\s\s+/g, ' ');
      for (i=0; i< sources.length; i++) {
      if (userInput.indexOf(sources[i].quote) > -1) {
        // var newNode = $(li);
$("#notice").append("<br> you have stolen from " + sources[i].author);
      }
     }
    });
});



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
];
