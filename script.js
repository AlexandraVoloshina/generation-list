var arr = [1,2, [1.1,1.2,1.3] ,3];

var body = document.body;

function generateList(arr){
	var fragment = document.createDocumentFragment();
	var ul = document.createElement('ul');
	var li = document.createElement('li');

    for(var i = 0; i < arr.length; i++){
     	var cloneLi = li.cloneNode();
        if(!(arr[i] instanceof Array)){
        	cloneLi.innerText = arr[i];        	     
		} 
		else {
		 	cloneLi = generateList(arr[i]);
		}
		ul.appendChild(cloneLi); 
	}
	return fragment.appendChild(ul);
}
body.prepend(generateList(arr));
