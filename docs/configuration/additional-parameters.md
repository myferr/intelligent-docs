# Additional Parameters in the HuggingFace model.
> This is completely exclusive to the [HuggingFace](/integrations/huggingface) model.

When initializing your [HuggingFace](/integrations/huggingface) model you can add additional parameters.

> [!TIP] NOTE
> The additional parameters (`params`) is a `{}` type, meaning you can only use braces for this constructor parameter. The additional parameters (`params`) is an optional constructor parameter.

The default value of the additional parameters is

```ts
{ max_new_tokens: 50 }
```

You can customize this by filling out the second constructor parameter when initializing your [HuggingFace](/integrations/huggingface) model. **Example:**
```ts{3}
const { HuggingFaceService } = require("intelligent")

const ai = new HuggingFaceService("API-KEY", {})
// Replace `{}` with your additional parameters
```

