# pi-anthropic-sps

Project-local pi extension that sanitizes specific system-prompt lines from outgoing Anthropic payloads.

## Install

Copy or symlink the extension into a project under:

- `.pi/extensions/anthropic-system-prompt-sanitizer.ts`

Or run pi with:

```bash
pi -e /Users/ravshan/Projects/pi-anthropic-sps/anthropic-system-prompt-sanitizer.ts
```

## Behavior

The extension intercepts outgoing provider payloads and removes two known-problematic lines from Anthropic `system` text blocks for Claude models.
