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

var input = $('#user_input')
$('#trigger').click(function() {
  $.each(sources, function(key, value) {
    if (input.val().indexOf(value.quote) != -1) {
      $('#notice').empty();
      $('#notice').append('You have stolen from ' + value.author)
    }else {
      $('#notice').empty();
      $('#notice').append('You good, fam');
      // console.log('no');
    }
  })
  // console.log(input.val());
  // $('#notice').this.trigger.removeChild(this);
})
