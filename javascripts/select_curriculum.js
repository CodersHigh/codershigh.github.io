
function SelectCurriculum(){

		var selected = document.getElementById("groupList").selectedIndex;
		var filename = document.getElementsByTagName("option")[selected].value;

		var URL =  filename + '.html';

		window.location = URL;
	}



function ShowMoreContents(idMyDiv, idLabel){
     var objDiv = document.getElementById(idMyDiv);
     var label =  document.getElementById(idLabel);

     if(objDiv.style.display=="block"){ 
     	objDiv.style.display = "none"; 
     	label.value = "결과물 더 보기";
 		}
     else{ 
     	objDiv.style.display = "block"; 
     	label.value = "결과물 감추기";
     }
}
