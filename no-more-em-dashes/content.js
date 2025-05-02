(function() {
  function replaceEmDash(node) {
    node.nodeValue = node.nodeValue.replace(/\u2014/g, '-');
  }

  function shouldSkip(node) {
    const skipTags = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'TEXTAREA', 'INPUT']);
    return node.parentNode && skipTags.has(node.parentNode.nodeName);
  }

  function walkAndReplace(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
      if (node.nodeValue.includes('—') && !shouldSkip(node)) {
        replaceEmDash(node);
      }
    }
  }

  // Initial pass
  walkAndReplace(document.body);

  // Observe dynamic changes
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.nodeValue.includes('—') && !shouldSkip(node)) {
            replaceEmDash(node);
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          walkAndReplace(node);
        }
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();