'use-strict';





//Store information related to the quiz in an object
const quizInfo = {
    questions: [
      {question: "I slutet på januari/början på februari var jag i Indien i två veckor. En helt fantastisk resa med så bra människor och jag hade så roligt. Vi åt mat på bananblad, besökte tusenåriga grottor, besökte slumområden, jobbade som sopgubbar, åkte tåg utan dörrar, drack sockerrörsjuice, fiskade krabbor och mycket mer. Första veckan var vi i Mumbai och andra i Goa. Vad kallas denna delstat också för?",
      answers: {A: "Euroindia, alltså Europe och India",
                B: "India's piggy bank, alltså att Goa är rikt",
                C: "India light, som cola light vilket åsyftar Goas västerländska stil"},
      correctAnswer: "C",
      imgSource: "images/young-woman-looking-out-the-train-door.jpg"},

      {question: "På nationaldagen (tror jag) var jag recitatör i en föreställning på kulturhuset Anders som hette “Gud förklädd”. Jag läste alltså upp en dikt mellan sång- och musikstyckena och så fick jag blommor och applåder fastän en hel kör och orkester hade gjort hela framförandet och övat i månader. Hursomhelst marknadsfördes detta. Var i Höör kan man fortfarande hitta affischen om Gud förklädd där bla mitt namn står så prydligt?",
      answers: {A: "På Ica",
                B: "På stationen",
                C: "På en elcentral, eller en sån som står i buskarna här hos mamma, jag vet inte vad dom heter, men på en sådan ute i Sätofta"},
      correctAnswer: "B",
      imgSource: "images/swedish-flag.jpg"},

      {question: "Jag är ju anställd på restaurangen på Stiftsgården Åkersberg, även fast jag inte jobbat där sen i somras. Men jag ska jobba där den 28e plus nyår! Hursomhelst så trivs jag mycket bättre där än vad jag gjorde på Gästis. Vad är huvudanledningen?",
      answers: {A: "Jag har större ansvar och kan jobba självständigt.",
                B: "Man blir garanterad mat och rast där man får sitta ner och äta.",
                C: "Större variation på evenemang, tex läger / 50-årsfester / minnesstunder / konferenser osv."},
      correctAnswer: "A",
      imgSource: "images/waiter-displaying-delicious-dish.jpg"},

      {question: "Precis som med resan till Indien är studenten svår att sammanfatta i en enda fråga. Men det var en fullspäckad vecka med karneval, skumparty, poängjakt, temafester, bal, flakåkning mm. En vanlig svensk tradition är att alla i en klass blir tilldelade en titel som börjar på “klassens-nånting”. Typ klassens mamma, eller klassens Törnrosa. Vilken titel fick jag?",
      answers: {A: "Klassens Mjölk",
                B: "Klassens Lidl",
                C: "Klassens Dramaqueen"},
      correctAnswer: "B",
      imgSource: "images/young-woman-graduating.jpg"},

      {question: "Som ni vet vid detta laget spelar jag till och från på mina brödrars gamla spelkonsoler. Detta tycker jag är himla bra eftersom jag slipper betala tusentals kronor för att göra något jag tycker om. Men, vilken typ av spel är min favorit?",
      answers: {A: "Super Smash Bros",
                B: "Zelda",
                C: "Super Mario"},
      correctAnswer: "B",
      imgSource: "images/three-pac-mans.jpg"},

      {question: "Efter att Scengångarna lades ner på grund av ekonomiska skäl från kommunen så gick jag med i HATS, Höörs AmatörTeaterSällskap. Vi övar på en pjäs som heter “Ett litet familjeföretag” där jag spelar rollen som Tina. Vilken genre tillhör pjäsen?",
      answers: {A: "Franskt satyrspel",
                B: "Svensk musikteater",
                C: "Brittisk fars"},
      correctAnswer: "C",
      imgSource: "images/guy-displaying-hat-with-icea-cream-image.jpg"},
      
      {question: "I somras var jag i Visby under Almedalsveckan tillsammans med den, ja enligt pappret, partipolitiskt obundna organisationen Fler Unga. Mamma och Atik åkte också dit lite spontant. En sak var lite extra rolig med gruppen jag åkte med och det var att vi var ganska många rödhåringar. Folk drog det så långt så de tom undrade om vi var syskon. Hur många gingers var vi?",
      answers: {A: 4,
                B: 6,
                C: 8},
      correctAnswer: "A",
      imgSource: "images/happy-red-haired-kid.jpg"},

      {question: "Jag har bara två veckor kvar av min kurs i teatervetenskap på Göteborgs universitet. Och tur är det för det har varit en riktig besvikelse. Kurskamraterna har varit blä och dagarna har sniglat sig fram. I slutändan har jag avskräckts från teatern och det är väl nånstans bra att jag insett det förr än senare. Vad har varit minst outhärdligt?",
      answers: {A: "Föreläsningarna",
                B: "Seminarierna (Kom oförberedd o försökte verka påläst)",
                C: "Workshopsen (Otroooligt sega dagar med en superflummig lärare)"},
      correctAnswer: "A",
      imgSource: "images/bored-audience.jpg"},

        {question: "Under hösten har jag vikarierat på Kristinaskolan i Rannebergen. Tack vare att Marta har en viss status bland elever och personal och att jag är hennes kusin fick jag massor med respekt gratis. Förutom riktigt bra lön, lärarkaffe och maktmissbruk har vikariatet också gett mig bra erfarenheter och kunskaper inom pedagogik. Vilket stadie var roligast att undervisa?",
        answers: {A: "Lågstadiet (så mycket tillgivenhet, man är viktig för dem)",
                  B: "Mellanstadiet (har inte haft dem nåt alls nästan)",
                  C: "Högstadiet (visserligen lugnare lektioner men ofta respektlösa)"},
        correctAnswer: "A",
        imgSource: "images/pencils-in-a-can.jpg"},

        {question: "Martolos, Märtis, Martman. Kärt barn har många namn. Marta har välkomnat mig med öppna armar till sitt hem den här terminen och jag har trivts så bra i Angered tack vare henne. Vi har haft massa kul tillsammans; gått på teater, julshow, thanksgivingmiddag, titta på serie, provsuttit badkar, göra armhävningar varje dag, shoppat, betalat 150 kr för parkering inne i stan... Listan är lång. Vilken tradition har varit den bästa?",
        answers: {A: "Dagliga Ica-inköp med Icakort och Icabonusar",
                  B: "Springa-en-mil-lördag",
                  C: "Tvätt- och pannkakstisdag"},
        correctAnswer: "C",
        imgSource: "images/human-and-dog-greeting.jpg"}],

    questionNumber: 0,
    score: 0};
  

  


  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  // These functions return HTML templates


  function getCurrentQuestion() {
    // Function for returning current question
    return quizInfo.questions[getCurrentQuestionNumber()];
  }


  function getCurrentQuestionNumber() {
    // Function for returning current question number stored in the web storage
    return parseInt(sessionStorage.getItem("questionNumber"));
  }


  function getCurrentScore() {
    // Function for returning the score
    return parseInt(sessionStorage.getItem("score"));
  }


  function getNbrOfQuestions() {
    // Function for returning total number of questions in the quiz
    return quizInfo.questions.length;
  }


  function generateAlternativeElement(altNbr) {
    // Function that generates the alternatives html element
    if (getCurrentQuestion()) {
      // Get question number
      qNbr = getCurrentQuestionNumber();
  
      // Get corresponding string for the alternative
      const altNLabel = getCurrentQuestion().answers[altNbr];
  
      // Create input and label string for the alternative (using non-breaking space in html string)
      return `<input type="radio" name=q${qNbr} id=q${qNbr}${altNbr} value=${altNbr.toLowerCase()} alt=${altNLabel} ${altNbr === "A" ? "checked": ""}>
      <label for=q${qNbr}${altNbr}>${altNbr}.&nbsp ${altNLabel}</label><br>`;
    };
  }


  function generateQnPElement() {
    // Function generating the current question number and total points html element. 
    const question = getCurrentQuestionNumber();
    const scores = getCurrentScore();

    return `<div class="question-counter centered">
              <p>Fråga: ${question+1} / ${getNbrOfQuestions()}</p>
            </div>
            <div class="score centered">
                <p>Poäng: ${scores}</p>
            </div>`;
  }


  function generateSelectedCorrectElement() {
    // Function for generating the selected and correct answer html element.
    // Get the correct answer for current question and corresponding string
    const correctAns = getCurrentQuestion().correctAnswer;
    const correctAnsStr = getCurrentQuestion().answers[correctAns];

    // Get the chosen alternative and corresponding string
    const chosen = sessionStorage.getItem(`q${getCurrentQuestionNumber()}`);
    const chosenStr = getCurrentQuestion().answers[chosen.toUpperCase()];

    return `<h3>Ditt svar</h3>
            <h4 class="space color">${chosen.toUpperCase()}.&nbsp ${chosenStr}</h4>
            <h3>Rätt svar</h3>
            <h4>${correctAns}.&nbsp ${correctAnsStr}</h4>`;
  }


  function generateOkayButton() {
    // Function for generating the okay button in the answer page.
    // Get current question and total number of questions
    const currentQuestion = getCurrentQuestionNumber();
    const totNbrOfQuestions = getNbrOfQuestions();

    // Return a string where the "Okay" button will direct the user differently depending on the current question. Further more, if the last question has been responded to, change the class of the "js-okay-btn" to "js-final-btn". 
    return `<form id="okay" action=${(currentQuestion+1) == totNbrOfQuestions ? "final.html": "quiz.html"}>
              <button class="okay-btn btn ${(currentQuestion+1) == totNbrOfQuestions ? "js-final-btn": "js-okay-btn"}" type="submit">Okej</button>
            </form>`;
  }


  function generateFinalScoreElement() {
    // Function for generating the final score html element on the final screen. 
    return `<h3>Antal Poäng</h3>
            <h4>${getCurrentScore()} / ${getNbrOfQuestions()}</h4>`;
  }


  
  /********** RENDER FUNCTION(S) **********/
  // This function conditionally replaces the contents of the <main> tag based on the state of the store


  function renderQuestion() {
    // Function for rendering a question in the quizInfo array
    if (getCurrentQuestion()) {
      // Create a paragraph string out of the question
      const currentQuestionString = '<p>'.concat(getCurrentQuestion().question, '</p>');
  
      // Render the question in the DOM
      $('.js-question').html(currentQuestionString);
    };
  }


  function renderAlternatives() {
    // Function for rendering corresponding question alternatives in the DOM
    // Constants for keeping count of alternative number and storing resulting strings
    const alts = "ABC";
    const alternativesElement = [];

    // Create a string out of the three alternatives 
    for (let i=0; i<3; i++) {

      // Create input and label string for the alternative
      const altString = generateAlternativeElement(alts[i]);

      // Append string to array
      alternativesElement.push(altString);
    };

    // Render the alternatives in the DOM
    $('.js-alternatives form').html(alternativesElement.join(""));
  }


  function renderImage() {
    // Function for rendering the image on the right hand side
    // Format image description (replaceAll doesn't work on several common browsers such as Safari, Edge, Samsung etc.)
    const descr = getCurrentQuestion().imgSource.split(".")[0].split("-").join(" ");

    // Create image string
    const imgString = `<img src=${getCurrentQuestion().imgSource} alt=${descr} class="image"/>`;

    // Render image in DOM
    $('.js-image').html(imgString);
  }


  function renderQuestionAndPoints() {
    // Function for rendering current question and number of points
    $('.js-counter-score').html(generateQnPElement());
  }


  function renderQuizPage() {
    // This function renders the Quiz page in the DOM.
    renderQuestion();
    renderAlternatives();
    renderImage();
    renderQuestionAndPoints();
  }


  function renderAnswerPage() {
    // This function renders the Answer page in the DOM. 
    $('.js-answer-area').html(generateSelectedCorrectElement());
    $('.js-okay-area').html(generateOkayButton());
  }


  function renderFinalPage() {
    // This function renders the Final quiz page in DOM
    $('.js-final-score').html(generateFinalScoreElement());
  }



  /********** EVENT HANDLER FUNCTIONS **********/
  // These functions handle events (submit, click, etc)



  function handleStartQuizClicked() {
    // This function handles when the Start quiz button on the start (i.e. index) screen is clicked.  
    $('.js-start-quiz-btn').on('click', event => {
      // Set initial values for the session web storage. Clear it first so the session starts clean. 
      sessionStorage.clear()
      sessionStorage.setItem("questionNumber", 0);
      sessionStorage.setItem("score", 0);
    });
  }


  function handleNextClicked() {
    // This function handles when the Next button is clicked. 
    $('.js-next-btn').on('click', event => {
      // Get the selected answer
      const name = `q${getCurrentQuestionNumber()}`;
      const selected = $(`[name=${name}]:checked`).val();
  
      // Store selected answer in the web storage
      sessionStorage.setItem(name, selected);
    });
  }


  function checkIfCorrectAnswer(qNbr) {
    // Function for checking whether the correct alternative was selected for question number qNbr
    if (quizInfo.questions[qNbr].correctAnswer == sessionStorage.getItem(`q${qNbr}`).toUpperCase()) {
      return true;
    } else {
      return false;
    };
  }


  function incrementQuestionNbr() {
    // Function for incrementing the question number
    const qNbr = getCurrentQuestionNumber();
    if (qNbr < quizInfo.questions.length-1) {
      sessionStorage.setItem("questionNumber", qNbr+1);
    };
  }


  function updateNbrOfPoints() {
    // Function for updating the number of points scored
    const score = getCurrentScore();
    if (checkIfCorrectAnswer(getCurrentQuestionNumber())) {
      sessionStorage.setItem("score", score+1);
    };
  }


  function handleOkayClicked() {
    // Function handling when the Okay button on the Answer page is clicked.
    $('.js-okay-area').on('click', '.js-okay-btn', event => {
      // Increment score and question number accordingly (the score only if selected answer is correct)
      updateNbrOfPoints();
      incrementQuestionNbr();
    });
  }


  function handleFinalClicked() {
    // Function handling when the Okay button on the Answer page is clicked.
    $('.js-okay-area').on('click', '.js-final-btn', event => {
      // Increment score and question number accordingly (the score only if selected answer is correct)
      updateNbrOfPoints();
      incrementQuestionNbr();
    });
  }


  function handleStartNewQuizClicked() {
    // Function handling clicks on the Start New Quiz button on the final page.
    $('.js-start-new-quiz-btn').on('click', event => {
    // Set initial values for the session web storage. Clear it first so the session starts clean. 
    sessionStorage.clear()
    sessionStorage.setItem("questionNumber", 0);
    sessionStorage.setItem("score", 0);
    });
  }



     /********** CALLBACK FUNCTION **********/
  // Callback function, responsible for initially activating the individual functions. 
  function handleQuiz() {
    handleStartQuizClicked();
    renderQuizPage();
    handleNextClicked();
    renderAnswerPage();
    handleOkayClicked();
    handleFinalClicked();
    renderFinalPage();
    handleStartNewQuizClicked();
  }



  // Call functions when page loads. 
  $(handleQuiz);


  
