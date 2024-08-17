const btncn=document.querySelector('button.cn');
const btnos=document.querySelector('button.os');
const btndbms=document.querySelector('button.dbms');
const btnhtml=document.querySelector('button.html');
const quizsection=document.querySelector('.quizz-sec');
const resultsection=document.querySelector('.result-box');
const goToHome=document.querySelector('.goHome-btn');
const main=document.querySelector('.main');
let questions;
    btncn.onclick=()=>{
    quizsection.classList.add('active');
     main.classList.add('active');
        questions=cnquestions;
        document.getElementById('heading').innerText='Computer Networks';
        showQuestions(0);
        quesCounter(1);
        startTimer(timeValue);
    }
    btnos.onclick=()=>{
        quizsection.classList.add('active');
         main.classList.add('active');
         questions=osquestions;
        document.getElementById('heading').innerText='Operating Systems';
        showQuestions(0);
        quesCounter(1);
        startTimer(timeValue);
    }
    btndbms.onclick=()=>{
        quizsection.classList.add('active');
        main.classList.add('active');
        questions=dbmsquestions;
        document.getElementById('heading').innerText='DBMS';
        showQuestions(0);
        quesCounter(1);
        startTimer(timeValue);
    }
    btnhtml.onclick=()=>{
        quizsection.classList.add('active');
        main.classList.add('active');
        questions=htmlquestions;
        document.getElementById('heading').innerText='HTML';
        showQuestions(0);
        quesCounter(1);
        startTimer(timeValue);
    }
      

