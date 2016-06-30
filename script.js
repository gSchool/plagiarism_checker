var sources = [
  {"author": "Sonia Gandhi",
   "quote": 'Together we can face any challenges as deep as the ocean and as high as the sky'
  },
  {"author": "Nina Arianda",
   "quote": 'My favorite place to vacation is anyplace by the ocean'
  },
  {"author": "Shawn Mendes",
   "quote": 'There is nothing that scares me more than, like, being in the ocean by myself'
  }
]

function checker(string){
  $('#notice').empty();
  var arr = string.split('.');
  var arr2 = arr.map(function(val, i){
    return (val.replace(/ /g, '').replace(/\n+/g, "").toLowerCase())

  })
  console.log(arr2);
  $(arr2).each(function(i, sent){
    $(sources).each(function(i, obj){
      if(sent === obj.quote.replace(/ /g, '').toLowerCase()){
        $('#notice').append(`<h4>You have stolen this from ${obj.author}.`)
      }
    })
  })
}
