$(document).ready(function() {

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
    var input
    $(document).on('click', '#trigger', function() {
        input = $('#user_input').val()
        checkInput()
    })

    function checkInput() {
        $('.result').empty()
        var authors = document.createElement('div')
        $(authors).addClass('auth')
        for (var i = 0; i < sources.length; i++) {
            if (input.toLowerCase().replace(/\s/g, '').includes(sources[i].quote.toLowerCase().replace(/\s/g, ''))) {
                var p = document.createElement('p')
                $(p).html('You have stolen from ' + sources[i].author)
                $(authors).append(p)
            }
        }
        $('.result').append(authors)
    }






})
