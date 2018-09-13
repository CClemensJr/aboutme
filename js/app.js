'use strict';

var questions = ['Do you think I like to wear sweaters?',
                 'Do you think I like to watch football?',
                 'Do you think I like to #netflixnchill?',
                 'Do you think I am hungry?',
                 'Do you think that I think you think web development is super special?',
                 'How many martial arts do you think I have trained in?'];
var answers =   [];
var responses = ['That is correct!', 'That is not the correct answer'];
var guesses =   0;
var score =     0;

function askQuestions() 
{
    alert('Hi, my name is Charles.');
    alert('This is a little quiz about me.')
    confirm('Are you ready?');

    for (var i = 0; i < questions.length; i++)
    {
        answers[i] = prompt(questions[i]).toUpperCase();

        console.log('The user answered ' + answers[i] + ' to Question ' + (i + 1) + '. ' + questions[i]);

        checkAnswers(i);

    }

    alert('It will be a moment while I tally your results.'); 

    alert('You scored ' + score + ' out of 5 correctly.');
}


function checkAnswers(num) 
{
    switch (num)
        {
            case 0:
                if ((answers[0] === 'Y' || answers[0] === 'YES'))
                {
                    alert(responses[0]);
                    score++;

                    break;
                }
                else
                {
                    alert(responses[1]);

                    break;
                }

            case 1:
                if ((answers[1] === 'N' || answers[1] === 'NO'))
                {
                    alert(responses[0]);
                    score++;

                    break;
                }
                else
                {
                    alert(responses[1]);

                    break;
                }

            case 2:
                if ((answers[2] === 'N' || answers[2] === 'NO'))
                {
                    alert(responses[0]);
                    score++;

                    break;
                }
                else
                {
                    alert(responses[1]);

                    break;
                }

            case 3:
                if ((answers[3] === 'Y' || answers[3] === 'YES'))
                {
                    alert(responses[0]);
                    score++;

                    break;
                }
                else
                {
                    alert(responses[1]);

                    break;
                }

            case 4:
                if ((answers[4] === 'Y' || answers[4] === 'YES'))
                {
                    alert(responses[0]);
                    score++;

                    break;
                }
                else
                {
                    alert(responses[1]);

                    break;
                }

            case 5:
                if (Number(answers[5]) === 5)
                {
                    alert(responses[0]);
                    score++;

                    break;
                }
                else
                {
                    do
                    {
                        if (Number(answers[5]) < 5)
                        {
                            alert('That is too low. Please guess again.');

                            answers[5] = prompt(questions[num]).toUpperCase();
                            
                            guesses++;
                        }
                        else if (Number(answers[5]) > 5)
                        {
                            alert('That is too high. Please guess again.');

                            answers[5] = prompt(questions[num]).toUpperCase();
                            
                            guesses++;
                        }
                        else if (Number(answers[5]) === 5)
                        {
                            alert(responses[0]);
                            score++;

                            break;
                        }
                        else
                        {
                            alert('Please enter a number.')

                            answers[5] = prompt(questions[num]).toUpperCase();

                            guesses++;
                        }
                    } while (guesses < 3);
                }  
                break;
        }
}

askQuestions();
