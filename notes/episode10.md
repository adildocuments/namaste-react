## tailwind css
## how to install and configure the tailwind css in react
- configure according to bundler like vite, parcel or others

- parcel will use the postcssrc configuration file is used to understand tailwind
- postcssrc is kind of the way that are project understand what is written inside the tailwind.

- we will create the .postcssrc configuration file for postcss
- tailwind.config.js created automatically if not you can create.
- those extentions written in the config file under content key tailwind can use in these files.

suppose tailwind does not have the class and i want to give the width that tailwind does not have so we can give w-[200px] like that

- Tailwind is light weight css parcel will make the bundle of css only includes or import css that is using in the appliction suppose shadow not using in the application so parcel will not import this class.

- if you are using any class hundred of times but it will include once the class.