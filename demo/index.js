import { roleButtonExample } from "../apiExamples/roleButton";

export function initHyperlinkIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    roleButtonExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initHyperlinkIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
