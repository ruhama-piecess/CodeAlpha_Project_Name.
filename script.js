function calculateAge() {
  var day = parseInt(document.getElementById('day').value);
  var month = parseInt(document.getElementById('month').value);
  var year = parseInt(document.getElementById('year').value);

  var today = new Date();
  var birthDate = new Date(year, month - 1, day);

  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('result').innerHTML = 'Your age is: ' + age;
}