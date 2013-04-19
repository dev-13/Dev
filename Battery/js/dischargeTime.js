//Temps de chargement restant
				function DischargeTime() {
					if(battery.charging == false){
						var dischargingTime =  battery.dischargingTime;
						var chargeNode = document.getElementById("DischargeTps");
						chargeNode.innerHTML = "Autonomie restante : " + "<span style='color:" + "#2798EF"  + "'>" +  Math.round(dischargingTime / 60) + "</span> minutes. ";
					}
				}

				battery.addEventListener("dischargingtimechange", function(e) {
					console.warn("Battery discharge time change: ", battery.dischargingTime);
					DischargeTime();
					window.location.reload();
				}, false);