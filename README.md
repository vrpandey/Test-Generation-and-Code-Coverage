
## DevOps HW2 - Test Generation and Code Coverage

## Code Coverage

Code coverage can be an effective way to measure how well tested a code system is.

## Setup and Background

    git clone https://github.ncsu.edu/vrpandey/DevOps-HW2.git
    cd DevOps-HW2
    npm install

## Files Tested
- subject.js
- mystery.js

## Execution
#### Genertaing Test constaints
 ```
 node mains.js filename(subject.js or mystery.js)
 ```
#### To see code coverage in action run istanbul on our "test suite", represented by 'test.js'.
```
 node_modules/.bin/istanbul cover test.js
```
[Useful resource](http://ariya.ofilabs.com/2012/12/javascript-code-coverage-with-istanbul.html) for istanbul.


##### See a fully annotated html report here:
    
    open coverage/lcov-report/TestGeneration/subject.js.html

## Screenshot

![image]( https://github.ncsu.edu/vrpandey/DevOps-HW2/blob/master/Screenshots/Coverage.png "Coverage Screenshot")
