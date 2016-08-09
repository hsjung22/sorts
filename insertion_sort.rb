def insertion_sort(arr)
	for i in 1...arr.length
		temp = arr[i]
		j = i

		while j > 0 && temp < arr[j-1]
			arr[j] = arr[j-1]
			j -= 1
		end
		arr[j] = temp
	end
	arr
end

arr = Array.new(10) { rand(1..99) }

puts "before #{arr}"
insertion_sort(arr)
puts "after #{arr}"