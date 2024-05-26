[![Build status](https://build.appcenter.ms/v0.1/apps/8b5a7d09-9b99-4138-b6eb-a774b6d2e8b3/branches/main/badge)](https://appcenter.ms)

### Some details to know before development

- Uses plain redux
- Uses Java version specified in the .java-version file. Use [jenv](https://www.jenv.be/) if you want to automatically switch versions
- All questions are in the domain directory
- Stories in the storybook directory. Link [here](https://github.com/storybookjs/react-native)
- Uses [React Native Paper](https://callstack.github.io/react-native-paper/) for components
- Use eslint cleanup in Intellij if you find too many red lines. You might need to set up node to do this.

### Development

- Clone this repository
- Start an emulator
- yarn
- See storybook section below to figure out what you are running
- yarn run android
- Optionally, you might need yarn start to run the packager

### Storybook

App.js has two lines in the end

```
export default codePush(App);
export {default} from './storybook';
```

If you want to run the app, uncomment the first line. Else uncomment the second line.

### Links

[Design](https://www.figma.com/file/8Y8xJ5rJP5xYieDJHrhAng/covid-tool?node-id=109%3A1715)

[Trello](https://trello.com/b/WbzPBJrf/pneumonia-app)

[Documentation](https://drive.google.com/drive/folders/16lVSZA2ki3nhjJ35WkUwU6Zy7Tky_Ohx)

### Release apk to staging

- Get values for ~/.gradle/gradle.properties and shwaas.keystore (android/app)
- Change value of CodePushDeploymentKey in android/app/src/main/values/strings.xml to production
- `make create-bundle`
- Upload bundle

### Release apk to production

- Update versionCode and versionName in android/app/build.gradle
- Get values for ~/.gradle/gradle.properties and shwaas.keystore (put it in android/app) from Keeweb
- Change value of CodePushDeploymentKey in android/app/src/main/values/strings.xml to production
- `make create-bundle`
- Upload bundle

### Codepush

Staging - `make codepush-staging`
Production - `make codepush-production`
