How to Create Dark Mood?
1. Goto tailwind.config.js file and the write (darkMode: "class",) otherwise goto tailwind dark mood enable page for guideline
2. Then write the same code where i write the code on Navber.jsx file
3. Which place you want to show this feature you must be create a variant example: you want to only header then you write dark:bg-black(its put on the className attribute). put this everywhere in the application so that it look like an dark mood application

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### this is the heart of the website you will paste this code to the index.html file where before body tag is close

![My Image](data:image/jpeg;base64,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)
<img src="https://ibb.co/NnWFzSV" alt="Alt text" title="Optional title">

<!-- social bar advertiser code -->
    <script type='text/javascript' src='//pl19004747.highrevenuegate.com/c8/01/19/c80119583afd90df7038eb54f58ca15d.js'></script>

    <!-- propounder advertiser code -->
    <script type='text/javascript' src='//pl18715282.highrevenuegate.com/bd/0d/0b/bd0d0bce28996d91b92a20e7957c5df6.js'></script>

    <!-- Histats.com  START -->
    <script type="text/javascript">
      var _Hasync= _Hasync|| [];
      _Hasync.push(['Histats.start', '1,4749091,4,0,0,0,00010000']);
      _Hasync.push(['Histats.fasi', '1']);
      _Hasync.push(['Histats.track_hits', '']);
      (function() {
      var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
      hs.src = ('//s10.histats.com/js15_as.js');
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
      })();
    </script>
    <!-- <noscript>
      <a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4749091&101" alt="free web page hit counter" border="0"></a>
    </noscript> -->
    <!-- Histats.com  END  -->
