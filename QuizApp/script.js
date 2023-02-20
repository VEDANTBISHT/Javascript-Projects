const quizData =[
    {
        question: 'what is the capital of india',
        a: 'Delhi',
        b: 'lucknow',
        c: 'chandigarh',
        d: 'Mumbai',
        correct: 'a'
    },
    {
        question: 'the speed of lightis?',
        a: '400000 km/sec',
        b: '300000 km/sec',
        c: '200000 km/sec',
        d: '100000 km/sec',
        correct: 'a'
    },
    {
        question:'what is 2*2?',
        a: '4',
        b: '6',
        c: '5',
        d: '15',
        correct: 'a'

    },
    {
        question:'what is 4*2?',
        a: '4',
        b: '6',
        c: '8',
        d: '15',
        correct: 'c'

    },
    {
        question:'what is 8*2?',
        a: '4',
        b: '16',
        c: '8',
        d: '15',
        correct: 'b'

    },
];

const quiz = document.getElementById('quiz');
const ansewerE1s =document.getElementById(".answer")
const questionE1 =document.getElementById("question");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const a_text = document.getElementById("a_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");



let currentQuiz =0;
let score =0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];    
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    ansewerE1s.foreach((answerE1) =>
    {
        if(answerE1.checked){
            answer = answerE1.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    ansewerE1s.foreach((answerE1) =>
    {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    //check to see answer
    const answer =getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
        score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>You got ${score} out of 7 correct</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    
    }
});