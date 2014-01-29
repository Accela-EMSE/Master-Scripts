
function createCapComment(vComment)  //optional CapId
{
	var vCapId = capId;
	if (arguments.length == 2)
		vCapId = arguments[1];
	var comDate = aa.date.getCurrentDate(); 
	var capCommentScriptModel= aa.cap.createCapCommentScriptModel(); 
	capCommentScriptModel.setCapIDModel(vCapId); 
	capCommentScriptModel.setCommentType("APP LEVEL COMMENT"); 
	capCommentScriptModel.setSynopsis(""); 
	capCommentScriptModel.setText(vComment); 
	capCommentScriptModel.setAuditUser(currentUserID); 
	capCommentScriptModel.setAuditStatus("A"); 
	capCommentScriptModel.setAuditDate(comDate); 
	var capCommentModel=capCommentScriptModel.getCapCommentModel(); 
	aa.cap.createCapComment(capCommentModel); 
	logDebug("Comment Added");
}