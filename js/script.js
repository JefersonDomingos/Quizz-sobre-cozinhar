console.log("JavaScript ok");
//Variáveis
const scoreContainer = document.querySelector("#score-container");
const questionsContainer = document.querySelector("#questions-container");
const question = document.querySelector("#question");
const answersContainer = document.querySelector("#answers-container");
const letters = ["a", "b", "c", "d"];

let points = 0;
let atualQuestion = 0;

//Questões

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




