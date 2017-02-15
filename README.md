# Captivate Course Automation

This is a WIP, the purpose of this script is to automate the creation of a course UI inside CP, using a standard for panel, navigation buttons, sound on off, text position (dependind the position of the image), image styles, list, tables, h1, font and all styles, the idea behind this is to present the texts to the user using the Slide Notes imported thru the the accessibility panel and there only use HTML formatting texts. 

Here are the steps to use the script:<br>
• Create a Slide;<br>
• On the tab properties the submenu Actions create a On Enter "Execute Javascript" click on Script_Window button and paste:

    
    $('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>');
    $('head').append('<script src="https://cdn.rawgit.com/andrepazleal/captivateCourseAutomation/Teste/courseScriptTR.js"</script>');


Remember a few things, create 3 or more white slides and change the slide duration for more than the standard 3sec, why:

• First slide it loads the script and the video intro;<br>
• Second slide, after pressing the arrow, loads the UX, the content of the slide, the text for the user, must be inserted on the Slide Accesibility panel, the button on the right side of the Slide Label Name.<br>
• Third slide or last slide, display the end message of the topic.

Things I want to change in the future:

• Create a interface to load the company logotype, course logotype, themes, 3d characters;<br>
• Remove all the links to Tweenlite and remove the library, stay only with CSS;<br>
• The themes will include a set of different animations for the elements, elements like lists will have a custom bullet, etc.<br>
• Create more "poses" for the 3d character.

