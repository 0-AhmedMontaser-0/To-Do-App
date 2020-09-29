 
   let container=document.querySelector(".todo-container"),
	theInput=document.querySelector(".add-task input"),
	theAddButton=document.querySelector(".add-task .plus"),
	tasksContainer=document.querySelector(".task-content"),
	noTasksMsg=document.querySelector(".no-tasks-message"),
	tasksCount=document.querySelector(".tasks-count span"),
	tasksCompleted=document.querySelector(".tasks-completed span");
	console.log(tasksCount);
	console.log(tasksCompleted);
window.onload=function(){
	theInput.focus()
}
theAddButton.onclick=function(){
	if(theInput.value==""){
		return true;
	}else{
		 let noTasksMsg=document.querySelector(".no-tasks-message");
		if(document.body.contains(document.querySelector(".no-tasks-message"))){
			noTasksMsg.remove();
		}		
		
		
		
		let mainSpan=document.createElement("span");
		let deleteElement=document.createElement("span");
		let text = document.createTextNode(theInput.value);
		let deleteText=document.createTextNode("Delete");
		mainSpan.appendChild(text);
		mainSpan.className="task-box";
		deleteElement.appendChild(deleteText);
		deleteElement.className="delete";
		mainSpan.appendChild(deleteElement);
		tasksContainer.appendChild(mainSpan);
		theInput.focus();
		calculateTasks();
	}
}
document.addEventListener("click",function(e){
	if(e.target.className=="delete"){
		e.target.parentNode.remove();
		if(tasksContainer.childElementCount== 0){
			createNoTasks();
		}
	
	}
	if(e.target.classList.contains("task-box")){
		e.target.classList.toggle("finished");
		 calculateTasks();
	}
});
let clearSpan=document.createElement("span");
	clearSpanNode=document.createTextNode("clear");
	clearSpan.className="clear-span";
	clearSpan.appendChild(clearSpanNode);
	container.appendChild(clearSpan);
	document.querySelector(".clear-span").onclick=function(){
		document.querySelectorAll(".task-box").forEach(task=>{
			task.remove();
		});
			if(tasksContainer.childElementCount== 0){
			createNoTasks();
		}
	}
	function createNoTasks(){
		let msgSpan=document.createElement("span");
		let msgText=document.createTextNode("No Tasks To Show");
			msgSpan.appendChild(msgText);
			msgSpan.className="no-tasks-message";
			tasksContainer.appendChild(msgSpan);
		}
function calculateTasks(){
	tasksCount.innerHTML=document.querySelectorAll(".task-content .task-box").length;
	
	tasksCompleted.innerHTML=document.querySelectorAll(".task-content .task-box.finished").length;

}
console.log(document.querySelectorAll(".task-content .task-box").length)
console.log(document.querySelectorAll(".task-content .task-box.finished").length)