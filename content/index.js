
// 
const targetNode = document.getElementsByClassName('nav-search-input')[0];  // 选择需要观察变动的节点
const config = { attributes: true, attributeFilter: ['placeholder', 'title'] };  // 观察器的配置（需要观察什么变动）
const callback = function(mutationsList, observer) {
	// Use traditional 'for loops' for IE 11
	for(let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
			targetNode.setAttribute('placeholder', '');
			targetNode.setAttribute('title', '');
            observer.disconnect();
		}
	}
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
// 以上述配置开始观察目标节点
observer.observe(targetNode, config);
