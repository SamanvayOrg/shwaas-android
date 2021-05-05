import LocalStorage from './LocalStorage';

class NavigatorUtil {
  static goToHome(navigation) {
    LocalStorage.getLocalState().then(localState => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home', params: {localState: localState}}],
      });
    });
  }
}

export default NavigatorUtil;
