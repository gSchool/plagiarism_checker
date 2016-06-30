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

$('#trigger').click(function(){
  var check=plagCheck($('#user_input').val(),sources)
  var response;
  if(check.plagerized){
    if(check.authors.length===1){
      response="You have plagerized from "+check.authors[0]+"."
    }
    else{
      response="You have plagerized from"
      check.authors.forEach(function(value, i){
        if(i===check.authors.length-1){
          response+=" and "+value+"."
        }
        else{
          response+=" "+value+","
        }
      })
    }
  }
  else{
    response="Original work, good job!"
  }
  var container=document.getElementById("notice");
  container.innerHTML=response
})

function plagCheck(input, sourcesIn){
  var output={
    plagerized: false,
    authors: []
  }
  sourcesIn.forEach(function(value){
    if(input.indexOf(value.quote)!=-1){
      output.plagerized=true;
      output.authors.push(value.author);
    }
  })
  return output;
}
