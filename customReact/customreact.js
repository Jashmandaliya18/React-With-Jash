const { Children } = require("react");

function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.chidren

    for (let prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    chidren: 'Click me to go to Google'
}

const mainContainer = document.querySelector(".root")


customRender(reactElement, mainContainer);
