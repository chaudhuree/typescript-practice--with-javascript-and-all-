## practice all typescript code

> it's kind of rough notes about typescript

i will practice all types of typescript code here

## install typescript globally

```

  npm i -g  typescript

```

> check tsc version

```
tsc --version
```

with this we can use tsc command

we can use:

```
tsc --init
  or
npx tsc --init
```

> command to run ts file

```
tsc filename.ts
```

** with this the file will generate a .js file which will work **

## no emit on error

> tsc filename.ts command emit the file and create javascript file.
> it will generate javascript file wheather it has error or not
> so with this --noEmitOnError flag we can stop this
> now if it has error then tsc command will not generate javascript

```
tsc --noEmitOnError filename.ts
```
