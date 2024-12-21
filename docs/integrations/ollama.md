# Using Ollama
Integrating Ollama into your program is simple using **intelligent**.

## Integrating a Locally-Installed Ollama AI Model

**intelligent** provides a simple interface for integrating a locally-installed OLLAMA AI model into your program. This document outlines the steps to get started.

## Prerequisites

- Node.js (version 14 or higher)
    
- Ollama installed locally on your machine
    
- `intelligent` installed. `npm install intelligent@latest`
## Usage

Here's a step-by-step guide to using the `OllamaService` class:

## 1. Import the `OllamaService` class

```ts
import { OllamaService } from 'intelligent';
```

## 2. Create an instance of the `OllamaService` class

Pass the name of the locally-installed OLLAMA model to the constructor. If no model name is provided, it defaults to "llava".

```ts
const ollamaService = new OllamaService('llava');
```

## 3. Call the `response` method

Pass a prompt to the `response` method to generate a response using the locally-installed OLLAMA model.

```ts
await ollamaService.response('Your prompt here').then((res) => {
  console.log(res);
});;
```

## Supported Models

The `OllamaService` class supports any locally-installed OLLAMA model. You can specify the model name when creating an instance of the `OllamaService` class.

## Example Use Case

Here's an example of using the `OllamaService` class to generate a response to a user's query:

```ts
import { OllamaService } from 'intelligent';

const ollamaService = new OllamaService('llava');

async function handleUserQuery(query) {
  try {
    await ollamaService.response(query).then((res) => {
	  console.log(res);
	});
  } catch (error) {
    console.error(error);
  }
}

handleUserQuery('What is the meaning of life?');
```

By following these steps, you can easily integrate a locally-installed Ollama AI model into your program using the `OllamaService` class.

## Troubleshooting

- Make sure Ollama is installed locally on your machine and the `ollama` & `intelligent` package is installed.
    
- Verify that the model name passed to the `OllamaService` constructor matches the name of the locally-installed Ollama model.
    
- Check the console for any error messages if the `response` method fails to generate a response.