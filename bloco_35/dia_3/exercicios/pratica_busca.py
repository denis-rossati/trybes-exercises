from multiprocessing.sharedctypes import Value

def linear_search(arr, value):
  for index, element in enumerate(arr):
    if element == value:
      return index
  return False

def binary_search(arr, low_index, high_index, value):
  if high_index < low_index:
    raise ValueError(f"{value} is not in the list")

  middle_index = (high_index + low_index) // 2

  if arr[middle_index] == value:
    return middle_index

  elif arr[middle_index] > value:
    return binary_search(arr, low_index, middle_index - 1, value)

  else:
    return binary_search(arr, middle_index + 1, high_index, value)
