def selection_sort(arr)
	for i in 0...arr.length-1
		min = i
		j = i
		for j in j...arr.length
			min = j if arr[j] < arr[min]		
		end

		unless i == min
			arr[i], arr[min] = arr[min], arr[i]
		end

	end
	arr
end

arr = Array.new(10) { rand(1..99) }

puts "before #{arr}"
selection_sort(arr)
puts "after #{arr}"