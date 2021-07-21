
https://www.geeksforgeeks.org/median-two-sorted-arrays-different-sizes-ologminn-m/

Median of two sorted arrays with different sizes in O(log(min(n, m)))
Difficulty Level : Expert
Last Updated : 07 May, 2021
Given two sorted arrays, a[] and b[], task is to find the median of these sorted arrays, in O(log(min(n, m)), when n is the number of elements in the first array, and m is the number of elements in the second array.
Prerequisite : Median of two different sized sorted arrays. 

Examples :  

Input : ar1[] = {-5, 3, 6, 12, 15}
        ar2[] = {-12, -10, -6, -3, 4, 10}
        The merged array is :
        ar3[] = {-12, -10, -6, -5 , -3,
                 3, 4, 6, 10, 12, 15}
Output : The median is 3.

Input : ar1[] = {2, 3, 5, 8}
        ar2[] = {10, 12, 14, 16, 18, 20}
        The merged array is :
        ar3[] = {2, 3, 5, 8, 10, 12, 14, 16, 18, 20}
        if the number of the elements are even, 
        so there are two middle elements,
        take the average between the two :
        (10 + 12) / 2 = 11.      
Output : The median is 11.