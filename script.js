let quizMap = document.getElementById('quiz');
let resultatenMap = document.getElementById('resultaat');
let submitKnop = document.getElementById('submit');
let mijnVragen = [
  {
    vraag: "Maak je wel eens expres dubbelzinnige opmerkingen in het bijzijn van een vrouw?",
    antwoorden: {
      a: "Ja, daar is niks mis mee. Je mag toch wel eens lachen zeker!",
      b: "Ja, als u de vrouw niet kwetst. (Eigenlijk weet je dit niet 100% zeker.)",
      c: "Nee, dit is onder geen elke omstandigheid een goed idee."
    },
    correctantwoord: "c"
  },
  {
    vraag: "Versper je soms de weg op het voetpad als je een vrouw passeert met uitgesproken outfit?",
    antwoorden: {
      a: "Ja, dat is haar verdiende loon.",
      b: "Ja, ik zou zelfs nog een stap verder gaan.",
      c: "Nee, dit is ongepast gedrag."
    },
    correctantwoord: "c"
  },
  {
    vraag: " Maak je soms 'face to face' opmerkingen over het kleding gedrag van vrouwen op straat?",
    antwoorden: {
      a: "Ja, ik geef de vrouw een compliment,  ze zou blij moeten zijn.",
      b: "Ja, ik geef toe dat ik dit soms wel eens doe.",
      c: "Nee, ik zou ze enkel aanspreken als ik hulp zou nodig hebben."
    },
    correctantwoord: "c"
  },
  {
    vraag: "Denk je dat je vrouwen ongemakkelijk maakt als je een opmerking maakt over hun kleding gedrag wanneer ze voorbij lopen?",
    antwoorden: {
      a: "Nee, alle vrouwen houden van mijn charme.",
      b: "Ja, het beste in deze situatie, is om de mening voor je zelf te houden."
    },
    correctantwoord: "b"
  },
  {
    vraag: "Vrouwen mogen enkel over straat lopen met neutrale kledij.",
    antwoorden: {
    a: "Ja, het straatbeeld is geen rode loper.",
    b: "Nee, je mag dragen wat je wilt of het nu bedekt of schaars is."
  },
    correctantwoord: "b"
  },
  {
    vraag: "Forse vrouwen mogen enkel bedekkende kleding dragen.",
    antwoorden: {
      a: "Ja, daarom bestaat bedekende kledij.",
      b: "Nee, niet akkoord. Ik blijf erbij, draag wat je wil."
    },
    correctantwoord: "b"
  },
  {
    vraag: "Als je hoge hakken draagt op straat dan zal je wel onderweg zijn naar je paaldansles.",
    antwoorden: {
      a: "Ja, ik geef deze stelling gelijk.",
      b: "Ja, hier kan ik wel inkomen, maar deze uitspraak is wel iets te overdreven.",
      c: "Nee, hakken zijn vrouwelijk en elegant."
    },
    correctantwoord: "c"
  },
  {
    vraag: "Vrouwen die enkel zwart dragen hebben een saai depressief leven.",
    antwoorden: {
      a: "Ja, maar deze zijn wel slim, ze krijgen geen opmerking van mij.",
      b: "Nee, dit is een slecht vooroordeel. zwart kan elegant, stoer, enzovoort zijn.",
      c: "Ja, zwart is somber."
    },
    correctantwoord:"b"
  },
  {
    vraag: "Paar meter verder krijgt een vrouw een ongewenste opmerking op haar kleding gedrag, wat doe je?",
    antwoorden: {
      a: "Ik laat het gaan.",
      b: "Ik kom gezellig meedoen.",
      c: "Ik raad de mannen aan om de campagne MISS eens op te zoeken."
    },
    correctantwoord: "c"
  },
  {
    vraag: "Zou je een paar keer heen en weer lopen om dezelfde vrouw opnieuw te bekijken omdat ze schaars gekleed is?",
    antwoorden: {
      a: "Ja, ze moet zich zo maar niet kleden, terecht als ze zich ongemakkelijk voelt.",
      b: "Nee, dit is voor niks nodig.",
      c: "Ja, maar ik probeer dit subtiel."
      },
      correctantwoord: "b"
    },
    {
      vraag: "Wat vindt je van de veel gebruikte uitspraak 'je vraagt erom in die korte broek/rok' ?",
      antwoorden: {
        a: "Mag er wezen.",
        b: "Onterecht."
        },
        correctantwoord: "b"
    },
    {
      vraag: "Is er een verschil in kleding stijl / kleding smaak?",
      antwoorden: {
        a: "Geen verschil",
        b: "Er is wel degelijk een verschil, maar hier mag je niet op beoordelen."
        },
        correctantwoord: "b"
      }
];
(function(){
  function bouwQuiz(){
    let output = [];

    mijnVragen.forEach(
      (dezeVraag, vraagNummer) => {
        let antwoorden = [];
        for(letter in dezeVraag.antwoorden){

          antwoorden.push(
            `<label>
              <input type="radio" name="vraag${vraagNummer}" value="${letter}">
              ${letter} :
              ${dezeVraag.antwoorden[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="vraag"> ${dezeVraag.vraag} </div>
            <div class="antwoorden"> ${antwoorden.join("")} </div>
          </div>`
        );
      }
    );

    quizMap.innerHTML = output.join('');
  }

  function laatResultatenZien(){

    let antwoordMappen = quizMap.querySelectorAll('.antwoorden');

    let numCorrect = 0;

    console.log(mijnVragen)

    mijnVragen.forEach( (dezeVraag, vraagNummer) => {

      let antwoordMap = antwoordMappen[vraagNummer];

      console.log(vraagNummer);

      let selector = `input[name=vraag${vraagNummer}]:checked`;
      let gebruikersAntwoord = (antwoordMap.querySelector(selector) || {}).value;

      if(gebruikersAntwoord === dezeVraag.correctantwoord){
        numCorrect++;
        console.log(numCorrect);
      }
    });
    if  (numCorrect <= 6) {
      resultatenMap.innerHTML = `${numCorrect} op ${mijnVragen.length}`+ " <br> U hebt nog een hele weg voor de boeg, maar geen zorgen wij helpen u graag. Eerst en vooral bent u al op het goede spoor. Wij raden u aan om eens te beginnen bij uzelf, wat zou u er van vinden als u continu ongepast wordt aangesproken, En door een opmerking uw favoriete kledingstuk niet meer wilt dragen. Dit klinkt misschien onnozel maar is het zeker niet. </br>" + "<br> Als u meer inzicht heeft gekregen en het probleem inziet, probeer dan de test opnieuw.</br>";
    }
    else if (numCorrect <= 7) {
        resultatenMap.innerHTML = `${numCorrect} op ${mijnVragen.length}`+ " <br> U bent al op een goede weg, maar er kan wel nog wat verbetering in komen. Probeer jezelf te betrappen op de enkele fouten die overblijven. </br>";
    }
    else if (numCorrect <= 10) {
          resultatenMap.innerHTML = `${numCorrect} op ${mijnVragen.length}`+ " <br> Bijna goed, uw tijdperk bij MISS zit er bijna op, niet getreurd, ga naar de volgende fase geef het woord door, dat opmerkingen op kleding gedrag of het anders behandelen geen goed idee is. </br>";
    }
    else {
      resultatenMap.innerHTML = `${numCorrect} op ${mijnVragen.length}`+ "<br> Onze missie is geslaagd. Deel uw ervaringen hoe jij dit hebt aangepakt met anderen. </br> " + "Als u soortgelijke stellingen die u net heeft beantwoord ziet gebeuren, doe er iets mee net zoals het logisch is als je ziet dat iemand zijn sleutels laat vallen, deze opraapt en teruggeeft aan de eigenaar.";
    }
  }
  function laatSlideZien(n) {
    slides[dezeSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    dezeSlide = n;
    if(dezeSlide === 0){
      vorigeKnop.style.display = 'none';
    }
    else{
      vorigeKnop.style.display = 'inline-block';
    }
    if(dezeSlide === slides.length-1){
      volgendeKnop.style.display = 'none';
      submitKnop.style.display = 'inline-block';
    }
    else{
      volgendeKnop.style.display = 'inline-block';
      submitKnop.style.display = 'none';
    }
  }
  function laatVolgendeSlideZien() {
    laatSlideZien(dezeSlide + 1);
  }
  function laatVorigeSlideZien() {
    laatSlideZien(dezeSlide - 1);
  }
  bouwQuiz();

  let vorigeKnop = document.getElementById("vorige");
  let volgendeKnop = document.getElementById("volgende");
  let slides = document.querySelectorAll(".slide");
  let dezeSlide = 0;

  laatSlideZien(dezeSlide);
  submitKnop.addEventListener('click', laatResultatenZien);
  vorigeKnop.addEventListener("click", laatVorigeSlideZien);
  volgendeKnop.addEventListener("click", laatVolgendeSlideZien);
})();
