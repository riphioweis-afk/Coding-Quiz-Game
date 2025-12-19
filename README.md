# Creating a Coding Quiz game Game! 
![logo](//screenshot.png/logo.png)
 ##
 [Launch Game]( https://riphioweis-afk.github.io/Coding-Quiz-Game/)
---
> How the main menu looks like.
![main](//screenshot.png/Screenshot%202025-12-19%20at%2002.36.32.png)
> Features include category selection, score tracking, animated confetti for perfect scores, and a beautiful background interface.
---

## ✨ Features
* **Multiple Categories**: Choose between Python and JavaScript quizzes
* **Interactive UI**: Clean, modern interface with hover effects and animations
* **Score Tracking**: Real-time progress tracking and final score display
* **Instant Feedback**: Color-coded answers (green for correct, red for incorrect)
* **Three Outcome Types**:
    * 🏆 You Win!
    * ✅ You Pass! 
    * ❌ You Lose! 
* **Replay Option**: Play again button to retry quizzes
* **Background Music Support**: play audio in the background
---

## How to play
1. Click the "Start Game" button
2. Choose a category: Python or JavaScript
3. Answer each question by clicking one of the 3 options
4. Click "Next question" to proceed
5. View your final score and celebration message
6. Click "Play Again" to retry or choose a different category
---




## Start Game function 
The startQuiz() function is the main entry point that initializes and starts a new quiz.

```javascript
function startQuiz(category) {
    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
```



---
## Choose a category Python or JavaScript
Show which catagory the user wants to choose for the quiz.
```javascript
    document.querySelector('.category-container').style.display = 'none';
    document.querySelector('h1').textContent = category + ' Quiz';

const quizData = {
    Python: [
    JavaScript: [

```
![Catagory](/screenshot.png/Screenshot%202025-12-19%20at%2002.37.13.png)
---
## Answer each question by clicking one of the 3 options
This shows lets the user know if there answer is correct or false.
```javascript
 buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index) {
            btn.classList.add('incorrect');
        }
    });
    
    if (index === question.correct) {
        score++;
    }
```
---


## Click "Next question" to proceed
This allows the user to click the next buttonn once they have choosen a answer.
```javascript

    
    document.getElementById('nextBtn').disabled = false;

```

___

## View your final score and celebration message
Show You score out of 5 question and display win/loss verdict.

```javascript
if (score === totalQuestions) {
        document.querySelector('h1').textContent = 'You Win! 🏆';
        resultMessage.textContent = 'Perfect score! You answered all questions correctly!';
    } else if (score >= 3) {
        document.querySelector('h1').textContent = 'You Pass! ✅';
        resultMessage.textContent = 'Great job! You passed the quiz!';
    } else {
        document.querySelector('h1').textContent = 'You Lose ❌';
        resultMessage.textContent = 'Keep practicing! Try again to improve your score.';
    }
```
___
## Click "Play Again" button
This will send you back to the category page to play agian or change the quiz category.
```javascript
    document.querySelector('.restart-btn').style.display = 'inline-block';

```
___

 ## Technologies Used
 * HTML
 * CSS
 * JavaScript
 ---


 ## Other resourese used 

* [Matrix Effect](https://prismic.io/blog/css-button-animations)
* [Matrix soundtrack](https://archive.org/details/matrix-soundtrack-collection)
___

## Furture Enhancements
* A level difficulty 
* More categories 
* A hint button to help the user
___














