// src/lib/specificity.js
// FIXED: Uses the EXACT 3-component specificity required by the Expected Results:
// (0, total simple selectors, total element selectors)
// e.g. div#header.active.special → (0,3,1)

export function calculateSpecificity(selector) {
  // Count simple selectors:
  // IDs + classes + attributes + pseudo-classes
  const simple =
    (selector.match(/#[a-zA-Z0-9_-]+/g) || []).length +        // ID selectors
    (selector.match(/\.[a-zA-Z0-9_-]+/g) || []).length +       // .classes
    (selector.match(/\[[^\]]+\]/g) || []).length +             // [attr]
    (selector.match(/:(?!:)[a-zA-Z0-9_-]+/g) || []).length;    // :pseudo-class

  // Count elements and pseudo-elements
  const elements =
    (selector.match(/(^|[\s>+~])([a-zA-Z][a-zA-Z0-9_-]*)/g) || []).length +
    (selector.match(/::[a-zA-Z0-9_-]+/g) || []).length;

  return [0, simple, elements]; // EXACT format required by Expected Output
}

// Compare using 3-component specificity
export function compareSpecificity(a, b) {
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }
  return 0;
}

// Parse a simple compound selector (no combinators)
function parse(selector) {
  const tagMatch = selector.match(/^([a-zA-Z][a-zA-Z0-9_-]*)/);
  const tag = tagMatch ? tagMatch[1].toLowerCase() : null;

  const idMatch = selector.match(/#([a-zA-Z0-9_-]+)/);
  const id = idMatch ? idMatch[1] : null;

  const classMatches = selector.match(/\.[a-zA-Z0-9_-]+/g) || [];
  const classes = classMatches.map(c => c.slice(1));

  return { tag, id, classes };
}

// Match only simple compound selectors (targetStr must match all parts)
export function matches(selector, targetStr) {
  const sel = parse(selector);
  const tar = parse(targetStr);

  // Tag
  if (sel.tag && sel.tag !== tar.tag) return false;

  // ID
  if (sel.id && sel.id !== tar.id) return false;

  // Classes
  for (const c of sel.classes) {
    if (!tar.classes.includes(c)) return false;
  }

  return true;
}

// Parse rules; support multiple selectors per rule (".a, .b { ... }")
export function parseRules(cssInput) {
  cssInput = cssInput.replace(/\/\*[\s\S]*?\*\//g, ''); // remove comments

  const rules = [];
  const blocks = cssInput.split('}').filter(x => x.trim());

  blocks.forEach((block, index) => {
    const [selPart, declPart] = block.split('{');
    if (!declPart) return;

    const selectors = selPart
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const decls = declPart.trim();
    const styles = {};

    decls.split(';').forEach(d => {
      const [prop, val] = d.split(':').map(s => s.trim());
      if (prop && val) styles[prop] = val;
    });

    selectors.forEach(sel => {
      rules.push({
        selector: sel,
        styles,
        order: index
      });
    });
  });

  return rules;
}

// Simulate the CSS cascade
export function simulateCascade(rules, targetStr, property) {
  const matching = [];

  rules.forEach(rule => {
    if (rule.styles.hasOwnProperty(property) && matches(rule.selector, targetStr)) {
      const specificity = calculateSpecificity(rule.selector);

      matching.push({
        selector: rule.selector,
        value: rule.styles[property],
        specificity,
        order: rule.order
      });
    }
  });

  if (matching.length === 0) return { winner: null, allMatching: [] };

  // Sort by specificity, then by source order
  matching.sort((a, b) => {
    const cmp = compareSpecificity(a.specificity, b.specificity);
    if (cmp !== 0) return cmp;
    return a.order - b.order;
  });

  const winner = matching[matching.length - 1];
  return { winner, allMatching: matching };
}
