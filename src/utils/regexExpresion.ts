/* The `onlyPhone` regular expression is used to validate phone numbers. It matches phone numbers in
the following formats: */
export const onlyPhone: RegExp =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;

/* The `emailValidation` regular expression is used to validate email addresses. It matches email
addresses that follow the standard format, which includes an alphanumeric username, followed by the
"@" symbol, followed by a domain name, and ending with a top-level domain (TLD) consisting of 2 to 5
uppercase letters. The `i` flag at the end of the regular expression makes it case-insensitive,
allowing both uppercase and lowercase letters in the email address. */
export const emailValidation: RegExp =
  /^[A-Z0-9._%+-]+@[A-Z0-9._.-]+\.[A-Z]{2,5}$/i;

/* The `passwordValidator` regular expression is used to validate passwords. It matches passwords that
meet the following criteria:
- At least one digit (`\d`)
- At least one lowercase letter (`[a-z]`)
- At least one uppercase letter (`[A-Z]`)
- At least one special character (`[\W]`)
- The password must be at least 8 characters long (`.{8,}`) */
export const passwordValidator: RegExp =
  /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/g;

/* The line `export const zipcodeOnlyNumbers: RegExp = /^\d+$/g;` is defining a regular expression
named `zipcodeOnlyNumbers`. This regular expression is used to validate zip codes and it matches
strings that consist of only one or more digits. The `^\d+$` pattern means that the string should
start with a digit (`\d`), followed by one or more digits (`+`), and end with a digit (`$`). The `g`
flag at the end of the regular expression makes it global, allowing it to match multiple occurrences
of the pattern in a string. */
export const zipcodeOnlyNumbers: RegExp = /^\d+$/g;

//^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$

/* The line `export const onlyNumbersForPhoneNumbers: RegExp = /\s/g;` is defining a regular expression
named `onlyNumbersForPhoneNumbers`. This regular expression is used to match any whitespace
character in a string. The `\s` pattern matches any whitespace character, such as spaces, tabs, or
line breaks. The `g` flag at the end of the regular expression makes it global, allowing it to match
multiple occurrences of the pattern in a string. */
export const onlyNumbersForPhoneNumbers: RegExp = /\s/g;
