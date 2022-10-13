//Variáveis
const scoreContainer = document.querySelector("#score-container");
const questionsContainer = document.querySelector("#questions-container");
const question = document.querySelector("#question");
const answersContainer = document.querySelector("#answers-container");
const letters = ["a", "b", "c", "d"];

let points = 0;
let actualQuestion = 0;

//Questões e respostas

const questions = [
    {
        "question" : "Quais destes cortes bovinos são mais adequados para fazer carne de panela?",
        "answers" : [
            {
                "answer" : "Contrafilé, filé mignon, alcatra",
                "correct" : false
            },

            {
                "answer" : "Fraldinha, maminha, picanha",
                "correct" : false
            },

            {
                "answer" : "Acém, coxão mole, patinho",
                "correct" : true
            },

            {
                "answer" : "Fígado, coração, língua",
                "correct" : false
            }
        ]
    },

    {
        "question" : "O que se costuma fazer antes de cozinhar o feijão?",
        "answers" : [
            {
                "answer" : "Descascá-lo",
                "correct" : false
            },

            {
                "answer" : "Fritá-lo levemente no óleo",
                "correct" : false
            },

            {
                "answer" : "Deixá-lo de molho",
                "correct" : true
            },

            {
                "answer" : "Colocá-los num recipiente com gelo e um elemento ácido",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Vamos fritar alguns bifões! Você pré-aquece a frigideira no fogo baixo, médio ou alto?",
        "answers" : [
            {
                "answer" : "Baixo",
                "correct" : false
            },

            {
                "answer" : "Medio",
                "correct" : false
            },

            {
                "answer" : "Alto",
                "correct" : true
            }

        ]
    },

    {
        "question" : "Eita, a frigideira não é antiaderente! Como faz pra comida não grudar?",
        "answers" : [
            {
                "answer" : "Acrescentando bastante água",
                "correct" : false
            },

            {
                "answer" : "Agitando a frigideira violentamente",
                "correct" : false
            },

            {
                "answer" : "Cozinhando em fogo bem alto",
                "correct" : false
            },

            {
                "answer" : "Usando gorduras como óleo, azeite e manteiga",
                "correct" : true
            }
        ]
    },

    {
        "question" : "Qual destes ingredientes você pode acrescentar caso o molho de tomate esteja muito ácido?",
        "answers" : [
            {
                "answer" : "Azeite",
                "correct" : false
            },

            {
                "answer" : "Açúcar",
                "correct" : true
            },

            {
                "answer" : "Manjericão",
                "correct" : false
            },

            {
                "answer" : "Sal",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Vamos fazer um arroz agulhinha. Quanto vai de água, mais ou menos?",
        "answers" : [
            {
                "answer" : "Uma medida de arroz e uma de água",
                "correct" : false
            },

            {
                "answer" : "Duas medidas de arroz e uma de água",
                "correct" : false
            },

            {
                "answer" : "Uma medida de arroz e duas de água",
                "correct" : true
            },

            {
                "answer" : "Uma medida de arroz e três de água",
                "correct" : false
            }
        ]
    },

    {
        "question" : "A receita pede mel, nozes e vinagre, mas você não tem nenhum desses três. Escolha bons substitutos:",
        "answers" : [
            {
                "answer" : "Melaço de cana, noz moscada e suco de maçã",
                "correct" : false
            },

            {
                "answer" : "Açúcar, amendoim e bicarbonato de sódio",
                "correct" : false
            },

            {
                "answer" : "Açúcar mascavo, castanha de caju e limão",
                "correct" : true
            },

            {
                "answer" : "Pasta de tâmaras, semente de coentro e shoyu",
                "correct" : false
            }
        ]
    },
];

//quizz sendo substituido para primeira pergunta

function startQuizz() {
    //criar a primeria pergunta
    createQuestion(0);
}

//cria uma pergunta

function createQuestion(i){
//limpar a questão anterior
    const allButtons = answersContainer.querySelectorAll("button");
    allButtons.forEach(function (btn){
        btn.remove();
    });

    //alterando texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    //obtendo dados do objeto questions
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    //inserir alternativas
    questions[i].answers.forEach(function(answer, i){
    
        //criar templates dinamicamente
        const answersTemplate = document.querySelector(".answer-template").cloneNode(true);
        const letterBtn = answersTemplate.querySelector(".option-letter");
        const questionAnswerBtn = answersTemplate.querySelector(".question-answer");

        //indice do array da const letters
        letterBtn.textContent = letters[i];

        //chave de answer da const questions
        questionAnswerBtn.textContent = answer['answer'];
        
        //inserindo atributo no answerTemplates
        answersTemplate.setAttribute("correct-answer", answer["correct"]);
        
        //removendo classes, para que o template seja idêntico aos botões de resposta, inclusive os estilos
        answersTemplate.classList.remove("answer-template");
        answersTemplate.classList.remove("hide");

        //inserir alternativas na tela
        answersContainer.appendChild(answersTemplate);

        //inserir evento nos botões de resposta
        answersTemplate.addEventListener("click",function(){
            checkAnswer(this);
        });
    });

    //incrementar o número da questão 
   actualQuestion++
}

//checando o botão clicado
function checkAnswer(btn){
    
    //selecionando todos os botões
    const buttons = answersContainer.querySelectorAll("button");
    
    //verifica se as repostas estão corretas e adiciona classes nos botões
    buttons.forEach(function(button){
        if(button.getAttribute("correct-answer") === "true"){
            button.classList.add("correct-answer");

            //verifica se o usuario acertou a pergunta
            if(btn === button){
                points++
                console.log(points);
            }
        }
        else{
            button.classList.add("wrong-answer");
        }
    });

    nextQuestion();
}

//exibe a proxima questão no quizz
function nextQuestion(){

    //timer para o usuário ver as respostas
    setTimeout(function(){

        //verificar se ainda há perguntas
        if(actualQuestion >= questions.length){
            //menssagem de quiz finalizado
            messageQuizzFinished();
            console.log("quizz finalizado com sucesso");

        }
        
        //a cada 1.3 segundos é criada uma nova pergunta
        createQuestion(actualQuestion);
    },1300);

}

function messageQuizzFinished(){

    hideOrShowQuizz();

    //alterar dados da pontuação

    //calcular score
    const score = ((points/questions.length)*100).toFixed(2);

    //mostrar score porcentagem
    const porcentage = document.querySelector("#score-display span");
    porcentage.textContent = score.toString();

    //mostrar número de respostas corretas
    const answersCorrects = document.querySelector("#corrects");
    answersCorrects.textContent = points.toString();

    //mostrar quantidade de pergunta
    const answersQuantity = document.querySelector("#qtd-questions");
    answersQuantity.textContent = questions.length;
    
    //dar o feedback
    messageFeedback(answersCorrects);
}

//alterando a menssagem do feedback
function messageFeedback (answersCorrects){
    let messageCongratulations = document.querySelector("#congratulations");
    let acertos = parseInt(answersCorrects.textContent);

    if(acertos <= 3){
        return messageCongratulations.textContent = "Precisa melhorar!"
    }
    else if(acertos <= 5){
        return messageCongratulations.textContent = "Muito bom!"
    }

    else if(acertos == 6){
        return messageCongratulations.textContent = "Ótimo!"
    }

    else if(acertos == 7){
        return messageCongratulations.textContent = "Toop tá parabéns em!"
    }

  
}

//mostrar ou ocultar pontuação
function hideOrShowQuizz(){
    questionsContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

//reiniciar quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function(){
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    startQuizz();
});

//inicialização do quizz
startQuizz();

