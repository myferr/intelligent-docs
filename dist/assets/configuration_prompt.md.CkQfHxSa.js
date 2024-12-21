import{_ as s,c as i,o as a,a1 as t}from"./chunks/framework.D0utey4O.js";const c=JSON.parse(`{"title":"Configuring your AI model's prompt","description":"","frontmatter":{},"headers":[],"relativePath":"configuration/prompt.md","filePath":"configuration/prompt.md"}`),e={name:"configuration/prompt.md"},n=t(`<h1 id="configuring-your-ai-model-s-prompt" tabindex="-1">Configuring your AI model&#39;s prompt <a class="header-anchor" href="#configuring-your-ai-model-s-prompt" aria-label="Permalink to &quot;Configuring your AI model&#39;s prompt&quot;">​</a></h1><p>To configure the AI model&#39;s prompt, you need to provide a string input that represents the prompt or question you want the model to respond to.</p><h2 id="prompt-recommendations" tabindex="-1">Prompt Recommendations <a class="header-anchor" href="#prompt-recommendations" aria-label="Permalink to &quot;Prompt Recommendations&quot;">​</a></h2><p>When crafting your prompt, keep the following guidelines in mind:</p><ul><li><strong>Be specific</strong>: Clearly define what you want the model to generate or respond to.</li><li><strong>Use natural language</strong>: Phrase your prompt as you would in everyday conversation.</li><li><strong>Avoid ambiguity</strong>: Ensure your prompt is unambiguous and easy to understand.</li><li><strong>Keep it concise</strong>: Aim for a prompt that is 1-2 sentences long.</li></ul><h2 id="prompt-examples" tabindex="-1">Prompt Examples <a class="header-anchor" href="#prompt-examples" aria-label="Permalink to &quot;Prompt Examples&quot;">​</a></h2><p>Here are some examples of well-crafted prompts:</p><ul><li><strong>Simple question</strong>: &quot;What is the capital of France?&quot;</li><li><strong>Text generation</strong>: &quot;Write a short story about a character who discovers a hidden world.&quot;</li><li><strong>Conversational dialogue</strong>: &quot;I&#39;m planning a trip to Japan. Can you recommend some popular tourist destinations?&quot;</li></ul><h2 id="prompt-parameters" tabindex="-1">Prompt Parameters <a class="header-anchor" href="#prompt-parameters" aria-label="Permalink to &quot;Prompt Parameters&quot;">​</a></h2><p>When calling the <code>response</code> method, you can pass the prompt as a string parameter. For example:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GeminiService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;intelligent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ai</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GeminiService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YOUR_API_KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;What is the meaning of life?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// You can also place your prompt in the \`ai.response\` function.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ai.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prompt).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>By following these recommendations and examples, you can effectively configure the AI model&#39;s prompt to generate accurate and relevant responses.</p>`,12),o=[n];function p(r,l,h,k,d,m){return a(),i("div",null,o)}const u=s(e,[["render",p]]);export{c as __pageData,u as default};