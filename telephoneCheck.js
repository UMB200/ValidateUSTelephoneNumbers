function telephoneCheck(str) {
  // Good luck!
  //Create regualr expression and insert all possible scenarios
  var checkPhone = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  //Use 'test()' method to search for a match between regex checkPhone and a given value 'str'. Test returns true or false.
  return checkPhone.test(str);
}
telephoneCheck("555-555-5555");
