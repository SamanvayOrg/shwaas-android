### Some details to know before development
- Uses plain redux
- All questions are in the domain directory
- Stories in the storybook directory. Link [here](https://github.com/storybookjs/react-native)
- Uses [React Native Paper] (https://callstack.github.io/react-native-paper/) for components
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
[Design](https://www.figma.com/file/vbo6MYrubpJwtVpUizrQMk/covid-tool?node-id=0%3A1)

[Trello](https://trello.com/b/WbzPBJrf/pneumonia-app)

[Documentation](https://drive.google.com/drive/folders/16lVSZA2ki3nhjJ35WkUwU6Zy7Tky_Ohx)
