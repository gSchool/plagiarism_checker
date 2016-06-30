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
$(document).ready(function(){

  $('#trigger').on('click', function(){
    var counter = 0
    var text = $('textarea').val()
    sources.forEach(source => {
      var p = document.createElement('p')
      var quote = source.quote;
      var author = source.author;
      var re = new RegExp(quote,"g");
      if (text.match(quote)){
        counter++
        $(p).html("You have stolen from "+author)
        $('#notice').append(p)
      }
  })

  if (counter === 0) {
    console.log("nice");
    var p = document.createElement("p")
    $(p).html("Wonderful, original prose!")
    $('#notice').append(p)
  }
})
})
