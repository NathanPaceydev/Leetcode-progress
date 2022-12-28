// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w('#elementID')

	// Click 'Preview' to run your code
});


export function image14_viewportEnter(event) {
	// updating the leetcode rank dynamically using a website json call
	(async () => {
  	const response = await fetch('https://leetcode-stats-api.herokuapp.com/NathanPaceydev');
  	const json = await response.json();
  	console.log(JSON.stringify(json));
	
	var parse_json = JSON.parse(JSON.stringify(json))
	console.log("Ranking:"+parse_json.ranking)
	$w('#text34').text = ("Rank: " + parse_json.ranking)
	$w('#text35').text = ("Solved: " +parse_json.totalSolved +"/"+parse_json.totalQuestions)

	$w('#progressBar1').targetValue = parse_json.totalQuestions
	$w('#progressBar1').value = parse_json.totalSolved
	console.log("Solved:" +parse_json.totalSolved +"/"+parse_json.totalQuestions)
	})()

}
