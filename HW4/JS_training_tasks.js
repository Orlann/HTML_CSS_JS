/* 1. Write a JavaScript program to display the current day and time in the following format.
Today is : Friday.
Current time is : 4 PM : 50 : 22 */
function dateTime() {
	var today = new Date();
	var day = today.getDay();
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
	alert("Today is : " + weekDays[day] + ".");
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var dayPart = (hour >= 12) ? " PM " : " AM ";
	hour = (hour >= 12) ? hour - 12 : hour;
	alert("Current Time : " + hour + dayPart + " : " + minute + " : " + second);
}
dateTime();

/* 2. Write a JavaScript function to print the contents of the current window.*/
<!DOCTYPE html>
<html>
<head>
<title>HTML, CSS and JavaScript demo</title>
</head>
<body>
<p></p>
<p>Click the button to print the current page.</p>
<button onclick="print_current_page()">Print this page</button>
<script>function print_current_page()
{
window.print();
}</script>
</body>
</html>
}

/* 3. Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
function currentDate(){
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; 
var year = today.getFullYear();
if(day<10) 
{
    day='0'+dd;
} 

if(month<10) 
{
    month='0'+month;
} 
today = month + '-' + day + '-' + year;
alert(today);
today = month + '/' + day + '/' + year;
alert(today);
today = day + '-' + month + '-' + year;
alert(today);
today = day + '/' + month + '/' + year;
alert(today);
}
currentDate();

/* 4. Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.*/
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
alert(Math.round(area));
}
trianglePerimeter();

/* 5. Rotate the string 'w3resource' in right direction by periodically removing 
one letter from the end of the string and attaching it to the front */
function rotateString(str) 
{
  var strArray = str.split("");
  var newArray = [];
  for(i=strArray.length-1; i>=0; i--){
    symbol = strArray[i];
    strArray.pop();
    newArray.push(symbol);
    alert(newArray);
  }
  alert(newArray.join(""));
}
rotateString("abcdefg");

/* 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.*/
function leapYear(year){
alert(year);
var result; 
    if (year%400 == 0){
      result = true;
    }
    else if(year%100 == 0){
      result = false;
    }
    else if(year%4 == 0){
      result= true;
    }
    else{
      result= false;
    }
  alert(result? "It is a leap year" : "It is not a leap year");
}
leapYear(2017);

/* 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.*/
function sundey1January(){
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
       alert("1st January will be a Sunday  " + year);
    }
}
sundey1January();

/* 8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched"*/
function guessNumber(){
var programNumber = Math.ceil(Math.random() * 10);
 var userNumber = prompt('Input the number between 1 and 10 inclusive');
 if (userNumber == programNumber)
   alert('Matched');
  else
   alert('Not matched');
}
guessNumber();

/* 9. Write a JavaScript program to calculate days left until next Christmas*/
function daysTillChristmas(){
today=new Date();
  alert(today);
var nextYearChristas = new Date(today.getFullYear(), 12, 6); // Number 12 for month means month[12] and is NEXT YEAR JANUARY because December is month[11] 
alert("Next year Christmas will be " + nextYearChristas);
alert(Math.ceil((nextYearChristas.getTime()-today.getTime())/(1000*60*60*24))+
" days left until Christmas!");
}
daysTillChristmas();

/* 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.*/
function convertToFarenheit(celsius) 
{
  var celsiusTemperature = celsius;
  var temteratureInFarenheit = celsiusTemperature * 9 / 5 + 32;
  var message = celsiusTemperature+'\xB0C is ' + temteratureInFarenheit + '\xB0F.';
    alert(message);
}

function convertToCelsius(fahrenheit) 
{
  var farenheitTemperature = fahrenheit;
  var temperatureInCelsius = (farenheitTemperature - 32) * 5 / 9;
  var message = farenheitTemperature+'\xB0F is ' + temperatureInCelsius + '\xB0C.';
    alert(message);
} 
convertToFarenheit(60);
convertToCelsius(45);

/* 12. Write a JavaScript program to get the website URL (loading page). */
function urlOfCite(){
alert(document.URL);
}
urlOfCite();

/* 13. Write a JavaScript exercise to create a variable using a user-defined name.*/
function userVarName(){
var var_name = 'function';
var n = 100;
this[var_name] = n;
alert(this[var_name]);
}
userVarName();

/* 14. Write a JavaScript exercise to get the extension of a filename.*/
function findFileExtention(filename){
alert(filename.split('.').pop());
}
findFileExtention("sgltsdjgdjsj.txt");

/* 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.*/
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
alert(difference(5));
alert(difference(25));

/* 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.*/
function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
alert(sumTriple(10, 20));
alert(sumTriple(10, 10));

/* 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple their absolute difference if the specified number is greater than 19.*/
function diffTripple(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}
alert(diffTripple(20));

/* 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/
function find50(x, y) 
{
  var sum = x + y;
  return ((x == 50 || y == 50) ||sum == 50)? alert("One of numbers or their sum is = 50"):
          alert("Neither number nor their sum is = 50");
}
find50(25,50);

/* 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400. */
function numberIn20(x) {
  return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
}
alert(numberIn20(10));

/* 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative*/
function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
alert(positive_negative(2, 2));
alert(positive_negative(-2, 2));

/* 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.*/
function checkPy(str) {
  if (str === null || str === undefined || str.substring(0, 2) === 'Py') 
  {
    return str;
  }
  return "Py"+str;
}
alert(checkPy("Pylypiuk"));
alert(checkPy("Maksymuk"));

/* 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.*/
 function remove_character(str, position) 
 {
  part1 = str.substring(0, position);
  part2 = str.substring(position + 1, str.length);
  alert (part1 + part2);
 }
remove_character("Windows", 5);

/* 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.*/
function changeFirstToLastLetter(str) 
  {
  if (str.length <= 1)
  {
    return str;
  }
 pos = str.substring(1, str.length - 1);
  alert((str.charAt(str.length - 1)) + pos + str.charAt(0));
}
changeFirstToLastLetter("BalaD");

/* 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. */
function addFirstAndLastLetter(str)
{
  first = str.substring(0,1);
  alert(first + str + first);
}
addFirstAndLastLetter("String");

/* 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. */
function dividedBy3Or7(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    alert("Number divides by 3 or 7");
  } 
  else {
    alert("Number does not divide by 3 or 7");
  }
}
dividedBy3Or7(35);

/* 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the 
front and back. The string length must be 3 or more.*/
function add3CharactersInFrontAndBack(str)
 {
  if (str.length>=3)
   {
   str_len = 3;
 
  back = str.substring(str.length-3);
   alert(back + str + back);
 }
   else
     return false;
 }
add3CharactersInFrontAndBack("baobab");

/* 27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.*/
function startJava(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    alert("String begins with 'Java'");
  }
   else 
   {
    alert("String does not begin with 'Java'");
  }
}
startJava("JavaScript");

/* 28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. */
function numbersFrom50To99(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
numbersFrom50To99(54,52);

/* 29.  Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range*/
function threeNumbersFrom50To99(x, y, z) 
{
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}
threeNumbersFrom50To99(54,52,66);

/*30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.  */
function findScript(str)
{
  if (str.length < 6) {
    alert(str);
  }
 var result_str = str;
    
  if (str.substring(10, 4) == 'Script') 
    {
    
   result_str = str.substring(0, 4) + str.substring(10,str.length);
      
  }
  alert(result_str);
}
findScript("slllScriptaaa");


