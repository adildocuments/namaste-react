
# Episode 2
# - NPM :- NPM does not have full form. NPM full form not found in NPM official website. NPM only manages the packages. NPM is the largest Software repository.

# - When you create your react NPM already inside the app. You don't need to configure it. npm init

# - package.json :- Package.json is cofiguration for npm. This file defines metadata about your project and its dependencies, including the version ranges for each package

# - what is bundle 
# - A bundler is a tool that takes your JavaScript, CSS, and other assets, and packages them together into optimized bundles that are ready to be served to your users’ browsers. 

# Popular Bundlers in the React Ecosystem
# - 1. Webpack
# - 2. Parcel
# - 3. Rollup
# - 4. Vite

# 1. We can install two types of dependencies 1. Normal dependencies 2. Dev dependencies.

# dev dependencies :- It is basically required in development phase. When are we developing app so we required dev dependencies. npm install -D parcel :::::::: -D means dev
# normal dependencies :- Normal dependency also use on production.

# ^ caret when we put the caret before version it will automatically update the minor version not major version example "parcel":"2.8.3" to "parcel":"2.8.4" it is minor changes.

# ~ tilde when we put the tilde before version it will automatically update the major version not th e minor version "parcel":"2.8.3" to "parcel":"3.0.0" it is major changes.

# note:- We should always use caret because if udpate major change in the version may be application crash. if you don't use tilde and caret that will be upgrate automatically it will consider exact verion of the package.

# package.lock.json: it keeps a track of exact version that is being installed.
# Suppose today 2.8.5 version released package.json stay like this.
# package.json keeps approx version while package.lock.json has the exact verions of the package.

# We heard many time it is working fine on my local system but crash on production. why?

# node_modules:- collection of depedencies. if you have package.json and package-lock.json file you can regenerate the node_modules folder. We should not be deploy node_modules on github and server.


# parcel : - it is basically created the server for us for local server. Parcel is a bundler.
# parcel goes to source index.html and build the development and host that development on localhost:1234 and we are able to access the file by localhost server with port number.
# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement (Automatically udpate the page using HMR)
- File Watching Algorithm - Written by C++;
- As soon as I save file parcel building once again.
- Ques:- Why parel take the so less time to create the build because parcel uses the cache to create the build
- Caching - Faster Builds - It is giving fast development experience (Parcel use the cache )
- It create the .parcel-cache file at the top of project you can see.
- Parcel do image optimization.
- do minification file
- do bundling
- do compressing 
- Content Hashing (need to read)
- Code Splitting
- Differential Building - Support older browsers
- Diagonastics
- Error Handling
- Https - parcel host your application on https
- Tree Shaking - remove unused code.
- Different dev and production bundles
- --- parceljs.org read this documentation


# npm vs npx
# if you want to install the package you need npm while you want to execute the pacakge so you need to npx. 
# npx is used for executing the pacakge while npm is used for install the package.

# through cdn import the react this is the not good practice. 

# we can install the react using npm because react is also package. this is normal dependency because we need on the server also not only developement.

# important
# <script src="./app.js"></script> we are injecting this line in index.html normally. It treates as a browser script. It treats as a normal JavaScript file. but we will use import keyword in our file so it will thrown an error 
# We will get error "Browser scripts cannot have imports or exports.";
# Normal JavaScript does not have imported or exported. If you want to use import or export you need to tell to the browser this is not a normal browser file. It is a module. we have to tell to browser usting type in the above script. like that <script type="module" src="./app.js"></script> now it will not normal JavaScript file. Browser will consider as a module file.


# when you use npx parcel build index.html command it will give error because index.html is not entry point entry point is app.js so remove the app.js from package.json file.

# npx parcel index.html this command execute for creating development build.
# npx parcel build index.html this command execute for creating production build.

# When you execute parcel npx parcel build index.html. It generates a build of your project and hosted 1234 when generates the development build it puts up dist folder. So those code we see on the browser this code will come from dist folder. if you delete the dist folder it will automatically generate. There are three main files inside the dist folder html, css and js. These three file contains all the code that you write.

# generated folder or files does not puts on github because these generate automatically. like dist, parcel-cache and node_modules.4

# need to read browserlist website
# what type ="module" in JavaScript?
# - Module allow us to break up our code into seprate files and give the ability to import and export the file.
