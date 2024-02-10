# README

```javascript
import { singleWordCount, allWordCount } from "word-frequency-counter";

singleWordCount("I am a sentence", "sentence"); // => 1;

allWordCount("I am a sentence", "sentence"); // => Map{ 'I' => 1; 'am' => 1; 'a' => 1; 'sentence' => 1; };
```

```javascript
import {
  singleFrequencyCount,
  allFrequencyCount,
} from "word-frequency-counter";

singleFrequencyCount("I am a sentence", "sentence"); // => 0.25;

allFrequencyCount("I am a sentence", "sentence"); // => Map{ 'I' => 0.25; 'am' => 0.25; 'a' => 0.25; 'sentence' => 0.25; };
```

Full stops, exclamation marks and question marks are removed from sentences before processing. All words are processed in the lower case.
