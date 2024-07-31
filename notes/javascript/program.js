//*__________________________________________________
//* 1. Programming Question: Longest Word in a String
//*__________________________________________________

//Q. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constrains:
//? The input string may contain alphanumeric characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.
//**================================================================================ */

//*__________________________________________________
//* 2. Programming Question: Hash Tag Generator
//*__________________________________________________

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated has tag prefixed with #

//*===============================================================================*/

//*__________________________________________________
//* 3. Programming Question: Count Occurrences of Character
//*__________________________________________________

//? Write a function called countChar that takes two parameters: a string and a character to count. Te function should return the number of times the specifies character appears in the string.

//To Constraints:
//? The function should be case-sensitive.
//? The function shouold handle both lowercase and uppercase characters.
//? The character paramete can be any printable ASCII character (tht function should accept any character that is part of the ASCII character set and is printable)

//*__________________________________________________
//* 4. Programming Question: Sort an array
//*__________________________________________________

//? Write a functon to sort an array of numbers in an ascending order.

//To do Requirements:
//?. The function should take an array of number as input.
//?. It should return a new array with the nubers sorted in ascending order.
//?. The original array should reain unchanged.
//?. You are not allowed to use the built-in sort() method.

//*__________________________________________________
//* 5. Programming Question: Palindrome
//*__________________________________________________

//Write a function to determine whether a given string is a palindrome or not A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backword, ignoring spaces, punctuation, and capitalization.

//Constraints
//? The input string may contain letters, digits, spaces, punctuation and special characters.
//? The function should be case-insensitive, meaning ""Racecar" and "racecar" should be considered te same.
//?. Ignore spaces, punctuation, and special characters when determining if a string is a plaindrome.
//?. The function should return true if the input string is a palindrom and false otherwise.

//Note
//? replace(/\W/g, ""): uses the replace() method with a regular expression (/\W/g) to remove all non-word characters from the string. Here:
//? \W matches any non-word character (equivalent to [^a-zA-Z0-9_)
//? The g flag performs a global search, meaning it replaces all occurances of non-word characters in thestring.
//?. So, replace(/\W/g, "") replaces all non-word characters with an empty string, effectively removing them from the string.

//*__________________________________________________
//* 6. Programming Question: FindMax Number
//*__________________________________________________

//?Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

//*__________________________________________________
//* 7. Programming Question: Factorial Number Finder
//*__________________________________________________

//? Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is definded as 1.

//*__________________________________________________
//* 9. Programming Question: Calculate the average
//*__________________________________________________

//? Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should

//? Accept an array of numbers as input.
//? Calculate the sum of all the numbers in the array.
//? Divide the sum by the total number of elements in the array to find the average.
//? Return the calculated average.

//*__________________________________________________
//* 10. Programming Question: Compare two array
//*__________________________________________________

//? Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain tha same elements in the same order), and false otherwise.

// Note:
//? The function should return false if the arrays have different lengths.
//? The function should compare each element of arr1 wtth the corresponding element in arr2.
//? The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

//*__________________________________________________
//* 11. Programming Question: Calculate sum
//*__________________________________________________

//? Write a function that takes a number as input and returns the sum of its digits.

// Constraints

//? The input number will always be a positive integer.
//? The input number can have multiple digits.
//? THe output should be the sum of all the digits in the input number.

// Homework
//? This function calculates the sum of digits without converting the number to a string.

//*__________________________________________________
//* 12. Programming Question: Remove Duplicates Values
//*__________________________________________________

//? Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// Note
//? The new Set() method in JavaScript creates a new Set Object. A set object is a collection of unique values. It can store any type of value, whether primitive values or object reference.

//Constraints
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The elements in the input array are not guaranteed to be sorted.
//? The output array should retain the original order of elements from the input array.

//*__________________________________________________
//* 13. Programming Question: To count the vowels in the give string
//*__________________________________________________
//? Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).

//Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.

//*__________________________________________________
//* 14. Programming Question: To calculate the power of two
//*__________________________________________________

//? Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

//Notes
//? The input num will be a positive integer.
//? Zero (0) and negative integers are not considered powers of two.
//? The function should true if the given number is a power of 2, and false otherwise.

//Homework

//? We can solve it using bitwise operator too.

//*__________________________________________________
//* 15. Programming Question: To sum of square
//*__________________________________________________

//?Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14

//*__________________________________________________
//* 16. Programming Question: Find the Minimum value in an array
//*__________________________________________________

//? Write a funtoin findMin that takes an array of numbers as input and returns the minimum value found in the array.

// Constraints
//? The input array ma contain both positive and negative integers
//? The input array may be empty.
//? The input array may contain duplicate values.

//Notes
//? Ensure the function handles edge cases gracefully, such as an empty input array.
//? Consider using ES6 features like the spread syntax (...) for a concise implementation.

// Todo in JavaScript the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input arra.
//? For example, if arra is [5, 10, 2, 8], then ...arr expands to 5, 10, 2, 8.

//*__________________________________________________
//* 18. Programming Question: To check lowercase or uppercase
//*__________________________________________________

//? Write a function to check if character is uppercase or lowercase.
//Constraints:
//? The input character will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of lenght 1.
//Notes:-
//? Ensure that the function correctly identifies uppercase characters based on their ASCII value.
//? Optimize the function to handle edge cases efficiently.

//*__________________________________________________
//* 19. Programming Question: To check string is start with given word or not
//*__________________________________________________

//? Write a function to check if a given string starts with a specific substring.
//Input:
//? Str: A string (e.g., "Hello World")
//? subStr: A substring to check if it starts the given string (e.g. "Hello")
//? Output: true if the given string starts with the specified substring, otherwise false.

//*__________________________________________________
//* 20. Programming Question: To reverse stirng
//*__________________________________________________
//? Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reserved string.

//*__________________________________________________
//* 21. Programming Question: To calculate the mean
//*__________________________________________________

//? Write a function called calculation that takes an array of numbers as input and returns the mean (average).

// Todo in math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers

// Constraints
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it si empty, the function should return 0.

//*__________________________________________________
//* 22. Programming Question: To calculate the median
//*__________________________________________________

//? Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? For example, the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is not single middle value: the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 id (5+7)/2 = 6;

//Todo tips

//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.

//*__________________________________________________
//* 23. Programming Question: To count occurance of element
//*__________________________________________________

//? Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

//Todo Here's what the function should do:

//? Accept an array of numbers as input.
//? Create an empty object called counts to store the counts of each elements.
//? For each number, increment the count in the counts object.
//? If the count for a number does not exist yet, initialize it to 1;
//?  Return the counts object containing the counts of each element.

//*__________________________________________________
//* 24. Programming Question: To calculate Mode
//*__________________________________________________

//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

// Constraints
//? The input array will always contain at least one element.
//? The mode will always be unique(i.e., there won't be multiple numbers with the same highest frequency)

//*__________________________________________________
//* 28. Programming Question: Truncate a String
//*__________________________________________________

//? Write a function called truncate String that takes two parameters.
//? str: A string that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the specified maxlength. If truncation function should add '...' ot the end of the truncated string.

// Constraints:
//? The input string str will contain only alphanumric characters and punctuation marks.
//? The maximum length will be a positive integer.
//? The output string length should not exceed maxLength + 3 character due to the addion of '...'

//*__________________________________________________
//* 28. Programming Question: Number Range Generator
//*__________________________________________________

//? Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive)

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//Output
//? An array containing consecutive numbers from a to b (inclusive)

// Constraints
//? a and b will be integers.
//? a will be less than or equal to b

//29. How to find the max value in the array // [5,6,8,2,3] output:- 8
//30. How to find the min value in the array.// [5,6,8,2,3] output:- 2
//31. How to reverse the value of the array. [1,2,5,6,7] output [7,6,5,2,1]
//32. To calculate the sum from given string: 'fsdf23423jk4324kj324' // output:- 36
//33. Write a JavaScript function to check if a given string is a palindrome
//34. Write a JavaScript program to reverse a given string.
//35. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//36.
//37. Write a JavaScript function to check if a given number is prime.
//38. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// https://www.keka.com/javascript-coding-interview-questions-and-answers
//39. Implement a function to remove duplicates from an array.
//40. Linear Search I  have one target and one array o/p return index otherwise -1
//41 reverse string using two pointer approach  [3,4,2,1,5,6] -> o/p [6,5,1,2,4,3]
//42 alternative swap  [1,3,5,6,2,4,5,6,9] -> Output:- [3,1,6,5,4,2,6,5,9]
