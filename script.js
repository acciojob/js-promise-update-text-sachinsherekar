// //your JS code here. If required.
// function updateTextAfterDelay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Hello, world!');
//     }, 1000);
//   });
// }

// // Assuming you have an HTML element with an ID of 'output'
// const outputElement = document.getElementById('output');

// updateTextAfterDelay().then((message) => {
//   outputElement.textContent = message;
// });
function updateTextAfterDelay(){
	return new Promise((resolve)=>{
		setTimeout(()=> {
			resolve ('Hello,World!');
		},1000);
	});
}
	const outputElement =document.getElementById('output');
	updateTextAfterDelay().then((message) => {
		outputElement.textContent =message;
	});
