# CP Course Automation

This is a WIP, so that you can test the script, create a On Enter "Execute Javascript" in the beggining of the course, and paste:

    $('head').append('<script src="https://cdn.rawgit.com/andrepazleal/captivateCourseAutomation/Teste/courseScriptTR.js"</script>');

Remember a few things, create 3 or white slides and change the slide duration for more than the standard 3sec, why:

• First slide it loads the script and the video intro;
• Second slide, after pressing the arrow, loads the UX;
• Third slide or last slide, display the end message of the topic.
