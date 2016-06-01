var questions = [
  ['How many provinces are there in Canada?', 10],
  ['How many Stanley Cups have the Leafs won?', 13],
  ['What is the distance from Ottawa to Toronto? (to closest 10km)', 450]
];

var correct = [];
var incorrect = [];


var correctAnswers = 0;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>'
  for (i=0; i<arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}
    

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(questions[i][0]);
  } else {
    incorrect.push(questions[i][0]);
}
}


html = "<p>You got " + correctAnswers + " question(s) right." + "</p>";
html += "<h2>You answered these Questions correctly:</h2>";
html += buildList(correct)
html += "<h2>You answered these Questions incorrectly</h2>";
html += buildList(incorrect)
print(html);
