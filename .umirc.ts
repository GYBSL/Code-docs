import { defineConfig } from 'dumi';

export default defineConfig({
  title: '学习笔记文档',
  favicon: 'https://gitee.com/gybsl/image-upload/raw/master/image_docs/gybsl.png',
  logo: 'https://gitee.com/gybsl/image-upload/raw/master/image_docs/gybsl.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  history: {
    type: 'hash',
  },
  base: '/',
  publicPath: '/',
  exportStatic: {},
});
