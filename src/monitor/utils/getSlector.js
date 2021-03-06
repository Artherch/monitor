function getSelector (path) {
    return path.reverse().filter(ele => {
        return ele !== document && ele !== window
    }).map(item => {
        if (item.id) {
            return `${item.tagName.toLowerCase()}#${item.id}`
        } else if (item.className && typeof item.className == 'string') {
            return `${item.tagName.toLowerCase()}.${item.className}`
        } else {
            return item.nodeName.toLowerCase()
        }
        return selector
    }).join(' ')
}

export default function (pathOrTarget) {
    if (Array.isArray(pathOrTarget)) {
        return getSelector(pathOrTarget)
    } else {
        let path = []
        while (pathOrTarget) {
            path.push(pathOrTarget)
            pathOrTarget = pathOrTarget.parentNode
        }
        return getSelector(path)
    }
}