import { AuroHyperlink } from '../src/auro-hyperlink.js';

AuroHyperlink.register();
AuroHyperlink.register('custom-hyperlink');

export function initHyperlinkIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    // init
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initHyperlinkIndexExamples(initCount + 1);
      }, 100);
    }
  }
}

initHyperlinkIndexExamples();
