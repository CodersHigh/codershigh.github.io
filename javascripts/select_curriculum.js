function SelectCurriculum(){

		var selected = document.getElementById("groupList").selectedIndex;
		var filename = document.getElementsByTagName("option")[selected].value;

		var URL =  filename + '.html';

		window.location = URL;
	}