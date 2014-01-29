
function editContactType(existingType,newType)
//Function will change contact types from exsistingType to newType, 
//optional paramter capID
{
	var updateCap = capId
	if (arguments.length==3)
		updateCap=arguments[2]

	capContactResult = aa.people.getCapContactByCapID(updateCap);
	if (capContactResult.getSuccess())
		{
		Contacts = capContactResult.getOutput();
		for (yy in Contacts)
			{
			var theContact = Contacts[yy].getCapContactModel();
			if(theContact.getContactType() == existingType)
				{
				theContact.setContactType(newType);
				aa.people.editCapContact(theContact);
				logDebug("Contact for " + theContact.getFullName() + " Updated to " + newType);
				}
			}
		}	
}