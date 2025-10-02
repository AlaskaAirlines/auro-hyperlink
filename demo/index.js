import { roleButtonExample } from "../apiExamples/roleButton";
import { AuroHyperlink } from "../src/auro-hyperlink.js";

AuroHyperlink.register();
AuroHyperlink.register("custom-hyperlink");

function initHyperlinkIndexExamples(initCount) {
  // biome-ignore lint: no-unused-vars
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

initHyperlinkIndexExamples();
