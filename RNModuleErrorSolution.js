The solution depends on the specific library.  Many libraries provide automatic linking scripts.  If the automatic linking fails, manual linking is required and involves modifying Android's `android/app/build.gradle` and potentially iOS's `ios/Podfile` and Xcode project settings. Below is the corrected import after proper linking.

```javascript
import XYZComponent from 'react-native-xyz'; //Corrected import after linking

// ... rest of your component code
```
For a complex library, always refer to the library's documentation for detailed linking instructions.