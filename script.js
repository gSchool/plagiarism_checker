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
// // console.log("sources ",sources[0]);
//
// var btn = document.getElementById('trigger');
// var inpt = document.getElementById('user_input').value;
// var notice = document.getElementById('notice')
// var val = $.trim($("textarea").val());
// // console.log("input: ", inpt);
// String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
//
//
// for (var i = 0; i < sources.length; i++) {
// var str = sources[i].quote
// var auth = sources[i].author
// var n = val.includes(str);
// console.log("n ",n);
// if(n===false){
//   console.log("NOPE");
// }else if(n===true){
//   btn.addEventListener("click",callback);
//   function callback(){
//     notice.innerHTML = ""
//     var add = document.createElement("p")
//     add.innerHTML = "You have stolen from "+auth
//     notice.appendChild(add);
// }
// }
// }
// in class solution***********************
$("#trigger").click(function(){
  $("#notice").html("");
  sources.forEach(function(source){
    //finds the value of input and .replace or ignore white spaces and tabs
    var inpt = $("#user_input").val().replace(/\s\s+/g, ' ');
    if (inpt.indexOf(source.quote)>-1) {
      $("#notice").append("you've stolen from "+source.author)
    }
  })
})
