let mode = document.getElementById('mode')
let startBtn = document.getElementById('start')
let bar = document.querySelector('.timeLeft')
let bar2 = document.querySelector('.bar')
let hours = document.getElementById('Hour')
let minutes = document.getElementById('Mins')
let seconds = document.getElementById('Secs')
let reset = document.getElementById('reset')
let theTimer = document.querySelector('.timerCont1')
let theTimer2 = document.querySelector('.timerCont2')
let button = document.querySelectorAll('.button1')
let input = document.querySelectorAll('.input')


function timer(e) {
  e.preventDefault()
  let hoursvalue = hours.value * 60 * 60 * 1000
  let minsvalue = minutes.value * 60 * 1000
  let secvalue = seconds.value * 1000
  let total = hoursvalue + minsvalue + secvalue
  let width = 100

  //IF NOTHING IS INPUTED
  if (hoursvalue === 0 && minsvalue === 0 && secvalue === 0) {
    return
  }else{
    startBtn.style.display = 'none'
    theTimer.style.display = 'unset';
    theTimer.style.textAlign = 'right'
    theTimer2.style.display = 'none'
  }

  function display() {
    if (minutes.value < 10) {
      minutes.value = '0' + minutes.value
    }
    if (hours.value < 10) {
      hours.value = '0' + hours.value
    }
    let timer = setInterval(() => {
       //IF ONLY SECONDS ARE INPUTED
      if (hoursvalue === 0 && minsvalue === 0 && secvalue !== 0) {
        if (seconds.value == 0) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        } else {

          seconds.value--
          if (seconds.value < 10) {
            seconds.value = '0' + seconds.value
          }
          theTimer.innerHTML = '00:00:' + seconds.value
        }
      }
      //IF BOTH SECONDS AND MINUTES ARE INPUTED
      else if (hoursvalue === 0 && minsvalue !== 0 && secvalue !== 0) {

        
        if (seconds.value < 10) {
          seconds.value = '0' + seconds.value
        }

        theTimer.innerHTML = '00:' + minutes.value + ':' + seconds.value
        seconds.value--
        //WHEN MINUTES FINISH
        if (seconds.value < 0 && minutes.value < 1) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        }
        else if (seconds.value < 0) {
          seconds.value--
          seconds.value = '00'
          theTimer.innerHTML = '00:' + minutes.value + ':' + seconds.value
          minutes.value--
          seconds.value = 59

        }
      }
      //IF ONLY MINUTES ARE INPUTED
      else if (hoursvalue === 0 && minsvalue !== 0 && secvalue === 0) {
        //minutes drop
        if (seconds.value == 0) {
          minutes.value--
          seconds.value = 59
        }

        if (seconds.value < 10) {
          seconds.value = '0' + seconds.value
        }

        theTimer.innerHTML = '00:' + minutes.value + ':' + seconds.value
        seconds.value--
        //STOP
        if (seconds.value < 0 && minutes.value < 1) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        }
      }
      //IF ONLY hOURS ARE INPUTED
      else if (hoursvalue !== 0 && minsvalue === 0 && secvalue === 0) {
        //hour drop
        if (minutes.value == 0) {
          hours.value--
          minutes.value = 59
          seconds.value = 59
        }

        if (seconds.value < 10) {
          seconds.value = '0' + seconds.value
        }

        theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
        seconds.value--

        //minutes drop
        if (seconds.value < 0) {
          minutes.value--
          seconds.value = 59
          theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
          seconds.value--
        }
        //STOP
        if (seconds.value < 0 && minutes.value < 1 && hours.value < 1) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        }
      }
      //IF ALL ARE INPUTED
      else if (hoursvalue !== 0 && minsvalue !== 0 && secvalue !== 0) {
        //hour drop
        if (minutes.value < 0) {
          hours.value--
          minutes.value = 59
          seconds.value = 59
        }

        if (seconds.value < 10) {
          seconds.value = '0' + seconds.value
        }

        theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
        seconds.value--

        //minutes drop
        if (seconds.value < 0) {
          seconds.value--
          seconds.value = '00'
          theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
          minutes.value--
          seconds.value = 59

        }
        //STOP
        if (seconds.value < 0 && minutes.value < 1 && hours.value < 1) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        }
      }
      //IF HOURS AND MINUTES ARE INPUTED
      else if (hoursvalue !== 0 && minsvalue !== 0 && secvalue === 0) {
        //hour drop
        if (minutes.value < 0) {
          hours.value--
          minutes.value = 59
          seconds.value = 59
        }

        if (seconds.value < 10) {
          seconds.value = '0' + seconds.value
        }

        theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
        seconds.value--

        //minutes drop
        if (seconds.value < 0) {
          seconds.value--
          seconds.value = '00'
          theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
          minutes.value--
          seconds.value = 59

        }
        //STOP
        if (seconds.value < 0 && minutes.value < 1 && hours.value < 1) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        }
      }
      //IF HOURS AND SECONDS ARE INPUTED
      else if (hoursvalue !== 0 && minsvalue === 0 && secvalue !== 0) {
        //hour drop
        if (minutes.value < 0) {
          hours.value--
          minutes.value = 59
          seconds.value = 59
        }

        if (seconds.value < 10) {
          seconds.value = '0' + seconds.value
        }

        theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
        seconds.value--

        //minutes drop
        if (seconds.value < 0) {
          seconds.value--
          seconds.value = '00'
          theTimer.innerHTML = hours.value + ':' + minutes.value + ':' + seconds.value
          minutes.value--
          seconds.value = 59

        }
        //STOP
        if (seconds.value < 0 && minutes.value < 1 && hours.value < 1) {
          clearInterval(timer)
          theTimer.innerHTML = '00:00:00'
        }
      }
    }, 1000);

    reset.addEventListener('click', ()=> {
      clearInterval(timer)
      theTimer.innerHTML = ''
  })
  }
  //INVOKE DISPLAY
  display()

  //SET BAR DROP
  let barShows = setInterval(() => {

    if (width <= 0) {
      clearInterval(barShows)
    } else {
      width--
      bar.style.width = width + '%'
    }
    
  }, total / 1000 * 10);
  if (total == 0) {
    clearInterval(barShows)
  }

  //RESET
  reset.addEventListener('click', resetFunction)
  function resetFunction() {
      clearInterval(barShows)
      clearInterval(timer)
      startBtn.style.display = 'unset'
      bar.style.width = '100%'
      theTimer2.style.display = 'unset'
      theTimer.style.display = 'none'
  }
}

startBtn.addEventListener('click', timer)

function changeMode() {
  document.body.classList.toggle('nightMode');
  bar.classList.toggle('nightModeIB');
  bar2.classList.toggle('nightModeOB');
  button.forEach(b => b.classList.toggle('nightModeOB'))
  input.forEach(b => b.classList.toggle('nightModeOBa'))
}
mode.addEventListener('click', changeMode)

