
/* 
    This program finds the diagonal of a square where the length of each side is 9
    The function "length_of_Diagonal_of_Square(length_of_each_side)" below takes in
    length of each side of a square and returns the length of the diagonal of a square
*/
function length_of_Diagonal_of_Square(length_of_each_side)
{
    return Math.sqrt(Math.pow(length_of_each_side, 2) + Math.pow(length_of_each_side, 2));
}

//console.log(length_of_Diagonal_of_Square(9));

/* 
   Write a JavaScript program to find the area of a triangle where lengths of the three of its
   sides are 5, 6 and 7
   let's assume that
   firstLength = 5, secondLength = 6, thirdLength = 7 and thirdLength is the base
   *  halfThirdLength is the half of the base = 0.5 * thirdLength
   *  lets assume triangleHeight is the height of the triangle 
   *  triangleHeight = squareRoot(pow(halfThirdLength, 2) + pow(secondLength,2))
   *  triangleArea = 0.5 * (thirdLength) * triangleHeight
   
   The "function areaOfTriangle(leftTriangleLength, rightTriangleLength, baseTriangleLength)" below
   takes in 3 inputs of lengths and returns the area of the triangle
*/

function areaOfTriangle(leftTriangleLength, rightTriangleLength, baseTriangleLength)
{
    let halfBaseLength = 0.5 * baseTriangleLength;
    let triangleHeight = Math.sqrt(Math.pow(halfBaseLength, 2) + Math.pow(rightTriangleLength,2));
    return (0.5 * baseTriangleLength * triangleHeight);
}

//console.log(areaOfTriangle(5, 6, 7));

/*
    Write a JavaScript program to find the circumference and surface area of a circle whose
    radius is 4.
    Area = pi * square of the radius, Circumference = 2 * pi * radius
    function "calculateCircleAreaAndCircumference(radius)" takes in the 
    circle radius and returns both circumeference and area of the circle.
*/

function calculateCircleAreaAndCircumference(radius)
{
    const pi = 3.14;
    let surfaceArea = pi * Math.pow(radius, 2);
    let circumference = 2 * pi * radius;
    return(`The circumference of the circle is ${circumference} units \n The surface area of the circle is ${surfaceArea} units square`);
}

//console.log(calculateCircleAreaAndCircumference(4));

/*
    Write a JavaScript program that accepts two integers and displays the larger of the two.
    lets assume the integers to be a and b
    the function "whoIsGreater(a, b)" return the number greater than the other one
*/

function whoIsGreater(a, b)
{
    if( a > b )
    {
        return a;
    }
    else if( b > a )
    {
        return b;
    }
    else
    {
        return 0;
    }
}

//console.log(whoIsGreater(100, 100));

/*
    Write a JavaScript program that checks whether an integer is an even or an odd number.
    
    Consider the function "checkNumberIfEvenOrOdd(number)"
*/

function checkNumberIfEvenOrOdd(number)
{
    return ((number % 2) == 0) ? "Even" : "Odd";
}

//console.log(checkNumberIfEvenOrOdd(13));