# Electron + Svelte + Typescript Starter
This repository contains boilerplate code that enables for building an Electron application quickly, using Svelte as a frontend framework and Typescript in both Svelte and Electron application part. The starter was built to fulfill these targets:
- Typescript support for both Svelte and Electron application
- Bundling of both Svelte and Electron application using Rollup
- Easy-reload for both Svelte and Electron application in development mode

## Run the application in development mode
For optimal development experience, open three terminals in your IDE:
1. In the first terminal start Svelte code watch compilation using Rollup and live server at port 5000 to get hot-reloading for renderer:

    ```
    npm run svelte-dev
    ```

    Svelte setup is based on the official boilerplate for Svelte + Typescript: https://github.com/sveltejs/template

2. In the second terminal run compilation of your Electron application code using Rollup with watch option enabled. Application will be re-bundled on any change. Bundling of your application is recommended in [Electron docs](https://www.electronjs.org/docs/tutorial/performance#7-bundle-your-code) to improve the performance of your application. To do this run:
   
   ```
   npm run electron-watch
   ```

3.  Finally, in the third terminal start the Electron application in development mode:

    ```
    npm run electron-dev
    ```

    Electron will connect to the dev server and browser window will reload on any change in Svelte code. To see the changes that has been made on the main process side, relaunch the application using the shortcut Ctrl+Alt+R.

    When you relaunch your application, you will lose access to messages logged out in the termianl. For this reason [electron-log](https://www.npmjs.com/package/electron-log) package was added to keep track of logged messages. These are stored in `logs` folder in your `AppData` folder in your user's home directory.

## Building the application
To package your application run this script:

```
npm run electron-build
```

It will package the application using [electron-builder](https://www.electron.build/) and create an executable for Windows in `dist` folder. At the moment, there is electron-builder configuration available only for Windows in `package.json`.

## Next steps
Adding configuration to build the application for Mac and Linux would be appreciated. I haven't added these, because I have only a Windows machine, so I am not able to test the builds for Max or Linux.