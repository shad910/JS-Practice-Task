#Regex

import re
input_string ="hello 23, hi 27, lovley 18 and sweet 16"
pattern =r'\d+'
matches = re.findall(pattern, input_string)
numbers = [int(match) for match in matches]
print(numbers)