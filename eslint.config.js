import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha // Add Mocha globals
      }
    }
  },
  pluginJs.configs.recommended,
];