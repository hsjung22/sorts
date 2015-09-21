function bubbleSort(array){
	var did_sort = 1;
	var temp;
	while(did_sort > 0){
		did_sort = 0;
		for(var i = 0; i < array.length-1; i++){
			if(array[i] > array[i+1]){
				temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				did_sort++;
			}
		}
	}
	return array;
}


var myArray = [5,4,3,2,1];
bubbleSort(myArray);
console.log(myArray);