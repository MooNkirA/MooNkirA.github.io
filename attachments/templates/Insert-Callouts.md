<%*
const callouts = {
	note: '🔵 ✏ Note',
	info: '🔵 ℹ Info',
	todo: '🔵 🔳 Todo',
	tip: '🌐 🔥 Tip / Hint',
	important: '🌐 🔥 Important',
	abstract: '🌐 📋 Abstract / Summary / TLDR',
	question: '🟡 ❓ Question / Help / FAQ',
	quote: '🔘 💬 Quote / Cite',
	example: '🟣 📑 Example',
	success: '🟢 ✔ Success / Check / Done',
	warning: '🟠 ⚠ Warning / Attention',
	caution: '🟠 ⚠ Caution',
	failure: '🔴 ❌ Failure / Fail / Missing',
	danger: '🔴 ⚡ Danger / Error',
	bug: '🔴 🐞 Bug',
};

const type = await tp.system.suggester(Object.values(callouts), Object.keys(callouts), true, 'Select callout type.');
// const fold = await tp.system.suggester(['None', 'Expanded', 'Collapsed'], ['', '+', '-'], true, 'Select callout fold option.');

const title = await tp.system.prompt('Title:', '', true);
// let content = await tp.system.prompt('Content (New line -> Shift + Enter):', '', true, true);
// content = content.split('\n').map(line => `> ${line}`).join('\n')

// const calloutHead = `> [!${type}]${fold} ${title}\n`;
const calloutHead = `> [!${type}] ${title}\n`;

// tR += calloutHead + content
tR += calloutHead
-%>