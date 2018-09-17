# fixme1-react-component-library-asset
Load a library asset in a react app

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