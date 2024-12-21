# Configuring your API key.
When initializing your AI model, you need an API key ("Ollama" is excluded from this statement).
You can configure your API key by filling the first constructor parameter in your AI model's class when initializing it using the `new` method.
```ts{3}
const { GeminiService } = require("intelligent")

const ai = new GeminiService("API-KEY")
// "API-KEY" is the first constructor parameter.
// Replace "API-KEY" with your actual required API key.
```
## Safety measures
* You're responsible for keeping your API key secure.
* Do NOT check API keys into source control.
* Client-side applications (Android, Swift, web, and Dart/Flutter) risk exposing API keys. I don't recommend using the AI client SDKs in production apps to call the AI model's API directly from your mobile and web apps.