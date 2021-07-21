const wrapper = document.getElementById("app");

function bem(element) {
if (!element.children) return;
const currentClass = element.classList[0];

[...element.children].forEach((child) => {
    const currentChildClass = child.classList[0];
    if (currentClass && currentChildClass) {
    child.classList.replace(
        currentChildClass,
        `${currentClass}__${currentChildClass}`
    );
    }

    if (child.children) bem(child);
    return;
});
}

[...wrapper.children].forEach((element) => {
    bem(element);
});