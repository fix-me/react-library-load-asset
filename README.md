# react-library-load-asset
How do I load a replaceable asset file inside a react component library?

## Setup
1. cd into library and run the commands
    1. **npm install**
    1. **npm run build**
    1. **npm link**
1. then cd into reactapp and run
    1. **npm install**
    1. **npm link fixme1library**
    1. **npm start**
  
## Challenge
If you look inside the network packets of your browsers developer console F12, you will notice that the 'testFile.yaml' contents got overwritten with the default react index page. So **what changes need to be done inside library to get the file loaded properly, __without__ touching reactapps package.json and doing devServer stuff or something similar?**

## Solution
If you found this, looking for a solution, try rollup: https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953

For the library run **npm run rollup** instead of **npm run build** to test the library build using rollupJS.
