const quizData = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 3,
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "O2", correct: false },
        { text: "H2O", correct: true },
        { text: "CO2", correct: false },
        { text: "N2", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which country won the FIFA World Cup in 2018?",
      answers: [
        { text: "Brazil", correct: false },
        { text: "Germany", correct: false },
        { text: "France", correct: true },
        { text: "Spain", correct: false },
      ],
    },
    {
      id: 5,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Charles Dickens", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      id: 7,
      question: "Which famous scientist formulated the theory of relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Charles Darwin", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Cu", correct: false },
      ],
    },
    {
      id: 9,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Salvador Dalí", correct: false },
      ],
    },
    {
      id: 10,
      question: "Which continent is known as the 'Dark Continent'?",
      answers: [
        { text: "North America", correct: false },
        { text: "Europe", correct: false },
        { text: "Asia", correct: false },
        { text: "Africa", correct: true },
      ],
    },
    {
        id: 11,
        question: "When did the website 'Facebook' launch?",
        answers: [
          {
            text: "2004",
            correct: true,
          },
          {
            text: "2005",
            correct: false,
          },
          {
            text: "2006",
            correct: false,
          },
          {
            text: "2007",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "Who played the character of Harry Potter in the movie series?",
        answers: [
          {
            text: "Johnny Depp",
            correct: false,
          },
          {
            text: "Leonardo DiCaprio",
            correct: false,
          },
          {
            text: "Denzel Washington",
            correct: false,
          },
          {
            text: "Daniel Radcliffe",
            correct: true,
          },
        ],
        },
        {
            id: 13,
            question: "What is the chemical symbol for gold?",
            answers: [
              {
                text: "Au",
                correct: true,
              },
              {
                text: "Ag",
                correct: false,
              },
              {
                text: "Fe",
                correct: false,
              },
              {
                text: "Cu",
                correct: false,
              },
            ],
          },
  ];
  
  export default quizData;
  