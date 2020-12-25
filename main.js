const quiz =[
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレステーション２',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },{
        question: '日本人が開発したプログラミング言語はどれ？',
        answers: [
            'Ruby',
            'Python',
            'C',
            'GO'
        ],
        correct: 'Ruby'
    },{
        question: '日本での映画興行収入歴代一位はどれ？',
        answers: [
            '千と千尋の神隠し',
            '君の名は。',
            '鬼滅の刃',
            'アナと雪の女王'
        ],
        correct: '鬼滅の刃'
    },{
        question: '1+1は何？',
        answers: [
            '2',
            '田んぼの田',
            '0',
            'わからない'
        ],
        correct: '2'
    },{
        question: 'ひろ✖︎きの名言　「〇〇って何すか？」　〇〇に入る言葉は？',
        answers: [
            '夢',
            '写像',
            '鬼滅の刃',
            '幸せ'
        ],
        correct: '写像'
    }
];

const quizlength = quiz.length;
let quizindex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonlength = $button.length;

const setQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizindex].question;
    let buttonindex = 0;
    while (buttonindex < buttonlength){
        $button[buttonindex].textContent = quiz[quizindex].answers[buttonindex]; 
        buttonindex++;
    }
}

setQuiz();

const clickHandler = (e) =>{
    if(quiz[quizindex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    }else{
        window.alert('不正解');
    }
    quizindex++;
    if(quizindex < quizlength){
        setQuiz();
    }else{
        window.alert('終了! あなたの正解数は'+score+'です！');
    }
};

let handlerindex = 0;
while(handlerindex < buttonlength){
    $button[handlerindex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerindex++;
}


