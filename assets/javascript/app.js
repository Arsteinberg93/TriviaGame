var questions = [{
        ques: "How many Stanley Cups have the Redwings won?",
        ans: ["6", "8", "9", "11"],
        name: "red",
        correct: "11",
        divClass: ".red"
    },
    {
        ques: "How many NBA championships have the Pistons won?",
        ans: ["2", "3", "4", "5"],
        name: "pistons",
        correct: "3",
        divClass: ".pistons"
    },
    {
        ques: "When is the last time the Lions won a championship?",
        ans: ["1957", "1971", "1988", "1999"],
        name: "lions",
        correct: "1957",
        divClass: ".lions"
    },
    {
        ques: "Who is the longest serving captain of the Red Wings?",
        ans: ["Steve Yzerman", "Nick Lidstrom", "Gordie Howe", "Ted Lindsay"],
        name: "cap",
        correct: "Steve Yzerman",
        divClass: ".cap"
    },
    {
        ques: "What is the Detroit baseball teams mascot?",
        ans: ["Bears", "Falcons", "Tigers", "Barracudas"],
        name: "baseball",
        correct: "Tigers",
        divClass: ".baseball"
    }

]

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(45);
    questionDisplay();
});

var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();

    for (var j = 0; j < 5; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}



var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;


            for (var i = 0; i < 5; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    // console.log("correct: " + i)
                } else {
                    wrongAnswers++;
                    // console.log("wrong: " + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);

            $('#wrongTimesUp').append(wrongAnswers);



            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
};

var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;

    for (var i = 0; i < 5; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    countdown();

    $('.container').fadeOut(500);

    $('#answerScreen').show();

    $('#correctScreen').append(correctAnswers);

    $('#wrongScreen').append(wrongAnswers);

});