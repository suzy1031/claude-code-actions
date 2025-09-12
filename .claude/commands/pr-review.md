---
allowed-tools: mcp__github__create_pending_pull_request_review,mcp__github__add_comment_to_pending_review,mcp__github__submit_pending_pull_request_review,mcp__github__get_pull_request_diff
description: Review a pull request
---

Please review this PR and provide inline feedback using the GitHub review system. Follow these steps:

1. **Start a review**: Use `mcp__github__create_pending_pull_request_review` to begin a pending review
2. **Get diff information**: Use `mcp__github__get_pull_request_diff` to understand the code changes and line numbers
3. **Add inline comments**: Use `mcp__github__add_comment_to_pending_review` for each specific piece of feedback on particular lines
4. **Submit the review**: Use `mcp__github__submit_pending_pull_request_review` with event type "COMMENT" (not "REQUEST_CHANGES") to publish all comments as a non-blocking review

Provide specific, actionable feedback. Use inline comments for line-specific issues and include an overall summary when submitting the review.

IMPORTANT:

- Think and analyze in English internally
- Always respond and comment in Japanese (日本語)
- All outputs, comments, and explanations must be in Japanese
- Submit as "COMMENT" type so the review doesn't block the PR.
