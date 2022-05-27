# Simple Click Counter App

## Installation of Jest and Enzyme 

* <b> Create First data-test Attributes Test </b>
* <b> Remove data-test attributes from production test attributes and check in inspect console .</b>
```
   *  Run this command : ```npm install --save-dev babel-plugin-react-remove-properties```
   * npm run eject
   * Update babel configuration
   * Create production build 
   * Data test attribute gone and inspect console html.   
```

* <b> More Data test attribute Test </b>
* <b> DRY Refactor </b>

```
  * DRY = Don't Repeat Yourself
  * Goals for test codebase not the same as for production codebase
  * Want failing tests to be easy to diagnose
  * Sometimes this means repeated codebase
  * Balance between DRY and easily diagnosed tests
```

* <b> Test File startegies: (Dry pros and cons): </b> Combine assertions into one test.
* <b> One expect per test: </b>

```
 * Test description gives better documentation
 * Failure counts give better indication of state of code
   * Tests stops at first failure
 * Can use beforeEach() for common setup
```

* <b>( Test Initial Counter Display) : </b>

  * Test text displayed on page
  * Not state value
  * Testing behavior, not implementation;
  * The plan : counter value will be in a ```<span>```
      * data-test attributes ```count```
      * Test that value is 0 initially
      * Simulating Clicks
  * Use Enzyme ```.text()``` method


* <b>Test Button Click </b>
  * Don't find too early!
    * Elements are unreliable after wrapper has changed focus

* <b>Manual Acceptance Testing and Review</b>
  * Setup simple React app with Jest and Enzyme tests;
  * Used Enzyme's ```shallow()``` function to render a component;
  * Tested that required DOM elements are rendered using ```find()```
  * Used Enzyme's ```.text()``` method to extract the text of an element;
  * Used ```simulate``` to interact with rendered elements (clicked button)
  * Tested component for updates after interaction
  * Created re-usable ```setup()``` and ```findByTestAttr()``` functions;

* <b>Some Coding Challenges:</b>
   * <b>CHALLENGE 1: (Decrement Button): </b>
      * Create a new button with the text "Decrement Counter"
      * When the new button is clicked, decrement the counter
      * 

   * <b>CHALLENGE 2: (No Count Below Zero):</b>
       * If the counter is at zero and the decrement button is clicked: 
          * Don't decrement the counter 
          * Display an error message saying the counter can't go below zero.


   * <b>CHALLENGE 3: Clear Error on Increment</b>
       * Error should clear on click of increment button
       * Counter should just increment as usual.


```

      1. Decrement button
      Create a new button that subtracts 1 from the counter

      2. No count below 0
      Don't let the counter go below zero.

      if the counter is at 0 and the decrement button is clicked:

      don't decrement the counter

      display an error message saying the counter can't go below zero

      3. Remove error when increment button is clicked
      If error is showing and increment button is clicked, clear the error.

```


