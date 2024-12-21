# Introduction
**intelligent** is a simplistic and clean utility library to simplify the usage of AI services for Node.js applications and libraries, **intelligent** is useful for AI-related Node.js applications, AI-related JavaScript libraries, etc.

**intelligent** supports multiple artificial **intelligence** services and offers model configuration.

::: code-group

```ts [Without Intelligent]
const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI("API-KEY")
const ai = genAI.getGenerativeModel({
	model: "MODEL"
})

const res = await ai.generateContent("Explain AI.")
console.log(res.response.text())
```

```ts [With Intelligent]
const { GeminiService } = require("intelligent");

const ai = new GeminiService("API-KEY", "gemini-1.5-pro");
// Each service comes with a default model.
// Customizing the model parameter is completely optional

ai.response("Why is the sky blue?").then((res) => {
  console.log(res);
});
```

:::

Each model has a preset value for the `model` parameter when initializing your AI integration.

| Service     | Default/preset value                | Module name          |
| ----------- | ---------------------------- | -------------------- |
| Gemini      | `gemini-1.5-flash`           | `GeminiService`      |
| OpenAI      | `gpt-4o-mini`                | `OpenAIService`      |
| Claude      | `claude-3-5-sonnet-20241022` | `ClaudeService`      |
| Ollama      | `llava`                      | `OllamaService`      |
| HuggingFace | `gpt2`                       | `HuggingFaceService` |
| Grok        | `grok-2-1212`                | `GrokService`        |
