module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    // 2个空格
    indent: ["off", 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "no-console": "off", // 允许console
    "max-len": "off", // 单行没有字数限制
    "object-curly-newline": "off", // 关闭大括号内换行符的一致性
    "comma-dangle": "off", // 关闭是否使用拖尾逗号
    "arrow-parens": "off", // 关闭箭头函数是否需要大括号
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // 允许使用js/jsx文件扩展
    "react/sort-comp": "off", // 关闭sort
    "react/no-array-index-key": "off", // 允许使用index作为List的key
    "no-unused-expressions": "off", // 允许三元表达式
    "import/no-unresolved": "off", // 允许require image
    "react/no-multi-comp": "off", // 允许一个文件定义多个组件
    "react/display-name": "off", // 不需要给组件定义displayName
    "react/prop-types": 0, //防止在react组件定义中缺少props验证
  },
};
