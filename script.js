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
document.getElementById("trigger").addEventListener("click",function() {doPlagerizeTest(document.getElementById("user_input").value)});

function doPlagerizeTest(inputText) {
  var trimmedText = inputText.replace(/\s+/g, '')
  var el = document.getElementById("notice").innerHTML
  el = ""
  for (var j=0; j<sources.length; j++) {
    var trimmedQuote = sources[j].quote.replace(/\s+/g, '')
    for (var i = 0; i < trimmedText.length; i++) {
      if (trimmedText.includes(trimmedQuote,[i])) {
        el += `<p>You have stolen from ${sources[j].author}</p>`
        i = trimmedText.length
      }
    }
  }
  document.getElementById("notice").innerHTML = el
}

function doPlagerizeTestHO(inputText) {
  sources.forEach(function(source) {
    if (inputText.indexOf(source.quote) > -1) {
      el += "you have stolen from"
    }
  })
}
// var inputText = "Hello, My    favorite place to vacation is anyplace by the ocean. and There is nothing that scares me more than, like, being in the ocean by myself."
// var trimmedText = 'helloMyfavoriteplacetovacationisanyplacebytheocean.'
// var trimmedQuote= 'Myfavoriteplacetovacationisanyplacebytheocean.'
// var result = doPlagerizeTest(inputText)
