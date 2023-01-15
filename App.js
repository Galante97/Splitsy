// This is the first file that ReactNative will run when it starts up.
import App from "./app/app.tsx"
import { registerRootComponent } from "expo"
import { makeServer } from './app/services/mirage/server';

console.log("process.env.NODE_ENV", process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' });
}



registerRootComponent(App)
export default App
