// remove search placeholder
const targetNode = document.getElementsByClassName("nav-search-input")[0]

const observer = new MutationObserver((mutationList, observer) => {
  console.log("mutate")
  for (const mutation of mutationList) {
    if (mutation.type === "attributes" && mutation.attributeName === "placeholder") {
      observer.disconnect();
      targetNode.setAttribute("placeholder", "")
    }
  }
});

observer.observe(targetNode, { attributes: true, childList: false, subtree: true });