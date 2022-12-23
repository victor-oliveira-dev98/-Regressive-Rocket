function calculateHMSleft()
{
	var now = new Date();
	var secondsleft = 59-now.getSeconds();
	if(secondsleft<10) secondsleft = "0"+secondsleft;
	document.getElementById('count').innerHTML = secondsleft;

	const element = document.getElementById("element");

	if ( secondsleft == 0) element.classList.add("imgAnimation");
	else document.getElementById("element").classList.remove("imgAnimation");
}
calculateHMSleft();
setInterval(calculateHMSleft, 1000);

