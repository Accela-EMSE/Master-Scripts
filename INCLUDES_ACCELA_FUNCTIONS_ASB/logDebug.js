function logDebug(dstr) {

    if (!aa.calendar.getNextWorkDay) {

		vLevel = 1
		if (arguments.length > 1)
			vLevel = arguments[1]

		if ((showDebug & vLevel) == vLevel || vLevel == 1)
			debug += dstr + br;

		if ((showDebug & vLevel) == vLevel)
			aa.debug(aa.getServiceProviderCode() + " : " + aa.env.getValue("CurrentUserID"), dstr)
		}
	else {
			debug+=dstr + br;
		}

}
