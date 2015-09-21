function selectionSort(array){
	var min;
	var temp;
	for (var i = 0; i < array.length; i++){
		min = i;
		for(var j = i + 1; j < array.length; j++){
			if(array[j] < array[min]){
				min = j;
			}
		}
		if(i != min){
			temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
	return array;
}


var myArray = [5,4,3,2,1];
selectionSort(myArray);
console.log(myArray);