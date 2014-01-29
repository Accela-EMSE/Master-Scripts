function capSet(desiredSetId)
	{
	this.refresh = function()
		{
		var theSet = aa.set.getSetByPK(this.id).getOutput();
		this.setId = theSet.getSetID();
		this.name = theSet.getSetTitle();
		this.comment = theSet.getSetComment();

		var memberResult = aa.set.getCAPSetMembersByPK(this.id);

		if (!memberResult.getSuccess()) { logDebug("**WARNING** error retrieving set members " + memberResult.getErrorMessage()); }
		else
			{
			this.members = memberResult.getOutput().toArray();
			this.size = this.members.length;
			if (this.members.length > 0) this.empty = false;
			logDebug("capSet: loaded set " + this.id + " with " + this.size + " records");
			}
		}
		
	this.add = function(addCapId) 
		{
		var addResult = aa.set.add(this.id,addCapId)
		if (!addResult.getSuccess()) 
			{ 
			logDebug("**WARNING** error adding record to set " + this.id + " : " + addResult.getErrorMessage() );
			}
		else 
			{ 
			logDebug("capSet: added record " + addCapId + " to set " + this.id);
			}
		}
	
	this.remove = function(removeCapId) 
		{
		var removeResult = aa.set.removeSetHeadersListByCap(this.id,removeCapId)
		if (!removeResult.getSuccess()) 
			{ 
			logDebug("**WARNING** error removing record from set " + this.id + " : " + removeResult.getErrorMessage() );
			}
		else 
			{ 
			logDebug("capSet: removed record " + removeCapId + " from set " + this.id);
			}
		}
	
	this.update = function() 
		{
		updateResult = aa.set.updateSet(this.id,this.name,this.comment);
		if (!updateResult.getSuccess()) 
			{ 
			logDebug("**WARNING** error updating set header " + this.id + " : " + updateResult.getErrorMessage() );
			}
		else 
			{ 
			logDebug("capSet: updated set header information");
			}

		}
	
	this.id = desiredSetId;
	this.name = desiredSetId;
	if (arguments.length > 1 && arguments[1]) this.name = arguments[1];
	
	this.comment = null;
	
	this.size = 0;
	this.empty = true;
	this.members = new Array();
	
	var theSetResult = aa.set.getSetByPK(this.id);
	
	if (theSetResult.getSuccess())
		{
		this.refresh();
		}
		
	else  // add the set
		{
		theSetResult = aa.set.createSet(this.id,this.name);
		if (!theSetResult.getSuccess()) 
			{
			logDebug("**WARNING** error creating set " + this.id + " : " + theSetResult.getErrorMessage);
			}
		else
			{
			logDebug("capSet: Created new set " + this.id);	
			this.refresh();
			}
		}
		

	

	}
