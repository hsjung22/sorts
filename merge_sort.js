function merge(left,right){
	var result = [];
	var left_index = 0;
	var right_index = 0;

	while(left_index < left.length && right_index < right.length){
		if(left[left_index] > right[right_index]){
			result.push(right[right_index]);
			right_index++;
		} else {
			result.push(left[left_index]);
			left_index++;
		}
	}

	return result.concat(left.slice(left_index)).concat(right.slice(right_index));
}

function mergeSort(array){
	if(array.length < 2){
		return array;
	}

	var middle = Math.floor(array.length / 2);
	var left = array.slice(0,middle);
	var right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}


var myArray = [5,4,3,2,1];
console.log(mergeSort(myArray));