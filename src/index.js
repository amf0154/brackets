module.exports = function check(str, bracketsConfig) {
	const leftBraces = bracketsConfig.map(x => x[0]);
	const rightBraces = bracketsConfig.map(x => x[1]);
	let stack = [];
  
	for(let i = 0; i < str.length; i++){
		const current = str[i];
		if (leftBraces.includes(current) && leftBraces.indexOf(current) !== rightBraces.indexOf(current)){			
			stack.push(current);
		} else if (leftBraces.indexOf(current) === rightBraces.indexOf(current)){
			if(stack.includes(current)){
				const lastLeftBrace = stack.pop();
				if (current !== lastLeftBrace) return false;
			} else {
				stack.push(current);
			}
		} else {
			if (stack.length === 0) return false;
			const lastLeftBrace = stack.pop();
			const currentBraceConfig = bracketsConfig.find(x => x[0] === lastLeftBrace);
			if (current !== currentBraceConfig[1]) return false;
		}
	}
	
	return stack.length === 0;
}
