module.exports = function check(str, bracketsConfig) {
	const config = bracketsConfig.map(el => el.join(''))

	for (let i = 0; i < config.length; i++) {
		while(1) {
			if (str.includes(config[i])) {
				str = str.replace(config[i], '')
				i = 0
			} else break
		}
	}

	return !str ? true : false
}