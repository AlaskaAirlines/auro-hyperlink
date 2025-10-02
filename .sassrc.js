/**
 * Sass configuration
 *
 * This file configures the Sass compiler to correctly resolve import paths
 * for the Auro Design System.
 */
const path = require("node:path");

module.exports = {
  // Add node_modules to the includePaths so imports from node_modules can be resolved
  includePaths: [
    path.resolve(__dirname, "node_modules"),
    path.resolve(__dirname),
  ],
  // Other Sass options...
  style: "expanded",
};
