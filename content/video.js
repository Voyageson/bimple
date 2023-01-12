// // debugger;
// function handleSomeDiv(right) { 
//     let left = document.querySelector('.left-container.scroll-sticky');
    
//     // 不要这个，删除右侧栏速度更快
//     // left.appendChild(right.firstChild);
//     // right.remove();

//     let child = right.childNodes;
//     let will_remove = [];
//     let i = 0;
//     for (e of child) {
//         if (e.attributes === undefined || e.attributes['id'] === undefined) {
//             will_remove[i] = e; i++;
//             console.log(e);
//             continue;
//         }
//         if (e.attributes['id'].nodeValue != 'multi_page') {
//             will_remove[i] = e; i++;
//             // console.log(e);
//             continue;
//         }
//         // console.log(e);
//     }
//     console.log(will_remove);

//     for (e of will_remove) {
//         e.remove();
//     }

//     observer.disconnect();
// }

// const observer = new MutationObserver(function (mutations, mutationInstance) {
//     const right = document.querySelector('.right-container-inner.scroll-sticky');
//     if (right) {
//         handleSomeDiv(right);
//         mutationInstance.disconnect();
//     }
// });

// observer.observe(document, {
//     childList: true,
//     subtree:   true
// });