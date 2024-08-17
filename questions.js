let cnquestions=[
    {
        no:1,
        question:"What is Internet?",
        options:[
            "A network of interconnected local area networks",
            "A collection of unrelated computers",
            "Interconnection of wide area networks",
            "A single network",
        ],
        answer:'Interconnection of wide area networks'

    },
    {
        no:2,
        question:"full form of cn?",
        options:[
            "Cartoon Networks",
            "Computer Networks",
            "Catalog Network",
            "Connection Network",
        ],
        answer:'Computer Networks'

    },
    {
        no:3,
        question:"Which of the following is an example of Biuetooth?",
        options:[
            "wide area network",
            "virtual private network",
            "local area network",
            "personal area network",
        ]

    },
    {
        no:4,
        question:"What is the full form OSI?",
        options:[
            "Optical Service Implementation",
            "Open Service Internet",
            "Open System Interconnection",
            "Operating System Interface",
        ],
        answer:'Open System Interconnection'

    },
];
let dbmsquestions=[
    {
        no:1,
        question:"Who created the first DBMS?",
        options:[
            "Edgarr Franck Codd",
            "Charles Bachman",
            "Charles Babbage",
            "Sharon B.Codd",
        ],
        answer:"Charles Bachman"

    },
    {
        no:2,
        question:"Which of the following is not a type of database?",
        options:[
            "Hierarchial",
            "Network",
            "Distributed",
            "Decentralized",
        ],
        answer:"Decentralized"

    },
    {
        no:3,
        question:"Which of the following is not an example of DBMS?",
        options:[
            "MySQL",
            "Microsoft Access",
            "IBM DB2",
            "Google",
        ],
        answer:"Google"

    },
    {
        no:4,
        question:"Fullform of DBMS?",
        options:[
            "Database Management System",
            "Database Management Service",
            "Data Backup Management System",
            "Data Backup Management Syervice",
        ],
        answer:"Database Management System"

    },
];
let osquestions=[
    {
        no:1,
        question:"full form of os?",
        options:[
            "Operating Systems",
            "Open Service",
            "Open System",
            "Operating Service",
        ],
        answer:"Operating Systems"

    },
    {
        no:2,
        question:"Which is not a RTOS?",
        options:[
            "RTLinux",
            "Palm OS",
            "QNX",
            "VxWorks",
        ],
        answer:"Palm OS"

    },
    {
        no:3,
        question:"what does OS X has?",
        options:[
            "monolithic kernel with modules",
            "microkernel",
            "monolithic kernel",
            "hybrid kernel",
        ],
        answer:"hybrid kernel"

    },
    {
        no:4,
        question:"The FCFS algorithm is particularly troublesome for?",
        options:[
            "operating systems",
            "multiprocessor systems",
            "time sharing systems",
            "multiprogramming systems",
        ],
        answer:"time sharing systems"

    },
];
let htmlquestions=[
    {
        no:1,
        question:"full form of html?",
        options:[
            "hypertext markup language",
            "hightext markup language",
            "hypertext makeup language",
            "hypertext marker language",
        ],
        answer:"hypertext markup language"

    },
    {
        no:2,
        question:"What is the correct syntax to write an HTML comment??",
        options:[
            "$comment",
            "angular braces",
            "#comment",
            "%comment",
        ],
        answer:"<!--comment-->"

    },
    {
        no:3,
        question:"Which of the following element is responsible for making the text bold in HTML??",
        options:[
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
            "HTML, Head, Title, Body",
        ],
        answer:"HTML, Head, Title, Body"

    },
    {
        no:4,
        question:"Which of the following element is responsible for making the text bold in HTML?",
        options:[
            "<pre>",
            "<a>",
            "<b>",
            "<br>",
        ],
        answer:"<b>"

    },
];
let quescount=0;
let quesnum=1;
let score=0;
let timeValue = 10;
let counter;
const nextbtn=document.querySelector('.next-btn');
nextbtn.onclick=()=>{
    clearInterval(counter);
    if(quescount<questions.length-1){
           quescount++;
   showQuestions(quescount);
   quesnum++;
   quesCounter(quesnum);
   headerScore();
   nextbtn.classList.remove('active');
   startTimer(timeValue); 
    }
    else{
        showResult();
    }

}
function startTimer(time) {
    const timerElement = document.querySelector('.timer');
    timerElement.textContent = time;
    counter = setInterval(() => {
        time--;
        timerElement.textContent = 'Time:'+time+'sec';
        if (time < 1) {
            clearInterval(counter);
            nextbtn.click(); // automatically move to the next question
        }
    }, 1000); // update timer every second
}
const optionList=document.querySelector('.option-list');
function showQuestions(index){
    const question_text=document.querySelector('.question');
    question_text.textContent=questions[index].no+'.'+questions[index].question;
    let optionTag='<div class="option"><span>'+questions[index].options[0]+'</span></div><div class="option"><span>'+questions[index].options[1]+'</span></div><div class="option"><span>'+questions[index].options[2]+'</span></div><div class="option"><span>'+questions[index].options[3]+'</span></div>'
     optionList.innerHTML=optionTag;
     const option=document.querySelectorAll('.option');
     for(let i=0;i<option.length;i++){
       option[i].setAttribute('onclick','optionselected(this)');
     }}
function optionselected(answer){
    let useranswer=answer.textContent;
    let correctanswer=questions[quescount].answer;
    let allOptions=optionList.children.length;
    if(useranswer==correctanswer){
        answer.classList.add('correct');
        score++;
    }
    else{
        answer.classList.add('incorrect');
        for(let i=0;i<allOptions;i++){
            if(optionList.children[i].textContent==correctanswer){
                optionList.children[i].setAttribute('class','option correct')
            }
        }
    }
    for(let i=0;i<allOptions;i++){
        optionList.children[i].classList.add('disabled');
    }
    nextbtn.classList.add('active');
}
function quesCounter(index){
    const questotal=document.querySelector('.total-questions');
    questotal.textContent=index+' of '+questions.length+' questions';
}
function headerScore(){
   const headerScoretext=document.querySelector('.header-score');
   headerScoretext.textContent='Score:'+score+'/'+questions.length;
}
function showResult(){
    // quizsection.classList.remove('active');
    resultsection.classList.add('active');
    const scoretext=document.querySelector('.score-text');
    scoretext.textContent='Your Score '+score+' out of '+questions.length;
    const circularProgress=document.querySelector('.circular-progress');
    const progressValue=document.querySelector('.progress-value');
    let progressStartvalue=-1;
    let progressEndvalue=(score/questions.length)*100;
    let speed=20;
    let progress=setInterval(() => {
        progressStartvalue++;
        progressValue.textContent=progressStartvalue+'%';
        circularProgress.style.background='conic-gradient(rgb(50, 94, 128)'+(progressStartvalue*3.6)+'deg, rgba(255,255,255,.1) 0deg )';
        if(progressStartvalue==progressEndvalue){
            clearInterval(progress);
        }
    },speed);
   

}
goToHome.onclick=()=>{
    quizsection.classList.remove('active');
   main.classList.remove('active');
   quescount=0;
   quesnum=1;
   score=0;
   showQuestions(quescount);
   quesCounter(quesnum)
   headerScore();
    }