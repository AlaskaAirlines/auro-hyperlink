import { AuroHyperlink } from "../src/index";
import { roleButtonExample } from "../apiExamples/role-button";

AuroHyperlink.register();

function initHyperlinkApiExamples(initCount) {
  // biome-ignore lint: no-unused-vars
  initCount = initCount || 0;

  try {
    roleButtonExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initHyperlinkApiExamples(initCount + 1);
      }, 100);
    }
  }
}

initHyperlinkApiExamples();
