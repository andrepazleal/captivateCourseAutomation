/*TEST SCRIPT FOR COURSES*/
$('head').append('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="https://qamoodle.dominiosistemas.com.br/assets/css/courseStyle.css">');
//$('head').append('<link href="//assets.gcs.thomsonreuters.com/fonts?variants=regular|bold" rel="stylesheet" type="text/css">');
//$('head').append('<link rel="stylesheet" type="text/css" href="https://dominiosistemas.webaula.com.br/Cursos/assets/css/courseStyle.css">');


function turnImageDescription(){
	/*var theParent = document.querySelector("#div_Slide");
	theParent.addEventListener("click", doSomething, false);
	 
	function doSomething(e) {
	    if (e.target !== e.currentTarget) {
	        var clickedItem = e.target.id;
	        alert("Hello " + clickedItem);
	    }
	    e.stopPropagation();
	}*/
	/*[].forEach.call(document.querySelectorAll("div[id*='mobile']"), function (event){
		//images = document.querySelectorAll('canvas[id*="mobile"');
		//console.log(images)
		event.addEventListener('click', funcaoPrincipal, false);
	});*/
	var imageDescription = document.querySelectorAll("div[id*='mobile']");
	imageDescription.forEach(function(event){
		event.addEventListener('click', funcaoPrincipal, false);
	})
}

function funcaoPrincipal(event){
	//images[0].className="closeDoor"
	//console.log(images[0])
	
	
	//canvasName.className

	//console.log(this.id)
	//console.log(canvasImage)
	/*var closeButton = document.createElement("div")
	closeButton.setAttribute("id", "closeButton")
	closeButton.style.position='absolute'
	closeButton.style.width='30px';
	closeButton.style.height='30px';
	closeButton.style.top='-30px';
	closeButton.style.backgroundColor='grey';
	closeButton.style.backgroundPosition='center center';
	closeButton.style.backgroundImage="url('https://qamoodle.dominiosistemas.com.br/assets/imagesTR/closeIcon.svg')";
	
	//var checkButton = document.getElementById('closeButton')!=null;
	var checkButton = document.getElementById('closeButton');
	//if(checkButton == false){
		this.children[0].appendChild(closeButton);
	//}
	closeButton.addEventListener('click', function(){
   		//this.parentNode.className='closeDoor';
   		this.parentNode.className='fadeOut';
   		//event.className="closeDoor";
   		//event.style.pointerEvents="none"
   		
   		document.getElementById(canvasName).className="openDoor";		
   		console.log(this.parentElement)
   		this.parentElement.removeChild(this)
   	}, false);*/
   	
  

	var isIOs = navigator.userAgent.match(/iPad/i) != null;
	if(isIOs == true)
	{
       	//console.log(this.getAttribute( "aria-label" ));
   		textIpad = this.getAttribute("aria-label");
   		var textIpadRender = document.createElement("p");
   		textIpadRender.innerHTML=textIpad;
   		this.appendChild(textIpadRender)
   		this.className="openDoor";
   		this.style.border='solid 1px orange';
    }
    else{
	//var canvasImages = document.querySelectorAll("canvas[id*='mobile']");	    	
	//canvasImages.className="closeDoor";
   	//console.log(this.children[0].innerHTML)
   	//console.log(this.children)
   	changeColors();
   	 	imageName = this.id;
		canvasImage = document.querySelectorAll("canvas[id*='mobile']");
		canvasImage.forEach(function(canvasImage){
		canvasName = imageName+'c';
			try{
				document.getElementById(canvasName).className="closeTurnImage";		
			}catch(e){}
		})
   	try{
   		this.children[0].className="openTurnImage"
   		this.children[0].style.padding='10px';
   		this.children[0].style.textAlign='center';
   		this.getElementsByTagName("p")[1].style.height="150px"
   		this.getElementsByTagName("p")[1].style.overflow="auto"	
   }catch(e){}
  
   	//var imageTurnDescription = this.children[0].innerHTML;
   	//console.log(imageTurnDescription)
   	//var text = document.createElement("H1");
   	//this.appendChild(text);
   	//text.data = imageTurnDescription;
   	//this.className='closeDoor';
  	//console.log(this.children)
   	//this.children.className="closeDoor";	
    }
   	
   	event.stopPropagation();
}

cp.movie.am.pauseCurrentSlideAudioForInteractiveClick();


screenSize = document.getElementById("div_Slide")
var screenSizeWidth = parseInt(screenSize.style.width)
var screenSizeHeight = parseInt(screenSize.style.height)
var pageUrl = window.location.hostname;
var courseOptionsEn = 'To access the course options,<br>access the icon on the bottom right corner.'
var courseOptionsPt = 'Para acesso as opções do curso,<br>toque no canto inferior direito.'
var introType;
var timeStamp = (new Date()).getTime();
var languageSystem = window.navigator.userLanguage || window.navigator.language;

function detectChange(){
	var slideName = document.getElementById('div_Slide')
	slideName.addEventListener("DOMNodeInserted", detectChange, false); 
	idOriginal = this.id;
	if(idOriginal != this.id){
	}
	else{
		setTimeout(updateSlideElements, 100);
	}
}

function isIOs(){
	var isIOs = navigator.userAgent.match(/iPad/i) != null;
	if(isIOs == true){
		changeClick = ('ontouchstart' in document.documentElement ? "touchstart" : "click");	
	}else{
		changeClick = ('ontouchstart' in document.documentElement ? "click" : "click");
	}	
}
isIOs();

function scriptVersion(){
	var scriptVersion = document.createElement("div");
	scriptVersion.setAttribute("id", "scriptVersion");
	document.getElementById("project_main").appendChild(scriptVersion);

	$(scriptVersion).html('<div style="color:white; margin-top:-9vh;margin-left:-12vw;-webkit-transform:rotate(45deg);vertical-align:top;text-align:center;pointer-events:none;"><i class="fa fa-exclamation-circle"></i></div>');
}
scriptVersion();

function carregandoTela(){
	var carregandoTela = document.getElementById("loading");	
	try{
		carregandoTela.setAttribute("id", "carregandoTela");
		$(carregandoTela).css("background-color",'rgba(255, 149, 0, 0.8)')
		var carregandoTelaFont = document.getElementById("loadingString");
		carregandoTelaFont.setAttribute("id", "nomeTopico");
		$(carregandoTelaFont).css("font-size",24)
		//$(carregandoTelaFont).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
	}catch(e){}
}

function companyName(){
	companyName = (cpInfoCompany.split(' '));
	if(companyName[0] == 'Thomson')
	{
		companyName = 'logoThomson.png';
	}
	if(companyName[0] == 'Domínio')
	{
		companyName = 'logoDominio.png';
	}
	if(companyName[0] == 'Novajus')
	{
		companyName = 'logoNovaprolink.png';
	}
	if(companyName[0] == 'Mastersaf')
	{
		companyName = 'logoMastersaf.svg';
	}
}

function courseName(){
	courseName = (cpInfoProjectName.split(' '));
	console.log(courseName)
	if(courseName[1] == 'Impress')
	{
		courseName = 'impress.png';
	}
	if(courseName[1] == 'Writer')
	{
		courseName = 'writer.png';
	}
	if(courseName[1] == 'Calc')
	{
		courseName = 'calc.png';
	}
	if(courseName[1] == 'FTP')
	{
		courseName = 'ftp.png';
	}
	if(courseName[1] == 'FTP')
	{
		courseName = 'ftp.png';
	}
	if(courseName[2] == 'Não')
	{
		courseName = 'contabilidadeNaoContadores.png';
	}	
	if(courseName[0] == 'HP12C')
	{
		courseName = 'hp12c.png';
	}	
	if(courseName[1] == 'Administrar')
	{
		courseName = 'administrar.png';
	}
	if(courseName[1] == 'Lalur')
	{
		courseName = 'lalur.png';
	}
	if(courseName[1] == 'Auditoria')
	{
		courseName = 'auditoria.png';
	}
	if(courseName[1] == 'Atendimento')
	{
		courseName = 'atendimento.png';
	}
	if(courseName[1] == 'Honorários')
	{
		courseName = 'honorarios.png';
	}
	if(courseName[1] == 'Patrimônio')
	{
		courseName = 'patrimonio.png';
	}
	if(courseName[1] == 'Processos')
	{
		courseName = 'processos.png';
	}
	if(courseName[1] == 'Protocolo')
	{
		courseName = 'protocolo.png';
	}
	if(courseName[1] == 'Registro')
	{
		courseName = 'registro.png';
	}
	if(courseName[1] == 'Protocolo')
	{
		courseName = 'protocolo.png';
	}
	if(courseName[1] == 'Utilitários')
	{
		courseName = 'utilitarios.png';
	}
	if(courseName[0] == 'Informática')
	{
		courseName = 'informatica.png';
	}
	if(courseName[0] == 'Instalação')
	{
		courseName = 'instalacao.png';
	}
	if(courseName[1] == 'Folha' && courseName[3] == 'eSocial')
	{
		courseName = 'folhaEsocial.png';
	}
	if(courseName[1] == 'Folha' && courseName[3] == 'Médias')
	{
		courseName = 'folhaMedias.png';
	}
	if(courseName[1] == 'Folha' && courseName[3] == 'CAGED')
	{
		courseName = 'folhaCAGED.png';
	}
	if(courseName[1] == 'Folha' && courseName[3] == '13º')
	{
		courseName = 'folhaDecimo.png';
	}
	if(courseName[1] == 'Folha' && courseName[4] == 'Professor')
	{
		courseName = 'folhaProfessor.png';
	}
	if(courseName[1] == 'Folha')
	{
		courseName = 'folha.png';
	}
	if(courseName[1] == 'Escrita' && courseName[5] == 'Real')
	{
		courseName = 'escritaReal.png';
	}
	if(courseName[1] == 'Escrita' && courseName[5] == 'Presumido')
	{
		courseName = 'escritaPresumido.png';
	}
	if(courseName[1] == 'Escrita' && courseName[4] == 'Simples')
	{
		courseName = 'escritaSimples.png';
	}
	if(courseName[1] == 'Escrita' && courseName[4] == 'Atividade')
	{
		courseName = 'escritaAtividade.png';
	}
	if(courseName[1] == 'Escrita' && courseName[4] == 'São')
	{
		courseName = 'escritaSp.png';
	}
	if(courseName[1] == 'Escrita' && courseName[4] == 'Rio')
	{
		courseName = 'escritaRs.png';
	}
	if(courseName[1] == 'Escrita' && courseName[4] == 'EFD' && courseName[6] == 'Bloco')
	{
		courseName = 'blocoK.png';
	}
	if(courseName[1] == 'Escrita' && courseName[4] == 'EFD')
	{
		courseName = 'escritaSped.png';
	}
	if(courseName[1] == 'Escrita')
	{
		courseName = 'escrita.png';
	}
	if(courseName[1] == 'Contabilidade' && courseName[3] == 'SPED')
	{
		courseName = 'contabilidadeSped.png';
	}
	if(courseName[1] == 'Contabilidade' && courseName[4] == 'FCONT')
	{
		courseName = 'contabilidadeSped.png';
	}
	if(courseName[1] == 'Contabilidade')
	{
		courseName = 'contabilidade.png';
	}
	if(courseName[0] == 'Institucional')
	{
		courseName = 'institucional.jpg';
	}
	if(courseName[1] == 'Contábil')
	{
		courseName = 'contabilPlus.png';
	}
	if(courseName[3] == 'Profissional')
	{
		courseName = 'cliente.png';
	}
	if(courseName[0] == 'Abordagem')
	{
		courseName = 'cliente.png';
	}
	if(courseName[0] == 'MyExpenses')
	{
		courseName = 'MyExpenses.png';
	}
	if(courseName[1] == 'Imóvel')
	{
		courseName = 'Dominio Imovel.png';
	}
	if(courseName[0] == 'Novajus')
	{
		courseName = 'novajus.png';
	}
	if(courseName[2] == 'eSocial')
	{
		courseName = 'conceitos_do_esocial.png';
	}
	if(courseName[0] == 'Rotinas')
	{
		courseName = 'Rotinas.png';
	}
	if(courseName[1] == 'Atualizar')
	{
		courseName = 'atualizar.png';
	}
	if(courseName[0] == 'Checkpoint')
	{	
		courseName = 'checkpoint.png';
	}

	
	//else if(logoCourse == undefined ){
		//courseName = 'logoProduct.png';
	//}
	//else if(logoCourse == undefined && courseName){
		
	//}
}

function createElements(){
	var logoCompanyContainer = document.createElement("div");
	logoCompanyContainer.setAttribute("id", "logoCompanyContainer");	
	//added
	//document.getElementById("div_Slide").appendChild(logoCompanyContainer);
	companyName();
	document.getElementById("project_main").appendChild(logoCompanyContainer);
	//logoCompanyContainer.setAttribute("style", "position:absolute; z-index:2");
	//$(logoCompanyContainer).css('position','absolute');
	//$(logoCompanyContainer).css('height','100%');
	//$(logoCompanyContainer).css('width','100%');
	//$(logoCompanyContainer).css('top','88%');
	//$(logoCompanyContainer).css('opacity',0);
	$(logoCompanyContainer).css('background-image','url(https://moodle.dominiosistemas.com.br/assets/imagesTR/'+companyName+')');
	//$(logoCompanyContainer).css('background-repeat','no-repeat');
	//$(logoCompanyContainer).css('background-position','50% 0');
	//$(logoCompanyContainer).css('background-size','35%');

	var logoCourse = document.createElement("img");
	logoCourse.setAttribute("id", "logoCourse");
	document.getElementById("project_main").appendChild(logoCourse);
	courseName();
	logoCourse.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/logos/"+courseName);
	
	//logoCourse.setAttribute("height", "59.5%");
	//logoCourse.setAttribute("width", "45%");
	//logoCourse.setAttribute("style", "position:absolute;");
	//$(logoCourse).css('top','18%');
	//$(logoCourse).css('z-index',70);
	//$(logoCourse).css('opacity',0);

	var nomeTopicoText = document.createElement("p");
	nomeTopicoText.setAttribute("id", "nomeTopicoText");
	$(nomeTopicoText).css('display',"table-cell");
	$(nomeTopicoText).css('vertical-align',"middle");	
	$(nomeTopicoText).css('text-align',"center");
	$(nomeTopicoText).css("word-break","normal");
	$(nomeTopicoText).css("hyphens","auto");
	if(screenSizeHeight != 600)
	{
		$(nomeTopicoText).css('padding',"2vh");	
	}
	else
	{
		$(nomeTopicoText).css('padding',"1vh");	
	}

	var nomeTopicoContainer = document.createElement("div");
	nomeTopicoContainer.setAttribute("id", "nomeTopicoContainer");
	document.getElementById("div_Slide").appendChild(nomeTopicoContainer);
	nomeTopicoContainer.appendChild(nomeTopicoText);
	nomeTopicoContainer.setAttribute("style", "position:absolute;");
	$(nomeTopicoContainer).css("opacity", 0);
	$(nomeTopicoContainer).css("z-index", 2);
	$(nomeTopicoContainer).css("width", '22%');
	$(nomeTopicoContainer).css("height", '29%');
	$(nomeTopicoContainer).css('top','18%');
	$(nomeTopicoContainer).css('left','50%');
	$(nomeTopicoContainer).css('font-size',24);
	//$(nomeTopicoContainer).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(nomeTopicoContainer).css('color',"#ffffff");
	$(nomeTopicoContainer).css('display',"table");

	var topicoNovidade = cpInfoCurrentSlideLabel.indexOf("(Novo)") != -1;
	if(topicoNovidade == true){
		var nomeTopicoNovidade = document.createElement("div");
		nomeTopicoNovidade.setAttribute("id", "nomeTopicoNovidade");
		document.getElementById("div_Slide").appendChild(nomeTopicoNovidade);
		nomeTopicoNovidade.setAttribute("style", "position:absolute");
		$(nomeTopicoNovidade).css("pointer-events",'none')
		$(nomeTopicoNovidade).css('text-align',"center");
		$(nomeTopicoNovidade).css('width',0);
		$(nomeTopicoNovidade).css("z-index","2000");
		$(nomeTopicoNovidade).css("border-top","100px solid #FF8300");
		$(nomeTopicoNovidade).css("border-right","100px solid transparent");
		$(nomeTopicoNovidade).css('font-size',"105%");
		//$(nomeTopicoNovidade).css('font-family',"Knowledge")
		$(nomeTopicoNovidade).css('color',"#000000");
		$(nomeTopicoNovidade).html('<div style="color:white; margin-top:-60px;margin-left:20px;-webkit-transform:rotate(-45deg);vertical-align:top;text-align:center;pointer-events:none;">NOVO</div>');
		$(nomeTopicoNovidade).css('opacity',"0");
	}

	var message = document.createElement("div");
	message.setAttribute("id", "message");
	document.getElementById("project_main").appendChild(message);
	$(message).css("position",'relative');
	$(message).css("opacity",0);
	$(message).css("font-size", 20);
	$(message).css("height", 280);
	$(message).css("width", 800);
	$(message).css('top',160);
	$(message).css('left',0);
	$(message).css('vertical-align',"middle");
	//$(message).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(message).css('color',"#ffffff");
	$(message).css('margin',0);
	$(message).css("background",'grey')
	$(message).css("display",'table')
	$(message).css("pointer-events",'none')

	var fvmMessageTexto = document.createElement("p");	
	fvmMessageTexto.setAttribute("id", "fvmMessageTexto");
	message.appendChild(fvmMessageTexto);
	//$(fvmMessageTexto).css('text-align',"center");
	//$(fvmMessageTexto).css('line-height',"90%");
	$(fvmMessageTexto).css('font-size',28);
	//$(fvmMessageTexto).css('width','100%');
	//$(fvmMessageTexto).css('position','absolute');
	//$(fvmMessageTexto).css('margin',0);
	$(fvmMessageTexto).css('display','table-cell');
	$(fvmMessageTexto).css('vertical-align','middle');
	$(fvmMessageTexto).css('text-align','center');

	var messageFinalElement = document.createElement("div");	
	messageFinalElement.setAttribute("id", "messageFinalElement");
	document.getElementById("project_main").appendChild(messageFinalElement);
	messageFinalElement.setAttribute("style", "position:absolute;");
	$(messageFinalElement).css('width','100%');
	$(messageFinalElement).css('height','100%');
	$(messageFinalElement).css('top','0');
	$(messageFinalElement).css("background-color",'rgba(86, 86, 86, 0.9)')
	$(messageFinalElement).css("visibility",'hidden')
	$(messageFinalElement).css("display",'none')

	var messageFinalElementText = document.createElement("p");
	messageFinalElementText.setAttribute("id", "messageFinalElementText");
	messageFinalElement.appendChild(messageFinalElementText);
	$(messageFinalElementText).css("font-size", '125%');
	$(messageFinalElementText).css('margin-top',"25vh");
	//$(messageFinalElementText).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(messageFinalElementText).css('color',"#ffffff");
	$(messageFinalElementText).css('text-align',"center");

	var messageFinalElementIcon = document.createElement("div")
	messageFinalElementIcon.setAttribute("id", "messageFinalElementIcon");
	$(messageFinalElement).append(messageFinalElementIcon)
	messageFinalElementIcon.setAttribute("style", "position:absolute; z-index:100");
	$(messageFinalElementIcon).css("height",100);
	$(messageFinalElementIcon).css("width",100);
	$(messageFinalElementIcon).css("padding","25px");
	$(messageFinalElementIcon).css("display","table");
	$(messageFinalElementIcon).css('top','55%');
	$(messageFinalElementIcon).css("font-size",16);
	//$(messageFinalElementIcon).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(messageFinalElementIcon).css("color","#ffffff");
	$(messageFinalElementIcon).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-angle-left fa-3x"></i></p>');
}	


function nameAlunoString(){
	nomeAluno='';
	if (typeof window.GetStudentName==='undefined')
	{
		nomeAluno='Aluno';
	}else{
		nomeAluno=GetStudentName();
		if(pageUrl == 'moodle.dominiosistemas.com.br')
	    {
	       	nomeAluno=nomeAluno.split(',')[1];
	    } 
	    else{
	      	nomeAluno=nomeAluno.split(' ')[0];  
	    }
	}
}
function messageCentralize(){
	
	var fvmMessageTextoTop = (-($(fvmMessageTexto).height()-280))/2;
	var fvmMessageTextoLeft = (-($(fvmMessageTexto).width()-800))/2;
	$(fvmMessageTexto).css('left',fvmMessageTextoLeft);
	$(fvmMessageTexto).css('top',fvmMessageTextoTop);	
}

function introVideos(){
	if(document.documentElement.clientWidth < 700 && cpInfoCurrentSlideLabel !="Fim!"){
		createElements();
		chooseTopicAndContinue();
	}
	else{
		if(cpInfoCurrentSlideLabel == "Seja Bem Vindo!")
		{
			introType = 'intro.mp4';
		}
		else if(cpInfoCurrentSlideLabel != "Seja Bem Vindo")
		{
			introType = 'introLmsOut.mp4';	
		}
		if(cpInfoCurrentSlideLabel == "Seja Bem Vindo!" || cpInfoCurrentSlideLabel == "Faça Você Mesmo!" || cpInfoCurrentSlideLabel != "Fim!"){	
			var videoIntroElement = document.createElement("video")
			document.getElementById("div_Slide").appendChild(videoIntroElement);
			videoIntroElement.setAttribute("id", "videoIntroElement");
			videoIntroElement.setAttribute("autoplay", "true");
			videoIntroElement.setAttribute("preload", "auto");
			videoIntroElement.setAttribute("width", "100%");
			videoIntroElement.setAttribute("height", "100%");
			videoIntroElement.setAttribute("type", "video/mp4");
			videoIntroElement.setAttribute("src", "https://qamoodle.dominiosistemas.com.br/assets/videos/"+introType);	videoIntroElement.load();
			
			//pay attention in the order if this element was set above all attr IPAD will show a black screen.
			/*var videoIntroElementIconInicia = document.createElement("img");
			document.getElementById("div_Slide").appendChild(videoIntroElementIconInicia)
			videoIntroElementIconInicia.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/playIcon.png");
			videoIntroElementIconInicia.setAttribute("style", "position:absolute; z-index:200");
			$(videoIntroElementIconInicia).css("height",96);
			$(videoIntroElementIconInicia).css("width",96);
			$(videoIntroElementIconInicia).css("top",'44%');
			$(videoIntroElementIconInicia).css("left",'44%');
			$(videoIntroElementIconInicia).css("opacity",0);
			$(videoIntroElementIconInicia).css("visibility",'hidden');

			var videoIntroElementIconLoading = document.createElement("img");
			document.getElementById("div_Slide").appendChild(videoIntroElementIconLoading)
			videoIntroElementIconLoading.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/loader.gif");
			videoIntroElementIconLoading.setAttribute("style", "position:absolute; z-index:100");
			
			$(videoIntroElementIconLoading).css("height",50);
			$(videoIntroElementIconLoading).css("width",50);
			$(videoIntroElementIconLoading).css("top",'47%');
			$(videoIntroElementIconLoading).css("left",'47%');
			$(videoIntroElementIconLoading).css("opacity",0);
			TweenLite.to(videoIntroElementIconLoading, 1, {opacity:1,scale:.8});

			$(videoIntroElementIconInicia).bind("click", function(){
				
				TweenLite.to(videoIntroElementIconInicia, .4, {opacity:0, scale:1.5,onComplete:function(){
				$(videoIntroElementIconInicia).css("display",'none');	
				}});
				videoIntroElement.play();
			});

			videoIntroElement.addEventListener("progress",function()
			{
				TweenLite.to(videoIntroElementIconLoading, .5, {opacity:0,onComplete:function(){
					$(videoIntroElementIconLoading).css("visibility",'hidden');	
				}});
				$(videoIntroElementIconInicia).css("visibility",'visible');
				TweenLite.to(videoIntroElementIconInicia, .3, {opacity:1,scale:1});
			});

			videoIntroElement.addEventListener("playing", function () 
			{
				//set position as absolute only when video is playing to avoid black square.
			    $(videoIntroElement).css("position",'absolute');
			    $(videoIntroElementIconInicia).css("display",'none');
			    $(videoIntroElementIconLoading).css("display",'none');
			});
			$(videoIntroElement).bind("ended", function() 
			{
				chooseTopicAndContinue();
			});*/
			//modification
			var videoIntroElementIconLoading = document.createElement("div");
			document.getElementById("div_Slide").appendChild(videoIntroElementIconLoading)
			videoIntroElementIconLoading.setAttribute("id", "videoIntroElementIconLoading");
			videoIntroElementIconLoading.setAttribute("style", "position:absolute; z-index:100");
			$(videoIntroElementIconLoading).css("height",'100%');
			$(videoIntroElementIconLoading).css("display","table");
			$(videoIntroElementIconLoading).css("width",'100%');
			$(videoIntroElementIconLoading).css("top",0);
			$(videoIntroElementIconLoading).css("left",0);
			$(videoIntroElementIconLoading).css("font-size",24);
			$(videoIntroElementIconLoading).css("color","#bebebe");
			$(videoIntroElementIconLoading).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-cog fa-spin fa-3x"></i></p>');
			TweenLite.to(videoIntroElementIconLoading, .5, {opacity:1,scale:.8});
			$(videoIntroElementIconLoading).bind(changeClick,function(e){
			//$(videoIntroElementIconLoading).bind("click", function(){
				TweenLite.to(videoIntroElementIconLoading, 1, {opacity:0, scale:1.5,onComplete:function(){
				$(videoIntroElementIconLoading).css("display",'none');	
				}});
				videoIntroElement.play();
			});
			videoIntroElement.addEventListener("progress",function()
			{
				$(videoIntroElementIconLoading).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-play-circle-o fa-3x"></i></p>');
					TweenLite.to(videoIntroElementIconLoading, .5, {opacity:0,onComplete:function(){
					$(videoIntroElementIconLoading).css("visibility",'hidden');	
				}});
				$(videoIntroElementIconLoading).css("visibility",'visible');
				TweenLite.to(videoIntroElementIconLoading, .3, {opacity:1,'color':'black',scale:1});
			});
			videoIntroElement.addEventListener("playing", function () 
			{
				//set position as absolute only when video is playing to avoid black square.
			    $(videoIntroElement).css("position",'absolute');
			    $(videoIntroElementIconLoading).css("display",'none');
			});
			$(videoIntroElement).bind("ended", function() 
			{
				createElements();
				chooseTopicAndContinue();
			});
		}
	}

	if(cpInfoCurrentSlideLabel == "Fim!")
	{
		createElements();
		fimIntro();
	}	
}
introVideos();

function fimIntro(){
	//SCORM_WriteComment("Your comment here")
	$(messageFinalElementText).html('<br><br><br>Parabéns! Você concluiu o curso <br><br><strong>'+cpInfoProjectName+'</strong><br><br>Dúvidas? Envie um e-mail para <br>'+cpInfoEmail);
	//changeColors();

	cp.movie.am.mute(false);
	cp.jumpToPreviousSlide();
	logoCourse.className='topicoNormalLogoCourseFinal'
	$(messageFinalElementText).css('font-weight',"lighter");
	//cp.jumpToPreviousSlide();
	//if(cpInfoDescription.split(' ')[0] == 'Character'){
	//	character();
	//	$(character).css('z-index',1000);	
	//}
	//$(logoCourse).css('top','10%');
	//$(logoCourse).css('left','4%');
	$(logoCourse).css('z-Index',100);
		
	
	$(messageFinalElement).css("background",'-webkit-gradient(linear, left top, right bottom, color-stop(0%,#017eb9), color-stop(100%,#005b84))')
	messageFinalElement.className='fadeIn'
	//$(messageFinalElement).css("background",'-webkit-gradient(linear, left top, right bottom, color-stop(1%,#fb9000), color-stop(100%,#fb9000))')
	$(messageFinalElement).css('display',"block");
	$(messageFinalElement).css('visibility',"visible");
	
	$(messageFinalElement).css('opacity',0);
	$(messageFinalElementText).css('opacity',0);
	$(messageFinalElementText).css('color',"rgb(255,255,255");
	$(messageFinalElementText).css('margin-left',"35%");
	$(messageFinalElementText).css('margin-top','20%');
	TweenLite.to(messageFinalElement, 1, {opacity:1,onComplete:function(){
		TweenLite.to(messageFinalElementText, 1, {opacity:1});	
	}});	
	
	
	$(messageFinalElementIcon).css('display','none');

	$(logoCompanyContainer).css('display','block');
	$(logoCompanyContainer).css('z-Index',5000);
	//$(logoCompanyContainer).css('opacity','0');
	//TweenLite.to(logoCompanyContainer,.5,{opacity:1});
	TweenLite.to(logoCompanyContainer, .5, {opacity:1});	

	feedback()
}

function feedback(){
	var feedback = document.createElement('div');
	document.getElementById("div_Slide").appendChild(feedback);
	feedback.setAttribute('id','feedback');
	feedback.setAttribute('style','border-radius:5px;position:absolute;top:60%;left:15%;background-color:rgba(255,255,255,1);z-index:200;width:700px;height:100px;display:table;');
	feedback.className = 'shadow';

	var feedbackTitle = document.createElement('div')
	feedback.appendChild(feedbackTitle)
	feedbackTitle.setAttribute('id','feedbackTitle')
	feedbackTitle.setAttribute('style','padding:10px;color:white;top:0;left:0;background-color:#666666;height:25px;display:table-cell;vertical-align:middle;text-align:center;')
	//$(feedbackTitle).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(feedbackTitle).css("font-size","14px");
	feedbackTitle.innerHTML = "COM 144 LETRAS DEIXE SUA OPINIÃO DE COMO PODEMOS MELHORAR OS CURSOS!"

	var feedbackTextarea = document.createElement('textarea')
	feedback.appendChild(feedbackTextarea)
	feedbackTextarea.setAttribute('id','feedbackTextarea')
	feedbackTextarea.setAttribute('maxlength','144')
	feedbackTextarea.setAttribute('placeholder','Digite sua mensagem aqui.')
	feedbackTextarea.setAttribute('style','color:#666666;width:10%;position:static;width:365px;height:72px;border-style:hidden;')
	//$(feedbackTextarea).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(feedbackTextarea).css("font-size","16px");
	$(feedbackTextarea).css("font-weight","200");
	$(feedbackTextarea).css("margin","15px");
	
	var feedbackStars = document.createElement('div')
	feedbackTitle.appendChild(feedbackStars)
	feedbackStars.setAttribute('id','feedbackStars')
	feedbackStars.setAttribute('style','color:#FFCC00;top:20px;padding:10px')
	//feedbackStars.innerHTML = "<i class='fa fa-star fa-3x'></i>"

	//var feedbackStar1 = document.createElement('div')
	//feedbackStars.appendChild(feedbackStar1)
	//feedbackStar1.setAttribute('id','feedbackStar1')
	//feedbackStar1.setAttribute('style','display:inline;color:#FFCC00')
	//feedbackStar1.innerHTML = "<i class='fa fa-star fa-3x'></i>"

	var feedbackStar1 = document.createElement('input')
	feedbackStar1.setAttribute('id','feedbackStar1')
	//feedbackStar1.setAttribute('type','radio')
	feedbackStar1.type = 'radio'
	feedbackStars.appendChild(feedbackStar1)
	feedbackStar1.setAttribute('style','width:16px;height:16px;color:#FFCC00;overflow:hidden;-webkit-appearance:radio;')
	//var feedbackStar1Label = document.createElement('label')
	//feedbackStar1.appendChild(feedbackStar1Label)
	//feedbackStar1Label.setAttribute('for','feedbackStar1')
	//feedbackStar1Label.innerHTML = "TEST"

	var feedbackStar2 = document.createElement('div')
	feedbackStars.appendChild(feedbackStar2)
	feedbackStar2.setAttribute('id','feedbackStar1')
	feedbackStar2.setAttribute('style','display:inline;color:#BEBEBE')
	feedbackStar2.innerHTML = "<i class='fa fa-star fa-3x'></i>"

	var feedbackStar3 = document.createElement('div')
	feedbackStars.appendChild(feedbackStar3)
	feedbackStar3.setAttribute('id','feedbackStar1')
	feedbackStar3.setAttribute('style','display:inline;color:#BEBEBE')
	feedbackStar3.innerHTML = "<i class='fa fa-star fa-3x'></i>"

	var feedbackStar4 = document.createElement('div')
	feedbackStars.appendChild(feedbackStar4)
	feedbackStar4.setAttribute('id','feedbackStar1')
	feedbackStar4.setAttribute('style','display:inline;color:#BEBEBE')
	feedbackStar4.innerHTML = "<i class='fa fa-star fa-3x'></i>"

	var feedbackStar5 = document.createElement('div')
	feedbackStars.appendChild(feedbackStar5)
	feedbackStar5.setAttribute('id','feedbackStar5')
	$(feedbackStar5).bind(changeClick,function(e){
	//feedbackStar5.addEventListener('click',function(){
		this.className='scaleUp';
		//console.log(feedbackTextarea.value)
	})
	feedbackStar5.setAttribute('style','display:inline;color:#BEBEBE')
	feedbackStar5.innerHTML = "<i class='fa fa-star fa-3x'></i>"
}

function scoreValues(){
	//point values
	////console.log('--------------------------------------------------------');
	////console.log('points scored: '+cpQuizInfoPointsscored);
	////console.log('total correct answers: '+cpQuizInfoTotalCorrectAnswers);
	////console.log('percentage: '+cpInfoPercentage);
	////console.log('attempts: '+cpQuizInfoAttempts);
	//////console.log('total project points: '+cpQuizInfoTotalProjectPoints);
	//////console.log('total quiz points: '+cpQuizInfoTotalQuizPoints);
	//////console.log('quiz pass points: '+cpQuizInfoQuizPassPoints);
	//////console.log('quiz pass percent: '+cpQuizInfoQuizPassPercent);
	//////console.log('quiz scope: '+cpInQuizScope);
	//////console.log('points per question slide: '+cpQuizInfoPointsPerQuestionSlide);
	//////console.log('pretest points scored: '+cpQuizInfoPretestPointsscored);
	//////console.log('pretest score percentage: '+cpQuizInfoPretestScorePercentage);
	//////console.log('partial scoreon: '+cpQuizInfoQuestionPartialScoreOn);
	//////console.log('total correct answers: '+cpQuizInfoTotalCorrectAnswers);
	////console.log('total questions per project: '+cpQuizInfoTotalQuestionsPerProject);
	//////console.log('last slide point scored: '+cpQuizInfoLastSlidePointScored);
	////console.log('quiz info attempt: '+cpQuizInfoAttempts);
	////console.log('attempts max: '+cpQuizInfoMaxAttemptsOnCurrentQuestion);
	//////console.log('total correct answers: '+cpQuizInfoTotalCorrectAnswers);
	//////console.log('unanswered questions: '+iQuestionScore);
	///////console.log('attempts max: '+cpInfoEpochMS);
	//////console.log('attempts maxslide : '+cpQuizInfoNegativePointsOnCurrentQuestionSlide);
	//////console.log('attempts max: '+cpQuizInfoPointsscored);
	//////console.log('attempts max: '+cpInfoFrameCount);
	//////console.log('last visited slide: '+cpInfoLastVisitedSlideStartFrame);
	//////console.log('current frame: '+cpInfoCurrentFrame);
	//////console.log('slide timing: '+cpQuizInfoAnswerChoice);
	//////console.log('max attempt current slide: '+cpQuizInfoMaxAttemptsOnCurrentQuestion);
	////console.log('total unashwered questions: '+cpQuizInfoTotalUnansweredQuestions);
	//////console.log('total project points: '+cpQuizInfoTotalProjectPoints);
	//////console.log('question per quiz: '+cpQuizInfoNoQuestionsPerQuiz);
	//////console.log('pretestes: '+cpQuizInfoPretestPointsscored);
	//////console.log('scope slide: '+cpQuizScopeSlide);
	//////console.log('pass fail: '+cpQuizInfoPassail);
	//////console.log('reporting variables: '+cpReportingVariables)
	//////console.log('tentativas: '+cpQuizInfoCurrentAttempt);
	//////console.log('tentativas: '+attempt);
}

function messageRefresh(){
	$(messageFinalElement).css('display',"block");
	$(messageFinalElement).css('visibility',"visible");
	$(messageFinalElement).css('opacity',0);
	$(messageFinalElementIcon).css('opacity',0);
	TweenLite.to(messageFinalElement,1,{opacity:.9});
	$(logoCompanyContainer).css('display','block');
	TweenLite.to(logoCompanyContainer,.3,{opacity:1});
	$(logoCompanyContainer).css('z-Index',5000);
	$(messageFinalElementText).css('margin-top',"30%");
	cpCmndPause=1;
	//messageFinalElementText.className = 'noselect';
	if(languageSystem == "en-US"){
		$(messageFinalElementText).html('<i class="fa fa-meh-o fa-4x"></i><br>You did not interact for a few moments,<br> please refresh your browser window.');	
	}
	else if(languageSystem == "pt-br" || languageSystem == "pt-BR"){
		$(messageFinalElementText).html('<i class="fa fa-meh-o fa-4x"></i><br>Você ficou alguns minutos sem utilizar a plataforma,<br> atualize seu navegador.');	
	}
	
	//$(document).css("pointer-events",'none')
}

function chooseTopicAndContinue(){
	//var intervalMessageRefresh = setTimeout(messageRefresh,1000);
	//warningElement(courseOptionsEn,screenSizeHeight-50+'px',screenSizeWidth-50+'px',2000,-45)
	if(languageSystem == "en-US"){
		//warningElement('<i class="fa fa-meh-o fa-4x"></i><br>You did not interact for a few moments,<br> please refresh your browser window.',10000,0)
		//cpCmndPause=1;
		//$(messageFinalElementText).html('<i class="fa fa-meh-o fa-4x"></i><br>You did not interact for a few moments,<br> please refresh your browser window.');	
	}
	else if(languageSystem == "pt-br" || languageSystem == "pt-BR"){
		//warningElement('<i class="fa fa-meh-o fa-4x"></i><br>Você ficou alguns minutos sem utilizar a plataforma,<br> atualize seu navegador.',10000,0)
		//cpCmndPause=1;
		//$(messageFinalElementText).html('<i class="fa fa-meh-o fa-4x"></i><br>Você ficou alguns minutos sem utilizar a plataforma,<br> atualize seu navegador.');	
	}
	cp.movie.am.mute(false);
	cp.jumpToPreviousSlide();
	var iniciaElement = document.createElement("div");
	iniciaElement.setAttribute("id", "iniciaElement");
	document.getElementById("div_Slide").appendChild(iniciaElement);
	//$(iniciaElement).css('display',"inline");
	//$(iniciaElement).css('z-index',100);
	//changed the opacity to low value and set color for IE and Chrome in Android Tablets.
	$(iniciaElement).html('<p style="display:table-cell;vertical-align:middle;text-align:center;">CLIQUE AQUI PARA INICIAR</p>');
	
	try{
		TweenLite.to(nomeTopicoNovidade, 1, {opacity:1});		
	}
	catch(e){}

	TweenLite.to(logoCompanyContainer,.25,{opacity:1});
	$(logoCompanyContainer).css('display','block');
	
	TweenLite.to(nomeTopicoContainer,.5,{opacity:1});
	
	
	if(cpInfoCurrentSlideLabel == "Seja Bem Vindo!")
	{
		nameAlunoString();
		$(nomeTopicoText).html(cpInfoCurrentSlideLabel+"<br>"+nomeAluno);
		//TweenLite.to(logoCourse,.3,{opacity:1,left:'4.3%'});
		logoCourse.className='topicoNormalLogoCourse'
	}
	else if(cpInfoCurrentSlideLabel != "Faça Você Mesmo!" && cpInfoCurrentSlideLabel != "Seja Bem Vindo!")
	{
		$(nomeTopicoText).html(cpInfoCurrentSlideLabel);
		//TweenLite.to(logoCourse,.3,{opacity:1,left:'4.3%'});
		logoCourse.className='topicoNormalLogoCourse'
	}
	//////////////////////////////////////017//////////////////////////////////////	
	if(cpInfoCurrentSlideLabel == 'Faça Você Mesmo!') {
	//////////////////////////////////////007//////////////////////////////////////	
		var avaliacaoPratica = document.createElement("div")
		avaliacaoPratica.setAttribute("id", "avaliacaoPratica");
		document.getElementById("project_main").appendChild(avaliacaoPratica);
		avaliacaoPratica.setAttribute("style", "position:absolute");
		$(avaliacaoPratica).css("display","table");
		$(avaliacaoPratica).css('top','51%');
		$(avaliacaoPratica).css('left','53%');
		$(avaliacaoPratica).css('width',175);
		$(avaliacaoPratica).css('height',175);
		$(avaliacaoPratica).css("color","#ffffff");
		$(avaliacaoPratica).css("font-size",24);
		//$(avaliacaoPratica).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
		$(avaliacaoPratica).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-star fa-3x"></i><br>AVALIAÇÃO<br>PRÁTICA</p>');
		$(avaliacaoPratica).css('opacity',0);
		TweenLite.to(avaliacaoPratica, .3, {scale:1,opacity:1});



		//var avaliacaoPratica = document.createElement("div");
		//avaliacaoPratica.setAttribute("id", "avaliacaoPratica");
		//document.getElementById("project_main").appendChild(avaliacaoPratica);
		//avaliacaoPratica.setAttribute("style", "position:absolute");
		//$(avaliacaoPratica).css('top',300);
		//$(avaliacaoPratica).css('height',100);
		//$(avaliacaoPratica).css('width',100);
		//$(avaliacaoPratica).css('box-shadow', '1px 1px 5px rgba(0,0,0,0.2)')
		//$(avaliacaoPratica).css('left',800)

		//var avaliacaoPraticaIcon = document.createElement("img");
		//avaliacaoPraticaIcon.setAttribute("id", "avaliacaoPraticaIcon");
		//$(avaliacaoPratica).append(avaliacaoPraticaIcon)
		//avaliacaoPraticaIcon.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/avaliacaoPraticaIcon.png");
		//$(avaliacaoPraticaIcon).css("position",'absolute');
		//$(avaliacaoPraticaIcon).css("height",50);
		//$(avaliacaoPraticaIcon).css("width",50);
		//$(avaliacaoPraticaIcon).css("margin-left",'25%');
		//$(avaliacaoPraticaIcon).css("margin-right",'25%');
		//$(avaliacaoPraticaIcon).css("margin-top",'10%');

		//var avaliacaoPraticaText = document.createElement("span");
		//avaliacaoPraticaText.setAttribute("id", "avaliacaoPraticaText");
		//$(avaliacaoPraticaText).css("position",'absolute');
		//$(avaliacaoPraticaText).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
		//$(avaliacaoPraticaText).html('Avaliação<br>Prática');
		//$(avaliacaoPraticaText).css("margin-left",'23%');
		//$(avaliacaoPraticaText).css("margin-right",'25%');
		//$(avaliacaoPraticaText).css("margin-top",'45%');
		//$(avaliacaoPraticaText).css("color","#ffffff");
		//$(avaliacaoPraticaText).css("font-size",15);
		//$(avaliacaoPraticaText).css("text-align",'center');
		//$(avaliacaoPraticaText).css("opacity",1);
		//$(avaliacaoPratica).append(avaliacaoPraticaText)

		var textoQuery = document.querySelector("canvas[id*='Text_Caption']")
		//appending the current element to the div_Slide so that can be setted with animations;
		document.getElementById("div_Slide").appendChild(textoQuery);
		textoQuery.style.visibility="visible";
		textoQuery.style.opacity=0;
		textoQuery.style.left='40px';
		textoQuery.style.top='110px';
		TweenLite.to(textoQuery,.6,{opacity:1});
		
		$(nomeTopicoText).html(cpInfoCurrentSlideLabel);
		
		$(logoCourse).css('width','22%');
		$(logoCourse).css('height','29%');
		$(logoCourse).css('top','18%');
		$(logoCourse).css('left','73%');
		TweenLite.to(logoCourse,.3,{opacity:1});
		
		
		//$(avaliacaoPraticaText).css("font-size",24);
		//TweenLite.to(avaliacaoPratica,.4,{opacity:1});
		//$(avaliacaoPraticaIcon).css('height',80);
		//$(avaliacaoPraticaIcon).css('width',80);
	}

	$(iniciaElement).bind(changeClick,function(e){
	
	//$(iniciaElement).bind("click", function(){
		//clearTimeout(intervalMessageRefresh);
		if(cpInfoCurrentSlideLabel == "Seja Bem Vindo!") 
		{
			$(logoCompanyContainer).css('display','none');
			logoCourse.className='welcomeLogoCourse rotateDoor'
			sejaBemVindo();
		}
		else if(cpInfoCurrentSlideLabel == "Faça Você Mesmo!")
		{
			$(logoCompanyContainer).css('display','none');
			TweenLite.to(textoQuery,.6,{opacity:0});
			//$(textoQuery).css('display','none');
			//TweenLite.to(textoQuery,.5,{opacity:0});
			//TweenLite.to(videoIntroElement,.6,{opacity:0});
			//TweenLite.to(nomeTopicoContainer,.6,{opacity:0});
			TweenLite.to(avaliacaoPratica,.2,{opacity:0});
			TweenLite.to(logoCourse,.8,{opacity:0,onComplete:function(){
				$(avaliacaoPratica).css('visibility','hidden');
				cp.jumpToNextSlide();
				fvm();
			}});
		}
		else if(cpInfoCurrentSlideLabel != "Faça Você Mesmo!" && cpInfoCurrentSlideLabel != "Seja Bem Vindo!") 
		{
			$(logoCompanyContainer).css('display','none');
			logoCourse.className='topicoNormalLogoCourse fadeOut'
			//$(logoCourse).animate({opacity:0,left:-50},200, function()
			//{
				//$(logoCourse).css("visibility","hidden")
				createSidePainel();
				createPainel();
				detectChange()
				//ents();
				//intervalCaption = window.setInterval(updateSlideElements, 100);
				nextSlide();	

			//});
		}
	});
};

function fvm(){
	$(logoCourse).animate({opacity:0},200, function(){	
		//TODO: virtualKey when an interaction is set to null and the user in a tablet must hit a function key.
		$(logoCourse).css("display", 'none');
		var virtualKey = document.createElement("div");
		virtualKey.setAttribute("id", "virtualKey");
		document.getElementById("project_main").appendChild(virtualKey);
		$(virtualKey).css("display", 'none');
		//$(virtualKey).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
		$(virtualKey).css('font-size',14);
		$(virtualKey).css('color',"#ffffff");
		$(virtualKey).css('top',0);
		$(virtualKey).css('margin-left','25%');
		$(virtualKey).css('margin-left','25%');
		$(virtualKey).css('z-index',100);
		$(virtualKey).css('text-align','center');
		$(virtualKey).css('vertical-align',"middle");	
		$(virtualKey).css('position',"absolute");
		
		var keyEsc = document.createElement("div");
		keyEsc.setAttribute("id", "keyEsc");
		virtualKey.appendChild(keyEsc);
		$(keyEsc).html('ESC');
		$(keyEsc).css('font-size',25);
		$(keyEsc).css('left',0);
		$(keyEsc).css("background","#0099FF");
		$(keyEsc).css('opacity',1);
		$(keyEsc).css('width',80);
		$(keyEsc).css('height',80);
		$(keyEsc).css('position',"absolute");
		$(keyEsc).css('vertical-align','middle');
		$(keyEsc).css('border-style','solid');
		$(keyEsc).css('border-width','1px');
		$(keyEsc).css('border-color','#0088FF');

		var keyF2 = document.createElement("span");
		keyF2.setAttribute("id", "keyF2");
		virtualKey.appendChild(keyF2);
		$(keyF2).html('F2');
		$(keyF2).css('font-size',25);
		$(keyF2).css('left',80);
		$(keyF2).css("background","#0099FF");
		$(keyF2).css('opacity',1);
		$(keyF2).css('width',80);
		$(keyF2).css('height',80);
		$(keyF2).css('position',"absolute");
		$(keyF2).css('border-style','solid');
		$(keyF2).css('border-width','1px');
		$(keyF2).css('border-color','#0088FF');

		var keyF4 = document.createElement("span");
		keyF4.setAttribute("id", "keyF4");
		virtualKey.appendChild(keyF4);
		$(keyF4).html('F4');
		$(keyF4).css('font-size',25);
		$(keyF4).css('left',160);
		$(keyF4).css("background","#0099FF");
		$(keyF4).css('opacity',1);
		$(keyF4).css('width',80);
		$(keyF4).css('height',80);
		$(keyF4).css('position',"absolute");
		$(keyF4).css('border-style','solid');
		$(keyF4).css('border-width','1px');
		$(keyF4).css('border-color','#0088FF');

		var keyF7 = document.createElement("span");
		keyF7.setAttribute("id", "keyF7");
		virtualKey.appendChild(keyF7);
		$(keyF7).html('F7');
		$(keyF7).css('font-size',25);
		$(keyF7).css('left',240);
		$(keyF7).css("background","#0099FF");
		$(keyF7).css('opacity',1);
		$(keyF7).css('width',80);
		$(keyF7).css('height',80);
		$(keyF7).css('position',"absolute");
		$(keyF7).css('border-style','solid');
		$(keyF7).css('border-width','1px');
		$(keyF7).css('border-color','#0088FF');

		var keyF8 = document.createElement("span");
		keyF8.setAttribute("id", "keyF8");
		virtualKey.appendChild(keyF8);
		$(keyF8).html('F8');
		$(keyF8).css('font-size',25);
		$(keyF8).css('left',320);
		$(keyF8).css("background","#0099FF");
		$(keyF8).css('opacity',1);
		$(keyF8).css('width',80);
		$(keyF8).css('height',80);
		$(keyF8).css('position',"absolute");
		$(keyF8).css('border-style','solid');
		$(keyF8).css('border-width','1px');
		$(keyF8).css('border-color','#0088FF');

		$(message).css("pointer-events",'auto')
		$(message).css('visibility','hidden');
		
		var triesIcon = document.createElement("span");
		triesIcon.setAttribute("id", "triesIcon");
		document.getElementById("project_main").appendChild(triesIcon);
		$(triesIcon).css('top',screenSizeHeight-50);
		$(triesIcon).css('left',0);
		$(triesIcon).css('opacity',1);
		$(triesIcon).css('width',80);
		//$(triesIcon).css('height',26);
		$(triesIcon).css('text-align','center');
		$(triesIcon).css("display", 'block');
		$(triesIcon).css('position',"absolute");
		$(triesIcon).css('z-index',100);
		//$(triesIcon).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
		$(triesIcon).css('font-size',14);
		$(triesIcon).css('color',"#ffffff");
			
		//var firstTrie = document.createElement("img");
		//firstTrie.setAttribute("id", "firstTrie");
		//triesIcon.appendChild(firstTrie);
		//firstTrie.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/triesIcon.png");
		//firstTrie.setAttribute("width",50)
		//firstTrie.setAttribute("height",50)
		//firstTrie.setAttribute("style", "position:absolute; z-index:100");
		//$(firstTrie).css('top',0);
		//$(firstTrie).css('left',650);
		//$(firstTrie).css("background","green");
		//$(firstTrie).css('opacity',1);
		//$(firstTrie).css("display", 'block');
		//$(firstTrie).css('position',"absolute");
		//$(firstTrie).css('z-index',100);
		//$(firstTrie).css('border-style','solid');
		//$(firstTrie).css('border-width','1px');
		//$(firstTrie).css('border-color','#285BB5');

		var firstTrie = document.createElement("div")
		firstTrie.setAttribute("id", "firstTrie");
		triesIcon.appendChild(firstTrie);
		firstTrie.setAttribute("style", "position:absolute; z-index:100");
		$(firstTrie).css("height",50);
		$(firstTrie).css("width",50);
		$(firstTrie).css("background-color","green");
		$(firstTrie).css("display","table");
		$(firstTrie).css('left',screenSizeWidth-150);
		$(firstTrie).css('top',0);
		$(firstTrie).css("color","#ffffff");
		//$(firstTrie).css('border-style','solid');
		//$(firstTrie).css('border-width','3px');
		//$(firstTrie).css('border-color','#285BB5');
		$(firstTrie).css('box-shadow', '1px 1px 5px rgba(0,0,0,0.2)')
		$(firstTrie).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-check fa-2x"></i></p>');
		$(firstTrie).css("opacity",0);
		TweenLite.to(firstTrie, .4, {scale:.9,opacity:0,onComplete:function(){
			TweenLite.to(firstTrie, .4, {scale:1,opacity:1});
		}});

		//var secondTrie = document.createElement("img");
		//secondTrie.setAttribute("id", "secondTrie");
		//triesIcon.appendChild(secondTrie);
		//secondTrie.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/triesIcon.png");
		//secondTrie.setAttribute("width",50)
		//secondTrie.setAttribute("height",50)
		//secondTrie.setAttribute("style", "position:absolute; z-index:100");
		//$(secondTrie).css('top',0);
		//$(secondTrie).css('left',700);
		//$(secondTrie).css("background","green");
		//$(secondTrie).css('opacity',1);
		//$(secondTrie).css("display", 'block');
		//$(secondTrie).css('position',"absolute");
		//$(secondTrie).css('z-index',100);
		//$(secondTrie).css('border-style','solid');
		//$(secondTrie).css('border-width','1px');

		var secondTrie = document.createElement("div")
		secondTrie.setAttribute("id", "secondTrie");
		triesIcon.appendChild(secondTrie);
		secondTrie.setAttribute("style", "position:absolute; z-index:100");
		$(secondTrie).css("height",50);
		$(secondTrie).css("width",50);
		$(secondTrie).css("background-color","green");
		$(secondTrie).css("display","table");
		$(secondTrie).css('left',screenSizeWidth-100);
		$(secondTrie).css('top',0);
		$(secondTrie).css("color","#ffffff");
		//$(secondTrie).css('border-style','solid');
		//$(secondTrie).css('border-width','1px');
		//$(secondTrie).css('border-color','#285BB5');
		$(secondTrie).css('box-shadow', '1px 1px 5px rgba(0,0,0,0.2)')
		$(secondTrie).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-check fa-2x"></i></p>');
		$(secondTrie).css("opacity",0);
		TweenLite.to(secondTrie, .5, {scale:.9,opacity:0,onComplete:function(){
			TweenLite.to(secondTrie, .5, {scale:1,opacity:1});
		}});

		var thirdTrie = document.createElement("div")
		thirdTrie.setAttribute("id", "thirdTrie");
		triesIcon.appendChild(thirdTrie);
		thirdTrie.setAttribute("style", "position:absolute; z-index:100");
		$(thirdTrie).css("height",50);
		$(thirdTrie).css("width",50);
		$(thirdTrie).css("background-color","green");
		$(thirdTrie).css("display","table");
		$(thirdTrie).css('left',screenSizeWidth-50);
		$(thirdTrie).css('top',0);
		$(thirdTrie).css("color","#ffffff");
		//$(thirdTrie).css('border-style','solid');
		//$(thirdTrie).css('border-width','1px');
		//$(thirdTrie).css('border-color','#285BB5');
		$(thirdTrie).css('box-shadow', '1px 1px 5px rgba(0,0,0,0.2)')
		$(thirdTrie).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-check fa-2x"></i></p>');
		$(thirdTrie).css("opacity",0);
		TweenLite.to(thirdTrie, .6, {scale:.9,opacity:0,onComplete:function(){
			TweenLite.to(thirdTrie, .6, {scale:1,opacity:1});
		}});

		//var thirdTrie = document.createElement("img");
		//thirdTrie.setAttribute("id", "thirdTrie");
		//triesIcon.appendChild(thirdTrie);
		//thirdTrie.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/triesIcon.png");
		//thirdTrie.setAttribute("width",50)
		//thirdTrie.setAttribute("height",50)
		//$(thirdTrie).css('top',0);
		//$(thirdTrie).css('left',750);
		//$(thirdTrie).css("background","green");
		//$(thirdTrie).css('opacity',1);
		//$(thirdTrie).css("display", 'block');
		//$(thirdTrie).css('position',"absolute");
		//$(thirdTrie).css('z-index',100);
		//$(thirdTrie).css('border-style','solid');
		//$(thirdTrie).css('border-width','1px');
		//$(thirdTrie).css('border-color','#285BB5');

		var pointerIcon = document.createElement("img");
		pointerIcon.setAttribute("id", "pointerIcon");
		document.getElementById("project_main").appendChild(pointerIcon);
		pointerIcon.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/pointer.png");
		pointerIcon.setAttribute("style", "position:absolute; z-index:100");
		$(pointerIcon).css('opacity',0);
		$(pointerIcon).css("border-radius","25px");
		$(pointerIcon).css("background","rgba(255,0,0,0.0)");
		$(pointerIcon).css('border-color',"#FF1493");
			
		var dicaBtn = document.createElement("img");
		dicaBtn.setAttribute("id", "dicaBtn");
		document.getElementById("project_main").appendChild(dicaBtn);
		dicaBtn.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/introducaoIcon.png");
		dicaBtn.setAttribute("width",50)
		dicaBtn.setAttribute("height",50)
		dicaBtn.setAttribute("style", "position:absolute; z-index:100");
		$(dicaBtn).css('top',screenSizeHeight-50);
		$(dicaBtn).css("background","#0099FF");
		$(dicaBtn).css('left',0)
		$(dicaBtn).css('opacity',0);
		$(dicaBtn).css('z-index',100);
		$(dicaBtn).css('border-color',"#0089FF");
		$(dicaBtn).css('border-width',"1px");

		$(fvmMessageTexto).css('width','100%');
		$(fvmMessageTexto).css('text-align','center');
		$(message).css("display", 'table');
		
		var interval1 = window.setInterval(check, 50);
		var interval2 = window.setInterval(checkNumberOfTries, 50);
		
		$(document).bind("keyup", keyTries);
		
		function keyTries(e){ 
			TweenLite.to(message, .1, {opacity:0,onComplete:function(){
    	$(message).css('visibility','hidden');
    }});
		//DONE:make the message dissapear when pressing the keyboard;
		if(questionType[0] == 'Text')
		{
			//setTimeout(checkNumberOfTries,50);
			//if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 114|| (e.which || e.keyCode) == 118 || (e.which || e.keyCode) == 117) 
			//e.preventDefault();
			var keyPress = e.charCode || e.keyCode;
			try
			{
				var keyName = cp.model.data[questionName].sc.k;		
			}catch(e){}
			try
			{
				keyContent = cp.model.data[questionName].exp[0];			
			}catch(e){}
			//if the textBox dont have a content then it is a function key.
			if(keyContent == undefined)
			{
				////console.log("Tecla Pressionada: "+keyPress)
				////console.log("Tecla a ser pressionada: "+keyName)
				//TODO: create a counter because captivate can´t handle the function only key press;
				var textEntry = $('"div_Slide"[id*=Text_Entry]');
				$(textEntry).css("z-index",-100);
				try
				{
					//adding value to the attempt when the user click the virtualKey
					var triesCounterFunctionKey = cp.model.data[questionName].currentAttempt = parseInt(cp.model.data[questionName].currentAttempt)+1;
				}
				catch(e){}

				if(triesCounterFunctionKey==3)
				{
					//cp.jumpToNextSlide();
					//not used because was jumped two slides at a time.
					//setTimeout(cp.jumpToNextSlide,1000)
					intervalKeytries = setTimeout(cp.jumpToNextSlide, delay=1000);
				}
			}
			else
			{
				//////console.log('Not Function Keys')
				//cp.model.data[questionName].ma = parseInt(4);
				////console.log(cp.model.data[questionName]);
				try
				{
					var triesCounterText = cp.model.data[questionName].currentAttempt;
				}catch(e){}
				if(triesCounterText==3)
				{
					//if is note function keys it should call the function right after the third attempt have been pressed so that the slides dont 
					intervalKeytries = setTimeout(cp.jumpToNextSlide, delay=1000);
					//cp.jumpToNextSlide();
				}
			}
		}
	}
	//DONE: Pass the variable by parameter and reduced the amount of functions;
	$(keyEsc).bind("click", function(){
    	var e = jQuery.Event("keyup");
    	e.keyCode = 27;
    	TweenLite.to(keyEsc, .05, {scale:1.2,onComplete:function()
		{
			TweenLite.to(keyEsc, .05, {scale:1});	
		}});
    	$('"div_Slide"[aria-label*=Text ]').trigger(e);
	});

	$(keyF2).bind("click", function(){
    	var e = jQuery.Event("keyup");
    	e.keyCode = 113;
    	//e.charCode = 13;
    	TweenLite.to(keyF2, .05, {scale:1.2,onComplete:function()
		{
			TweenLite.to(keyF2, .05, {scale:1});	
		}});
    	$('"div_Slide"[aria-label*=Text ]').trigger(e);
	});

	$(keyF4).bind("click", function(){
    	var e = jQuery.Event("keyup");
    	e.keyCode = 115;
    	TweenLite.to(keyF4, .05, {scale:1.2,onComplete:function()
		{
			TweenLite.to(keyF4, .05, {scale:1});	
		}});
    	$('"div_Slide"[aria-label*=Text ]').trigger(e);
	});

	$(keyF7).bind("click", function(){
    	var e = jQuery.Event("keyup");
    	e.keyCode = 118;
    	TweenLite.to(keyF7, .05, {scale:1.2,onComplete:function()
		{
			TweenLite.to(keyF7, .05, {scale:1});	
		}});
    	$('"div_Slide"[aria-label*=Text ]').trigger(e);
	});

	$(keyF8).bind("click", function(){
    	var e = jQuery.Event("keyup");
    	e.keyCode = 119;
    	TweenLite.to(keyF8, .05, {scale:1.2,onComplete:function()
		{
			TweenLite.to(keyF8, .05, {scale:1});	
		}});
    	$('"div_Slide"[aria-label*=Text ]').trigger(e);
	});
    
  	var courseArea = document.getElementById('div_Slide');
	$(courseArea).bind("click", function() {
	//DONE:make the message dissapear when clicking the document area.
	TweenLite.to(message, .1, {opacity:0,onComplete:function(){
    	$(message).css('visibility','hidden');
    }});
	
	if(questionType[0] == 'Click')
	{
		(function callee()
		{
			//checkNumberOfTries();
    		var intervalTouch = setTimeout(callee, delay=300);
    		if(numberOfTries ==3)
    		{
	    		clearTimeout(intervalTouch)
   			}
		})()
	}})


	
	function checkNumberOfTries()
	{
		try{
			successElement = document.querySelector("[id*='Success_Caption_']")
			successElement.innerHTML = "<p style='font-size:150px;color:#FFCC00;'>★<p/>"+"<p style='margin-top:-170px;font-size:50px,color:white'>PARABÉNS VOCÊ FEZ <br><b>"+ cpInfoPercentage+' PONTOS!';
			successElement.style.left='35%';
			successElement.style.top='0%';
			//$(successElement).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
			$(successElement).css('text-align',"center");
			$(successElement).css('color',"white");
			$(successElement).css('text-shadow', '1px 1px 10px rgba(0,0,0,0.4)')
			$(successElement).css('font-size',24);
		}
		catch(e){}
		var intervencao = document.getElementById(questionName)
		try
		{	
			var intervencaoTop = intervencao.offsetTop;
			var intervencaoLeft = intervencao.offsetLeft;
		}

		catch(e){}
		if(numberOfTries == 0 || numberOfTries == undefined)
		{
			try{
			clearTimeout(intervalKeytries);	
			}
			catch(e){}	
			$(virtualKey).css("pointer-events",'auto')
			TweenLite.to(firstTrie,.25, {background:'green'});
			TweenLite.to(secondTrie,.25, {background:'green'});
			TweenLite.to(thirdTrie,.25, {background:'green'});
			TweenLite.to(firstTrie,.5, {scale:1});
			TweenLite.to(secondTrie,.5, {scale:1});
			TweenLite.to(thirdTrie,.5, {scale:1});
			TweenLite.to(pointerIcon, .3, {opacity:0});
		}
		if(numberOfTries == 1)
		{
			TweenLite.to(firstTrie,.25, {background:'red'});
		}
		if(numberOfTries == 2)
		{
			TweenLite.to(secondTrie,.25, {background:'red'});
			TweenLite.to(firstTrie,.25, {background:'red'});
		}
		if(numberOfTries >= 3)
		{
			//captivate do not sum the content when the interaction it is a typebox but it shows as success for the user if the user type the right option at the last choice, that´s why the success message will have to only when it´s different from typebox;
			//TODO: the DI must change the number off attempts inside captivate from 3 that they are used to for 4 attempts when the type of interaction is typebox, trying to change that by modifying for the DI automatically.
			try{
			if(questionType[0] == 'Click' || keyContent != undefined)
			{
				try{
				successElement.style.visibility='hidden';	
				}
				catch(e){}	
			}
			}
			catch(e){}
			
			if(questionType[0] != 'Text')
			{
				TweenLite.to(pointerIcon, .5, {left:intervencaoLeft,top:intervencaoTop,opacity:1,onComplete:function(){
					TweenLite.to(pointerIcon, 1, {opacity:0,delay:1});	
				}});
			}
			TweenLite.to(thirdTrie,.25, {background:'red'});
			TweenLite.to(secondTrie,.25, {background:'red'});
			TweenLite.to(firstTrie,.25, {background:'red'});
			TweenLite.to(firstTrie,.5, {scale:.5});
			TweenLite.to(secondTrie,.5, {scale:.5});
			TweenLite.to(thirdTrie,.5, {scale:.5});
			$(virtualKey).css("pointer-events",'none')
		}
	};	
	function check()
	{
		slideName = cp.movie.playbackController.currentSlide;
		questionName = cp.model.data[slideName].topMostObjectInteractiveObject;
		try
		{
			questionType = (questionName.split('_'));		
		}
		catch(e){}
		try
		{
			numberOfTries = cp.model.data[questionName].currentAttempt;
		}
		catch(e){}

		//var triesError = $('"div_Slide"[id*=Failure],[id*=Success]');
		var triesError = $('"div_Slide"[id*=Failure]');
		$(triesError).css("z-index",-100);
		//var dicaInformacao = $('"div_Slide"[id*=accStr2]');
		try{
			var keyHasContent = cp.model.data[questionName].exp;
		}
		catch(e){}
		
		if(keyHasContent != '') {
		//if(questionType[0] == 'Click'){
			TweenLite.to(virtualKey, .2, {top:-50,opacity:0,onComplete:function(){
			$(virtualKey).css("display", 'none');	
			}});	
		}	
		else {
			$(virtualKey).css("display", 'block');
			TweenLite.to(virtualKey, .2, {top:'10%',opacity:1});	
		}

		var dicaInformacao = cp.model.data[slideName].accstr;
		$(fvmMessageTexto).text(dicaInformacao);
		messageCentralize();
		if(dicaInformacao != ' ')
		{
			$(dicaBtn).css('left',0);
			$(dicaBtn).css('opacity',1,function()
			{
				$(dicaBtn).css('visibility','visible');
			});
		}
		else
		{	
			$(dicaBtn).css('left',-500);
			$(message).css('visibility','hidden');
			$(message).css('display','none');
			$(dicaBtn).css('opacity',0, function()
			{
				$(dicaBtn).css('visibility','hidden');
			});
		}
		if(cpInfoCurrentSlide == cpInfoSlideCount)			
		{
			clearInterval(interval1);
			clearInterval(interval2);
			$(virtualKey).css("display", 'none');
			TweenLite.to(pointerIcon, .3, {opacity:0,onComplete:function()
			{
				$(pointerIcon).css('visibility','none')
			}});
			$(triesIcon).animate({opacity:0,left:800},1000);
			
			$(message).animate({opacity:0},200);
			//$(dicaBtn).animate({opacity:0},200);
			TweenLite.to(dicaBtn, .3, {opacity:0,onComplete:function()
			{
				$(dicaBtn).css('display','none')
			}});
			
			var fvmMessageFinal = document.createElement("span");
			fvmMessageFinal.setAttribute("id", "messageFinal");
			document.getElementById("div_Slide").appendChild(fvmMessageFinal);
			fvmMessageFinal.setAttribute("id", "messageFinal");
			$(fvmMessageFinal).html('<b>Você concluiu o Faça Você Mesmo!!</b><br><br>Para continuar, na barra superior,</br> clique no botão Avançar.');
			messageFinal.setAttribute("style", "position:absolute; z-index:100");
			$(fvmMessageFinal).css("font-size", 24);
			$(fvmMessageFinal).css("height", '100%');
			$(fvmMessageFinal).css("opacity",0);
			$(fvmMessageFinal).css("width", '100%');
			$(fvmMessageFinal).css('top','27%');
			$(fvmMessageFinal).css('vertical-align',"middle");
			//$(fvmMessageFinal).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
			$(fvmMessageFinal).css('color',"#ffffff");
			$(fvmMessageFinal).css('text-align',"center");
			$(fvmMessageFinal).css('margin-top',"auto");
			$(fvmMessageFinal).css('margin-bottom',"auto");
			$(fvmMessageFinal).animate({opacity:1},1000);
			
			$(messageFinalElementIcon).css('display',"none");


			$(messageFinalElement).css('visibility',"visible");
			$(messageFinalElement).css("display",'block');
			$(messageFinalElement).css("opacity",0);
			$(messageFinalElement).css("z-index",1);
			//$(messageFinalElement).css("background", '#798BA7');		
			$(messageFinalElement).css("background", '#999999');		
			TweenLite.to(messageFinalElement,1,{opacity:.95});
			
			//changeColors();
			$(logoCompanyContainer).css('display','block');
			$(logoCompanyContainer).css('z-index','100');

			TweenLite.to(logoCompanyContainer, .2, {opacity:1});
			$(logoCourse).css('top',350);

			$(logoCourse).css("display", 'block');

			TweenLite.to(logoCourse, .5, {opacity:1,left:'50%'});

			$(avaliacaoPratica).css('visibility','visible');
			$(avaliacaoPratica).css('top',350);
			$(avaliacaoPratica).css('left',0);
			$(avaliacaoPratica).css('font-size','15px');
			$(avaliacaoPratica).css("background", '#FF8300');	
			$(avaliacaoPratica).css("width", '22%');	
			$(avaliacaoPratica).css("height", '29%');	
			TweenLite.to(avaliacaoPratica, .5, {opacity:1,left:'28%'});		
			$(avaliacaoPratica).css("z-index",100);
			$(avaliacaoPratica).html('<p style="line-height:120%;display:table-cell;font-size:24px;vertical-align:middle;text-align:center;pointer-events:none;">VOCÊ ACERTOU<br>'+cpInfoPercentage+'%</p>');
		}
	}
	
	//DONE: added the messageBtnClose element and remove the function on/off;
	//$(dicaBtn).bind("click", function()
	//{
  		//TweenLite.to(dicaBtn, .05, {scale:1.2,onComplete:function()
		//{
			//TweenLite.to(dicaBtn, .05, {scale:1});	
		//}});
		//TweenLite.to(message, .3, {opacity:1});
	    //$(message).css('height',280);
	    //$(message).css('top',160);
	    //$(message).css('width',800);
		//$(message).css('visibility','visible');
		//$(message).css("display", 'block');	
		//$(message).css("background", '#0099FF');		
		//})
	//})
	var dicaMostra=true;
	$(dicaBtn).bind("click", function()
	{
  		TweenLite.to(dicaBtn, .05, {scale:1.2,onComplete:function()
		{
			TweenLite.to(dicaBtn, .05, {scale:1});	
		}});
		if(dicaMostra)
  		{	    
	    	$(message).css('height',280);
	    	$(message).css('top',parseInt('225%'));
	    	$(message).css('width','100%');
			$(message).css('visibility','visible');
			$(message).css("display", 'table');	
			$(message).css("background", '#0099FF');		
	    	TweenLite.to(message, .3, {opacity:1});
  		}
  		else
  		{
  			TweenLite.to(message, .3, {opacity:0,onComplete:function()
  			{
				$(message).css('visibility','hidden');
				$(message).css('display','none');
  			}})
		}
  		dicaMostra=!dicaMostra;
		})
	})
}

function finalMessage(){
	if(pageUrl == 'moodle.dominiosistemas.com.br' || pageUrl == 'qamoodle.dominiosistemas.com.br')
	{
		msgFinalTopico = 'Para continuar, selecione o <br>próximo tópico no campo acima.<br><br>Dúvidas? Envie um e-mail para<br>'+cpInfoEmail;
	}
	else
	{
		msgFinalTopico = 'Para continuar, na barra superior,<br>clique no botão Avançar.<br><br>Dúvidas? Envie um e-mail para<br>'+cpInfoEmail;
	}
}

function sejaBemVindo(){	
	cp.jumpToNextSlide();
	

	var Image_welcomeIcon = document.createElement("img");
	Image_welcomeIcon.setAttribute("id", "Image_welcomeIcon");
	document.getElementById("project_main").appendChild(Image_welcomeIcon);
	Image_welcomeIcon.setAttribute("src", "https://moodle.dominiosistemas.com.br/assets/imagesTR/introducaoIcon.png");
		Image_welcomeIcon.className='welcomeLogoIcon fadeIn'
	createSidePainel();
	createPainel();
	detectChange();
	topicType();
	topicLanguage();

	$(logoCompanyContainer).css('z-index',2000);
	$(logoCompanyContainer).css('display',"block");
	//var interval2 = window.setInterval(checkLastSlide, 200);
	//function checkLastSlide()
	//{
		//if(cpInfoCurrentSlide == cpInfoSlideCount)			
		//{
			//TweenLite.to(logoCourse, 1, {opacity:0});
			//TweenLite.to(introducao, 1.2, {opacity:0});		
			//clearInterval(interval2);
			//$(messageFinalElement).css("background-color",'#ffffff')
			//$(messageFinalElementText).css('color',"#999999");
			//$(messageFinalElement).css('display',"block");
			//$(messageFinalElementIcon).css('display',"none");
			//$(messageFinalElement).css('visibility',"visible");
			//$(messageFinalElement).css('opacity',0);
			//TweenLite.to(messageFinalElement,1,{opacity:1});
			//$(logoCompanyContainer).css('z-index',2000);
			//$(logoCompanyContainer).css('display',"block");
			//$(messageFinalElementText).html(msgFinalTopico);
			//$(messageFinalElementIcon).css('display',"none");
			//$(messageFinalElementText).css('display',"block");
			//$(messageFinalElementText).css('opacity',0);
			//TweenLite.to(messageFinalElementText,.3,{top:200,opacity:1});
		//}
//	}
}

function saibaMais(){	
	$(logoCourse).animate({opacity:0,left:-50},500, function()
	{
		cp.jumpToNextSlide();
		var interval2 = window.setInterval(checkLastSlide, 200);
		function checkLastSlide()
		{
			if(cpInfoCurrentSlide == cpInfoSlideCount)			
			{
				//$(introducao).animate({opacity:0,left:800},1200);
				//$(logoCourse).animate({opacity:0,left:800},1000);
				clearInterval(interval2);
				$(messageFinalElement).css("background-color",'#ffffff')
				$(messageFinalElementText).css('color',"#999999");
				$(messageFinalElement).css('display',"block");
				$(messageFinalElement).css('visibility',"visible");
				$(messageFinalElement).css('opacity',0);
				TweenLite.to(messageFinalElement,1,{opacity:1});
				$(messageFinalElementText).html(msgFinalTopico);
				//$(messageFinalElementText).css('display',"block");
				//$(messageFinalElementText).css('opacity',0);
				TweenLite.to(messageFinalElementText,.3,{top:200,opacity:1});
			}
		}
	});
}

function createPainel(){
	//console.log('Painel Created')
	var painel = document.createElement("div");
	document.getElementById("project_main").appendChild(painel);
	painel.setAttribute("id", "painel")
	//////////////////////////////added//////////////////////////////////
	
	//$(painel).css("z-index",150);
	//$(painel).css("width",'80%');
	//$(painel).css("height",'20%');
	//$(painel).css("position","absolute");
	//$(painel).css("left",-50);
	//$(painel).css("top",'80%');
	//$(painel).css("opacity",0);	
	//$(painel).css('vertical-align',"middle");
	//$(painel).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
	//$(painel).css('color',"#ffffff");
	//$(painel).css("padding","10px");
	//$(painel).css("background","#666666")
	
	var painelNomeTopico = document.createElement("div");
	painelNomeTopico.setAttribute("id", "painelNomeTopico");
	var nomeTopicoCapitalize = cpInfoCurrentSlideLabel.toUpperCase();
	$(painelNomeTopico).text(nomeTopicoCapitalize.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, ""))
	//$(painelNomeTopico).css("top",-15);
	//$(painelNomeTopico).css("left",5);
	//$(painelNomeTopico).css("font-size",11);
	//$(painelNomeTopico).css("position","absolute");
	//$(painelNomeTopico).css("text-shadow","1px 1px 2px rgba(0, 0, 0, 1)");
	$(painel).append(painelNomeTopico);
	
	//var painelTitleSlide = document.createElement("div");
	//painelTitleSlide.setAttribute("id", "painelTitleSlide");
	//$(painelTitleSlide).css("font-size",'280%');
	//$(painelTitleSlide).css("font-weight",'lighter');
	//$(painel).append(painelTitleSlide);
	
	var painelTextoSlide = document.createElement("div");
	//var painelTexto = document.getElementById("ccText")
	painelTextoSlide.setAttribute("id", "painelTextoSlide");
	//$(painelTextoSlide).css("top",0);
	//$(painelTextoSlide).css("left",0);
	//$(painelTextoSlide).css("text-align",'justify');
	$(painel).append(painelTextoSlide);

	try{
		var slideNumber = cp.movie.playbackController.currentSlide;
	}
	catch(e){}

	/*$(ccText).css("overflow-y","scroll");
	$(ccText).css("overflow-y","auto");
	$(ccText).css("background-color","transparent");
	$(ccText).css("color","#ffffff");
	$(ccText).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(ccText).css("position",'relative');
	$(ccText).css("font-size",'95%');
	$(ccText).css("background","rgba(255,0,0,0.0)");
	$(ccClose).css("visibility", 'hidden');*/
	//$(ccText).css("display", 'none');
	//$(ccText).css("visibility", 'hidden');
	//$(ccClose).css("visibility", 'hidden');
	//$(ccClose).css("display", 'none');

	
	var nextBtn = document.createElement("div")
	nextBtn.setAttribute("id", "nextBtn");
	nextBtn.setAttribute("style", "z-index:100");
	//$(nextBtn).css("height",50);
	//$(nextBtn).css("width",50);
	//$(nextBtn).css("display","table");
	//$(nextBtn).css('left',575);
	//$(nextBtn).css('top',10);
	//$(nextBtn).css("font-size",11);
	//$(nextBtn).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	//$(nextBtn).css("color","rgba(0,0,0,0.2)");
	$(nextBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;"><i class="fa fa-angle-right fa-5x"></i></p>');
	//$(nextBtn).css('visibility','hidden');
	//$(nextBtn).css("pointer-events",'fill');
	painel.appendChild(nextBtn);
	$(nextBtn).bind(changeClick,function(e){
		checkInteractionNext();
	});
	//modification
	var previousBtn = document.createElement("div")
	previousBtn.setAttribute("id", "previousBtn");
	//$(previousBtn).css("height",50);
	//$(previousBtn).css("width",50);
	//$(previousBtn).css("display","table");
	//$(previousBtn).css('left',575);
	//$(previousBtn).css('top',60);
	//$(previousBtn).css("font-size",11);
	//$(previousBtn).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	//$(previousBtn).css("color","rgba(0,0,0,0.2)");
	$(previousBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;"><i class="fa fa-angle-left fa-5x"></i></p>');
	//$(previousBtn).css('visibility','hidden');
	//$(previousBtn).css("pointer-events",'fill');
	painel.appendChild(previousBtn);
	$(previousBtn).bind(changeClick,function(e){
		checkInteractionPrevious();
	})
}

function checkInteractionPrevious(){
	if(cpInfoCurrentSlide == 2){
	}
	else{
	//TweenLite.to(previousBtn, .05, {scale:1.2,onComplete:function()
	//{
		TweenLite.to(previousBtn, .05, {scale:1});	
	//}});
	prevSlide()
	}
}

function checkInteractionNext(){
	//var intervencaoText = $('"div_Slide"[aria-label*=Text]');
	//var intervencaoText = $('"div_Slide"[id*=_inputField]');
	//var intervencaoClick = $('"div_Slide"[id*=Click]');

	var intervencaoText = document.querySelectorAll("input[id*=_inputField]")
	//var intervencaoClick = $('"div_Slide"[id*=Click]');
	var intervencaoClick = document.querySelectorAll('canvas[id*=Click]')
	console.log(intervencaoClick.length)
	console.log(intervencaoText.length)
	//console.log('Interaction Input Text:'+intervencaoText.length)
	//console.log('Interaction Click:'+intervencaoClick.length)
	//console.log(intervencaoText)

	//TweenLite.to(nextBtn, .05, {scale:1.2,onComplete:function()
	//{
		//TweenLite.to(nextBtn, .05, {scale:1});	
	//}});
	//TODO: get the json object name and show the failure caption instead of changing the opacity from the nextbutton;
	//slideNumber = cp.movie.playbackController.currentSlide
	//clickBoxNumber = cp.model.data[slideNumber].topMostObjectInteractiveObject;
	//failureCaption = cp.model.data[clickBoxNumber].ofc;
	//failureCaptionChanged =  document.getElementById(failureCaption);
	//failureCaptionPrefix = "re-"+failureCaption+"c"
	//failureCaptionPrefixChanged = document.getElementById(failureCaptionPrefix);

	if(intervencaoClick.length == 0 && intervencaoText.length == 0)
	{
		nextSlide();
	}
	else
	{
		//TweenLite.to(nextBtn,.05,{opacity:.2,onComplete:function()
		//{
			//TweenLite.to(nextBtn,.05,{opacity:1});
		//}})
	}
}

function createSidePainel(){
	var showSidePainel = document.createElement("div");
	showSidePainel.setAttribute("id", "showSidePainel");
	document.getElementById("project_main").appendChild(showSidePainel);	
	$(showSidePainel).css("visibility", 'hidden');
	$(showSidePainel).css("z-index", 100);
	$(showSidePainel).css("opacity", 0);
	$(showSidePainel).css("position", "absolute");
	$(showSidePainel).css("height", 30);
	$(showSidePainel).css("width", 30);
	$(showSidePainel).css('top',screenSizeHeight-30);
	$(showSidePainel).css('left',screenSizeWidth-30);
	$(showSidePainel).css("background-color","#FF8300");
	$(showSidePainel).css('font-size','180%')
	$(showSidePainel).css('display','table')
	$(showSidePainel).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;-webkit-user-select:none;">≡');
	$(showSidePainel).css('color',"#ffffff");
	$(showSidePainel).css('text-align',"center");
	$(showSidePainel).css("-webkit-user-select","none")
	$(showSidePainel).css("user-select","none")
	$(showSidePainel).css("-ms-user-select","none")
	TweenLite.to(showSidePainel,.5,{opacity:1,scale:1});
	$(showSidePainel).bind(changeClick,function(e){
	//$(showSidePainel).bind("click", function(){
		//showSidePainel.className="blurOut";
		$(infoTopicoText).html("TELA "+cpInfoCurrentSlide+" DE "+cpInfoSlideCount);
		//TweenLite.to(showSidePainel,.3,{opacity:0});
		//$(sidePainel).css('opacity',0);	
		//$(emailBtn).css('opacity',0);	
		//$(infoTopico).css('opacity',0);	
		//$(language).css('opacity',0);	
		//TweenLite.to(emailBtn,.1,{scale:.9});
		//TweenLite.to(sidePainel,.5,{opacity:1,left:screenSizeWidth-150});
		sidePainel.className='moveOut';
		if(document.documentElement.clientWidth > 600){
			div_Slide.className='moveOutDivSlide';
		}
		//nextBtn.className='blurOut'
		//previousBtn.className='blurOut'
		//painel.className='blurOut'
		//TweenLite.to(emailBtn,.2,{opacity:1,scale:0.8,onComplete:function(){
			//TweenLite.to(emailBtn,.1,{scale:1});
		//}});
		//TweenLite.to(soundBtn,.3,{scale:0.8,onComplete:function(){
			//TweenLite.to(soundBtn,.1,{scale:1});
		//}});
		//TweenLite.to(painelBtn,.4,{scale:0.8,onComplete:function(){
			//TweenLite.to(painelBtn,.1,{scale:1});
		//}});
		//TweenLite.to(infoTopico,.5,{opacity:1,scale:0.8,onComplete:function(){
			//TweenLite.to(infoTopico,.1,{scale:1});
		//}});
		//TweenLite.to(language,.6,{opacity:1,scale:0.8,onComplete:function(){
			//TweenLite.to(language,.1,{scale:1});
		//}});
	});

	var sidePainel = document.createElement("div");
	sidePainel.setAttribute("id", "sidePainel");
	document.getElementById("project_main").appendChild(sidePainel);
	/////////////////////added/////////////////////
	$(sidePainel).css("z-index", 1000);
	$(sidePainel).css("position", "absolute");
	$(sidePainel).css("height", '100%');
	$(sidePainel).css("width", 150);
	$(sidePainel).css('top',0);
	$(sidePainel).css('left','100%');
	//$(sidePainel).css('opacity',0);


	var emailBtn = document.createElement("div")
	emailBtn.setAttribute("id", "emailBtn");
	emailBtn.setAttribute("style", "position:absolute; z-index:100");
	$(emailBtn).css("height",'20%');
	$(emailBtn).css("width",150);
	$(emailBtn).css("background-color","#666666");
	$(emailBtn).css("display","table");
	$(emailBtn).css('left',0);
	$(emailBtn).css('top',0);
	$(emailBtn).css("font-size",11);
	//$(emailBtn).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(emailBtn).css("color","#ffffff");
	$(emailBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-envelope fa-3x"></i><br>E-MAIL</p>');
	//$(emailBtn).css('pointer-events','none');
	sidePainel.appendChild(emailBtn);
	$(emailBtn).bind(changeClick,function(e){
	//$(emailBtn).bind("click", function(){
		TweenLite.to(emailBtn,.3,{opacity:.5,onComplete:function()
			{
				TweenLite.to(emailBtn,.3,{opacity:1});
				//window.location = "mailto:tutor.dominio@thomsonreuters.com?subject="; 
				window.top.location = "mailto:"+cpInfoEmail+"?subject="; 
			}
		});
	});

	var soundBtn = document.createElement("div")
	soundBtn.setAttribute("id", "soundBtn");
	soundBtn.setAttribute("style", "position:absolute; z-index:100");
	$(soundBtn).css("height",'20%');
	$(soundBtn).css("width",150);
	$(soundBtn).css("background-color","#FF8300");
	$(soundBtn).css("display","table");
	$(soundBtn).css('left',0);
	$(soundBtn).css('top','20%');
	$(soundBtn).css("font-size",11);
	$(soundBtn).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(soundBtn).css("color","#ffffff");
	$(soundBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-volume fa-3x"></i><br>SOM</p>');
	
	sidePainel.appendChild(soundBtn);

	var painelBtn = document.createElement("div")
	painelBtn.setAttribute("id", "painelBtn");
	painelBtn.setAttribute("style", "position:absolute; z-index:150");
	$(painelBtn).css("height",'20%');
	$(painelBtn).css("width",150);
	$(painelBtn).css("background-color","#666666");
	$(painelBtn).css("display","table");
	$(painelBtn).css('left',0);
	$(painelBtn).css('top','40%');
	$(painelBtn).css("font-size",11);
	//$(painelBtn).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(painelBtn).css("color","#ffffff");
	$(painelBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-list-alt fa-3x"></i><br>PAINEL</p>');
	//$(painelBtn).css('pointer-events','none');
	sidePainel.appendChild(painelBtn);
	var painelMostra= true;
	$(painelBtn).bind(changeClick,function(e){
	//$(painelBtn).bind("click", function(){
		if(painelMostra)
	  	{
	    	//clearInterval(intervalCaption);
			//TweenLite.to(painel, .2, {left:'50%',opacity:0});
			//$(painelBtn).css('opacity',.3);
			painel.className='moveDown';
			console.log('andre')
			$("#painelBtn p").css('opacity',.3);

	  	}
	  	else 
	  	{
		    //TweenLite.to(painel, .3, {left:10,opacity:1});
		    console.log('bruna')
		    painel.className='moveIn'
		    positionPainel();	
			$(painel).css("visibility","visible");
			$(painel).css('display','block');
			//$(painelBtn).css('opacity',1);
			$("#painelBtn p").css('opacity',1);
			//intervalCaption = window.setInterval(updateSlideElements, 100);
	  	}
	  	painelMostra=!painelMostra;
	});


	var infoTopico = document.createElement("div");
	infoTopico.setAttribute("id", "infoTopico");
	$(infoTopico).css("id",'infoTopico');
	$(infoTopico).css("height",'20%');
	$(infoTopico).css("width",150);
	$(infoTopico).css("top",'60%');
	$(infoTopico).css("left",0);
	$(infoTopico).css("background-color",'#FF8300');
	$(infoTopico).css("position","absolute");
	$(infoTopico).css("color","#ffffff");
	$(infoTopico).css("display","table");
	(sidePainel).appendChild(infoTopico)

	var infoTopicoText = document.createElement("p");
	infoTopicoText.setAttribute("id", "infoTopicoText");
	$(infoTopicoText).css("font-size",11);
	//$(infoTopicoText).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(infoTopicoText).css('display',"table-cell");
	$(infoTopicoText).css('text-align',"center");
	$(infoTopicoText).css('vertical-align',"middle");
	(infoTopico).appendChild(infoTopicoText)
	$(infoTopicoText).css('pointer-events','none');
	//added
	if(window.location.host=='dominiosistemas.webaula.com.br' || window.location.host=='moodle.dominiosistemas.com.br'){
		
	}
	else{
		$(infoTopico).append('<br><div style="position:absolute; left:10%;"><input type="range" min="1" max="'+(cpInfoSlideCount-2)+'" onchange="cpCmndGotoSlideAndResume=this.value" onKeyPress="" required="" autocomplete="off" placeholder="Digite a tela"></div>');
	}
	var language = document.createElement("div");
	language.setAttribute("id", "language");
	$(language).css("id",'language');
	$(language).css("height",'20%');
	$(language).css("width",150);
	$(language).css("top",'80%');
	$(language).css("left",0);
	$(language).css("background-color",'#666666');
	$(language).css("position","absolute");
	$(language).css("color","#ffffff");
	$(language).css("display","table");
	(sidePainel).appendChild(language)

	var languageTextEnglish = document.createElement("div");
	languageTextEnglish.setAttribute("id", "languageTextEnglish");
	$(languageTextEnglish).css("height",'50%');
	$(languageTextEnglish).css("width",150);
	$(languageTextEnglish).css("font-size",11);
	$(languageTextEnglish).css("opacity",.3);
	//$(languageTextEnglish).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(languageTextEnglish).css('display',"table-cell");
	$(languageTextEnglish).css('text-align',"center");
	$(languageTextEnglish).css('background',"rgba(0,0,0,0.2)");
	$(languageTextEnglish).css('vertical-align',"middle");
	$(languageTextEnglish).html("ENGLISH VERSION");
	(language).appendChild(languageTextEnglish)
	
	var languageTextSpanish = document.createElement("div");
	languageTextSpanish.setAttribute("id", "languageTextSpanish");
	$(languageTextSpanish).css("height",'50%');
	$(languageTextSpanish).css("width",150);
	$(languageTextSpanish).css("font-size",11);
	$(languageTextSpanish).css("opacity",.3);
	//$(languageTextSpanish).css("font-family","Knowledge, Segoe UI Light, Avenir-Light, Arial");
	$(languageTextSpanish).css('display',"table-cell");
	$(languageTextSpanish).css('text-align',"center");
	$(languageTextSpanish).css('vertical-align',"middle");
	$(languageTextSpanish).html("SPANISH VERSION");
	(language).appendChild(languageTextSpanish)
	
	

	english = true;
	$(languageTextEnglish).bind(changeClick,function(e){
	//$(languageTextEnglish).bind("click", function(){
	  if(english)
	  {
		(function callee()
		{
	    	intervalLanguage = setTimeout(callee, delay=100);
		})();
		spanish=true;
		setTimeout(updateSlideElements, 100);
	   $(languageTextEnglish).css('opacity',1);
	    $(languageTextSpanish).css('opacity',.3);
	  }
	  else 
	  {
	  	clearTimeout(intervalLanguage);
	  	$(languageTextEnglish).css('opacity',.3);
	  }
	  english=!english;
	  portuguese = true;
	  setTimeout(updateSlideElements, 100);
	});

	spanish = true;
	$(languageTextSpanish).bind(changeClick,function(e){
	//$(languageTextSpanish).bind("click", function(){
	  if(spanish)
	  {
	    //cp.movie.am.mute(true);
		(function callee()
		{
			//cp.movie.am.pauseCurrentSlideAudioForInteractiveClick()
	    	intervalLanguage = setTimeout(callee, delay=100);
		})();
	    english=true;
	    setTimeout(updateSlideElements, 100);
	     $(languageTextSpanish).css('opacity',1);
	    $(languageTextEnglish).css('opacity',.3);

	  }
	  else 
	  {
	  	clearTimeout(intervalLanguage);
	  	//cp.movie.am.mute(false);
	  	//cpCmndGotoSlideAndResume=cpInfoCurrentSlide-1;
	  	$(languageTextSpanish).css('opacity',.3);
	  }
	  spanish=!spanish;
	  portuguese = true;
	  setTimeout(updateSlideElements, 100);
	});

	var pausado = true;
	$(soundBtn).bind(changeClick,function(e){
	//$(soundBtn).bind("click", function(){
	  if(pausado)
	  {
	    cp.movie.am.mute(true);
		(function callee()
		{
			cp.movie.am.pauseCurrentSlideAudioForInteractiveClick()
	    	intervalSound = setTimeout(callee, delay=200);
		})();
	    $("#soundBtn p").css('opacity',.3);
	  }
	  else 
	  {
	  	clearTimeout(intervalSound);
	  	cp.movie.am.mute(false);
	  	cpCmndGotoSlideAndResume=cpInfoCurrentSlide-1;
	  	$("#soundBtn p").css('opacity',1);
	  }
	  pausado=!pausado;
	});

	$(div_Slide).bind(changeClick,function(e){
	//$(div_Slide).bind("click", function(){
		//TweenLite.to(sidePainel,.3,{opacity:0,left:'100%'});
		sidePainel.className='moveIn';
		if(document.documentElement.clientWidth > 600){
			div_Slide.className='moveInDivSlide';
		}
		
		//TweenLite.to(showSidePainel,.3,{opacity:1});
		//showSidePainel.className="blurIn";
		//nextBtn.className='blurIn'
		//previousBtn.className='blurIn'
		//painel.className='blurIn'
		$(showSidePainel).css("background-color","#FF8300");
	});	
}

function prevSlide(){
	setTimeout(updateSlideElements, 100);
	if(cpInfoCurrentSlide == 2 || cpInfoCurrentSlide == 1)
	{
		$(showSidePainel).css("visibility", 'hidden');
		TweenLite.to(painel, .5, {opacity:0, onComplete:function()
		{
			$(painel).css("visibility", 'hidden');
			$(character).css("visibility", 'hidden');
			cpCmndCC =0;				
			cp.jumpToPreviousSlide();
		}})
	}
	else
	{
		//var video = document.getElementsByTagName('video')[0];
		//intervalRewind = setInterval(function(){
       	//video.playbackRate = 1.0;
       	//if(video.currentTime == 0){
           	//clearInterval(intervalRewind);
          	//video.pause();
           	cp.jumpToPreviousSlide();
       	//}
       	//else{
        //   	video.currentTime += -.1;
       	//}
		//},60);
		//$(nextBtn).fadeTo( "fast" , 1);
	}
}

function nextSlide(){
	setTimeout(updateSlideElements, 100);
	cp.jumpToNextSlide();

	if(cpInfoCurrentSlide == 1)
	{
		$(messageFinalElement).css("display", 'block');	
		$(messageFinalElement).css("visibility", 'visible');
		$(messageFinalElementText).css("margin-top", '36%');
		
		$(messageFinalElementIcon).css('display',"none");

		//remove message if the content is testing offline.
		if (typeof window.GetStudentName!='undefined'){
			$(painel).css('display','visible');
			$(previousBtn).css('visibility','visible');
			$(nextBtn).css('visibility','visible');
			$(painel).css("visibility","block");
			var painelMostra= true;
			//$(painel).css("left",-50);
			//TweenLite.to(painel,.3,{left:'9%',opacity:1});
			//intervalCaption = window.setInterval(updateSlideElements, 100);
			//$(ccText).css('opacity',0);
			//TweenLite.to(ccText,.3,{opacity:1});
			$(showSidePainel).css("visibility", 'visible');
			$(showSidePainel).css("opacity", 0);
			$(messageFinalElement).css("display", 'none');	
			$(showSidePainel).css("opacity", 1);
			{
				if(languageSystem == "en-US")
				{
					warningElement(courseOptionsEn,1000,3000,screenSizeHeight-50+'px',screenSizeWidth-50+'px',-45)
				}
				else
				{
					warningElement(courseOptionsPt,1000,3000,screenSizeHeight-50+'px',screenSizeWidth-50+'px',-45)
				}
			}
		}
		else
		{
			
			$(painel).css('display','visible');
			$(previousBtn).css('visibility','visible');
			$(nextBtn).css('visibility','visible');
			$(painel).css("visibility","block");
			var painelMostra= true;
			//TweenLite.to(painel,.3,{left:'9%',opacity:1});
			//intervalCaption = window.setInterval(updateSlideElements, 100);
			$(ccText).css('opacity',0);
			TweenLite.to(ccText,.3,{opacity:1});
			$(showSidePainel).css("visibility", 'visible');
			$(showSidePainel).css("opacity", 0);
			$(messageFinalElement).css("display", 'none');	
			
		}
	}
	else
	{
		$(messageFinalElement).css("display", 'none');	
		$(logoCourse).css('visibility','hidden');
	}
}

function checkWidget(){
	var widget = document.querySelector("[id*='Widget'],[id*='Web']")	
	if(widget != null){
	$(widget).css('opacity',1);
	$(widget).css('z-index',99);
	//$(widget).css('font-family',"Knowledge, Segoe UI Light, Avenir-Light, Arial");
	//TweenLite.to(widget, 2, {scale:1,opacity:1,onComplete:function(){
	//}});	
	}else{

	}
};

function character(){
	character = document.createElement("div");
	character.setAttribute("id", "character");
	document.getElementById("project_main").appendChild(character);
	character.addEventListener("animationend", function(){
	});
	characterStartInterval = setInterval(characterStart, 100);

	function characterStart(){
	try{
	if(cp.movie.am.currentSlideAudio == undefined)
	{
		TweenLite.to(character,.250,{opacity:0});   
	}
	else
	{
		TweenLite.to(character,.250,{opacity:1});   
	}
	if(cp.movie.am.pace == null){
		character.className = 'idle';
	}
	else{
		character.className = 'talking';
	}		
		}catch(e){}
	}
	//$(character).bind("click", function(){
		//clearInterval(characterStartInterval)
		//character.className = 'idle';
		//characterStartInterval = setInterval(characterStart, 100);
		//cp.movie.am.pauseCurrentSlideAudioForInteractiveClick();
	//});
}

var andre= true;
function mostrarOcultar(parameter){
	$(parameter).css('box-shadow', '1px 1px 50px rgba(0,0,0,0.5)')
	var buttonElement = $('canvas[id*=Button_][class*=cp-shape]');
	buttonElement[0].style.opacity='1';
	//buttonClicked = document.getElementById(this);
	this.onmouseover=function(){console.log(this)}
	//console.log(buttonElement[0].attributes)
	//parameter.style.opacity='0';
	//var andre= true;
	if(andre)
	{
	   	console.log('a')
	   	parameter.style.visibility='visible';
		var exerciseDocument = parameter.getElementsByTagName('iframe')
		buttonElement[0].style.opacity='0.5'
		parameter.className='moveOut';
		buttonElement[0].style.zIndex='0';
		parameter.style.display='block';
		parameter.className='moveIn';
		//TweenLite.to(parameter, .4, {scale:1,opacity:1,'background-color':backgroundColor,'border-radius':'5px'});	
		//TweenLite.to(painel, .4, {left:-80,opacity:0});
		painel.className='moveDown painelNormal';
	}
	else 
	{
		console.log('b')
		if(cpInfoCurrentSlideLabel == "Painel Lateral!"){
			painel.className='painelLateral';
		}
		else{
			positionPainel();	
		}
		parameter.style.visibility='hidden';
		parameter.className='moveDown'
	}
	andre=!andre;
	/*if(parameter.style.visibility== 'hidden')
	{
		parameter.style.visibility='visible';
		var exerciseDocument = parameter.getElementsByTagName('iframe')
		buttonElement[0].style.opacity='0.5'
		parameter.className='moveOut';
		buttonElement[0].style.zIndex='0';
		parameter.style.display='block';
		parameter.className='moveIn'
		//TweenLite.to(parameter, .4, {scale:1,opacity:1,'background-color':backgroundColor,'border-radius':'5px'});	
		//TweenLite.to(painel, .4, {left:-80,opacity:0});
		painel.className='moveDown painelNormal';
		///TweenLite.to(logoCompanyContainer, .4, {opacity:0});
	}
	else 
	{
		//buttonElement[0].style.opacity='1'
		//TweenLite.to(logoCompanyContainer, .4, {opacity:1});
		//TweenLite.to(painel, .3, {left:80,opacity:1});
		//painel.className='painelNormal'
		if(cpInfoCurrentSlideLabel == "Painel Lateral!"){
			painel.className='painelLateral';
		}
		else{
			positionPainel();	
		}
		


		parameter.style.visibility='hidden';
		parameter.className='moveDown'
		//TweenLite.to(parameter, .4, {scale:.97,opacity:0,onComplete:function()
		//{
			//parameter.style.opacity='1';
			//parameter.style.visibility='hidden';
		//}});	
	}*/
}

/*function mostrarOcultarOld(parameter, parameter2, parameter3){
 	//parameter.classList.toggle(parameter3);
	//parameter.classList.add(parameter3);
	//$(parameter).css('box-shadow', '1px 1px 50px rgba(0,0,0,0.5)')
		//var buttonElement = $('canvas[id*=Button_][class*=cp-shape]');
	 	//$(this).click(function(event) {
        // this.append wouldn't work
        ////console.log(this)
        //this[0].style.opacity='0.5';
    	//});
	//var buttonElement = document.querySelectorAll('canvas[id*=Button_][class*=cp-shape]')
	//for (var i = 0; i < buttonElement.length; i++) {
    	////console.log(buttonElement[i]);
	//}
	//for(i=0; i < buttonElement.length; i++){
		//buttonElement[i].click=//console.log(this)//
	//}
	//for (var i = 0; i < bpoo.length; i++) {
 //bpoo[i].addEventListener("click", pooFunction, false); 
 //}
 //function pooFunction()
 //{
	// 	//console.log('andre')
 //}
	//var index = $('canvas[id*=Button_][class*=cp-shape]').index(this);
	//$(index).click(//console.log(index));
	//$('canvas[id*=Button_][class*=cp-shape]').click(this);
	////console.log(buttonElement)
	//var parameter2 = 'blurIn'
	//var parameter3 = 'blurOut'
	//document.parameter.addEventListener('click', classToggle);
	////console.log(parameter.style.visibility)
	////console.log(parameter.className)
	////console.log(parameter.className)
	if(parameter.style.visibility == 'hidden')
	{
		//var exerciseDocument = parameter.getElementsByTagName('iframe')
		//parameter.className=parameter2;
		//buttonElement[0].style.opacity='0.5'
		//parameter.style.display='block';

		//parameter.classList.toggle(parameter3);
		//parameter.className=parameter2;
		
		//parameter.translate(-150,-150);
		//TweenLite.to(parameter, .2, {scale:1,opacity:1});	
		//parameter.className='blurIn';
		parameter.className=parameter2;	
		parameter.style.visibility='visible';
		TweenLite.to(painel, .4, {opacity:0});
		TweenLite.to(logoCompanyContainer, .4, {opacity:0});
	}
	else 
	{
		////console.log(parameter.className)
		parameter.className=parameter3;
		parameter.style.visibility='hidden';
		/*var graphicElements = $('canvas[id*="Image"],canvas[id*=Text_Caption_]')
		for(a = 0; a < graphicElements.length; a++){
			if(graphicElements[a].className == parameter2){
				graphicElements[a].className=parameter3;	
				graphicElements[a].style.visibility='hidden';	
			}
			else{
			}
		}*/
		//$('canvas[id*="Image"],[id*=Text_Caption_]').each(function(i, el){
		//if(this.className == 'blurIn'){
			//this.className='blurOut';
			//this.style.visibility='hidden';
		//}
		//else{}
		//})
		//TweenLite.to(painel, .4, {opacity:1});
		//TweenLite.to(logoCompanyContainer, .4, {opacity:1});
		//parameter.classList.toggle(parameter2);
		//parameter.className=parameter2;
		//buttonElement[0].style.opacity='1';
		//parameter.className='blurOut';
		//parameter.className=parameter2;
		////console.log(parameter.classList)
		//TweenLite.to(painel, .3, {opacity:1});
		//TweenLite.to(logoCompanyContainer, .4, {opacity:1});
		//TweenLite.to(parameter, .2, {scale:.98,opacity:0,onComplete:function()
		//{
			//parameter.style.visibility='hidden';
		//}});	
	//}
	//var graphicElements = $('canvas[id*="Image"],canvas[id*=Text_Caption_]')
		//for(a = 0; a < graphicElements.length; a++)
		//{
			
		////console.log(graphicElements[a].id);
		//	if(graphicElements[a].className == 'blurIn'){
		//		graphicElements[a].className=parameter3;	
				//graphicElements[a].style.visibility='hidden';	
			//}
			//else{
				//graphicElements[a].className=parameter2;	
				//graphicElements[a].style.visibility='visible';	
			//}
		//setInterval((//console.log(graphicElements[a].id+'      '+graphicElements[a].className),100));
		//if(graphicElements[a].className == 'blurIn')
		//{
			////console.log('Y')
			//graphicElements[a].className='blurOut';
			//graphicElements[a].style.visibility='hidden';
		//}
		//else
		//{
			//graphicElements[a].className='blurIn';
			//graphicElements[a].style.visibility='visible';
		//}
		//else
		//{
			//parameter.className=parameter3;	
			//parameter.style.visibility='hidden';
//		}
//}

function easyEffect(parameter, effect1, effect2){
	if(parameter.className != effect1){
	parameter.className=effect1;	
	TweenLite.to(painel, .4, {opacity:1});
	TweenLite.to(logoCompanyContainer, .4, {opacity:1});
	}else{
	parameter.className=effect2;
	//parameter.style.visibility='hidden';
	TweenLite.to(painel, .4, {opacity:0});
	TweenLite.to(logoCompanyContainer, .4, {opacity:0});}
}



function successMessage(){
	//console.log('successMessage')
try{
	var successCaption = document.querySelectorAll("canvas[id*='Success_Caption_']")
	checkVisibility();
	if(successCaption[0].style.visibility == 'visible'){
		var Success_Caption = $("[id*='re-Success_Caption_']")
		$(Success_Caption).css('left',0);
		$(Success_Caption).css('top',0);
		$(Success_Caption).css('width','100%');
		$(Success_Caption).css('height','100%');
		$(Success_Caption).css("background-color","#666666");
		$(Success_Caption).html("<i style='font-size:10em; height:100%; display:flex;justify-content:center;align-items:center;pointer-events:none;color:white;' class='fa fa-check-circle-o fa-3x'></i>");
	}
	else{
	}
	}catch(e){}
}


function failureMessage(){
try{
	var failureCaption = document.querySelectorAll("canvas[id*='Failure_Caption_']")
	var failureCaptionElement = document.querySelectorAll("[id^='Failure_Caption_']");
	var failureTextChanged = failureCaptionElement[2].innerHTML.toString();
	checkVisibility();
	if(failureCaption[0].style.visibility == 'visible'){
		var failureCaptionChanged = $("[id*='re-Failure_Caption_']")
		$(failureCaptionChanged).css('left',0);
		$(failureCaptionChanged).css('top',0);
		$(failureCaptionChanged).css('width','100%');
		$(failureCaptionChanged).css('height','100%');
		$(failureCaptionChanged).css("background-color","#666666");
		$(failureCaptionChanged).html("<i style='margin-top:20%;font-size:10em; height:100%; display:block;vertical-align:middle;text-align:center;pointerevents:none;color:white;' class='fa fa-exclamation-circle fa-3x'></i>").append("<span style='font-size:2em; height:80%; display:flex;justify-content:center;align-items:center;pointer-events:none;color:white;position:absolute;width:80%;top:0;padding:10%'"+failureTextChanged+"</span>")
	}
	else{
	}
	}catch(e){}
}

function checkVisibility(){
try{
	var checkVisibility = document.querySelectorAll("div[id^='Failure_Caption_'],div[id^='Success_Caption_']")
	console.log(checkVisibility.childNodes[0])
	/*var intervalVisible = setInterval(function(){

	if(checkVisibility.style.visibility == "hidden"){
		$(painel).css('opacity',1);
		clearInterval(intervalVisible)
	}
	else{
		$(painel).css('opacity',0)
	}
})	*/
}
catch(e){}
}


function changeSuccessElement(){
	//$('"div_Slide"[id*=re-Click],[id*=re-Highlight],[id*=re-[Rollover_Area]],[id*=Text_Entry_Box_][class*=cp-frameset]');
	//var successElement = document.querySelector("[id*='Success_Caption_']")
	var successElementIcon = document.createElement('div');
	successElementIcon.setAttribute("id", "bruna");
	//foo.appendChild(successElementIcon);
	
	//$(successElementIcon).css('font-family',"Knowledge");
	$(successElementIcon).css('display',"table");
	$(successElementIcon).css('text-align',"center");
	$(successElementIcon).css('color',"white");
	$(successElementIcon).css('font-size','1000%');
	$(foo).css('left',0);
	$(foo).css('top',0);
	$(foo).css('width','100%');
	$(foo).css('height','100%');
	$(foo).css("background-color","#FF8300");
	$(successElementIcon).css('width','100%');
	$(successElementIcon).css('height','100%');
	$(successElementIcon).css("font-weight",'lighter');
	$(successElementIcon).css("z-index",'20000');
	$(successElementIcon).html("<p style='display:table-cell;vertical-align:middle;text-align:center;pointerevents:none;''><i class='fa fa-check-circle-o fa-3x'></i></p>");
	$(foo).append(successElementIcon);
	
	//successElementIcon.className='reflectBelow imageAnimation'		
	//var successElement = $('[id*=Success_Caption_]')
	//console.log(successElement)
}

function changeColors(){
	//var backgroundColor = document.getElementsByTagName('stop')[0].style.stopColor != -1;
	try{
		var backgroundColor = document.getElementsByTagName('stop')[0].style.stopColor;

	}catch(e){backgroundColor=false;}

	try{
		var backgroundColorIpad = document.getElementById('__bgDiv__').className;

	}catch(e){}
	if(backgroundColor != false && backgroundColor != 'rgb(255, 255, 255)' || backgroundColorIpad == 'cp-gf' || cpInfoCurrentSlide == cpInfoSlideCount){
		$(logoCompanyContainer).css('-webkit-filter',"brightness(2.3) grayscale(1)");	
		$('*').css('color', 'rgba(255, 255, 255, 1)');
		//try{
			//$(painel).css('color',"#ffffff");
			painelTextoSlide.className="changeColorsClear";
			//TweenLite.to(painel, .3, {'color':"#ffffff"});	
			//$(painelTitleSlide).css('color',"#ffffff");	
			$("nextBtn, i").css('color', 'rgba(255, 255, 255, 1)');
			//TweenLite.to(nexbtn, .3, {'color':"rgba(255, 255, 255, 0.4)"});	
		//}catch(e){}
	}
	else{
		//try{
			$('*').css('color', '#999999');
			//console.log('andre')
			//$(painel).css('color',"#4d4d4d");	
			//$("table,th,td").css('border-color', 'rgba(0, 0, 0, 0.4)');
			//document.getElementsByTagName('<table>').className = "tableGray";
			painelTextoSlide.className="changeColorsDark"
			//TweenLite.to(painel, .3, {'color':"#4d4d4d"});	
			//$(painelTitleSlide).css('color',"rgb(255, 131, 0)");	
			$(logoCompanyContainer).css('-webkit-filter',"brightness(1) grayscale(0)");	
			$("nextBtn, i").css('color', 'rgba(0,0,0, 0.4)');

		//}catch(e){}
			
        	
	}
}

function topicType(){
	if(painelNomeTopico.innerHTML == 'SEJA BEM VINDO!'){
		$(character).css("display",'none');	
		painel.className='painelLateralWelcome'
		painelTextoSlide.className='painelLateralTextoSlide'
		nextBtn.className='painelLateralNextWelcome';
		previousBtn.className='painelLateralPreviousWelcome';
		$(painelNomeTopico).css('display','none');			
		changeColors();
	}
	else if(cpInfoDescription.split(' ')[0] == 'Character' || cpInfoCurrentSlideLabel == "Character!")
	{
		//production
		$(painelNomeTopico).css('display','none');			
		painel.className='painelLateral'
		painelTextoSlide.className='painelLateralTextoSlide';
		nextBtn.className='painelLateralNext';
		previousBtn.className='painelLateralPrevious';
		$(painelTextoSlide).css("width",'50vw');	
		$(character).css("left",'75%');	
		$(character).css("display",'block');	
		changeColors();
		if(screenSizeHeight <= 600)
		{
			nextBtn.className='painelLateralNext800';
			previousBtn.className='painelLateralPrevious800';
		}
	}
	else if(cpInfoCurrentSlideLabel == "Saiba Mais!")
	{
		
		$(character).css("display",'none');	
		painel.className='painelLateral'
		painelTextoSlide.className='painelLateralTextoSlide'
		nextBtn.className='painelLateralNext';
		previousBtn.className='painelLateralPrevious';
		$('#painelNomeTopico, #painelTextoSlide').css('display','none');			
		changeColors();
		if(screenSizeHeight <= 600)
		{
			nextBtn.className='painelLateralNext800';
			previousBtn.className='painelLateralPrevious800';
		}
	}
	else if(cpInfoCurrentSlideLabel == "Painel Lateral!")
	{
		
		$(character).css("display",'none');	
		painel.className='painelLateral'
		painelTextoSlide.className='painelLateralTextoSlide'
		nextBtn.className='painelLateralNext';
		previousBtn.className='painelLateralPrevious';
		$(painelNomeTopico).css('display','none');			
		changeColors();
		var imageExist = document.querySelector("[id*='Image_']")
		if(imageExist == null || imageExist == undefined)
		{
			TweenLite.to(painelTextoSlide, .2, {width:'100%'});
			TweenLite.to(painelTextoSlide, .2, {'max-width':'100%'});
			TweenLite.to(painelTextoSlide, .2, {'margin-left':''});
		}
		else
		{
			var imageExistFinal = (parseInt(imageExist.style.width)-(Math.abs(parseInt(imageExist.style.left))));
			//imageExistRound = document.querySelectorAll("canvas[id*='Image_']")
			var imageExistRound = $("canvas[id*='Image_']")
			for(i=0; i < imageExistRound.length; i++){
				if(imageExistRound[i].width == imageExistRound[i].height){
					////console.log(imageExistRound[i].width,imageExistRound[i].height);	
					//TweenLite.to(imageExistRound[i], .3, {'border-radius':'100%',scale:.98});
					imageExistRound[i].className = 'scaleBorderAnimation' ;
				}
			}
			//TweenLite.to(imageExistRound, .3, {scale:.99});	
			//try{
			//var textAnimationMarkers = painelTextoSlide.split('•')[1];
			////console.log(textAnimationMarkers)
			//TweenLite.to(textAnimationMarkers, .4, {opacity:1,scale:.98});
			//}
			//catch(e){}
			
			////console.log(imageExistRound.clientHeight,imageExistRound.clientWidth);
			//if(parseInt(imageExist.style.height) == parseInt(imageExist.style.width))
			//{
				//$(imageExistRound).css('border-radius','100%');		
				//TweenLite.to(imageExistRound, .4, {'border-radius':'100%',"margin-top":-10,scale:.95});	
				//TweenLite.to(imageExistRound, .4, {'border-radius':'100%',scale:.98});
				//imageExistRound.className='imageAnimation'
				//imageExist.className="imageAnimation reflectBelow";

			//}
			//if(parseInt(imageExist.style.height) >= 800)
			//{
				//$(imageExistRound).css('border-radius','100%');	
			//	TweenLite.to(imageExistRound, .4, {'border-radius':'100%',"margin-top":-10,scale:1});		
			//}
			//$(painel).css('width','86.5%');
		
			////console.log(imageExist.style.top)
			$(painelTextoSlide).css("font-size",'100%');
			//$('#painelTitleSlide, #painelTextoSlide, #painel').css("border-style",'solid');
			//$('#painelTitleSlide, #painelTextoSlide, #painel').css("border-width",'1px');
			//position the panel  onthe other side when the image passes the middle of the screen
			//console.log('Image Position: '+imageExist.style.left)
			//console.log(document.styleSheets);
			if(parseInt(imageExist.style.left) >= 299)
			{
                //TweenLite.to(painelTextoSlide, .2, {'width':(parseInt(imageExist.style.left)-100)});	
				//TweenLite.to(painelTextoSlide, .2, {'max-width':'520px'});		
				//TweenLite.to(painelTextoSlide, .2, {'margin-left':'0'});
				$(painelTextoSlide).css({"width":(parseInt(imageExist.style.left)-100)});
				$(painelTextoSlide).css({"max-width":'520px'});
				$(painelTextoSlide).css({"margin-left":'0px'});
				//TweenLite.to(painelTitleSlide, .2, {'max-width':'520px'});	
				//TweenLite.to(painelTitleSlide, .2, {'margin-left':'0'});		
				
				//TweenLite.to(painelTextoSlide, .2, {'max-width':520});		
				//TweenLite.to(painelTitleSlide, .2, {'max-width':520});		
					
					
			}
			else
			{
                var imageWidthLeft = (parseInt(imageExist.style.left)+parseInt(imageExist.style.width))-20;
				//TweenLite.to(painelTextoSlide, .2, {'width':''});	
				//TweenLite.to(painelTextoSlide, .2, {'margin-left':imageWidthLeft});	
				//TweenLite.to(painelTextoSlide, .2, {'max-width':'405px'});		
				//TweenLite.to(painelTitleSlide, .2, {'margin-left':imageWidthLeft});	
				
				$(painelTextoSlide).css({"width":''});
				//$(painelTextoSlide).css({"max-width":'405px'});
				$(painelTextoSlide).css({"margin-left":imageWidthLeft});
				//TweenLite.to(painelTitleSlide, .2, {'max-width':'405px'});	
			}
			
			//adjust title according to position of the image Y
			if(parseInt(imageExist.style.top) <= 150)   
			{
				
			}
			else
			{
				//TweenLite.to(painelTitleSlide, .2, {width:750});			
			}
		}
		
		if(screenSizeHeight != 600)
		{
			
			//$(previousBtn).css('top',"90%");
			//TweenLite.to(previousBtn, .2, {scale:1.5});	
			//$(nextBtn).css('top',"90%");
			//$(nextBtn).css('left','96%');
			//TweenLite.to(nextBtn, .2, {scale:1.5});
		}
		else
		{
			nextBtn.className='painelLateralNext800';
			previousBtn.className='painelLateralPrevious800';
			//TweenLite.to(nextBtn, .5, {scale:1});	
			//$(nextBtn).css('top','88%');
			//TweenLite.to(previousBtn, .5, {scale:1});	
			//$(previousBtn).css('top','88%');	
		}
	}
	else
	{
		if(screenSizeHeight <= 600)
		{
			nextBtn.className='painelLateralNext800';
			previousBtn.className='painelLateralPrevious800';
			painelTextoSlide.className='painelNormalTextoSlide800';
		}
		else
		{
			$(painelNomeTopico).css('display','block');	
			painelTextoSlide.className='painelNormalTextoSlide';
			nextBtn.className='painelNormalNext';
			previousBtn.className='painelNormalPrevious';
			$(painelTextoSlide).css('display','block');			
			positionPainel();	
		}
		$(logoCompanyContainer).css('display',"none");
		$(logoCompanyContainer).css('visibility',"hidden");
		$(painelTextoSlide).css({"margin-left":0});
		positionPainel();	
		translateBackground();

	}
}

function translateBackground(){
	var elementClick = document.querySelector('div[id*=Click],[id*=Text_Entry]');
	var elementSystemImage = document.getElementById("div_Slide")
	if(document.documentElement.clientWidth < 630 && elementClick != null){
		elementSystemImage.className='translateBackground';
		//console.log('1')
		var positionTop = parseInt(elementClick.style.top)-70;
		var positionLeft =  parseInt(elementClick.style.left)-70;
//		console.log(positionTop,positionLeft)
		//var positionTopFinal = positionTop-100;
		//var positionLeftFinal = positionLeft-100;
		console.log("Element Top  : "+positionTop,"Element Left  : "+positionLeft)
		//console.log("Element Top F: "+positionTopFinal,"Element Left F: "+positionLeftFinal)
		//if(positionTop < 0){
			//$(elementSystemImage).css('transform',"translateY(60px) translateX(0px)");
			$(elementSystemImage).css('transform',"translateY(-"+positionTop+"px) translateX(-"+positionLeft+"px)");
		//}
		//else{
		//	$(elementSystemImage).css('transform',"translateY(-"+positionTopFinal+"px) translateX(-"+positionLeftFinal+"px)");
		//}
	if(elementClick == null && cpInfoCurrentSlide != cpInfoSlideCount){
		//console.log('2')
			$(elementSystemImage).css('transform',"translateY(70px) translateX(0px)");	
		}
	}
	else{
		//console.log('3')
		$(elementSystemImage).css('transform',"translateY(0px) translateX(0px)");	

	}
}

function positionPainel(){
	//var elements = $('"div_Slide"[id*=re-Click],[id*=re-Highlight],[id*=inputField],[id^=Text ]');
	var elements = $('[id*=re-Click],[id*=re-Highlight],[id*=re-Rollover_Area],[id*=Text_Entry_Box_][class*=cp-frameset]');
	//var elements = document.querySelectorAll("[id*='re-Click'],[id*='re-Highlight'],[id*='inputField'],[id*='Text ']");
	var area1 = null;
	var area2 = null;
	var area3 = null;
	var area4 = null;
	
	if(screenSizeHeight != 600)
	{
		for(index = 0; index < elements.length; index++)
		{
			
			//var elementsPosition = elements[index].offsetTop+elements.height();
			//var elementsPosition = parseInt(elements[index].style.top);
			var elementsPosition = parseInt(elements[index].style.top)+parseInt(elements[index].style.height);
			if(elementsPosition <= 500)
			{
				area1 = elementsPosition;
			}
			if(elementsPosition >= 500)
			{
				area2 = elementsPosition;	
			}
			if(elementsPosition >= 500)
			{
				area3 = elementsPosition;	
			}
			//if(elementsPosition >= 500 && elementsPosition <= 300){
			//	area3 = elementsPosition;		
			//}
			//console.log("A1:"+area1);
			//console.log("A2:"+area2);
			//console.log("A3:"+area3);
			//console.log("A4:"+area4);
			
		}
		if(area2 == undefined)
		{
			painel.className = 'painelLow painelNormal'
			//TweenLite.to(painel,.3,{top:580});	
		}
		else if(area1 == undefined)
		{
			painel.className = 'painelTop painelNormal'
			//TweenLite.to(painel,.3,{top:15});	
		}
		else if(area3 == undefined)
		{
			painel.className = 'painelTop painelNormal'
			//TweenLite.to(painel,.3,{top:15});	
		}
		else if(area4 == undefined)
		{
			painel.className = 'painelTop painelNormal'
			//TweenLite.to(painel,.3,{top:15});	
		}
		//else if(area4 == undefined)
		//{
			//painel.className = 'painelTop painelNormal'
			//TweenLite.to(painel,.3,{top:15});	
		//}
		/*for(index = 0; index < elements.length; index++)
		{
			//var elementsPosition = elements[index].offsetTop+elements.height();
			var elementsPosition = parseInt(elements[index].style.top);
			if(elementsPosition <= 200)
			{
				area1 = elementsPosition;
			}
			if(elementsPosition >= 200 && elementsPosition <=400)
			{
				area2 = elementsPosition;	
			}
			if(elementsPosition >= 400 && elementsPosition <= 550)
			{
				area3 = elementsPosition;	
			}
			if(elementsPosition >= 550 && elementsPosition <= 768)
			{
				area4 = elementsPosition;	
			}
			//console.log("A1:"+area1+" A2:"+area2+" A3:"+area3+" A4:"+area4);
		}
		if(area4 == undefined)
		{
			TweenLite.to(painel,.3,{top:580});	
			}
			else if(area1 == undefined)
			{
				TweenLite.to(painel,.3,{top:15});	
			}
			else if(area3 == undefined)
			{
				TweenLite.to(painel,.3,{top:400});	
			}
			else if(area2 == undefined)
			{
				TweenLite.to(painel,.3,{top:250});	
			}*/	
		}
		//screensize smaller than 

		else
		{
			nextBtn.className = 'painelNormalNext800'
			previousBtn.className = 'painelNormalPrevious800'
			for(index = 0; index < elements.length; index++)
			{
				//var elementsPosition = elements[index].offsetTop+elements.height();
				var elementsPosition = parseInt(elements[index].style.top);
				if(elementsPosition <= 200)
				{
					area1 = elementsPosition;
				}
				if(elementsPosition >= 200 && elementsPosition <=400)
				{
					area2 = elementsPosition;	
				}
				if(elementsPosition >= 400 && elementsPosition <= 600)
				{
					area3 = elementsPosition;	
				}
				//console.log("A1:"+area1+" A2:"+area2+" A3:"+area3);
			}		
			
			if(area1 == undefined)
			{
				painel.className = 'painelTop800 painelNormal'
				//TweenLite.to(painel,.3,{top:15});	
			}
			else if(area2 == undefined)
			{
				painel.className = 'painelLow800 painelNormal'
				//TweenLite.to(painel,.3,{top:580});	
			}
			else if(area3 == undefined)
			{
				painel.className = 'painelTop800 painelNormal'
				//TweenLite.to(painel,.3,{top:15});	
	    	}
		}
	}


function topicLanguage(){
	try
	{
		slideNumber = cp.movie.playbackController.currentSlide;
		textoAcessibilidadePortugueseTitle = cp.model.data[slideNumber].accstr.replace('Painel Lateral!','').replace('','<h1 class="painelTitleSlide">').replace('<span>','</h1>').split('<title>')[0]
		textoAcessibilidadePortuguese = cp.model.data[slideNumber].accstr.split('<title>')[1];
		//console.log(cp.model.data[slideNumber])
		if(textoAcessibilidadePortuguese == "Painel Lateral! " || textoAcessibilidadePortuguese == "Character! ")
		{
			$(painelTextoSlide).html('');	

		}
		//ENGLISH
		else if(english != true)
		{
			//console.log('English')
			if(pageUrl == 'moodle.dominiosistemas.com.br' || pageUrl == 'qamoodle.dominiosistemas.com.br')
			{
				msgFinalTopico = 'To continue, select the<br>next topic in the field above.<br><br>Questions? Send an email to <br>'+cpInfoEmail;
			}
			else
			{
				msgFinalTopico = 'To continue on the top bar,<br>click the Next Button. <br><br>Questions? Send an email to <br> '+cpInfoEmail;
			}
			textoAcessibilidadeEnglish = cp.model.data[slideNumber].accstr.split('  ')[1]
			textoAcessibilidadeEnglishTitle= textoAcessibilidadeEnglish.split('<title>')[0];
			textoAcessibilidadeEnglishText = textoAcessibilidadeEnglish.split('<title>')[1];
			$('#soundBtn p').html('<p><i class="fa fa-volume-up fa-3x"></i><br>SOUND</p>');
			$('#painelBtn p').html('<p><i class="fa fa-list-alt fa-3x"></i><br>PANEL</p>');
			//$(painelBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-list-alt fa-3x"></i><br>PANEL</p>');
			$(infoTopicoText).html("SLIDE "+cpInfoCurrentSlide+" OF "+cpInfoSlideCount);
			if(textoAcessibilidadeEnglish != undefined)
			{
				$(painelTextoSlide).html(textoAcessibilidadeEnglish);	
				//$(painelTitleSlide).css('display','none');
				if(cpInfoCurrentSlideLabel == "Painel Lateral!" || cpInfoCurrentSlideLabel == "Character!")				
				{
					//$(painelTitleSlide).css('display','block');
					//$(painelTitleSlide).html(textoAcessibilidadeEnglishTitle+'<br>');
					$(painelTextoSlide).html(textoAcessibilidadeEnglishText);	
				}
				if(textoAcessibilidadeEnglish == '' || textoAcessibilidadeEnglish == null)
				{
					//$(painelTitleSlide).css('display','none');
					$(painelTextoSlide).html('Not Available in this Course.');
				}
			}
			else
			{
				//$(painelTitleSlide).css('display','none');
				$(painelTextoSlide).html('Not Available in this Course.');
			}
		}
		//SPANISH
		else if(spanish != true)
		{
			////console.log('Spanish');
			if(pageUrl == 'moodle.dominiosistemas.com.br' || pageUrl == 'qamoodle.dominiosistemas.com.br')
			{
				msgFinalTopico = 'Para continuar, seleccione la <br> siguiente tema en el campo de arriba.<br><br>¿Preguntas? Enviar un correo electrónico a <br> '+cpInfoEmail;
			}
			else
			{
				msgFinalTopico = 'Para continuar en la barra superior,<br>haga clic en el botón Siguiente.<br><br>¿Preguntas? Enviar un correo electrónico a <br> '+cpInfoEmail;
			}
			$('#soundBtn p').html('<p><i class="fa fa-volume-up fa-3x"></i><br>SONIDO</p>');
			$('#painelBtn p').html('<p><i class="fa fa-list-alt fa-3x"></i><br>PANEL</p>');
			//$(painelBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-list-alt fa-3x"></i><br>PAINEL</p>');
			$(infoTopicoText).html("SLIDE "+cpInfoCurrentSlide+" DE "+cpInfoSlideCount);
			var checkSpanishNotes = cp.model.data[slideNumber].accstr.split('  ')[2] != null;
			if(checkSpanishNotes == true)
			{
				var textoAcessibilidadeSpanish = cp.model.data[slideNumber].accstr.split('  ')[2];
				var textoAcessibilidadeSpanishTitle= textoAcessibilidadeSpanish.split('<title>')[0];
				var textoAcessibilidadeSpanishText = textoAcessibilidadeSpanish.split('<title>')[1];
				
				$(painelTextoSlide).html(textoAcessibilidadeSpanish);	
				//$(painelTitleSlide).css('display','none');
				if(cpInfoCurrentSlideLabel == "Painel Lateral!")				
				{
					//$(painelTitleSlide).css('display','block');
					//$(painelTitleSlide).html(textoAcessibilidadeSpanishTitle+'<br>');
					$(painelTextoSlide).html(textoAcessibilidadeSpanishText);	
				}
			}
			else
			{
				//$(painelTitleSlide).css('display','none');
				$(painelTextoSlide).html('No está disponible en este curso.');
			}
		}
		
		//PORTUGUESE
		else
		{
			////console.log('Portuguese')
			if(pageUrl == 'moodle.dominiosistemas.com.br' || pageUrl == 'qamoodle.dominiosistemas.com.br')
			{
				msgFinalTopico = 'Para continuar, selecione o <br>próximo tópico no campo acima.<br><br>Dúvidas? Envie um e-mail para<br>'+cpInfoEmail;
			}
			else
			{
				msgFinalTopico = 'Para continuar, na barra superior,<br>clique no botão Avançar.<br><br>Dúvidas? Envie um e-mail para<br>'+cpInfoEmail;
			}
			$('#soundBtn p').html('<p><i class="fa fa-volume-up fa-3x"></i><br>SOM</p>');
			$('#painelBtn p').html('<p><i class="fa fa-list-alt fa-3x"></i><br>PAINEL</p>');
			//$(painelBtn).html('<p style="display:table-cell;vertical-align:middle;text-align:center;pointer-events:none;"><i class="fa fa-list-alt fa-3x"></i><br>PAINEL</p>');
			$(infoTopicoText).html("TELA "+cpInfoCurrentSlide+" DE "+cpInfoSlideCount);

			if(cpInfoCurrentSlideLabel == "Painel Lateral!" || cpInfoCurrentSlideLabel == "Character!" )
			{
				//$(painelTitleSlide).css('display','block');
				//$(painelTitleSlide).html(textoAcessibilidadePortugueseTitle+'<br>');
				$(painelTextoSlide).html(textoAcessibilidadePortugueseTitle).append(textoAcessibilidadePortuguese);
				//if(textoAcessibilidadePortugueseText == undefined){
					//$(painelTextoSlide).html('');	
				//}
			}
			else
			{
				if(document.documentElement.clientWidth < 700){
					painelTextoSlide.className="painelNormalMobileTextoSlide";
					painel.className="painelNormalMobile";
					messageFailureToPanel();
				}
				else{
					$(painelTextoSlide).html(cp.model.data[slideNumber].accstr);
					//$(painelTitleSlide).css('display','none');	
				}
				
			}
			}
		}
		catch(e)
		{
	}
}


function messageFailureToPanel(){
	//var slideNumber = cp.movie.playbackController.currentSlide
	//var clickBoxNumber = cp.model.data[slideNumber].topMostObjectInteractiveObject;
	
	//var failureNumber = cp.model.data[clickBoxNumber].ofc;
	//console.log(failureNumber.length +'     '+clickBoxNumber != null)
	var failureMessage = $('"div_Slide"[id*=Failure_Caption]');
	//console.log(failureMessage[2][attributes][4].nodeValue)
	//if(failureCaption.length == ''){
	//var slideNumber = cp.movie.playbackController.currentSlide
	//var clickBoxNumber = cp.model.data[slideNumber].topMostObjectInteractiveObject;
	//var failureNumber = cp.model.data[clickBoxNumber].ofc;
	//console.log(failureMessage.length)
	if(failureMessage.length != 0){
		failureCaption = failureMessage[2].attributes[4].nodeValue
		$(painelTextoSlide).html(failureCaption);
		
	}
	else{
		failureCaption = "Clique no botão Avançar."
		$(painelTextoSlide).html(failureCaption);
	}
	//console.log(cp.model.data[failureCaption+'c']);
	//failureCaptionPrefix = "re-"+failureCaption+"c"
	//failureCaptionPrefixChanged = document.getElementById(failureCaptionPrefix);
	//console.log(cp.model.data[failureCaption+'c']);

}


function updateSlideElements(){
    ////console.log('Screen Size: '+document.documentElement.clientWidth);
	/*try
	{
		clickBoxDestaque = document.querySelector("[id*='Click_Box'],[id*='Text_Entry']")
		clickBoxDestaque.style.borderStyle='solid';
		clickBoxDestaque.style.borderWidth='5px';
		clickBoxDestaque.style.borderRadius='100%';
		clickBoxDestaque.style.width='10px';
		clickBoxDestaque.style.height='10px';
		clickBoxDestaque.style.borderColor='#0080FF';
		clickBoxDestaque.style.backgroundColor='rgba(92,225,255,0.6)';
		TweenLite.to(clickBoxDestaque, .5, {scale:2});	
	}
	catch(e){}*/
	//checkAudio();
	//changeColors();
	turnImageDescription();
	checkWidget();
	//positionPainel();
	successMessage();
	failureMessage();
	topicType();
	topicLanguage();
	changeToDeviceFont();
	
	//DONE: created and array of elements by getting the elements on screen and split up the screen in 3 main areas.
	/*if(cpInfoCurrentSlideLabel == 'Saiba Mais!')
	{
		//TweenLite.to(painel,.1,{top:450});
		//TweenLite.to(painel,.2,{opacity:0,onComplete:function(){
		//	TweenLite.to(painel,.5,{opacity:1});		
		//}});
	}
	//added
	else if(cpInfoDescription.split(' ')[0] == 'Character')
	{		
	}
	else if(cpInfoCurrentSlideLabel == "Painel Lateral!")
	{
		TweenLite.to(painel,.1,{top:'5%'});
		//TweenLite.to(painel,.2,{opacity:0,onComplete:function(){
			//TweenLite.to(painel,.5,{opacity:1});		
		//}});
	}
	else
	{
	}*/
	if(cpInfoCurrentSlide == cpInfoSlideCount)			
	{
		finalMessage();
		changeColors();
		painel.className='moveDown painelNormal';

		//painel.setAttribute("style", "display:none");
		//clearInterval(intervalCaption)
		if(cpInfoDescription.split(' ')[0] == 'Character')
		{
			$(character).css('z-index',98);
		}
		$(messageFinalElementIcon).css('display',"none");
		$(messageFinalElementText).html('<i class="fa fa-angle-left fa-rotate-45 fa-4x"></i><br>'+msgFinalTopico);
		//$(nextBtn).css('visibility',"hidden");
		//$(previousBtn).css('visibility',"hidden");
		$(messageFinalElementText).css("margin-top", '25%');
		$(messageFinalElement).css('visibility',"visible");
		$(messageFinalElement).css("display",'block')
		$(messageFinalElement).css("opacity",0);
		TweenLite.to(messageFinalElement,1,{opacity:1});
		TweenLite.to(logoCompanyContainer,1,{opacity:1});
		$(logoCompanyContainer).css('z-index',6);
		$(logoCompanyContainer).css('display',"block");
		$(logoCompanyContainer).css('visibility',"visible");
		//TweenLite.to(painel,.3,{left:-5,opacity:0,onComplete:function()
		//{
			//$(painel).css('display',"none");		
		//}});
			
		$(showSidePainel).css('display',"none");
		$(messageFinalElementText).bind(changeClick,function(e){
		//$(messageFinalElementText).bind("click", function(){
			$(messageFinalElement).css('display',"none");	
			prevSlide();
			//clearInterval(intervalCaption)
			TweenLite.to(messageFinalElement,.3,{opacity:0,onComplete:function()
			{
				//$(painel).css('display',"block");	
				//changed
				//TweenLite.to(painel,.3,{opacity:1});
				
				$(messageFinalElement).css('display',"none");	
				$(showSidePainel).css('display',"table");
				//intervalCaption = window.setInterval(updateSlideElements, 100);
			}});
		});
	}
	else
	{
		$(nextBtn).css('visibility',"visible");
		$(previousBtn).css('visibility',"visible");
		if(cpInfoDescription.split(' ')[0] != 'Character')
		{
			$(logoCompanyContainer).css('display',"block");
		}
		if(cpInfoCurrentSlideLabel == "Painel Lateral!")
		{
			$(logoCompanyContainer).css('display',"block");
		}
		$(painel).css('display',"block");
	}
}

function changeToDeviceFont(){
	//DONE: load the sans-serif standard from every device, because if a DI uses inside a project a font that IOS dont recognize it will show the standard serif.
	var fontChange = $('[aria-label*=Text ]');
	$(fontChange).css('cursor','none')
	for(i = 0; i < fontChange.length; i++)
	{
		////console.log(fontChange[i].style.fontFamily);
		if(fontChange[i].style.fontFamily != "'Courier New'")
		{
			fontChange[i].style.fontFamily = 'sans-serif';
		}
		else
		{
		}
	}
}

function warningElement(message,startTime,endTime,top,left,angle){
	setTimeout(function(){
	var warningElementText = document.createElement("div");
	warningElementText.setAttribute("id", "warningElementText");
	document.getElementById("div_Slide").appendChild(warningElementText);
	$(warningElementText).css("position",'absolute')
	//$(warningElementText).css("pointer-events",'none')
	$(warningElementText).css('text-align',"center");
	$(warningElementText).css('top',"0");
	$(warningElementText).css('left',"0");
	$(warningElementText).css('width','100%');
	$(warningElementText).css('height','100%');
	$(warningElementText).css('opacity','0');
	TweenLite.to(warningElementText, .4, {opacity:1});
	//cpCmndPause=1;
	//$(warningElementText).css("background-color",'rgba(255, 149, 0, 0.8)')
	$(warningElementText).css("background-color",'rgba(255, 149, 0, 0.8)')
	//$(warningElementText).css('left',top);
	//$(warningElementText).css('top',left);
	$(warningElementText).css("z-index","2000");
	//$(warningElementText).css("border-top","100px solid #FF8300");
	//$(warningElementText).css("border-right","100px solid transparent");
	$(warningElementText).css('font-size',"160%");
	//$(warningElementText).css('font-family',"Knowledge")
	$(warningElementText).html('<p style="color:white;vertical-align:middle;text-align:center;pointer-events:none;margin-top:40vh;padding:10px">'+message+'</p>');
	//TweenLite.to(warningElementText, .4, {opacity:0});
	if(endTime != 0){setTimeout('TweenLite.to(warningElementText, 1, {opacity:0,"z-index":0})', endTime)};
	//setTimeout("warningElementText.className='blurIn'", startTime);
	//warningElementText.className='blurIn';
	////console.log(startTime+'              '+time)
	//if(time != 0){
		//setTimeout("warningElementText.className='blurOut'", time);
	//}

	var warningElementIcon = document.createElement("div");
	warningElementIcon.setAttribute("id", "warningElementIcon");
	warningElementText.appendChild(warningElementIcon);
	$(warningElementIcon).css("position",'absolute')
	$(warningElementIcon).css('top',"0");
	$(warningElementIcon).css('left',"0");
	$(warningElementIcon).html('<i style="top:'+top+';left:'+left+';-webkit-transform:rotate('+angle+'deg);color:white;position:absolute;pointer-events:none;" class="fa fa-arrow-down"></i>');
	warningElementIcon.className='imageAnimation';
	//$(warningElementText).css('opacity',.5);
	//TweenLite.to(warningElementText, 1, {scale:.9,opacity:.4});
	//warningElementText.className='imageAnimation';
	}, startTime);
}

function checkAudio(){
	if(cp.movie.am.pace == null)
	{
		nextBtn.className='scaleUp'
		//console.log('audio finished')
	}
	else
	{

	}	
}

//$('head').append('<link rel="stylesheet" type="text/css" href="https://moodle.dominiosistemas.com.br/assets/css/courseStyle.css">');
//$('head').append('<link rel="stylesheet" type="text/css" href="https://qamoodle.dominiosistemas.com.br/assets/css/font-awesome.min.css">');
//$('head').append('<script type="text/javascript" src="https://qamoodle.dominiosistemas.com.br/assets/js/TweenLite.min.js">');
//$('head').append('<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/draggabilly/1.2.0/draggabilly.pkgd.min.js">');

//var script = document.createElement('script');
//script.onload = function() {
//  alert("Script loaded and ready");
//};
//script.src = "https://qamoodle.dominiosistemas.com.br/assets/js/TweenLite.min.js";
//document.getElementsByTagName('head')[0].appendChild(script);

//$('head').append('<script type="text/javascript" src="https://moodle.dominiosistemas.com.br/lib/javascript.php/-1/mod/scorm/datamodels/scorm_12.js">');
////console.log(LMSGetValue("cmi.student_preference.language", "French"));
////console.log(LMSSetValue("cmi.comment", "French"));

/*if(cpInfoCurrentSlideLabel == 'Saiba Mais!' || cpInfoCurrentSlideLabel.split(' ')[0] == 'Institucional' || cpInfoDescription == 'Institucional'){
	$(nextBtn).css('left',650);
	$(nextBtn).css('top',60);			
	$(nextBtn).css('position',"absolute");
	$(previousBtn).css('left',-65);
	$(previousBtn).css('top',60);
	$(previousBtn).css('position',"absolute");
	//$(showSidePainel).css('visibility','hidden');
	//$(showSidePainel).css('z-index',-50);
	$(painel).css('visibility','hidden');
	$(logoCompanyContainer).css('display','block');
}

if(cpInfoDescription.split(' ')[0] == 'Character'){
	character();
	$(nextBtn).css('left',650);
	$(nextBtn).css('top',60);
	$(nextBtn).css('position',"absolute");
	$(previousBtn).css('left',-65);
	$(previousBtn).css('blend-mode','hard-light');
	$(previousBtn).css('top',60);
	$(previousBtn).css('position',"absolute");
	$(showSidePainel).css('visibility','hidden');
	$(showSidePainel).css('z-index',100);
	$(painel).css('visibility','hidden');
	$(logoCompanyContainer).css('display','block');
}*/

//document.addEventListener("DOMNodeInserted", function(){
	//checkWidget();
	//changeColors();
//}, false);

//var messageFinalElementIcon = document.createElement("div");
//messageFinalElementIcon.setAttribute("id", "messageFinalElementIcon");
//$(messageFinalElement).append(messageFinalElementIcon)
//messageFinalElementIcon.setAttribute("style", "position:absolute; z-index:100");
//messageFinalElementIcon.setAttribute("width",100)
//messageFinalElementIcon.setAttribute("height",100)
//$(messageFinalElementIcon).css("padding","25px");
//$(messageFinalElementIcon).css('background-image','url(https://moodle.dominiosistemas.com.br/assets/imagesTR/previousBtn.svg)');
//$(messageFinalElementIcon).css('background-size',"100px 100px");
//$(messageFinalElementIcon).css('background-position',"50% 50%");
//$(messageFinalElementIcon).css('background-repeat',"no-repeat");
//$(messageFinalElementIcon).css('top','55%');
//$(messageFinalElementIcon).css('left','47%')
//$(messageFinalElementIcon).css('display',"block");

//document.addEventListener("DOMNodeInserted", function(){
//}, false);

//document.getElementsByTagName('div_Slide').addEventListener('change', andre, false);

//function andre(){
////console.log('andre')	
//}
//var media = matchMedia('(min-width: 500px)');
//media.addListener(function (mediaQueryList) {
//if (mediaQueryList.matches) {
	//console.log('Bigger')
//} else {
	//console.log('Smaller')
	//var imageExist = document.querySelector("[id*='Image_']")
	//imageExist.style.display='none';
	//imageExist.style.visibility='hidden';
	//TweenLite.to(painel, .3, {width:'30%'});
//}
//});

//window.addEventListener("click", function(){
    //updateSlideElements();
    //setTimeout(updateSlideElements, 100);
  //  //console.log('a')
//}); 

//$(document).bind('DOMNodeInserted', function(event){
	//updateSlideElements();
//});
