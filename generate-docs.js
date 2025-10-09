import fs from 'fs';
import { customElementsManifestToMarkdown } from '@custom-elements-manifest/to-markdown';

const manifest = JSON.parse(fs.readFileSync('./custom-elements.json', 'utf-8'));
const markdown = customElementsManifestToMarkdown(manifest, {
    omitDeclarations: ['mixins', 'variables', 'functions', 'exports' ],
    omitSections: [ 'super-class', 'static-methods', 'fields', 'exports', 'main-heading', 'static-fields' ],
    private: 'details',
    classNameFilter: () => {
        // some logic regex exact match
        return '^AuroHyperlink$';
    } 
});

fs.writeFileSync('./auro-hyperlink-api.generated.md', markdown);