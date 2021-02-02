# Esparta_Test
 A bunch of logic tests for an applying job at Esparta Co.


The challenge proposed for the first part was to do 3 logic tests following the instructions on this link:
https://gist.github.com/esparta-io/945c0f95d96b04be7509b53a10485147

Create methods to:

1. Isolate a value with no match in an array
2. Count and declare how many different values has an array
3. An euclidean classic exercise. With a basic formula, run for a range, and consume a value, in circular way, until that index be accessed again

The proposal asked for different languages, as I observed with static type, and although I used to javascript, I am aware about declare kind of types, public and private attributes and methods, so Typescript wasn't a hard mystery. So I used typescript to code, and node to compile to js.


## **Array**

I've found two possible ways to solve this exercise. First one, I suppose that it was proposed: Only odd number array, and there's no way to find all match numbers. The second possibility is the get the only number in that array


## **Distinct**

The second test ask for to find how many unique values appears in an array. For this particular exercise I decide, firstly to get how many times a value or multiple values appears along the array length, and then to count those itens on that dictionary

## **Euclidean**

On this particular exercise, I guess, because the instructions show the formula, it was a little bit easier to solve. First of all, I create an array with an argument passed by the function, and also the interval of each chocolate must be eaten, then I mark every chocolate had been eaten, and then I count those marked indexes.
