//HTML
// -Convert my biographical elements into unordered elements
// -Consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
// -Make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
// -Per the user stories, you will need to include in your HTML at least one each of an ordered and an unordered list.
// Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.

//CSS
// -Consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user.
// -Consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
// Use CSS to creatively and tastefully style and layout my page
// Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.

//JS
// Use console.log statements to assist with debugging
// Consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user.
// have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me
// Add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch this week?"), and indicates to the user whether the guess is "too high" or "too low", and gives the user exactly four opportunities to get the correct answer
// Add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array (for instance, "Can you guess a state that I have lived in besides Washington?"), so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers
// keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time.
// Make my code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions in my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
// Make the number-guessing question use a random number as its correct answer.
// Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.
// Use promptfor input and alert for output to the user, unless you are working on the third Stretch Goal.
// Do not write any functions in your JavaScript.
// Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.

"use strict";

var questions =         ['Do you think I like to wear sweaters?',
                         'Do you think I like to watch football?',
                         'Do you think I like to #netflixnchill?',
                         'Do you think I am hungry?',
                         'Do you think that I think you think web development is super special?'];
var answers =           [];
var responses =         ['That is correct!', 'That is not the correct answer'];
var score =             0;

alert('Hi, my name is Charles.');
alert('This is a little quiz about me.')
confirm('Are you ready?');

for (var i = 0; i < questions.length; i++)
{
    answers[i] = prompt(questions[i]).toUpperCase();

    console.log('The user answered ' + answers[i] + ' to Question ' + (i + 1) + '. ' + questions[i]);

    switch (i)
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

    }

}

alert('It will be a moment while I tally your results.'); 

alert('You scored ' + score + ' out of 5 correctly.');
