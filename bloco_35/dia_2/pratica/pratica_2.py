from audioop import reverse


def reverse_list(my_list):
    if len(my_list) > 1:
        print(my_list)
        reverse_list(my_list[:-1])
    else:
        return my_list[-1]

print(reverse_list([1, 2, 3, 4, 5]))