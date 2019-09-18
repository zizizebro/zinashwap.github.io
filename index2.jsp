<html>
<head>
    <link href="css/quiz.css" rel="stylesheet" type="text/css">
</head>
<body>
<div>
    <h2>The Number Quiz</h2>

    <p>Your Current Sqore is</p>

    <p>Guess the next number in the sequence</p>

    <p>1,2,3,4</p>

    <form action="quiz" method="post">
        <label for="ans">Your Answer </label><input type="number" name="ans" id="ans">
        <br></br>
        <input type="hidden" value="" name="questionNo">
        <input type="submit" value="Submit">
    </form>

</div>

</body>
</html>
