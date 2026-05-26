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

### Brandon First Code Challenge
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

# Example usage
input_str = "Hello World"
print(remove_vowels(input_str))  # Outputs: "Hll Wrld"
```

#### Explanation
* The function `remove_vowels` takes an input string and uses a list comprehension to iterate over each character.
* It checks if each character is not in the string of vowels.
* The `join` method is then used to concatenate all the characters that are not vowels into a single string.
* The result is returned by the function.

### Brandon's First Code Challenge
#### Problem Statement
Create a function to calculate the total cost of items in a shopping cart.

#### Solution
```python
def calculate_total_cost(cart):
    """
    Calculate the total cost of items in a shopping cart.

    Args:
        cart (list): A list of dictionaries, each containing 'price' and 'quantity' keys.

    Returns:
        float: The total cost of items in the shopping cart.
    """
    total_cost = 0
    for item in cart:
        total_cost += item['price'] * item['quantity']
    return total_cost

# Example usage:
cart = [
    {'price': 10.99, 'quantity': 2},
    {'price': 5.49, 'quantity': 3},
    {'price': 7.99, 'quantity': 1}
]

total_cost = calculate_total_cost(cart)
print(f'Total cost: ${total_cost:.2f}')
```

#### Explanation
* The `calculate_total_cost` function takes a list of dictionaries as input, where each dictionary represents an item in the shopping cart.
* The function iterates over each item in the cart, calculates the total cost of the item by multiplying its price and quantity, and adds it to the total cost.
* The function returns the total cost of all items in the shopping cart.
* The example usage demonstrates how to call the function with a sample shopping cart and print the total cost.

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
* It checks if the character is not in the string of vowels using the `not in` operator.
* The `join` method is used to concatenate the characters that are not vowels into a single string.
* The function returns the resulting string with all vowels removed.