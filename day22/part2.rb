sum = 0

File.foreach("./sample.txt") do |line|
  line = line.strip


end

puts "SUM: #{sum}"