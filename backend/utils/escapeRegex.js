// Escapes characters that have special meaning in regular expressions.
// Used before building any $regex query from user-supplied search input,
// to prevent both incorrect matching and ReDoS (catastrophic backtracking).
const escapeRegex = (str) => String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

module.exports = escapeRegex;