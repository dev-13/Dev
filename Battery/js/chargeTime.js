//Temps de chargement restant
				function ChargeTime() {
					if(battery.charging){
						var chargingTime =  battery.chargingTime;
						var chargeNode = document.getElementById("ChargeTps");
						chargeNode.innerHTML = "Temps de charge : " + "<span style='color:" + "#2798EF"  + "'>" +  Math.round(chargingTime / 60) + "</span> minutes. ";
					}
				}

				battery.addEventListener("chargingtimechange", function(e) {
					console.warn("Battery charge time change: ", battery.chargingTime);
					ChargeTime();
					window.location.reload();
				}, false);