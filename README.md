# pi-anthropic-sps

Extension that sanitizes specific system-prompt lines from outgoing Anthropic payloads.

## Install

```bash
pi install @ravshansbox/pi-anthropic-sps
```

Or for project-local development, copy/symlink to `.pi/extensions/`. Or run pi with:

```bash
pi -e ./src/index.ts
```

## Behavior

Intercepts outgoing provider payloads and removes two known-problematic lines from Anthropic `system` text blocks for Claude models.