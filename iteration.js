const pageData = `Skip to main content
Select language
Skip to search
Technologies▼
References & Guides▼
Feedback▼
Search MDN
Search MDN
Sign in
String.prototype.match()
Web technology for developersJavaScriptJavaScript referenceStandard built-in objectsStringString.prototype.match()
English
▼
On this Page
Syntax
Description
Examples
Specifications
Browser compatibility
Firefox-specific notes
See also
The match() method retrieves the result of matching a string against a regular expression.


Syntax
str.match(regexp)
Parameters
regexp
A regular expression object.
If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp).
If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].
Return value
An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
Additional properties
As explained above, some results contain additional properties as described below.

groups
An array of named capturing groups or undefined if no named capturing groups were defined. See Groups and Ranges for more information.
index
The index of the search at which the result was found.
input 
A copy of the search string.
Description
If the regular expression does not include the g flag, str.match() will return the same result as RegExp.exec(). 

Other methods
If you need to know if a string matches a regular expression RegExp, use RegExp.test().
If you only want the first match found, you might want to use RegExp.exec() instead.
if you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() or String.prototype.matchAll() instead.
Examples
Using match()
In the following example, match() is used to find 'Chapter' followed by 1 or more numeric characters followed by a decimal point and numeric character 0 or more times.

The regular expression includes the i flag so that upper/lower case differences will be ignored.

let str = 'For more information, see Chapter 3.4.5.1';
let re = /see (chapter \d+(\.\d)*)/i;
let found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.
Using global and ignore case flags with match()
The following example demonstrates the use of the global and ignore case flags with match(). All letters A through E and a through e are returned, each its own element in the array.

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let regexp = /[A-E]/gi;
let matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
Note: See also String.prototype.matchAll() and Advanced searching with flags.

Using named capturing groups
In browsers which support named capturing groups, the following code captures "fox" or "cat" into a group named "animal":

let paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

let capturingRegex = /(?<animal>fox|cat) jumps over/;
found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
Using match() with no parameter
let str = "Nothing will come of nothing.";

str.match();   // returns [""]
A non-RegExp object as the parameter
When the regexp parameter is a string or a number, it is implicitly converted to a RegExp by using new RegExp(regexp).

If it is a positive number with a positive sign, RegExp() will ignore the positive sign. 

let str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]
Specifications
Specification
ECMAScript Latest Draft (ECMA-262)
The definition of 'String.prototype.match' in that specification.
Browser compatibility
Basic support for match()
Update compatibility data on GitHub
Desktop	Mobile	Server
Chrome	Edge	Firefox	Internet Explorer	Opera	Safari	Android webview	Chrome for Android	Firefox for Android	Opera for Android	Safari on iOS	Samsung Internet	Node.js
match	Full support1	Full support12	Full support1	Full support4	Full support4	Full support1	Full support1	Full support18	Full support4	Full support10.1	Full support1	Full support1.0	Full supportYes
flagsDeprecatedNon-standard	No supportNo	No supportNo	No support1 — 49	No supportNo	No supportNo	No supportNo	No supportNo	No supportNo	No support4 — 49	No supportNo	No supportNo	No supportNo	No supportNo





What are we missing?
Legend
Full support 
Full support
No support 
No support
Non-standard. Expect poor cross-browser support.
Non-standard. Expect poor cross-browser support.
Deprecated. Not for use in new websites.
Deprecated. Not for use in new websites.
Support for named capture groups
Update compatibility data on GitHub
Desktop	Mobile	Server
Chrome	Edge	Firefox	Internet Explorer	Opera	Safari	Android webview	Chrome for Android	Firefox for Android	Opera for Android	Safari on iOS	Samsung Internet	Node.js
Named capture groups	Full support64	Full support79	No supportNo	No supportNo	Full support51	Full support11.1	Full support64	Full support64	No supportNo	Full support47	Full support11.3	Full support9.0	Full support10.0.0Open
Legend
Full support 
Full support
No support 
No support
User must explicitly enable this feature.
User must explicitly enable this feature.
Firefox-specific notes
flags was a non-standard second argument only available in Firefox: str.match(regexp, flags). It has been removed starting with Firefox 49.
In Firefox 27, this method has been adjusted to conform with the ECMAScript specification. When match() is called with a global regular expression, the RegExp.lastIndex property (if specified) will be reset to 0 (bug 501739).
See also
String.prototype.matchAll()
RegExp
RegExp.prototype.exec()
RegExp.prototype.test()
Metadata
Last modified: Mar 13, 2020, by MDN contributors
Related Topics
Standard built-in objects
String
Properties
String length
Methods
String.fromCharCode()
String.fromCodePoint()
String.prototype.anchor()
String.prototype.big()
String.prototype.blink()
String.prototype.bold()
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.codePointAt()
String.prototype.concat()
String.prototype.endsWith()
String.prototype.fixed()
String.prototype.fontcolor()
String.prototype.fontsize()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.italics()
String.prototype.lastIndexOf()
String.prototype.link()
String.prototype.localeCompare()
String.prototype.match()
String.prototype.matchAll()
String.prototype.normalize()
String.prototype.padEnd()
String.prototype.padStart()
String.prototype.quote()
String.prototype.repeat()
String.prototype.replace()
String.prototype.search()
String.prototype.slice()
String.prototype.small()
String.prototype.split()
String.prototype.startsWith()
String.prototype.strike()
String.prototype.sub()
String.prototype.substr()
String.prototype.substring()
String.prototype.sup()
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()
String.prototype.toLowerCase()
String.prototype.toSource()
String.prototype.toString()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()
String.prototype.valueOf()
String.prototype[@@iterator]()
String.raw()
Inheritance:
Function
Properties
Function.arguments
Function.arity
Function.caller
Function.displayName
Function.length
Function.name
Methods
Function.prototype.apply()
Function.prototype.bind()
Function.prototype.call()
Function.prototype.isGenerator()
Function.prototype.toSource()
Function.prototype.toString()
Object
Properties
Object.prototype.__count__
Object.prototype.__noSuchMethod__
Object.prototype.__parent__
Object.prototype.__proto__
Object.prototype.constructor
Methods
Object.prototype.__defineGetter__()
Object.prototype.__defineSetter__()
Object.prototype.__lookupGetter__()
Object.prototype.__lookupSetter__()
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.prototype.toLocaleString()
Object.prototype.toSource()
Object.prototype.toString()
Object.prototype.unwatch()
Object.prototype.valueOf()
Object.prototype.watch()
Object.setPrototypeOf()
Learn the best of web development
Get the latest and greatest from MDN delivered straight to your inbox.


E-mail
you@example.com
Sign up now
Hide Newsletter Sign-up
MDN Web Docs
MDN
Web Technologies
Learn Web Development
About MDN
Feedback
Mozilla
Mozilla
About
Contact Us
Firefox
TermsPrivacyCookies
© 2005-2020 Mozilla and individual contributors.Content is available under these licenses.`



let everything = pageData.split('');

let results = everything.filter(char => char.match(/[a-z0-9]/i))

let filterToLower = results.map(char => char.toLowerCase())

let countAllChar = filterToLower.reduce(countReducer, {});

function countReducer(accumulator, currentValue) {
	// counts[char] ? counts[char] + 1 : counts[char] = 1

	accumulator[currentValue] ? accumulator[currentValue] += 1 : accumulator[currentValue] = 1


	return accumulator
}

function sortByValue(a, b){
	a[1] - b[1]
}

let sortObj = Object.entries(countAllChar).sort(sortByValue)

console.log(sortObj);
