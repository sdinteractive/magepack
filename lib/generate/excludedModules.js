/**
 * List of modules that should be excluded from all bundles.
 */
module.exports = [
    /**
     * Also known as legacyBuild.min.js, still used by some extensions.
     * Overwrites native objects sometimes causing bugs so it's safer to exclude it.
     */
    'prototype',
    /**
     * Loaded and defined synchronously, should be skipped.
     */
    'mixins',
    /**
     * Build-in RequireJS modules.
     */
    'exports',
    'require',
    'module',
    'jquery/fileUploader/jquery.fileupload',
    'jquery/fileUploader/jquery.fileupload-process',
    'jquery/fileUploader/jquery.fileupload-video',
    'jquery/fileUploader/jquery.fileupload-audio',
    'jquery/fileUploader/jquery.fileupload-image',
    'jquery/file-uploader',
    'jquery/fileUploader/jquery.iframe-transport',
    'jquery/fileUploader/vendor/blueimp-load-image/js/load-image',
    'jquery/fileUploader/vendor/blueimp-load-image/js/load-image-meta',
    'jquery/fileUploader/vendor/blueimp-load-image/js/load-image-scale',
    'jquery/fileUploader/vendor/blueimp-load-image/js/load-image-orientation',
    'jquery/fileUploader/vendor/blueimp-load-image/js/load-image-exif',
    'jquery/fileUploader/vendor/blueimp-canvas-to-blob/js/canvas-to-blob',
    'jquery/fileUploader/vendor/jquery.ui.widget',
];
