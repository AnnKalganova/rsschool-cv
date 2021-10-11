const bPlus = document.querySelectorAll('.b-btn-plus')
const bMin = document.querySelectorAll('.b-btn-min')
const sPlus = document.querySelectorAll('.s-btn-plus')
const sMin = document.querySelectorAll('.s-btn-min')
const bQuantity = document.querySelectorAll('.b-quantity')
const sQuantity = document.querySelectorAll('.s-quantity')
const bCoast = document.querySelectorAll('.b-coast')
const sCoast = document.querySelectorAll('.s-coast')
const bCount = document.querySelector('.ticket-count-b')
const sCount = document.querySelector('.ticket-count-s')
const total = document.querySelectorAll('.total')
const bTotal = document.querySelector('.total-b-sum')
const sTotal = document.querySelector('.total-s-sum')
const formTicketType =  document.getElementById("form-ticket-type")

const time =  document.getElementById("time")
const date =  document.getElementById("date")

let tempTotal = 30;
var tempBCoast = 20;
var tempSCoast = 10;
let bCoasts =[20,25,40];

bMin.forEach(item=>item.addEventListener('click',()=>{
    if (bQuantity[0].value != 0)
    {
        tempTotal-= tempBCoast;
        total.forEach(item => item.innerHTML = `${tempTotal}`);
    }
    bQuantity.forEach(item=> item.stepDown());
    bCount.innerHTML = bQuantity[0].value;
    recalcBTotal();
}))

bPlus.forEach(item=> item.addEventListener('click',()=>{
    if (bQuantity[0].value < 20)
    {
        tempTotal+= tempBCoast;
        total.forEach(item => item.innerHTML = `${tempTotal}`);
    }
    bQuantity.forEach(item=>item.stepUp() );
    bCount.innerHTML = bQuantity[0].value;
    recalcBTotal();
}))

sMin.forEach(item=> item.addEventListener('click',()=>{
    if (sQuantity[0].value != 0)
    {
        tempTotal-= tempSCoast;
        total.forEach(item=>item.innerHTML = `${tempTotal}`);
    }
    sQuantity.forEach(item=> item.stepDown());
    sCount.innerHTML = sQuantity[0].value;
    recalcSTotal();
})) 

sPlus.forEach(item=> item.addEventListener('click',()=>{
    if (sQuantity[0].value < 20)
    {
        tempTotal+= tempSCoast;
        total.forEach(item=>item.innerHTML = `${tempTotal}`);
    }
    sQuantity.forEach(item => item.stepUp());
    sCount.innerHTML = sQuantity[0].value;
    recalcSTotal();
})) 

const recalcTotal = () => {
    tempTotal = bQuantity[0].value * tempBCoast +  sQuantity[0].value * tempSCoast;
    total.forEach(item =>item.innerHTML = `${tempTotal}`);
}

const recalcBTotal = () => {
    bTotal.innerHTML =  bQuantity[0].value * tempBCoast;
}

const recalcSTotal = () => {
    sTotal.innerHTML =  sQuantity[0].value * tempSCoast;
}

document.ticketType.onclick = function(){
    document.getElementById('form-ticket-type').value = parseInt(document.ticketType.radio.value);
    changeTicketType()
}

formTicketType.onchange = function(){
    document.ticketType.radio.value = parseInt(formTicketType.value);
    changeTicketType()
}

const changeTicketType =()=>{
    tempBCoast = bCoasts[parseInt(document.ticketType.radio.value) - 1 ]
    tempSCoast = tempBCoast / 2;
    bCoast.forEach(item=>item.innerHTML= tempBCoast);
    sCoast.forEach(item=> item.innerHTML = tempSCoast);
    recalcTotal()
    recalcBTotal()
    recalcSTotal()
    document.querySelector('.chosed-type').innerHTML = formTicketType.options[formTicketType.selectedIndex].text;
}

time.onchange = function(){
    document.querySelector('.chosed-time').innerHTML = time.value;
}

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

date.onchange = function(){
  var dat = new Date(date.value);
  var weekday = dat.getDay();
  var mounth = dat.getMonth();
    document.querySelector('.chosed-date').innerHTML = weekdays[weekday] +',  ' + months[mounth] + ' ' + dat.getDate();
}


// onclick="this.nextElementSibling.stepDown()"
//type="button" onclick="this.nextElementSibling.stepDown()" 

// OPEN CLOSE TICKET FORM 
const openButtonBuyTickets = document.querySelector(".buy-now-btn") // buy now
const formBuyTickets = document.querySelector(".buy-ticket-popup") // div form tickets
const closeButtonBuyTickets = document.querySelector(".close-popup") //close button

const openCloseBuyTickets = () => {
    formBuyTickets.classList.toggle('ticket-buy-hidden')
    formBuyTickets.classList.toggle("open-buy-tickets")
  }


openButtonBuyTickets.addEventListener("click", openCloseBuyTickets)
closeButtonBuyTickets.addEventListener("click", openCloseBuyTickets)

document.addEventListener('click', function(e) {
  if (e.target.classList.contains("buy-ticket-popup")) {
    openCloseBuyTickets()
  }
})


//date
var today = new Date().toISOString().split('T')[0];
document.getElementById("date").setAttribute('min', today);