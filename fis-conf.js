//给这个资源文件添加上添加MD5戳
fis.match('*.{js,css,png,gif}', {
    useHash: true
});

//对js进行压缩
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

//对css进行压缩
fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});

//png图片进行压缩
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});