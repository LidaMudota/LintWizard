import globals from "globals";
import pluginJs from "@eslint/js";


export default {
  files: ["**/*.js"],
  languageOptions: {
      sourceType: "commonjs",
  },
  rules: {
      semi: ["error", "always"], // Требовать точку с запятой
      quotes: ["error", "single"], // Использовать одинарные кавычки
      "no-unused-vars": ["warn"], // Предупреждать о неиспользуемых переменных
      "eqeqeq": ["error", "always"], // Требовать строгие сравнения === вместо ==
      "curly": ["error"], // Обязывать использовать фигурные скобки в if/else
  },
};
