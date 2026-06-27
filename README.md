# pi-anthropic-sps

Anthropic system prompt sanitiser extension for pi.

## Install

Install directly from the command line:

```bash
pi install git:github.com/ravshansbox/pi-anthropic-sps
```

## Usage

Pi loads the extension from `./index.ts` and sanitises outgoing Anthropic system prompts for Claude models before the provider request is sent.

For example, if a Claude request contains the known problematic documentation lines in the `system` text, the extension removes those lines while leaving the rest of the prompt unchanged.

## Development

```bash
npm install
npm run typecheck
```
