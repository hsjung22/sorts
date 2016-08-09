def bubble_sort(arr)

	did_sort = true
	while did_sort
		did_sort = false

		arr.length.times do |index|
			if index < arr.length-1 && arr[index] > arr[index+1]
				 arr[index], arr[index+1] = arr[index+1], arr[index]
				 did_sort = true
			end
		end


	end
	arr
end




arr = Array.new(10) { rand(1..99) }


puts "before #{arr}"
bubble_sort(arr)
puts "after #{arr}"

