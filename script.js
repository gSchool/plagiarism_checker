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

$('#trigger').click(function() {
  $('#notice').empty();
  $.each(sources, function(key, value) {
    var input = $("#user_input").val().trim();
    input = input.replace(/\s\s+/g, ' ');
    if (input.indexOf(value.quote) != -1) {
      $('#notice').append('<br>You have stolen from ' + value.author)
    }
  })
  // console.log(input.val());
})
