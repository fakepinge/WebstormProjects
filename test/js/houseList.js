function createScreenItem (title, className, imgName, rightImg) {
    let img = document.createElement("img")
    img.src = imgName
    img.style.width = '15px'
    img.style.height = '15px'
    img.style.marginLeft = '5px'

    let span = document.createElement("span")
    span.innerText = title
    span.style.marginLeft = '5px'
    span.style.fontSize = '13px'

    let saojiaoDiv = document.createElement("div")
    saojiaoDiv.style.display = 'flex'
    saojiaoDiv.style.flexDirection = 'row'
    saojiaoDiv.style.alignItems = 'center'
    saojiaoDiv.style.justifyContent = 'flex-end'
    saojiaoDiv.style.flex = '1'
    let sanjiao = document.createElement("img")
    sanjiao.src = rightImg
    sanjiao.style.width = "10px"
    sanjiao.style.height = "10px"
    sanjiao.style.marginRight = '5px'
    saojiaoDiv.appendChild(sanjiao)

    let div = document.createElement("div")
    div.className = className
    div.appendChild(img)
    div.appendChild(span)
    div.appendChild(saojiaoDiv)

    let sep = document.createElement("div")
    sep.style.backgroundColor = "rgb(18,95,156)"
    sep.style.width = '1px'
    sep.style.height = '70%'
    div.appendChild(sep)

    return div
}