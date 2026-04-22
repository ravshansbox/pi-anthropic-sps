# pi-anthropic-sps

Extension that sanitizes specific system-prompt lines from outgoing Anthropic payloads.

## Install

```bash
pi install git:github.com/ravshansbox/pi-anthropic-sps
```

## Behavior

Intercepts outgoing provider payloads and removes two known-problematic lines from Anthropic `system` text blocks for Claude models.