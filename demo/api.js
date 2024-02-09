export function initHyperlinkApiExamples(initCount) {
  initCount = initCount || 0;

  try {
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initHyperlinkApiExamples(initCount + 1);
      }, 100);
    }
  }
}
