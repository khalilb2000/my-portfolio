const saveBttns = document.querySelectorAll('.saveBtn');  
const timeBlocks = document.querySelectorAll('.time-block');
//testing to see if it returns 
console.log(timeBlocks);
//start of  save function
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

document.addEventListener('DOMContentLoaded', function(){
  // Get the current hour using dayjs (you might need to adjust this based on your specific requirements)
  document.querySelectorAll('.saveBtn').forEach((saveButton) => {
    saveButton.addEventListener('click',saveEvent)

   loadNotes();

  });

  


 
  const currentHour = dayjs().hour();

  // Loop through the time-block elements
  document.querySelectorAll('.time-block').forEach((timeBlock) => {
    const blockHour = parseInt(timeBlock.id.split('-')[1]);

    // Check the condition and apply classes accordingly
    if (blockHour < currentHour) {
      timeBlock.classList.remove('present', 'future');
      timeBlock.classList.add('past');
    } else if (blockHour === currentHour) {
      timeBlock.classList.remove('past', 'future');
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.remove('present', 'past');
      timeBlock.classList.add('future');
    }
  });
});

if (timeBlocks === null){
  console.error("No elements with class 'time-block' found.")
}

document.querySelectorAll('.saveBtn').forEach((saveButton) => {saveButton.addEventListener('click', saveEvent);
});
// here I am createing a function for my savebutton
function saveEvent(){
  const currentHour = this.parentNode.id;
  const eventText = this.previousElementSibling.value;
  localStorage.setItem(currentHour, eventText)
  console.log('Save completed')
}




$('.saveBtn').on('click', saveEvent);