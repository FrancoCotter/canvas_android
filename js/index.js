var canvas=document.getElementsByTagName('canvas')[0];
 	var cxt=canvas.getContext('2d');
    window.onload=function(){
        head();
        eyes();
        line();
        body();
        bodyCir();
        leftHand();
        leftHandCir();
        rightHand();
        rightHandCir();
        leftLeg();
        leftLegCir();
        rightLeg();
        rightLegCir();

        
    }
    function head(){
    		cxt.fillStyle="#25c505";
	        cxt.beginPath();
	        cxt.arc(230,180,125,0,Math.PI,true);
	        cxt.closePath();
	        cxt.fill();
    	}
    function eyes(){
    		cxt.fillStyle="#ffffff";
        cxt.beginPath();
        cxt.arc(180,130,10,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
        cxt.fillStyle="#ffffff";
        cxt.beginPath();
        cxt.arc(280,130,10,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
    }
    function line(){
    	cxt.strokeStyle='#25c505';
        cxt.beginPath();
        cxt.moveTo(180,76);
        cxt.lineTo(120,30);
        cxt.closePath();
        cxt.lineWidth=10;
        cxt.stroke();
        cxt.strokeStyle='#25c505';
        cxt.beginPath();
        cxt.moveTo(280,76);
        cxt.lineTo(340,30);
        cxt.closePath();
        cxt.lineWidth=10;
        cxt.stroke();
    }
    function body(){
    	cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.fillRect(105,200,250,240);
        cxt.closePath();
        cxt.fill();
    }
   function leftHand(){
   		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.fillRect(25,245,50,120);
        cxt.closePath();
        cxt.fill();
   }
   function rightHand(){
   		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.fillRect(385,245,50,120);
        cxt.closePath();
        cxt.fill();
   }
  function leftLeg(){
  	 	cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.fillRect(135,435,60,100);
        cxt.closePath();
        cxt.fill();
  }
  function rightLeg(){
  	 	cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.fillRect(265,435,60,100);
        cxt.closePath();
        cxt.fill();
  }
  function leftHandCir(){
  		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(50,245,25,0,Math.PI,true);
        cxt.closePath();
        cxt.fill();
        cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(50,365,25,0,Math.PI,false);
        cxt.closePath();
        cxt.fill();
  }
  function rightHandCir(){
		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(410,245,25,0,Math.PI,true);
        cxt.closePath();
        cxt.fill();
        cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(410,365,25,0,Math.PI,false);
        cxt.closePath();
        cxt.fill();
  }
  	function leftLegCir(){
  		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(165,535,30,0,Math.PI,false);
        cxt.closePath();
        cxt.fill();
  	}
 	function rightLegCir(){
 		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(295,535,30,0,Math.PI,false);
        cxt.closePath();
        cxt.fill();
 	} 
   function bodyCir(){
   		cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.fillRect(115,400,230,50);
        cxt.closePath();
        cxt.fill();

        cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(115,440,10,0,Math.PI*2,false);
        cxt.closePath();
        cxt.fill();
        cxt.fillStyle="#25c505";
        cxt.beginPath();
        cxt.arc(345,440,10,0,Math.PI*2,false);
        cxt.closePath();
        cxt.fill();
   }
