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


const questionE1 =document.getElementById("question");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const a_text = document.getElementById("a_text");
const d_text = document.getElementById("d_text");

let currentQuiz =0;


loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];    
    questionE1.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz++;

}
