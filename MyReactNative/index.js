import { registerRootComponent } from 'expo';
import HomePage from './Development/ImagePicker';

// import App from './Development/App';
import MyImagePicker from './Development/ImagePicker';
import MyApp from './Development/temp';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HomePage);
