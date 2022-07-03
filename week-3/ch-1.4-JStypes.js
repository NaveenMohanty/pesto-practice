/**
 * Static Vs Dynamic
 *
 * In language like C++ or JAVA are static in nature, that means
 * type of variables, params and etc are predefined before compilation
 * where as in JS data type of variaables, params and etc are dynamic
 * that means they can change through out the code.
 */

/**
 * Static Type checking Vs Dynamic Type Checking
 *
 * In other static language e cannot add(+) or multiply(*) to diffrent datatype value.
 * But in JS it is possible by implicit type casting.
 * Example:👇
 */
console.log("===Static Type checking Vs Dynamic Type Checking===");
console.log(2 + "abc");
console.log(2 + "2");
console.log(3 * "3");
console.log("2" * "2");

/**
 * Coercion
 *
 * In JS the main way of dealing with value
 * whoes type doesn't fit is to coerce it to the correct
 * type. Coercion means implicit type conversion. Most
 * operands coerce:
 *
 * Example:☝️
 */

/**
 *  == VS ===
 *
 * == : It checks the value
 * === : It checks the value and its data type
 *
 * Example:👇
 */
console.log("****== VS ===****");
console.log("true == 1:", true == 1);
console.log("true === 1:", true === 1);
console.log(`"3" == 3:`, "3" == 3);
console.log(`"3" === 3:`, "3" === 3);
console.log(`undefined == null:`, undefined == null);
console.log(`undefined === null:`, undefined === null);
