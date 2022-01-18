from array import array
from cmath import inf
from heapq import merge
from operator import truediv


def selection_sort(arr):
    for x in range(len(arr)):
        min = x
        for y in range(x + 1, len(arr)):
            if arr[min] > arr[y]:
                min = y
        arr[min], arr[x] = arr[x], arr[min]
    
    return arr

def insertion_sort(arr):
    for x in range(len(arr)):
        current_value = arr[x]
        current_position = x
        previous_position = x - 1
        while current_position > 0 and arr[previous_position] > current_value:
            arr[current_position] = arr[previous_position]
            current_position = previous_position
        arr[current_position] = current_value
    return arr

def bubble_sort(arr):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for x in range(len(arr) - num_of_iterations - 1):
            if arr[x] > arr[x + 1]:
                arr[x], arr[x + 1] = arr[x + 1], arr[x]
                has_swapped = True
        num_of_iterations += 1

    return arr

""" merge """

def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left, right = merge_sort(arr[:mid]), merge_sort(arr[mid:])

    return merge(left, right, arr.copy())

def merge(left, right, merged):
    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):

        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]
    
    for right_cursos in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged

""" --- """


def quicksort(arr, high, low = 0):
    if len(arr) == 1:
        return arr

    if low < high:
        partition_index = partition(arr, low, high)

        quicksort(array, partition_index - 1, low)
        quicksort(array,  high, partition_index + 1)

def partition(array, high, low):

    x = low - 1

    pivot = array[high]


    for y in range(low, high):

        if array[y] <= pivot:
            x = x + 1
            array[x], array[y] = array[y], array[x]
    array[x + 1], array[y] = array[y], array[x + 1]

    return x + 1