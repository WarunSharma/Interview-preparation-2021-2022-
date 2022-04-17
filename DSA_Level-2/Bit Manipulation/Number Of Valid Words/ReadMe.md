Number Of Valid Words
Hard  Prev   Next
1. You are given N number of words.
2. You are given M puzzles in the form of M strings.
3. For a given puzzle, a word is valid if both the following conditions are confirmed - 
    Condition 1 -> Word contains the first letter of puzzle.
    Condition 2 -> For each letter in word, that letter should be present in puzzle.
4. You have to print the number of valid words corresponding to a puzzle.
Input Format
A number N
N space separated strings
A number M
M space separated strings
Output Format
Check the sample ouput and question video.

Constraints
1 <= N <= 10^5
4 <= length of word <= 50
1 <= M <= 10^4
length of puzzle string = 7
puzzle string doesn't contain any repeated characters.
Sample Input
7
aaaa asas able ability actt actor access 
6
aboveyz abrodyz abslute absoryz actresz gaswxyz
Sample Output
aboveyz -> 1
abrodyz -> 1
abslute -> 3
absoryz -> 2
actresz -> 4
gaswxyz -> 0