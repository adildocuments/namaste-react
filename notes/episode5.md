# react structure depends on the developers. You can create the structure according to you.
# react does not recommoned any structure.
# avoid too much nesting.
# react said dont over think about the structure. max five minutes.
# try to keep same name of file and component that will make things easier.
.parcel-cache (auto generated)
dist (auto generated)
node_modules (auto generated)
src
    components
        Header.js
        Body.js
        Footer.js
    utils
        constants.js
        mockData.js
    app.js
index.html
index.css
package.json
package-lock.json
README.MD
.gitignore

# component file name first letter should be capital
# folder name keep in small letter.
# keep the constant name in capital letter with snake case like CDN_URL, LOGO_URL (Snake Case)
# keep the file name in small letter inside the utils folder. (camel case)


# what extension should be keep?
# some people like to keep .jsx and those people use typescript that keep .tsx and some people like to keep .js
# akshay recommended .js extension that is easy.
# akshay like to follow plain convention always.
# akshay suggested to his students keep simple.
# zero difference if you keep jsx or js extension.

# if you want to import any component first you need to export file.
# there are two methods to export file.
export default ComponentName in the end of the file.
export const ComponentName () => {}
import ComponentName from 'file path' like './src/Header'

# some give the fullname of the file like Header.js or Header.jsx or Header.ts
# but it will work also without extension.
# akshay recommonded to student no need to put the extension at importing file. keep it simple.

# Hard Coded data never keep in component files this is the industry standard and best practice.
# where keep it the hard coded like url and other stuff.
# so you can create config.js or constant.js or utils.js to keep urls and keys
# Industry Standard create utils folder common utilities put inside the utils folder.

# there are two types of export and two types of import.
# 1. default export 2. named export
# 1. default import 2, named import
# we can not write twice default export in a single file. A Module cannot have multiple default exports. 
# if we need to multiple things export so we can use named export. like export const CDN_URL, export LOGO_URL;

- Default Export/Import
export default component or variable 
import Component or variable from './path';

- Named Export/Import
export const Component or Variable
import {component or variable} from './path';

if you want to import multiple component or varilable from a single file.
import {component1, component2, ....so on} from './path' (Only named export)

# can I use default export along with the named export?


# some important things
suppose we have a button that name is top rated restaurent and that is used to filter data that have 4.0 above rating.  and we have restarentlist array of object that have 3 object two of them  have 4.0 above rating but one is below so we have filter the data using callback function using filter method. so we got the 4.0 above rating object but my ui not getting render the updated data. this is problem we are facing. so how to update my ui.
there are two layer 1. UI layer 2. Data Layer

UI Layer will display what is being send by data layer.
we have two object UI will display two object. suppose my data is modified and have one object so ui will automatically display one object but how?

# Why react is so fast?
- it can do fast dom manipulation.
- it can do efficient dom manipuation.
-  diff algorithm
- reconciliation
- virtual dom

- suppose if you have keep your data and UI consistent to each other that is where come to the picture.
- so data layer and ui layer work together these are sync to each other. if my data changes so my ui layer changes.
so react give the super power to change ui if data will change.