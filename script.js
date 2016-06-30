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
$("#trigger").click((e) => {
  var userinput = $("#user_input").val().toLowerCase().trim()
  var stolen = sources.filter((obj) => {
    return obj.quote.toLowerCase() === userinput
  })
  if(stolen.length === 0){
    $("#notice").html("Good student. nothing stolen.")
  } else {
    $("#notice").html("Thief! You stole from " + stolen[0].author)
  }
})
