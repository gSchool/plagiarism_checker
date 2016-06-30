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

var input = $("#user_input");
var trigger = $("#trigger");
var notice = $("#notice");

$(trigger).click(function(){
  $(notice).html("");
  var string = input.val().trim().replace(/\s\s+/g, ' ');
  sources.forEach(function(x, i){
    console.log(string);
    if (string.indexOf(x.quote) > -1) {
      $(notice).append("<h3>You have stolen from " + x.author + "!</h3>");
    }
    else {
      console.log("no theft");
    }
  })
})
