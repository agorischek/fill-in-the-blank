# Fill in the Blank

Add variation to your content through randomized placeholders. Great for inspiring creativity in language model prompts.

```ts
const prompt = `Would a ${animal} make a good ${profession}?`;
// "Would a finch make a good scientist?"
// "Would a leopard make a good architect?"
// "Would a rhinoceros make a good farmer?"
```

## Blanks

Fill in the Blank provides blanks for common types of entities:

- `animal`: elephant, etc.
- `appliance`: refrigerator, toaster, etc.
- `color`: red, blue, green, etc.
- `degree`: somewhat, very, etc.
- `emotion`: happy, sad, etc.
- `exercise`: running, skiing, etc.
- `letter`: a, b, c, etc.
- `musicGenre`: pop, rock, etc.
- `percent`: 2%, 50%, 70%, etc.
- `plant`: daisy, pine, tulip, etc.
- `profession`: doctor, lawyer, etc.
- `programmingLanguage`: Ruby, TypeScript, etc.
- `vehicle`: bus, submarine, van, etc.

Custom blanks can be implemented using the `blank` function:

```ts
const clothing = blank("hat", "shirt", "shorts", "shoes");
const prompt = `What color ${clothing} should I wear?`;
```

## Q&A

### Why do I need this?

Even with high temperatures, language models will often return the same response for simple queries like `"Write me a joke"`. Fill in the Blank can provide variation in system instructions that adds creativity to the responses. For example, try adding something like this to your system prompt:

```ts
`You are a ${emotion} ${profession} who enjoys ${exercise}. You like ${musicGenre} music and you ride a ${vehicle} to work.`;
```

### Are the words selected randomly?

Not entirely. The order of the options is shuffled, however the blanks keep track of options that have already been used, and will use all available options before looping around. Additionally, the same option will not be returned twice in a row (even when looping around).

### Do I need to invoke the blanks?

You can, but you don't have to. A blank is a function that returns a placeholder string and whose `toString` method also returns a placeholder string. This means that, in contexts where objects are automatically cast to strings, `color` and `color()` are functionally equivalent. Invoking them is more universally applicable, however, leaving off the parentheses may be more readable in longer content, such as prompts.
