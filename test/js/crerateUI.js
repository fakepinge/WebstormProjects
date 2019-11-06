function createLeftButton(str) {
    let div = document.createElement("div")
    div.className = "leftDiv"

    let image = document.createElement("img")
    image.className = "selectImg"
    image.src = "../image/RZHouseSelected.png"

    let title = document.createElement("div")
    title.className = "selectTitle"
    title.innerText = str
    div.appendChild(image)
    div.appendChild(title)
    return div
}

function createRightItem(marginRight, bgColor) {
    let rightDiv = document.createElement("div")
    rightDiv.style.width = "32px"
    rightDiv.style.height = "65%"
    rightDiv.style.backgroundColor = bgColor
    rightDiv.style.marginRight = marginRight
    rightDiv.style.borderRadius = "2px"
    return rightDiv
}

function createToolRightButton(title) {
    let conDiv = document.createElement("div")
    conDiv.style.height = "100%"
    conDiv.style.display = "flex"
    conDiv.style.alignItems = "center"
    conDiv.style.justifyContent = "flex-start"

    let imgDiv = document.createElement("img")
    imgDiv.src = "../image/RZHouseSelected.png"
    imgDiv.style.marginLeft = "5px"
    imgDiv.style.width = "20px"
    imgDiv.style.height = "20px"
    imgDiv.style.display = "flex"
    imgDiv.style.alignItems = "center"
    imgDiv.style.justifyContent = "flex-start"
    conDiv.appendChild(imgDiv)

    let itemDiv = document.createElement("div")
    itemDiv.style.height = "100%"
    itemDiv.style.marginLeft = "5px"
    itemDiv.innerHTML = title
    itemDiv.style.color = "#3396fb"
    itemDiv.style.display = "flex"
    itemDiv.style.alignItems = "center"
    itemDiv.style.justifyContent = "flex-start"
    conDiv.appendChild(itemDiv)
    return conDiv
}

function createFitterDiv() {
    let fitterConDiv = document.createElement("div")
    fitterConDiv.style.height = "100%"
    fitterConDiv.style.marginRight = "50px"
    fitterConDiv.style.display = "flex"
    fitterConDiv.style.alignItems = "center"
    fitterConDiv.style.justifyContent = "flex-start"

    let fImgDiv = document.createElement("img")
    fImgDiv.src = "../image/RZHouseSelected.png"
    fImgDiv.style.marginLeft = "5px"
    fImgDiv.style.width = "20px"
    fImgDiv.style.height = "20px"
    fImgDiv.style.display = "flex"
    fImgDiv.style.alignItems = "center"
    fImgDiv.style.justifyContent = "flex-start"
    fitterConDiv.appendChild(fImgDiv)

    let fitterTilDiv = document.createElement("div")
    fitterTilDiv.style.height = "100%"
    fitterTilDiv.style.marginLeft = "5px"
    fitterTilDiv.style.color = "#3396fb"
    fitterTilDiv.innerHTML = "筛选："
    fitterTilDiv.style.display = "flex"
    fitterTilDiv.style.alignItems = "center"
    fitterTilDiv.style.justifyContent = "center"
    fitterConDiv.appendChild(fitterTilDiv)

    let fitterValDiv = document.createElement("div")
    fitterValDiv.style.height = "100%"
    fitterValDiv.style.marginLeft = "10px"
    fitterValDiv.style.color = "black"
    fitterValDiv.innerHTML = "默认"
    fitterValDiv.style.display = "flex"
    fitterValDiv.style.alignItems = "center"
    fitterValDiv.style.justifyContent = "center"
    fitterConDiv.appendChild(fitterValDiv)
    return fitterConDiv
}


function createContentCellDiv(obj) {

    let contentDiv = document.createElement("div")
    contentDiv.className = "contentCellDiv"

    let oneDiv = createFirstBlockDiv()
    contentDiv.appendChild(oneDiv)
    return contentDiv
}


function createFirstBlockDiv() {
    let div = document.createElement("div")
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.justifyContent = "center"
    div.style.width = "500px"
    div.style.height = "100%"
    div.style.backgroundColor = 'blue'

    let image = document.createElement("img")
    image.style.backgroundColor = 'yellow'
    image.style.width = '150px'
    image.style.height = '70%'
    image.style.marginLeft = '15px'
    div.appendChild(image)

    let span = document.createElement("span")
    span.innerHTML = "asdaaaaaaaaaaaaaaasdfgertye5rytretertertertertreterterter334rddfgdfgdfddfdfdffdf"
    span.style.font = '15px'
    span.style.color = 'black'

    div.appendChild(span)


    return div
}
























