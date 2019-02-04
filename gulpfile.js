'use strict';

const { series, src, dest } = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const svgmin = require('gulp-svgmin');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');

function minifySvg() {
    return src('./img/polygonPortrait.svg')
    .pipe(svgmin())
    .pipe(dest('./out'))
}

exports.default = series(minifySvg);