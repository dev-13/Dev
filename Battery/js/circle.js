// Circle
			var timer;
			var timerCurrent;
			var timerFinish;
			var timerSeconds;
			var per = (battery.level *100);
			
			
			function drawTimer(percent){

				$('div.timer').html('<div class="percent"></div><div id="slice"'+(per > 50?' class="gt50"':'')+'><div class="pie"></div>'+(per > 50?'<div class="pie fill"></div>':'')+'</div>');
				var deg = 360/100*per;
				if(per >= 0 && per < 25){
					$('#slice .pie').css({
						'border':'0.1em solid #FE0101' // Rouge
					});	
				}
				else if(per >= 25 && per < 50){
					$('#slice .pie').css({
						'border':'0.1em solid #FE5E01' // Orange
					});
				}
				else if(per >= 50 && per < 75){
					$('#slice .pie').css({
						'border':'0.1em solid #FEE501' // Jaune
					});		
				}
				else if(per >= 75){
					$('#slice .pie').css({
						'border':'0.1em solid #07CB01' // Vert
					});		
				}
				else{
					$('#slice .pie').css({
						'border':'0.1em solid #999' // Gris
					});		
				}


				$('#slice .pie').css({
					
					'-moz-transform':'rotate('+deg+'deg)',
					'-webkit-transform':'rotate('+deg+'deg)',
					'-o-transform':'rotate('+deg+'deg)',
					'transform':'rotate('+deg+'deg)'
					
				});
				$('.percent').html(Math.round(per)+'%');
				
			}
			function stopWatch(){
				var seconds = (timerFinish-(new Date().getTime()))/1000;
				if(seconds <= 0){
					drawTimer(1.4);
					clearInterval(timer);
					$('input[type=button]#watch').val('Start');
					
				}else{
					var percent = 100-((seconds/timerSeconds)*100);
					drawTimer(per);
				}
			}
            $(document).ready(function(){
				timerSeconds = 1.4;
						timerCurrent = 0;
						timerFinish = new Date().getTime()+(timerSeconds*1000);
						timer = setInterval('stopWatch()',50);
			});


			battery.addEventListener("levelchange", function(e) {
				console.warn("Battery level change: ", battery.level);
				drawTimer();
				window.location.reload();
			}, false);
