以下の内容を厳守すること

# custom slash commands を必ず実行する

ref: https://docs.anthropic.com/en/docs/claude-code/github-actions#using-slash-commands

github actions 内の`prompt`に記載されている`/`(slash)からはじまるのが、custom slash command
これと対応するマークダウンファイルが、.claude/commands ディレクトリに格納されているので、必ず参照すること

```yaml
prompt: "/custom-pr-review" # ./claude/commands/custom-pr-review.mdを参照する
```
