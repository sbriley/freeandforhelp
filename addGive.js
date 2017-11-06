

function addGivePost(divName) {

	// if()

	var newPost = document.createElement('li');
	var postDiv = document.createElement('div');
	var postHeaderFour = document.createElement('h4');
	var firstName = document.getElementById('givePostFirst').value;
	var givingList = "";
	if(document.getElementById('givePostResource').checked)
		givingList = givingList+'Resources, ';
	if(document.getElementById('givePostShelter').checked)
		givingList = givingList+'Shelter, ';
	if(document.getElementById('givePostTransport').checked)
		givingList = givingList+'Transport, ';
	if(document.getElementById('givePostLabor').checked)
		givingList = givingList+'Labor, ';
	if(document.getElementById('givePostOther').checked)
		givingList = givingList+'Other, ';

	if(givingList.length !=0)
		givingList = givingList.slice(0,givingList.length-2);
	
	postHeaderFour.innerHTML = firstName+" Has "+givingList;
	postDiv.appendChild(postHeaderFour);

	var btn = document.createElement('BUTTON');
	btn.innerHTML = "Claim";
	postDiv.appendChild(btn);

	newPost.appendChild(postDiv);
	//console.log(givingList);
	document.getElementById('needs-list').appendChild(newPost);
}