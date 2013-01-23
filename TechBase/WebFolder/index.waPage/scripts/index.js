
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		ds.Ticket.newTicket({
			autoExpand: "client",
			onSuccess: function(event) {
				WAF.sources.ticket.setCurrentEntity(event.result);  //pos will be -1
				$$("tabView1").selectTab(2); 
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
