### Brandon's First Code Challenge
#### Problem Statement
Create a function that takes a string as input and returns the string with all vowels removed.

#### Solution
```python
def remove_vowels(input_string):
    """
    Removes all vowels from the input string.

    Args:
        input_string (str): The input string.

    Returns:
        str: The input string with all vowels removed.
    """
    vowels = 'aeiouAEIOU'
    return ''.join([char for char in input_string if char not in vowels])

# Example usage:
print(remove_vowels("Hello World"))  # Output: "Hll Wrld"
```

#### Explanation
* The function `remove_vowels` takes an input string and uses a list comprehension to iterate over each character.
* It checks if the character is not in the string of vowels, and if so, includes it in the new string.
* The `join` method is used to concatenate all the characters in the list into a single string.
* The function returns the resulting string with all vowels removed.

### Brandon's First Code Challenge
#### Problem Statement
Create a function that takes a list of integers as input and returns the sum of all the even numbers in the list.

#### Solution
```python
def sum_even_numbers(numbers):
    """
    This function calculates the sum of all even numbers in a given list.
    
    Args:
        numbers (list): A list of integers.
    
    Returns:
        int: The sum of all even numbers in the list.
    """
    even_sum = 0
    for num in numbers:
        if num % 2 == 0:
            even_sum += num
    return even_sum

# Example usage:
numbers = [1, 2, 3, 4, 5, 6]
result = sum_even_numbers(numbers)
print("Sum of even numbers:", result)
```

#### Explanation
* The function `sum_even_numbers` iterates over each number in the input list.
* For each number, it checks if the number is even by using the modulus operator (`%`).
* If the number is even, it adds the number to the `even_sum` variable.
* Finally, it returns the sum of all even numbers.

#### Advice
* This solution has a time complexity of O(n), where n is the number of elements in the list.
* It is suitable for large lists because it only requires a single pass through the data.