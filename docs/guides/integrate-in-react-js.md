# Integrate in React.js

You can see a preview of integrating **intelligent** using Google's Gemini model, [here.](https://model-chatbot.vercel.app)

## Getting Started

To get started integrating **intelligent** into your React.js web application, you need to initialize your React project:

```sh
npm create vite@latest

✔ Project name: ... app
✔ Project framework: » React
✔ Select a variant: » JavaScript
```

Once you have initialized your React.js project build your `App.jsx` file

```jsx
import { GeminiService } from "intelligent";

export default function App() {
  async function getGeminiResponse() {
    const gemini = new GeminiService("API-KEY");
    const response = await gemini.response("Why is the sky blue?");
    const responseBody = document.getElementById("response");
    responseBody.innerHTML = response;
  }

  getGeminiResponse();

  return (
    <div>
            Question: Why is the sky blue?       <br />     {" "}
      <div
        style={{
          display: "flex",
        }}
      >
                Answer: <div id="response"></div>     {" "}
      </div>
         {" "}
    </div>
  );
}
```

Let's break it down so you can understand what's going on.

> “What I cannot build. I do not understand.”
> \*~ **Richard Feynman\***

## How does this work?

This is a React functional component named `App` that uses the `{ GeminiService }` class from the `intelligent` library to fetch a response to a question ("Why is the sky blue?") and display the answer in the component.

An asynchronous function `getGeminiResponse` is defined inside the `App` component. This function is responsible for fetching the response from the `GeminiService`.

1. **Instantiating GeminiService and fetching response**
   ```jsx
   const gemini = new GeminiService("API-KEY");
   const response = await gemini.response("Why is the sky blue?");
   ```

After fetching the response, the component updates the HTML element with the id "response" with the received response.

2. **Calling getGeminiResponse**

```jsx
getGeminiResponse();
```

Finally, the `App` component returns JSX that renders a question ("Why is the sky blue?") and a container to display the answer. The answer container has an id "response" which is updated with the actual response by the `getGeminiResponse` function.
