function skyPlus(){
var timeout =setTimeout(function() {
	for (i = 0;i < document.querySelectorAll(".max-stat > .stat-name").length;i++) {
		var temp = document.querySelectorAll(".max-stat > .stat-name")[i].innerText;
		var tempHTML = "";
		for (j = 0; j < temp.length; j++) {
		    tempHTML += `<span style="animation-delay: ${j/10}s" class="stat-name-span">${temp[j]}</span>`;
		}
		document.querySelectorAll(".max-stat > .stat-name")[i].innerHTML = tempHTML
	}
	
	for (i = 0;i < document.querySelectorAll('.max-stat .stat-name').length;i++) {
		var temp = document.querySelectorAll('.max-stat .stat-name')[i].innerText;
		var tempHTML = "";
		for (j = 0; j < temp.length; j++) {
		    tempHTML += `<span style="animation-delay: ${j/10}s" class="stat-name-span">${temp[j]}</span>`;
		}
		document.querySelectorAll('.max-stat .stat-name')[i].innerHTML = tempHTML
	}	
	
	for (i = 0;i < document.querySelectorAll('.other-pet-level').length;i++) {
		var temp = document.querySelectorAll('.other-pet-level')[i].innerHTML;
		if(document.querySelectorAll('.other-pet-level')[i].innerHTML.indexOf(100)>0){
			document.querySelectorAll('.other-pet-level')[i].style.textDecoration = "underline";
			document.querySelectorAll('.other-pet-level')[i].style.textDecorationThickness=".2em"
			document.querySelectorAll('.other-pet-level')[i].style.textDecorationColor = window.getComputedStyle(document.querySelectorAll('.other-pet')[i],null).getPropertyValue('background-color');
			var tempHTML = "";
			tempHTML += `<span style="animation-delay: ${1/10}s" class="petMax">L</span>`
			tempHTML += `<span style="animation-delay: ${2/10}s" class="petMax">V</span>`
			tempHTML += `<span style="animation-delay: ${3/10}s" class="petMax">L</span>`
			tempHTML += `<span style="animation-delay: ${4/10}s" class="petMax"> </span>`
			tempHTML += `<span style="animation-delay: ${5/10}s" class="petMax">1</span>`
			tempHTML += `<span style="animation-delay: ${6/10}s" class="petMax">0</span>`
			tempHTML += `<span style="animation-delay: ${7/10}s" class="petMax">0</span>`
			document.querySelectorAll('.other-pet-level')[i].innerHTML = tempHTML
			
			document.querySelectorAll('.other-pet')[i].style.boxShadow = "0 0 1em 0 "+window.getComputedStyle(document.querySelectorAll('.other-pet')[i],null).getPropertyValue('background-color');

		}
	}
	
}, 100);

document.getElementsByClassName('rank-name')[0].getAttribute('style').substring(document.getElementsByClassName('rank-name')[0].getAttribute('style').indexOf('var'))

document.getElementsByTagName('header')[0].innerHTML += `<a style="text-decoration: none;cursor: pointer;" class="header-button " id="full_button" onclick="toggleFull()">Full</a>`

localStorage.setItem('fullMode',"0")

function toggleFull(){
	var isFull = localStorage.getItem('fullMode')
	document.getElementById('wrapper').style.transition = "all 0.5s"
	document.getElementById('skin_display').style.transition = "all 0.5s"
	document.getElementById('player_model').style.transition = "all 1s"
	if(isFull=="0"){
		goFull();
		localStorage.setItem('fullMode',"1")
	} else {
		exitFull();
		localStorage.setItem('fullMode',"0")
	}
	function goFull(){
		document.getElementById('wrapper').style.marginLeft = "0"
		document.getElementById('skin_display').style.width = "0"
		document.getElementById('player_model').style.transform = "translate(50vw)"
		document.getElementById('full_button').style.background = "var(--skillbar)"
	}
	function exitFull(){
		document.getElementById('wrapper').style.marginLeft = "30vw"
		document.getElementById('skin_display').style.width = "30vw"
		document.getElementById('player_model').style.transform = "translate(0vw)"
		document.getElementById('full_button').style.background = "#ffffffcc"
	}
	console.log(localStorage.getItem('fullMode'));
}
}