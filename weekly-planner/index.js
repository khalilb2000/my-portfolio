const saveBttns = document.querySelectorAll('.saveBtn');;

//start of function
function saveEvent() {
const currentHour = this.parentNode.id;
const eventText = this.previousElementSibling.value;
//getting current hour from local system.
localStorage.setItem(currentHour, eventText);
}

saveBttns.forEach((button) => {
  button.addEventListener('click', saveEvent);
});
// calling in the DayJS library.
const currentDate = dayjs().format('dddd, MMM D, YYYY, hh:mm:ss A');
// Putting current hr in 24hr format.
const currentHour = dayjs().format('H');

document.getElementById('currentDay').textContent = currentDate;

document.querySelectorAll('.time-block').forEach((timeBlock) => {
  const blockHour = parseInt(timeBlock.id.split('-')[1]);
// looping through the time-block elements
  if (blockHour < currentHour) {
    timeBlock.classList.remove('present' , 'future');
    timeBlock.classList.add('past');
  } else if ( blockHour === currentHour) {
    timeBlock.classList.remove('past', 'future');
    timeBlock.classList.add('present');
  } else ( blockHour > currentHour); {
    timeBlock.classList.remove('present', 'past')
    timeBlock.classList.add('future');
  }
});

document.querySelector('saveBtn').forEach((saveButton) => {saveButton.addEventListener('click', saveEvent);
});
// here I am createing a function for my savebutton
function saveEvent(){
  const currentHour = this.parentNode.id;
  const eventText = this.previousElementSibling.value;
  localStorage.setItem(currentHour, eventText)
}
