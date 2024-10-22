var answers = ["magic", "light"];
var letter1 = ["m", "a", "g", "i", "c"];
var letter2 = ["l", "i", "g", "h", "t"];
var score = 0;
var totalScore = answers.length * 10;

function perbarui(score) {
    document.getElementById('score').innerText = "Score:" + score;
}

function cekMenang() {
    if (score >= totalScore) {
        alert('Congratulations! You won broo...');
    }
}

function cekKalah() {
    if (score <= -1) {
        alert('Sorry, you lose bro...');
    }
}


function validate() {
    var inputWords = document.getElementById('jawaban').value;;
    if (inputWords == answers[0]) {
        // magic
        j1.innerHTML = letter1[0];
        j2.innerHTML = letter1[1];
        j3.innerHTML = letter1[2];
        j4.innerHTML = letter1[3];
        j5.innerHTML = letter1[4];
        score += 10;
        perbarui(score);
        cekMenang();
    }  else if (inputWords === answers[1]) {
        j6.innerHTML = letter2[0];
        j7.innerHTML = letter2[1];
        j3.innerHTML = letter1[2];
        j8.innerHTML = letter2[3];
        j9.innerHTML = letter2[4];
        score += 10;
        perbarui(score);
        cekMenang();    
    }
    else {
        alert('inccorect answer! coba lagi...');
        score -= 10;
        perbarui(score);
        cekKalah()
    }
}


document.querySelector("button").addEventListener('click', function() {
    document.getElementById('jawaban').innerHTML = validate()
});
