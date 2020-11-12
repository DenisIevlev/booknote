let block = document.getElementById('block');
let cl = document.getElementById('clear');
let del = document.getElementById('delete');
let todoList = [];
	if (localStorage.getItem('todo') != undefined){
    todoList = JSON.parse(localStorage.getItem('todo'));
    outList();
    }
	document.getElementById('click').onclick = function(){
	let input = document.getElementById('note').value;
    let temp = {};
    temp.todo = input;
    temp.check = false;
    todoList.push(temp);
	outList();
	localStorage.setItem('todo', JSON.stringify(todoList));
  }
   cl.onclick = function(){
   localStorage.removeItem('todo', JSON.stringify(todoList));
   location.reload();
  	}
   del.onclick = function(id){
    todoList.pop(id, 1);
    localStorage.setItem("todo", JSON.stringify(todoList));
    block.innerHTML = "";
    location.reload();
}
    block.onchange = function (event){
	currentKey = event.target.parentNode.childNodes[1].data.slice(1);
	for (i = 0; i < todoList.length; i++) {
		if (todoList[i].todo == currentKey) {
	       todoList[i].check = !todoList[i].check;
			outList();
			localStorage.setItem('todo', JSON.stringify(todoList));
			break;
		}
	}
}

    function outList() {
	let out = '';
	for (let i = 0; i < todoList.length; i++) {
		if (todoList[i].check) {
		out += '<span class="line"><input type="checkbox"checked> '+ todoList[i].todo + '</span><br>';
		} else {
			out+='<span><input type="checkbox"> '+ todoList[i].todo + '</span><br>';
		}
	}
	block.innerHTML = out;
}