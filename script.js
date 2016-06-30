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

var notice = document.getElementById('notice');
var submit = document.getElementById('trigger');


submit.addEventListener('click', function() {
  var input = document.getElementById('user_input').value.toLowerCase().replace(/\s/g, '');

  sources.forEach(function(obj){
    var tempQuote = obj.quote.toLowerCase().replace(/\s/g, '');
    if (input.indexOf(tempQuote) > -1){
      var createP = document.createElement('p')
      createP.innerHTML = 'You stole some of this work from ' + obj.author + ". Please write in your own words.";
      notice.appendChild(createP);
    }
  })

});
