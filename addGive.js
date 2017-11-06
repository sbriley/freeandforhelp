

function addGivePost(divName) {

	// if()

	var newPost = document.createElement('li');
	var postDiv = document.createElement('div');
	var postHeaderFour = document.createElement('h4');
	var firstName = document.getElementById('givePostFirst').value;
	var givingList = "";
	if(document.getElementById('givePostResource').checked)
		givingList = givingList+'resources, ';
	if(document.getElementById('givePostShelter').checked)
		givingList = givingList+'shelter, ';
	if(document.getElementById('givePostTransport').checked)
		givingList = givingList+'transport, ';
	if(document.getElementById('givePostLabor').checked)
		givingList = givingList+'labor, ';
	if(document.getElementById('givePostOther').checked)
		givingList = givingList+'other, ';

	if(givingList.length !=0)
		givingList = givingList.slice(0,givingList.length-2);
	

	//console.log(givingList);

}