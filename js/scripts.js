// WE ARE WORKING WITH SOF DATA TYPES HERE WE ALWAYS TYPE THEM HERE IN THE FIRST PLACE ALL THE TIME...
//TASK 1
// var name = prompt('What is your name?');
// var surname = prompt('What is your surname?');
// var age = Number(prompt('What is your age?'));
// var phoneNumber = Number(prompt('What is your phone number'));
// var id = prompt('What is your id number');
// var userMoneyInUsd = Number(prompt('How much money do you have?'));

// var usdIntoUzs = 10040;
// var userTotalMoneyInUzs = userMoneyInUsd * usdIntoUzs;

// var message = '';
// message += `Assalomu alekum ${name} ${surname} salomatmisiz. Sizning yoshingiz: ${age} da ekan. Telefon raqamingiz: ${phoneNumber}. Passport raqamingiz: ${id}. Sizfa mavjud bolgan summa: ${userMoneyInUsd} dollar. Uzbekistan summasida esa ${userTotalMoneyInUzs} boladi. Etiboringiz uchun kattakon rahmat.`;

// console.log(message);

// WE ARE WORKING WITH SOF DATA TYPES IN HERE AT FIRST
//TASK 2
var planeTicketPriceInUsd = 350;
var entertainmentPaymentInUsd = 200;
var hotelPaymentInEuro = 450;

var usdIntoUzs = 10040; // EVALUATING DOLLAR RATES AND EUROS
var euroIntoUzs = 12000;

var totalUsdExpansesInUzs = (planeTicketPriceInUsd * usdIntoUzs) + (entertainmentPaymentInUsd * usdIntoUzs);
var hotelPaymentInUzs = hotelPaymentInEuro * euroIntoUzs; // WE ARE CONVERTING AND CALCULATING OUR NUMBERS IN HERE
var totalExpanses = totalUsdExpansesInUzs + hotelPaymentInUzs;


// WORKING WITH DOMS ONE OF MY FAVORITE
var elTourForm = document.querySelector('.js-tour-form');
if (elTourForm) {
  var elTourInput = elTourForm.querySelector('.js-tour-form__input');
  var elTourNumberInput = elTourForm.querySelector('.js-tour-form__number-input');
  var elTourResult = elTourForm.querySelector('.js-result');
}

// ADDING FUNCTION INTO FORM AND CREATING NEW VAR FOR INPUT VALUES...
if (elTourForm) {
  elTourForm.addEventListener('submit', function (evt) { // ADDING EARS INTO FORM SUBMIT
    evt.preventDefault(); // PREVENTING IT

    var username = elTourInput.value;  // ASIGNING TO OUR NEW VARS HER TO BE READ EASILY AND TO BE UNDERSTANDABLY
    var usermMoneyAmount = Number(elTourNumberInput.value * usdIntoUzs);
    // console.log(username, usermMoneyAmount);

    var message = ''; // CREATING NEW EMPTY BOZ HERE AND ADDING OUR INFO INTO IT
     message += `Assalomu alekum ${username} salomatmisiz. Mehmonhona narxi: ${hotelPaymentInEuro} euro. Samalyot chiptasi: ${planeTicketPriceInUsd} dollar. Entertainment narhi: ${entertainmentPaymentInUsd} dollar. Umumuy summa: ${totalUsdExpansesInUzs} boladi Uzbekistan somida. Sizdagi bor summa ${usermMoneyAmount}.`

    if (usermMoneyAmount >= totalUsdExpansesInUzs) { // HERE !!! WE ARE LEARNING ALISHERS MONEY CONDITION IF MORE GOOD OR BAD
      message +=  ` Alisher oq yo'l yahshi boring...😊👌👌`;
    } else {
      message += ` Alisher yana azgina kutib turasiz endi sabrli boling 😉😉😉.`;
    }

    elTourResult.textContent = message; // EQUALING INTO TEXTCONTENT RESULT
  });
}