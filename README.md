# README

A typescript word frequency counter with 0 dependencies, built with test driven development.

```javascript
import { singleWordCount, allWordCount } from "word-frequency-counter";

singleWordCount("I am a sentence", "sentence"); // => 1;

allWordCount("I am a sentence"); // => Map{ 'I' => 1; 'am' => 1; 'a' => 1; 'sentence' => 1; };
```

```javascript
import {
  singleFrequencyCount,
  allFrequencyCount,
} from "word-frequency-counter";

singleFrequencyCount("I am a sentence", "sentence"); // => 0.25;

allFrequencyCount("I am a sentence"); // => Map{ 'I' => 0.25; 'am' => 0.25; 'a' => 0.25; 'sentence' => 0.25; };
```

All words are processed in the lower case. The following punctuation is removed from text before processing:

- ?
- !
- .
- ,
- ;
- :
- ()
- []
- "
- '
- &
- /

Phrases and words can be protected from the punctuation remover if desired, and as a result will be counted as single words.

```javascript
import { singleWordCount, allWordCount } from "word-frequency-counter";

singleWordCount("Lock & Co is a hatters in london", "Lock & Co", ["Lock & Co"]); // => 1;

allWordCount("Lock & Co is a hatters in london", ["Lock & Co"]); // => Map{ 'Lock & Co' => 1; 'is' => 1; 'a' => 1; 'hatters' => 1; 'in' => 1; 'london' => 1; };
```

```javascript
import {
  singleFrequencyCount,
  allFrequencyCount,
} from "word-frequency-counter";

singleFrequencyCount("Lock & Co is a hatters", "Lock & Co", ["Lock & Co"]); // => 0.25;

allFrequencyCount("Lock & Co is a hatters", ["Lock & Co"]); // => Map{ 'Lock & Co' => 0.25; 'is' => 0.25; 'a' => 0.25; 'hatters' => 0.25; };
```
