# Learning Node.js
https://www.linkedin.com/learning/paths/become-a-nodejs-developer

Node.js is a platform built on the Chrome JavaScript runtime that can help you build fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient—perfect for data-intensive real-time applications that run across distributed devices. In this course, learn the basics of Node.js, and discover how to build a simple application. Alexander Zanfir goes into topics such as npm, reading and writing files, and Node.js frameworks. He covers Node.js features, such as async/await, and dives into popular web development concepts. Alexander also walks through how to build a demo chat app from start to finish.

Learning Objectives:
- Asynchronous tasks and callbacks
- Benefits and features of JavaScript
- Managing third-party packages with npm
- Node.js frameworks
- Static serving with Express
- Creating a browser app
- Exploring databases
- Saving data to MongoDB with Mongoose
- Error handling and debugging
- Simple tests and async tests

### Notes
- Using node allows for using the same language, code on front and back ends
- Dynamic typed language
- Works well with JSON
- Using fs.readFile of a JSON will return a string and will need to be converted using JSON.parse
- Using fs.writeFile, requires the data parameter to be a string and will be to be converted using JSON.stringify
- Framework is supporting structure for a language. 
- Web Application is an app that runs in the browser that communicates with the server
- Socket.io enables real-time bidirectional communication
- Static vs dynamic, images vs api
- Mongoose allows us to elegantly work with our MongoDB database with object schemas. Object schemas are JavaScript objects we create that will represent the type of data we will be putting in our database.

## Essential Training
- Every request is single-threaded. In Apache, the single thread waits for the file system to finish reading files before it can do anything else. Also known as blocking.
- In node.js, the thread behaves asynchronously, all the events are handled in the order, and there is no blocking. This is what is meant as a non-blocking event driven IO. 
- This is how we host node.js applications in the block. It is single-threaded, events are raised and stored in the event queue. It is asynchronous, which means it can do more than one thing at a time. 
- console is part of the global object
- https://nodejs.org/dist/latest-v12.x/docs/api/	
- Available globally is the CommonJS module pattern, it allows for import of other code into our files, using require() and an object Exports
- These modules can be part of node or packages we have installed
- Every node.js file is referred to us as a module.
- Another important object available globally is the process object. 
- With the process object, we can get environment information, read environment variables, communicate with the terminal or parent processes through standard input and standard output. We can also use it to exit the current process.  It contains information about the current process.
- We can also use process to collect information from the terminal using process.argv by sending arguments to it
- It is better practice to use flags so we know what type of variable is being passed. 
- process.argv is an array
- Standard output object is part of process and can used using process.stdout
- process.stdout.write is different from console.log() in the sense, the latter adds a new line after every statement. 
- You can make node.js work async by using event listeners. This can also be done using the timing functions
- So the Node.js module system allows us to separate our functionality into separate files. We consume that functionality with the require function and what gets returned by the require function is what we've exported with the module.exports function.
- The Event Emitter is Node.js' implementation of the Pub-Sub design pattern, and it gives us a mechanism for emitting custom events, and wiring up listeners and handlers for those events. 
- Node.js also ships with a module that allows us to interact with the file system. The fs module can be used to list files in directories, create new files in directories, stream files, watch files, modify file permissions
- No need to supply encoding arguments when reading binary files.
- we read the contents of that binary file into a node JS type that we call the buffer.
- Don’t need filesystem to read JSON files
- Before we can remove a directory with fs.rmdir, we need to make sure that all the files within that directory have been moved or removed
- Process.standard input is a readable stream. We read the data by listening to data events.
- Reading files with streams causes your nodejs application to use less memory because instead of reading everything all at once and loading it into a buffer, you're reading files bit by bit and chunk by chunk. They give us a lot of control because they raise events.
- The spawn function is used with child processes for executing external applications.	

#### Questions
- What are some of the core modules in node.js?
- Difference between using async and sync methods from file system?
- Async takes a callback

## Learning NPM

Packages can be installed locally or globally
- Dev packages won’t be included in production build
- package-lock.json allows specific versions of packages to be installed in other environments. It’s a way to control versioning 
- Clearing npm cache should be part of troubleshooting
- npm cache clean --force
- Adding scripts to scripts command
- npx can be used to prevent polluting global namespace

https://docs.npmjs.com/cli-documentation/

