import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native-web";
import LoginScreen from "../components/LoginScreen";
import * as SecureStore from "expo-secure-store";


const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
 async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};
export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
    <Stack>
      <Stack.Screen name="(tabs)"  options={{
        headerShown: false,
      }}/>
    </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen/>
    </SignedOut>
    </ClerkProvider>
  );
}
