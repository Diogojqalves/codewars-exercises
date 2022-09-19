def square_sum(numbers):
    result = 0
    #your code here
    for x in range(0, len(numbers)):
        result = result + (numbers[x] * numbers[x])
    return result