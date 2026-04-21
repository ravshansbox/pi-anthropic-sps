import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

type AnthropicSystemBlock = {
	type: string;
	text?: string;
	cache_control?: { type: "ephemeral"; ttl?: "1h" | "5m" };
};

type AnthropicPayload = {
	model?: string;
	system?: AnthropicSystemBlock[] | string;
};

const BAD_LINES = new Set([
	"- When asked about: extensions (docs/extensions.md, examples/extensions/), themes (docs/themes.md), skills (docs/skills.md), prompt templates (docs/prompt-templates.md), TUI components (docs/tui.md), keybindings (docs/keybindings.md), SDK integrations (docs/sdk.md), custom providers (docs/custom-provider.md), adding models (docs/models.md), pi packages (docs/packages.md)",
	"- When working on pi topics, read the docs and examples, and follow .md cross-references before implementing",
]);

function stripBadLines(text: string): string {
	return text
		.split("\n")
		.filter((line) => !BAD_LINES.has(line))
		.join("\n");
}

function sanitizeSystem(system: AnthropicPayload["system"]): AnthropicPayload["system"] {
	if (typeof system === "string") {
		return stripBadLines(system);
	}

	if (Array.isArray(system)) {
		return system.map((block) => {
			if (block.type !== "text" || typeof block.text !== "string") {
				return block;
			}

			return {
				...block,
				text: stripBadLines(block.text),
			};
		});
	}

	return system;
}

export default function anthropicSystemPromptSanitizer(pi: ExtensionAPI) {
	pi.on("before_provider_request", (event) => {
		const payload = event.payload as AnthropicPayload;
		if (!payload || typeof payload !== "object") return;
		if (typeof payload.model !== "string") return;
		if (!payload.model.startsWith("claude-")) return;
		if (payload.system === undefined) return;

		return {
			...payload,
			system: sanitizeSystem(payload.system),
		};
	});
}
