module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 66], // github commit without being trucated
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "release",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "ci",
        "build",
      ],
    ],
  },
  "scope-enum": [2, "always", ["utils", "hooks", "eslint"]],
  "scope-empty": [1, "never"],
  "scope-case": [2, "always", ["lower-case"]],
}
