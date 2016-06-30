var sources = [
  {"author": "Sonia Gandhi",
   "quote": 'Together     we can face any challenges as deep as the ocean and as high as the sky.'
  },
  {"author": "Nina Arianda",
   "quote": 'My favorite place to vacation is anyplace by the ocean.'
  },
  {"author": "Shawn Mendes",
   "quote": 'There is nothing that scares me more than, like, being in the ocean by myself.'
  }
]

$('button').click(function() {
  $('#notice').empty();
  var minimizedAnswer = removeSpaces($("#user_input").val()).toLowerCase();
  sources.forEach(function(source) {
    var minimizedQuote = removeSpaces(source.quote).toLowerCase();
    if (minimizedAnswer.includes(minimizedQuote)) {
      $('#notice').append(`<div>You have stolen from ${source.author}.</div>`)
    }
  })
  if($('#notice').html() === "") {
    $('#notice').append(`<div>Wonderful, original prose!</div>`)
  }
})

function removeSpaces(sentence) {
  return sentence.split(" ").filter(function(word) {
    return word !== "";
  }).join("");
}
