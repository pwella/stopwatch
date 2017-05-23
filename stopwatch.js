// All Global variables
var startStopButton = document.getElementById('starttime'),
    resetButton     = document.getElementById('reset'),
    recordButton    = document.getElementById('record')
    displayTime     = document.getElementById('displaytime'),
    showPastTime    = document.getElementById('pasttime');
      
var time = 0;
var toggle = false;

// FUNCTIONS
/* ========== Start and Stop Function ========== */
startStopButton.addEventListener('click', startStopTimer);

/* ========== Reset Function ========== */
resetButton.addEventListener('click', function () { 
  time = 0; displayTime.textContent = '';
  showPastTime.textContent = ''
});

/* ========== Record Function ========== */
recordButton.addEventListener('click', function() {
  var p = document.createElement('p');
  p.textContent = time.toFixed(2);
  showPastTime.appendChild(p);
});

// CALLBACK FUNCTIONS
/* ========== Start and Stop Callback ========== */
function startStopTimer() {
  if(toggle){
    clearInterval(clearTime);
    toggle = false;
  }else if(!toggle){
    clearTime = setInterval(setTime, 0);
  }
  // (toggle) ? (clearInterval(clearTime)) : (clearTime = setInterval(setTime, 0));
}

/* ========== Set Time Callback ========== */
function setTime(){
  time = time + 0.01;
  displayTime.textContent = time.toFixed(2);
  toggle = true;
}