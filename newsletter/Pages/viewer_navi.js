	
	var latestPage = 10;
	var currentPage = 10;

	function selectNewsOnList() {
		var selection = document.getElementById("newsList");
		var index = latestPage - selection.selectedIndex;
		currentPage = index;
		moveToPage();
	}

	function clickBtnToMove(btn) {
	
		if (btn==1){
			if(currentPage == 1) { alert("더 이상 페이지가 없습니다.") }
			else { 
				currentPage = currentPage - 1; 
				moveToPage();
			}
		} else if (btn==2) {
			if(currentPage == latestPage) { alert("더 이상 페이지가 없습니다.") }
			else {
				currentPage = currentPage + 1;
				moveToPage();
			}
		} else if (btn == 3){
			currentPage = latestPage;
			moveToPage();
		}
	}
	
	function clickBtnToFastMove (letterNo) {
	
		if ( letterNo > 0 && letterNo <= latestPage ) {
			currentPage = letterNo;
			moveToPage();
		} else {
			var message = "1~"+currentPage+" 사이의 숫자를 입력해 주세요.";
			alert(message);
		}
		
	}
	
	function moveToPage() {

		var num ;
		if (currentPage < 10){
			num = "0"+ currentPage;
		} else { num = currentPage; }

	
		
		var leftDiv = document.getElementById("left-div");
		var rightDiv = document.getElementById("right-div");		
		var leftPageURL = "../Originals/newsletter0"+num+"-1.xhtml"
		var rightPageURL = "../Originals/newsletter0"+num+"-2.xhtml"
		
		document.getElementById("left-page").data = leftPageURL;
		document.getElementById("right-page").data = rightPageURL;
		
		
		leftDiv.innerHTML = leftDiv.innerHTML;
		rightDiv.innerHTML = rightDiv.innerHTML;
		
		
		
		var selection = document.getElementById("newsList");
		selection.selectedIndex = latestPage - currentPage;

		
	}



	



	document.oncontextmenu = function(){ // 컨텍스트 메뉴금지
	return false;
	};