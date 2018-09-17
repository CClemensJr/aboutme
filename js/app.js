'use strict';

var questionsWithNumberAnswers   = ['How many martial arts do you think I have trained in?'];
var questionsWithMultipleAnswers = ['Can you guess which martial arts I have trained in?'];
var questionsWithYesOrNoAnswers  = ['Do you think I like to wear sweaters?',
                                    'Do you think I like to watch football?',
                                    'Do you think I like to #netflixnchill?',
                                    'Do you think I am hungry?',
                                    'Do you think that I think you think web development is super special?'];

var multipleAnswers              = ['AIKIDO', 'TAE KWAN DO', 'KARATE', 'JEET KUNE DO', 'WING CHUN'];
var numberAnswers                = [5];
var userAnswers                  = [];
var yesOrNoAnswers               = [('Y' || 'YES'), ('N' || 'NO'), ('N' || 'NO'), ('Y' || 'YES'), ('Y' || 'YES')];

var responsesToYesNoInput         = ['That is correct!', 'That is not correct.']; 
var responsesToGuessInput         = ['That is correct!', 
                                     'That is too low. Please guess again.', 
                                     'That is too high. Please guess again.'];
var responsesToMultipleAnswerInput = ['Nope, not that one.', 
                                      'That\s right! I\'ve trained in Aikido, Tae Kwan Do, Karate, Jeet Kune Do, and Wing Chun.'];

var numOfUserGuesses             = [4, 7];
var totalNumOfQuestions          = 7;
var userScore                    = 0;

function askQuestions() 
{
    console.log('In function askQuestions()');
    alert('Hi, my name is Charles.');
    alert('This is a little quiz that future employers can use to get to know me just a little better.')

    for (var i = 0; i < totalNumOfQuestions; i++)
    {
        console.log('   In for (var i = 0; i < totalNumOfQuestions; i++)');

        if (i < 5)
        {
            userAnswers[i] = prompt(questionsWithYesOrNoAnswers[i]).toUpperCase();
            checkYesNoAnswer(userAnswers[i], i);
        }
        else if (i === 5)
        {
            userAnswers[i] = prompt(questionsWithNumberAnswers[0]);
            checkNumericalGuesses(userAnswers[i]);
        }
        else if (i === 6)
        {
            userAnswers[i] = prompt(questionsWithMultipleAnswers[0]).toUpperCase();;
            checkManyPossibleAnswers(userAnswers[i]);
        }
        else
        {
            alert('No more questions today!');
        }
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
    if (Number(userAnswer) === numberAnswers[0] && numOfUserGuesses[0] !== 0)
    {
        alert(responsesToGuessInput[0]);

        userScore++;

        numOfUserGuesses[0] = 0;
    }

    while (numOfUserGuesses[0] > 0)
    {
        (Number(userAnswer) < 5) ? alert(responsesToGuessInput[1] + ' ' + numOfUserGuesses + ' guesses left') : 
                                   alert(responsesToGuessInput[2] + ' ' + numOfUserGuesses + ' guesses left');

        numOfUserGuesses[0]--;

        userAnswer = prompt(questionsWithNumberAnswers[0]);

        checkNumericalGuesses(userAnswer);
    } 
}

function checkManyPossibleAnswers(userAnswer)
{
    for (var i = 0; i < multipleAnswers.length; i++)
    {
        if (userAnswer === multipleAnswers[i] && numOfUserGuesses[1] !== 0)
        {
            alert(responsesToMultipleAnswerInput[1]);

            userScore++;

            numOfUserGuesses[1] = 0;
        }
    }

    while (numOfUserGuesses[1] > 0)
    {
        alert(responsesToMultipleAnswerInput[0] + 'Guesses Left:' + (numOfUserGuesses[1]));
        
        numOfUserGuesses[1]--;

        userAnswer = prompt(questionsWithMultipleAnswers[0])

        checkManyPossibleAnswers(userAnswer);
    }
}

askQuestions();

