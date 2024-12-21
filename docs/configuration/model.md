# Configuring your model

The model parameter has an already set default value.

| Service     | Default value                | Module name          |
| ----------- | ---------------------------- | -------------------- |
| Gemini      | `gemini-1.5-flash`           | `GeminiService`      |
| OpenAI      | `gpt-4o-mini`                | `OpenAIService`      |
| Claude      | `claude-3-5-sonnet-20241022` | `ClaudeService`      |
| Ollama      | `llava`                      | `OllamaService`      |
| HuggingFace | `gpt2`                       | `HuggingFaceService` |
| Grok        | `grok-2-1212`                | `GrokService`        |

You can customize the `model` parameter using the code below

```js
const ai = new GeminiService("YOUR-API-KEY", "PROVIDE-MODEL-HERE");
```

> Use the imported service not just `GeminiService`!

```js
const { GeminiService } = require("intelligent");

const ai = new GeminiService("API-KEY");

ai.response("Why is the sky blue?").then((res) => {
  console.log(res);
});
```
> Using default model value.

```js
const { GeminiService } = require("intelligent");

const ai = new GeminiService("API-KEY", "gemini-1.5-pro");

ai.response("Why is the sky blue?").then((res) => {
  console.log(res);
});
```
> Using `gemini-1.5-pro` as model value.
