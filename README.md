# Captivate Course Automation

This is a WIP, so that you can test the script, create a On Enter "Execute Javascript" in the beggining of the course, and paste:

    $('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>');

    $('head').append('<script src="https://cdn.rawgit.com/andrepazleal/captivateCourseAutomation/Teste/courseScriptTR.js"</script>');



Remember a few things, create 3 or white slides and change the slide duration for more than the standard 3sec, why:

• First slide it loads the script and the video intro;<br>
• Second slide, after pressing the arrow, loads the UX;<br>
• Third slide or last slide, display the end message of the topic.

Things I want to change in the future:

• Create a interface to load the company logotype, course logotype and themes;<br>
• Remove all the links to Tweenlite and remove the library, stay only with CSS;<br>
• The themes will include a set of different animations for the elements, elements like lists will have a custom bullet, etc.

