//Status de la batterie
				function ChargeChange() {
					var chargeNode = document.getElementById("status");
					chargeNode.innerHTML = "Status : " + "<span style='color:" + (battery.charging ? "green" : "red") + "'>" +  (battery.charging ? " En Charge" : "Décharge") + "</span>";
				
				}
				
				battery.addEventListener("chargingchange", function(e) {
					console.warn("Battery charge change: ", battery.charging);
					ChargeChange();
					window.location.reload();
				}, false);