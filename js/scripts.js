function initCount() {
  let countToInput = parseInt(prompt("Enter a number:"));
  let multiple = parseInt(prompt("Enter another number to count by:"))
  countToFunction(countToInput, multiple);

  function countToFunction(countToInput, multiple) {
  if (countToInput === undefined || multiple === undefined) {
    alert("Please enter a valid number value.");
    initCount();
  } else if (countToInput < multiple) {
    alert("Number you are counting to must be larger than your multiple.");
    initCount();
  } else if (Math.sign(countToInput) === -1 || Math.sign(multiple === -1)) {
    alert("Please enter a positive number!");
    initCount();
  } else if (isNaN(countToInput) || isNaN(multiple)) {
    alert("Please enter a valid number!");
    initCount();
  } else {
    for (i=0; i<countToInput+1; i+=multiple) {
    document.write(" " + i);  
  }}}
}

initCount();