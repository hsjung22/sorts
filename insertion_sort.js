function insertionSort(array){
	for(var i = 1; i < array.length; i++){
		var temp = array[i];
		for(var j = i; j > 0 && temp < array[j-1]; j--){
			array[j] = array[j-1];
		}
		array[j] = temp;
	}
	return array;
}


var myArray = [5,4,3,2,1];
insertionSort(myArray);
console.log(myArray);