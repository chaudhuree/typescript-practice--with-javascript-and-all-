## how to setup typescript environment with parcel and vanilla javascript and node module with autocompilation

-First, we need to install TypeScript and Parcel globally using npm:

```
npm install -g typescript parcel-bundler
```

-Next, create a new directory for your project and navigate to it in your terminal.

-Initialize a new npm project by running the following command:

```
npm init -y
```

-Create a new file called "index.html" in your project directory. This will be the entry point for your project.

-In your index.html file, include a script tag to link to your main TypeScript file. For example:

```
<script src="./src/main.ts"></script>
```

-Create a new directory called "src" in your project directory. This is where you will place all of your TypeScript and vanilla JavaScript files.

-In your "src" directory, create a new TypeScript file called "main.ts". This will be the entry point for your TypeScript code.

-In your "main.ts" file, you can start writing TypeScript code. You can also import any Node modules that you need to use in your project.

-To set up automatic compilation, create a new file called "tsconfig.json" in your project directory. This file will contain your TypeScript configuration options.

> In your tsconfig.json file, include the following options:

```
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": true,
    "target": "es5",
    "sourceMap": true,
    "strict": true
  },
  "include": [
    "./src/**/*"
  ]
}
```

-To set up automatic bundling with Parcel, create a new file called "package.json" in your project directory.

-In your package.json file, include the following scripts:

```
"scripts": {
  "build": "parcel build index.html",
  "watch": "parcel watch index.html"
}
```

-To start the build process, run the following command in your terminal:

```
npm run build
```

-To start the watch process, run the following command in your terminal:

```
npm run watch
```

With these steps, we should have a working TypeScript environment with Parcel and vanilla JavaScript and node modules, with automatic compilation.
