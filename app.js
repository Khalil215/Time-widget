let day = document.getElementById('day')
let time = document.getElementById('time')
let daynum = document.getElementById('daynum')
let month = document.getElementById('month')
let year = document.getElementById('year')
let message = document.getElementById('message')
let mode = document.getElementById('mode')
let outerClock = document.querySelector('.container')
let innerClock = document.getElementById('clockbody')
let space = document.querySelector('.space')



function setclock() {

  // setting the day
  let jday = new Date().getDay()
  switch (jday) {
    case 0:
      jday = "SUNDAY"
      break;
    case 1:
      jday = "MONDAY"
      break;
    case 2:
      jday = "TUESDAY"
      break;
    case 3:
      jday = "WEDNESDAY"
      break;
    case 4:
      jday = "THURSDAY"
      break;
    case 5:
      jday = "FRIDAY"
      break;
    case 6:
      jday = "SATURDAY"
      break;
  }

  day.innerText = jday

  // setting the time
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  let meridian;

  if (hours >= 12) {
    meridian = 'PM'
  } else {
    meridian = 'AM'
  }

  // setting the greetings
  if (hours >= 1 && hours <= 11) {
    message.innerText = 'GOOD MORNING'
  } else if (hours >= 12 && hours <= 17) {
    message.innerText = 'GOOD AFTERNOON'
  } else if (hours >= 18 && hours <= 21) {
    message.innerText = 'GOOD EVENING';
  } else if (hours >= 21 && hours <= 24) {
    message.innerText = 'GOOD NIGHT';
  }


  if (hours > 12) {
    hours = '0' + (hours - 12)
  }

  let jtime = hours + ':' + minutes + ':' + seconds



  time.innerHTML = `${jtime}<span id="meridian">${meridian}</span>`





  // setting the date

  let jdaynum = new Date().getDate()
  daynum.innerText = jdaynum


  let jmonth = new Date().getMonth()
  switch (jmonth) {
    case 0:
      jmonth = "JANUARY"
      break;
    case 1:
      jmonth = "FEBRUARY"
      break;
    case 2:
      jmonth = "MARCH"
      break;
    case 3:
      jmonth = "APRIL"
      break;
    case 4:
      jmonth = "MAY"
      break;
    case 5:
      jmonth = "JUNE"
      break;
    case 6:
      jmonth = "JULY"
      break;
    case 7:
      jmonth = "AUGUST"
      break;
    case 8:
      jmonth = "SEPTEMBER"
      break;
    case 9:
      jmonth = "OCTOBER"
      break;
    case 10:
      jmonth = "NOVEMBER"
      break;
    case 11:
      jmonth = "DECEMBER"
      break;
  }

  month.innerText = jmonth;

  let jyear = new Date().getFullYear();
  year.innerText = jyear

 

}

// Activate Clock
function activateClock() {
  setInterval(setclock, 1000);
}

activateClock()


function changeMode() {
  document.body.classList.toggle('nightMode');
  outerClock.classList.toggle('nightMode');
  innerClock.classList.toggle('nightMode');
}

mode.addEventListener('click', changeMode)


