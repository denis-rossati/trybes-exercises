def count(number):
  if number == 0:
    base_case = number
    print(base_case)
  else:
    print(number)
    count(number - 1)

count(20)