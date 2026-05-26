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