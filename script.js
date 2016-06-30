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
var button = document.getElementById('trigger');
var input = document.getElementById('user_input');
var notice = document.getElementById('notice');

$(button).on('click',function(){
  $(notice).empty();
  checkPlagiarism($(input).val());
})

function checkPlagiarism(input){
  var cheater = false;
  input = input.replace(/\s/g,'');
  sources.forEach(function(source){
    var nospace = source.quote.replace(/\s/g,'');
    if(input.includes(nospace)){
      var response = document.createElement('p');
      $(response).html('you have stolen from '+source.author);
      $(response).appendTo(notice);
      cheater = true;
    }
  })
  if(!cheater){
    var response = document.createElement('p');
    $(response).html('nice work');
    $(response).appendTo(notice);
  }
}
