# Using Gemini
Integrating Gemini into your program is simple using **intelligent**.

## Acquiring an API key.
* [Acquire an API key](https://aistudio.google.com/app/apikey) — [Google Docs - Get a Gemini API key](https://ai.google.dev/gemini-api/docs/api-key)
* [Safety measures](/configuration/api-key#safety-measures)
## Integrating Google's Gemini AI Model

**intelligent** provides a simple interface for integrating Google's Gemini AI model into your program. This document outlines the steps to get started.

## Prerequisites

- Node.js (version 14 or higher)
    
- A Google Cloud account with the Generative AI API enabled
    
- A valid API key for the Generative AI API
    
- `intelligent` installed. `npm install intelligent@latest`
## Installation

To use the `GeminiService` class, you'll need to install the required dependencies. Run the following command in your terminal:

Bash

```
npm install intelligent@latest
```

## Usage

Here's a step-by-step guide to using the `GeminiService` class:

## 1. Import the `GeminiService` class

```ts
import { GeminiService } from 'intelligent';
```

## 2. Create an instance of the `GeminiService` class

Pass your API key and optionally, the model name to the constructor. If no model name is provided, it defaults to "gemini-1.5-flash".

```ts
const geminiService = new GeminiService('API-KEY');
```

## 3. Call the `response` method

Pass a prompt to the `response` method to generate a response using the Gemini AI model.

```ts
geminiService.response('Your prompt here').then((res) => {
  console.log(res);
});
```

## Error Handling

If no API key is provided or if the API key is invalid, the `response` method will log an error message to the console.

## Example Use Case

Here's an example of using the `GeminiService` class to generate a response to a user's query:

```ts
import { GeminiService } from 'intelligent';

const geminiService = new GeminiService('YOUR_API_KEY', 'gemini-1.5-flash');

async function handleUserQuery(query) {
  try {
  await geminiService.response(query).then((res) => {
  console.log(res);
});
  } catch (error) {
    console.error(error);
  }
}

handleUserQuery('What is the meaning of life?');
```

By following these steps, you can easily integrate Google's Gemini AI model into your program using the `GeminiService` class.