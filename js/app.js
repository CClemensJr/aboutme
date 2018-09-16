'use strict';

var questionsWithNumberAnswers   = ['How many martial arts do you think I have trained in?'];
var questionsWithMultipleAnswers = ['Can you guess which martial arts I have trained in?'];
var questionsWithYesOrNoAnswers  = ['Do you think I like to wear sweaters?',
                                    'Do you think I like to watch football?',
                                    'Do you think I like to #netflixnchill?',
                                    'Do you think I am hungry?',
                                    'Do you think that I think you think web development is super special?'];

var multipleAnswers              = [['AIKIDO', 'TAE KWAN DO', 'KARATE', 'JEET KUNE DO', 'WING CHUN']];
var numberAnswers                = [5];
var userAnswers                  = [];
var yesOrNoAnswers               = [('Y' || 'YES'), ('N' || 'NO'), ('N' || 'NO'), ('Y' || 'YES'), ('Y' || 'YES')];

var responsesToYesNoInput         = ['That is correct!', 'That is not correct.']; 
var responsesToGuessInput         = ['That is correct!', 
                                     'That is too low. Please guess again.', 
                                     'That is too high. Please guess again.'];

var numOfUserGuesses             = 4;
var totalNumOfQuestions          = 7;
var userScore                    = 0;

function askQuestions() 
{
    console.log('In function askQuestions()');
    //alert('Hi, my name is Charles.');
    //alert('This is a little quiz that future employers can use to get to know me just a little better.')

    for (var i = 0; i < totalNumOfQuestions; i++)
    {
        console.log('   In for (var i = 0; i < totalNumOfQuestions; i++)');

        /*if (i < 5)
        {
            userAnswers[i] = prompt(questionsWithYesOrNoAnswers[i]).toUpperCase();
            checkYesNoAnswer(userAnswers[i], i);
        }
        else*/ if (i === 5)
        {
            userAnswers[i] = prompt(questionsWithNumberAnswers[0]);
            checkNumericalGuesses(userAnswers[i]);
        }
        /*else if (i === 6)
        {
            console.log('   In if (i === 6)');
            console.log('       Question ' + (i + 1) + '. ' + questions[i]);
            console.log('       User answer = ' + userAnswers[i]);
            checkManyPossibleAnswers(userAnswers[i], i);
        }
        else
        {
            alert(responses[2]);
        }*/
    }

    alert('It will be a moment while I tally your results.'); 
    alert('You answered ' + userScore + ' out of 7 questions correctly.');
}


function checkYesNoAnswer(userAnswer, questionNumber) 
{
    if (userAnswer === yesOrNoAnswers[questionNumber])
    {
        alert(responsesToYesNoInput[0]);

        userScore++;
    }
    else
    {
        alert(responsesToYesNoInput[1]);
    }
}

function checkNumericalGuesses(userAnswer)
{
    if (Number(userAnswer) === numberAnswers[0] && numOfUserGuesses !== 0)
    {
        alert(responsesToGuessInput[0]);

        userScore++;

        numOfUserGuesses = 0;
    }

    while (numOfUserGuesses > 0)
    {
        (Number(userAnswer) < 5) ? alert(responsesToGuessInput[1] + ' ' + numOfUserGuesses + ' guesses left') : 
                                    alert(responsesToGuessInput[2] + ' ' + numOfUserGuesses + ' guesses left');

        numOfUserGuesses--;

        userAnswer = prompt(questionsWithNumberAnswers[0]);

        checkNumericalGuesses(userAnswer);
    } 
}
        /*
            if (Number(userAnswer) < 5)
            {
                guesses--;
                alert(responsesToUserInput[2]);

                userAnswer = prompt(questionsWithNumberAnswers[0]);
            }
            else

        }
        do
        {
            if (Number(userAnswer) < 5)
            {
                alert('That is too low. Please guess again.');
                guesses--;

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
        } while (guesses < 3);*/

function checkManyPossibleAnswers(userAnswer, questionNumber)
{
    console.log('   In function checkManyPossibleAnswers(userAnswer, questionNumber)');
    console.log('       User Answer = ' + userAnswer);
    console.log('       Question Number = ' + questionNumber + 1);
}

    /*for (var i = 0; i < answers.length; i++)
    {
        console.log('   In loop i');

        if (userAnswer === correctAnswers[i])
        {
            console.log('   In loop i if statement.');
            console.log('       correctAnswer = ' + correctAnswers[i]);
            
            alert(responses[0]);
            score++;

            break;
        }
        else
        {
            console.log('   In loop i else statement.');
            console.log('       correctAnswer = ' + correctAnswers[i]);
            alert(responses[1]);
        }*/

        /*for (var j = 0; j < correctAnswers.length; j++)
        {
            console.log('In j for loop');   
            if (userAnswer.startsWith(correctAnswers[j]))
            {
                console.log('In if statement');
                alert(responses[0]);
                score++;

                break;
            }
            else
            {
                console.log('In else statement');
                alert(responses[1]);

                break;
            }
        }
        break;
    }*/
    /*switch (num)
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

        case 6:
            guesses = 0;

            do
            {
                console.log('In the do while loop. Guesses: ' + guesses);
                for (var i = 0; i < martialArtsStudied.length; i++)
                {
                    console.log('In the for loop. Guesses: ' + guesses);
                    if (answers[6] === martialArtsStudied[i])
                    {
                        alert(responses[0] + 'I have studied ' +
                              martialArtsStudied[0] + ', ' +
                              martialArtsStudied[1] + ', ' +
                              martialArtsStudied[2] + ', ' +
                              martialArtsStudied[3] + ' and ' +
                              martialArtsStudied[4] + '!');

                        score++;

                        break;
                    }
                    else
                    {
                        alert(responses[1]);

                        answers[6] = prompt(questions[num]).toUpperCase();

                        console.log(guesses);
                    }
                    guesses++;
                }

                break;
            } while (guesses < 7)

            if (guesses === 7) {
                alert('I\' sorry but you did not guess one correctly.' + 'I have studied ' +
                        martialArtsStudied[0] + ', ' +
                        martialArtsStudied[1] + ', ' +
                        martialArtsStudied[2] + ', ' +
                        martialArtsStudied[3] + ' and ' +
                        martialArtsStudied[4] + '.');
            }

            break;
    }*/

askQuestions();

