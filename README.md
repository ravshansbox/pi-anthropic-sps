# pi-anthropic-sps

Anthropic system prompt sanitizer for pi.

## Install

```bash
pi install git:github.com/ravshansbox/pi-anthropic-sps
```

## Behavior

Intercepts outgoing provider payloads and removes known-problematic lines from Anthropic `system` text blocks for Claude models.