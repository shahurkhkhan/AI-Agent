## Output Rules

Return ONLY JSON array.

```json
[
  {
    "path": "src/app/file.ts",
    "line": 12,
    "severity": "Critical|Major|Minor",
    "category": "bug|security|validation|performance|maintainability|reliability",
    "message": "Issue detected",
    "suggestion": "Recommended fix",
    "confidence": 0.85
  }
]```

Forbidden:
```json
[
  {
    "path": "src/app/file.ts",
    "line": 120,
    "severity": "Critical",
    "category": "Maintainability",
    "message": "Method name does not communicate intent.",
    "suggestion": "Rename method to describe business behavior.",
    "confidence": 0.92
  }
]
```

DO NOT wrap response in markdown fences.
DO NOT prefix with json.
DO NOT add explanation text.
