 var arr = [1,2, [1.1,1.2,1.3] ,3];

 function generateList(arr){
 	var fragment = document.createDocumentFragment();
	var ul = document.createElement('ul');
	document.body.appendChild(ul);
	var li = document.createElement('li');

	for (var i =0; i < arr.length; i++){

			var cloneLi = li.cloneNode();

		if(!(arr[i] instanceof Array)){
			cloneLi.innerText = arr[i];
			fragment.appendChild(cloneLi);

		} else {

			fragment.appendChild(cloneLi);
			cloneLi.setAttribute("id", "array");
			var elemLi = fragment.getElementById("array");
			var fragmentLi = document.createDocumentFragment();
			var ulInLi = document.createElement('ul');
			elemLi.appendChild(ulInLi);
			var liInLi = document.createElement('li');
		
			for(var j = 0; j < arr[i].length; j++){
				var cloneLiInLi = liInLi.cloneNode();
				cloneLiInLi.innerText = arr[i][j];
				fragmentLi.appendChild(cloneLiInLi);	
			}

			ulInLi.appendChild(fragmentLi);
		}
	}	
	return ul.appendChild(fragment);
 }

generateList(arr);
//generateList([1,2,3]);
