---
title: A node program using express
comments: true
math: true
quicklink: true
date: 2020-1-10 11:46:32
categories:
  - [Apple]
  - [Internet, Web Application]
  - [Programing Language, JavaScript]
tags: Experience & Guide

---

[Node.js](https://nodejs.org/)® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/), and it is Founded by © OpenJS Foundation. Many web applications use it, such as LinkedIn, Netflix, PayPal, NASA and more.

<!-- more -->

## Node.js running **Environment**

My device is a MacBook Pro Late 2012, and installed Xcode & Developer Command Line tools.

### Install Xcode & Command Line Tools

Xcode can be installed from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835), or from [Apple Developer](https://developer.apple.com/download) download Xcode beta (Need Apple Developer account).

After installing Xcode please run at least one time in order to agree to. the agreement.

Command Line tools can be installed from Terminal

```bash
xcode-select --install
```

Tips: If u meet any problems, please check the following guide.



### Install HomeBrew

[Brew](http://brew.sh)

`The Missing Package Manager for macOS (or Linux)`

`Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn´t include with macOS. It can also install software not packaged for your Linux distribution to your home directory without requiring sudo.`(Source `man brew`)

Homebrew require Xcode & Command Line Tools, after installation, please run the following command inside macOS Terminal or linux terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

(Please take [this](https://brew.sh) as the standard)

Tips: If u meet any problems, please check the following guide.



### Install Node

After both Command Line Tools & HomeBrew installed, please run

```bash
brew install node
```

It will automatically install node.

If you want to check, you can run `node -v` to see the version of your node.



## Using Node

### Initialization Node

Npn is a javascript package manager made for node.

open a directory you want to work with, and open it by type in`cd` + `the name of your directory`

and then Open terminal, type in

```bash
npm init
```

 it will help you to create a directory using node, just follow all the step show on the terminal( Normally just type enter until finish)

E.G I created a directory called `Lesson`, I need to type in 

```bash
cd Lesson
```

```bash
npm init
```

### Node Directory

After Initialization, the directory should have a file called `package.json`, and now you should type in 

```bash
npm install express --save
```

This means it will install express and save to `package.json` file,  package.json is like the main configuration of your node project.

### Simple Example of using node

Type in the following to create a `index.js` file, as the main program of the node

```bash
touch index.js
```

Open the `index.js` file inside your node directory, Import express modules, and give it to variable `express `

```js
var express = require('express');
```

Call express, at this moment it is a function. When it is called without a parameter, it will return an express, and give it to the `app`.

```js
var app = express();
```

Basically every time I use `app.*` equals using `express`.

</br>

Now this `app` includes many methods, including `get`, `post`, `put`/`patch`, `delete`. Now using `get` method, point out `/` and give a `handler` function

this handler will receive req and res these two objects, they are the request for `request` & `response`. And this request will include all the information sent out by the browser, such as `query`,` body` and `headers`. They all can be get from `req` object

</br>



For res objects, we don't read messages from it, but we use it to output information toward the browser.. For example, header information. E.g using `#send` method, send a string to browser

```js
app.get('/', function (req, res) {
  res.send('Hello World');
}); 
```



</br>



After we define the actions of the app, make it listen to the local port (3000 at this point). The second function here is the Callback function, it will tell the listen action is finished.

```js
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
```



#### Full Script:

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
}); 

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
```

and after editing the index.js file, save it, and run it

```bash
node index.js
```

Now open your browser, type in http://localhost:3000/ to see your website, and it should look like this:

![Lesson](/images/Node/Lesson.png)

### Problems might encounter

When you start your node program, it might show something like this:

```bash
node:events:*
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
.......
{
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '::',
  port: 3000
}

```

This means your "3000" port already been used, you can change 3000 in this  `app.listen(3000, ...` in to another number that don't have this problem, such as 4000
