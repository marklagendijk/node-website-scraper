var config = {
	defaultFilename: 'index.html',
	prettifyUrls: false,
	sources: [
		{ selector: 'img', attr: 'src' },
		{ selector: 'img', attr: 'srcset' },
		{ selector: 'input', attr: 'src' },
		{ selector: 'object', attr: 'data' },
		{ selector: 'embed', attr: 'src' },
		{ selector: 'param[name="movie"]', attr: 'value' },
		{ selector: 'script', attr: 'src' },
		{ selector: 'link[rel="stylesheet"]', attr: 'href' },
		{ selector: 'link[rel*="icon"]', attr: 'href' }
	],
	subdirectories: [
		{ directory: 'images', extensions: ['.png', '.jpg', '.jpeg', '.gif'] },
		{ directory: 'js', extensions: ['.js'] },
		{ directory: 'css', extensions: ['.css'] },
		{ directory: 'fonts', extensions: ['.ttf', '.woff', '.eot', '.svg'] }
	],
	request: {
		encoding: 'binary',
		strictSSL: false,
		jar: true,
		gzip: true
	},
	urlFilter: function urlFilter (){
		return true;
	}
};

module.exports = config;
