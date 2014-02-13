function SelectCurriculum(listID){

		var selected = document.getElementById(listID).selectedIndex;
		var filename = document.getElementsByTagName("option")[selected].value;

		
		var URL = filename + ".html";

		location.replace(URL);
		location.reload();    

	}