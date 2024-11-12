import * as nodePath from 'path';
const rootFolder=nodePath.basename(nodePath.resolve())

const buildFolder='./dist';
const srcFolder='./src';

export const path={
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    lang: `${buildFolder}/lang/`,
  },
  src: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.{svg}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/*.html`,
    lang: `${srcFolder}/lang/*.json`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}