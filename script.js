$(document).ready(function() {

    var sources = [{
        "author": "Sonia Gandhi",
        "quote": 'Together we can face any challenges as deep as the ocean and as high as the sky.'
    }, {
        "author": "Nina Arianda",
        "quote": 'My favorite place to vacation is anyplace by the ocean.'
    }, {
        "author": "Shawn Mendes",
        "quote": 'There is nothing that scares me more than, like, being in the ocean by myself.'
    }]
    $('#trigger').click(function() {
        checkText();
    })

    function checkText() {
        var result = document.createElement('p');
        $(result).html('');
        var userText = $('#user_input').val();
        sources.forEach(function(source) {
            var checkFor = source.quote;
            if (userText.indexOf(checkFor) > -1) {
                $(result).html(`You have stolen from ${source.author}`);
                $('#notice').append(result);
            }
        })
    }
})
