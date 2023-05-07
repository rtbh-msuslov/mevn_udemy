# Isomorphic JavaScript with MEVN Stack

This is the code repository for [Isomorphic JavaScript with MEVN Stack[Udemy Course]](https://www.udemy.com/course/full-stack-isomorphic-javascript-with-vuejs-nodejs) by [Packt].
## About the Video Course
Do you want to build scalable, high-performance web apps? Harness the power of the JavaScript ecosystem to run, build, and test your full-stack applications. This course will guide you in building a full-stack app using Isomorphic JavaScript frameworks. You'll build web applications using the MEVN Stack in JavaScript.
This course takes you on an end-to-end journey, building on your basic skills and taking you to advanced skill set in no time with Vue.js while deploying enhanced web apps to a production environment.

<H2>What You Will Learn</H2>
<DIV class=book-info-will-learn-text>
<UL>
<LI>Use Node.js to set up a project environment ready for MEVN development
<LI>Create Single Page Applications using the Vue.JS command-line Interface Tool
<LI>Manage application state with Vuex Library
<LI>Deploy a production-ready application to the cloud (AWS)	
<LI>Implement application routing with Vue.js Router
<LI>Build a secure, RESTful API with Express.JS, including user authentication
<LI>NoSQL Database management (with MongoDB via Mongoose)
</UL>
</DIV>

### Technical Requirements

Operating system: Windows/Linux/MAC OS

Browser: Google Chrome Latest Version

Visual Studio Code Latest Version

<s>Node.js LTS 8.9.1 Installed</s><br>
Node.js LTS 16.20.0 Installed


### Prerequisites

[NodeJS](https://nodejs.org)<br>
[MongoDB](https://www.mongodb.com/)<br>
[VueJS](https://vuejs.org/)<br>
[VueJS CLI](https://cli.vuejs.org/)

### Installing

First, install all of the NodeJS dependencies (located in **package.json** file)
```
$ npm install
```

## Development

To begin development, you must start the NodeJS Server and VueJS Server. 
<br>In addition, you need to compile the server files with the Babel Compiler.

### Start mongod service
You can search in Google how to install and run Mongo DB on your OS locally.<br>
Example on Linux:

```
$ sudo systemctl start mongod
```

### Run all development scripts in one

```
$ npm run dev
```

Alternatively, you can run each of the three scripts individually:

### Compile NodeJS Server files

```
$ babel dev-server --out-dir prod-server --watch
```
### Start NodeJS Server
```
$ node prod-server/index.js
```
### Start VueJS Development Server
```
$ vue-cli-service serve
```
## Common Issues

 - Unable to refresh in production
	 - If you are unable to refresh in production mode, ensure your index.js server file has:

```
app.get('*', (req, res)...
```
instead of:
```
app.get('/')
```

 - Cannot Set Environment
	 - Windows users will need to adjust the application scripts in **package.json** from:
```
export NODE_ENV=production
```
to
```
set NODE_ENV=production
```

## Built With

* [MongoDB](https://www.mongodb.com/) - Open Source NoSQL Database<br>
* [ExpressJS](https://expressjs.com/) - NodeJS Web Framework<br>
* [VueJS](https://vuejs.org/) - JavaScript UI Framework<br>
* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Google Chrome's V8 JavaScript engine

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
