'use strict';

//問題内容
const Quiz = [
    {
        Qestion : 'BOEINGの新しい機種はなに？',
        answers : ['B787','B777X','B737MAX8','B777'],
        correct :'B777X',
    },{
        Qestion : 'AirBusの最新機種は？',
        answers : ['A320neo','A350','A220','A380'],
        correct :'A220',
    },{
        Qestion : 'BOEINGの電子窓が採用されている機体は？',
        answers : ['B787','B777','B737','B767'],
        correct :'B787',
    },
];

const QuizLength = Quiz.length;
let QuizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//選択
const setupQuiz = () => {
    document.getElementById('BOEING').textContent = Quiz[QuizIndex].Qestion;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = Quiz[QuizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//window,alert if定義
const clickHandler = (e) => {
    if(Quiz[QuizIndex].correct === e.target.textContent){
        window.alert('正解！！！！')
        score++;
    }else{
        window.alert('残念でしたぁぁぁぁぁぁ！！！')
    }

        QuizIndex++;
    
    if(QuizIndex < QuizLength){
        setupQuiz();
    }else{
        window.alert('終了！！！あなたの点数は、' + score + '/' + QuizLength + 'です！！！');
        
    }
}

//window,alert click定義
let handlerIndex = 0;

while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};


