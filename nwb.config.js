module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactScrollChanger",
      externals: {
        react: "React"
      }
    }
  }
};
