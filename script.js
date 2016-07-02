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

var btn = document.getElementById('trigger');
var inpt = document.getElementById('user_input');
var notice = document.getElementById('notice')
var val = $.trim($("textarea").val());

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };


btn.addEventListener("click",callback);
function callback(){
  notice.innerHTML = ""
  for (var i = 0; i < sources.length; i++) {
    var str = sources[i].quote
    var auth = sources[i].author
    var n = inpt.value.replace(/\s\s+/g, ' ')
    // console.log("n ",n);
    if(n.indexOf(str)>-1){
      var add = document.createElement("p")
      // console.log("NOPE");
      add.innerHTML = "You have stolen from "+auth
      notice.appendChild(add);
    }
}
}
// in class solution***********************
// $("#trigger").click(function(){
//   $("#notice").html("");
//   sources.forEach(function(source){
//     //finds the value of input and .replace or ignore white spaces and tabs
//     var inpt = $("#user_input").val().replace(/\s\s+/g, ' ');
//     if (inpt.indexOf(source.quote)>-1) {
//       $("#notice").append("you've stolen from "+source.author)
//     }
//   })
// })
