# Stackoverflow_users

Application which retrieves data from StackExchange API to show the top users (and other data about them) from the renowned stackoverflow.com

## Built with

- HTML
- CSS
- Javscript
- npm
- NodeJS
- Express 
- Request 
- EJS 
- MaterializeCSS 

## Prerequisites & Getting started

1. Download nodeJS [from here](https://nodejs.org/en/) and install it

2. Open cmd and type 
```
npm install
```
to install npm

3. In the cmd, go to the repo folder and type
 ```
 node app.js
 ```
 You should see a message 
 ```
 Server has started...
 ```
 4. In your browser type localhost:3000
 
 ## About making this project
 
 ### Problems regarding the API
 
 Although the browser seems to 'see' the [JSON](https://api.stackexchange.com/2.2/users?&site=stackoverflow), the app.js doesn't see it as a JSON and it displays data like [that](https://imgur.com/a/GHo3s). After several tries with body-parser npm and other techniques I just copied the data from the JSON (from the browser) and put it in a JSON generator which did the trick. I am aware of the fact that it is not very relevant, but at least, until I find a solution, the application meets its purpose.
 
 Because of this, I haven't been able implement sorting methods and retrieving more users from the api.
 
 ### Why doesn't it have 2 pages?
 
 For the design I used materializeCSS framework which is minimalist and modern. I think that a modal works better than another page for this purpose and that is why I did not implement another one (with methods which trigger display:none and so on). 
 
 ### Feedback request
 
 I have to mention that this is my first gripe with these server technologies and I learnt a lot of new and interesting things like get and post requests or even got to see the power of these very popular npms (express, request).
 I would love you to provide me with some feedback regarding this project as this would mean a lot for me in order to continuous improve my skills in this area and gain further knowledge.
 
 ## References
 
 - [nodeJS](https://nodejs.org/en/)
 - [materializeCSS](http://materializecss.com/)
 - [Express](https://www.npmjs.com/package/express)
 - [Request](https://www.npmjs.com/package/request)
 - [EJS](https://www.npmjs.com/package/ejs)
 
