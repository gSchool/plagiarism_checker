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

$("#trigger").click(function() {
  var input = ($("#user_input").val());
  includes(input);
});

function includes(string){
 $('#notice').empty();
 $(sources).each(function(i, obj){
   if(string.includes(obj.quote)){
     $('#notice').append(`<h4>You have stolen this from ${obj.author}.</h4>`)
   } else {
     return $('#notice').html(`<h4>Congratulations! You have created original, authentic work.</h4>`)
   }
 })
};
