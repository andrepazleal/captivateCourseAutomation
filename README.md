CP Course Automation

To test the script, execute this JS in the beggining of the course:
$('head').append('<script src="https://rawgit.com/andrepazleal/Captivate-Course-Automation/Teste/courseScriptTR.js"</script>');

Remember a few things, create 3 or white slides and change the slide duration for more than the standard 3sec, why:

• First slide it loads the script and the video intro;
• Second slide, after pressing the arrow, loads the UX;
• Third slide or last slide, display the end message of the topic.


