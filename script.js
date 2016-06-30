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

$(document).ready(function() {
  $('#trigger').on("click", function(){
    $('#notice').empty();
    var check = [];
    for (var i in sources){
      var quote = sources[i].quote.toLowerCase().replace(/\s/g, '').replace(/,/g, "").replace(/\./g, '');
      var input = $('#user_input').val().toLowerCase().replace(/\s/g, '').replace(/,/g, "").replace(/\./g, '');
      var author = document.createElement("p");
      author.innerHTML = "You have stolen from " + sources[i].author;
      if (input.indexOf(quote) >= 0){
        $('#notice').append(author);
        check.push(sources[i].author);
      }
    }
    if (check.length === 0){
    var original = document.createElement("p");
    original.innerHTML = "Wonderful, original prose!";
    $('#notice').append(original);
    }
  });
});
