const input = document.querySelector(".input")
input.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var checked = document.querySelector('.cbox1')
        checked.click()

        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardA = document.querySelector(".back1")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardA.innerHTML = ""
                cardA.append(name)
            } else {
                let cardA = document.querySelector(".back1")
                cardA.innerHTML = ""
                let img = document.createElement("img")
                img.setAttribute("src", obj.avatar_url)
                let name = document.createElement("a")
                name.textContent = obj.name
                let location = document.createElement("p")
                location.textContent = obj.location
                let h1 = document.createElement("h1")
                h1.textContent = "Repo Followers following"
                let h2 = document.createElement("h2")
                h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
                cardA.append(img, name, location, h2, h1)
                return points1 = (obj.public_repos + obj.followers) / 2
            }
        }
        req.send();
    }
})

const input2 = document.querySelector(".input2")
input2.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var checked = document.querySelector('.cbox2')
        checked.click()
        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardB = document.querySelector(".back2")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardB.innerHTML = ""
                cardB.append(name)
            } else {
                let cardB = document.querySelector(".back2")
                cardB.innerHTML = ""
                    // cardA.innerHTML=`<img src="${obj.avatar_url}">
                    // <a>${obj.name}</a>
                    // <p>${obj.location}</p>`
                let img = document.createElement("img")
                img.setAttribute("src", obj.avatar_url)
                let name = document.createElement("a")
                name.textContent = obj.name
                let location = document.createElement("p")
                location.textContent = obj.location
                let h1 = document.createElement("h1")
                h1.textContent = "Repo Followers following"
                let h2 = document.createElement("h2")
                h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
                cardB.append(img, name, location, h2, h1)
                return points2 = (obj.public_repos + obj.followers) / 2
            }
        }
        req.send();
    }
})


const input3 = document.querySelector(".input3")
input3.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var checked = document.querySelector('.cbox3')
        checked.click()
        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardC = document.querySelector(".back3")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardC.innerHTML = ""
                cardC.append(name)
            } else {
                let cardC = document.querySelector(".back3")
                cardC.innerHTML = ""
                    // cardA.innerHTML=`<img src="${obj.avatar_url}">
                    // <a>${obj.name}</a>
                    // <p>${obj.location}</p>`
                let img = document.createElement("img")
                img.setAttribute("src", obj.avatar_url)
                let name = document.createElement("a")
                name.textContent = obj.name
                let location = document.createElement("p")
                location.textContent = obj.location
                let h1 = document.createElement("h1")
                h1.textContent = "Repo Followers following"
                let h2 = document.createElement("h2")
                h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
                cardC.append(img, name, location, h2, h1)
                return points3 = (obj.public_repos + obj.followers) / 2
            }
        }
        req.send();
    }
})



const input4 = document.querySelector(".input4")
input4.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var checked = document.querySelector('.cbox4')
        checked.click()
        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardD = document.querySelector(".back4")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardD.innerHTML = ""
                cardD.append(name)
            } else {
                let cardD = document.querySelector(".back4")
                cardD.innerHTML = ""
                    // cardA.innerHTML=`<img src="${obj.avatar_url}">
                    // <a>${obj.name}</a>
                    // <p>${obj.location}</p>`
                let img = document.createElement("img")
                img.setAttribute("src", obj.avatar_url)
                let name = document.createElement("a")
                name.textContent = obj.name
                let location = document.createElement("p")
                location.textContent = obj.location
                let h1 = document.createElement("h1")
                h1.textContent = "Repo Followers following"
                let h2 = document.createElement("h2")
                h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
                cardD.append(img, name, location, h2, h1)
                return points4 = (obj.public_repos + obj.followers) / 2
            }
        }
        req.send();
    }
})




const input5 = document.querySelector(".input5")
input5.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        var checked = document.querySelector('.cbox5')
        checked.click()
        console.log(e.target.value)
        let req = new XMLHttpRequest;
        req.open('GET', `https://api.github.com/users/${e.target.value}`)
        req.onload = () => {
            obj = (JSON.parse(req.response))
            if (obj.public_repos == undefined) {
                let cardE = document.querySelector(".back5")
                let name = document.createElement("a")
                name.textContent = "userid not found"
                cardE.innerHTML = ""
                cardE.append(name)
            } else {
                let cardE = document.querySelector(".back5")
                cardE.innerHTML = ""
                    // cardA.innerHTML=`<img src="${obj.avatar_url}">
                    // <a>${obj.name}</a>
                    // <p>${obj.location}</p>`
                let img = document.createElement("img")
                img.setAttribute("src", obj.avatar_url)
                let name = document.createElement("a")
                name.textContent = obj.name
                let location = document.createElement("p")
                location.textContent = obj.location
                let h1 = document.createElement("h1")
                h1.textContent = "Repo Followers following"
                let h2 = document.createElement("h2")
                h2.textContent = `${obj.public_repos} ${obj.followers} ${obj.following}`
                cardE.append(img, name, location, h2, h1)
                return points5 = (obj.public_repos + obj.followers) / 2
            }
        }
        req.send();
    }
})



let battle = document.querySelector(".battle")
battle.addEventListener('click', (e) => {
    points = [points1, points2, points3, points4, points5];

    let cardA = document.querySelector(".front1");
    let cardB = document.querySelector(".front2");
    let cardC = document.querySelector(".front3");
    let cardD = document.querySelector(".front4");
    let cardE = document.querySelector(".front5");
    if (points1 == points.sort()[4]) {
        cardA.style.cssText = "background: url('winner.jpg'); background-size: cover";
    } else if (points2 == points.sort()[4]) {
        cardB.style.cssText = "background: url('winner.jpg'); background-size: cover";
    } else if (points3 == points.sort()[4]) {
        cardC.style.cssText = "background: url('winner.jpg'); background-size: cover";
    } else if (points4 == points.sort()[4]) {
        cardD.style.cssText = "background: url('winner.jpg'); background-size: cover";
    } else if (points5 == points.sort()[4]) {
        cardE.style.cssText = "background: url('winner.jpg'); background-size: cover";
    }
    if (points1 == points.sort()[3]) {
        cardA.style.cssText = "background: url('king.png'); background-size: cover";
    } else if (points2 == points.sort()[3]) {
        cardB.style.cssText = "background: url('king.png'); background-size: cover";
    } else if (points3 == points.sort()[3]) {
        cardC.style.cssText = "background: url('king.png'); background-size: cover";
    } else if (points4 == points.sort()[3]) {
        cardD.style.cssText = "background: url('king.png'); background-size: cover";
    } else if (points5 == points.sort()[3]) {
        cardE.style.cssText = "background: url('king.png'); background-size: cover";
    }
    if (points1 == points.sort()[2]) {
        cardA.style.cssText = "background: url('queen.png'); background-size: cover";
    } else if (points2 == points.sort()[2]) {
        cardB.style.cssText = "background: url('queen.png'); background-size: cover";
    } else if (points3 == points.sort()[2]) {
        cardC.style.cssText = "background: url('queen.png'); background-size: cover";
    } else if (points4 == points.sort()[2]) {
        cardD.style.cssText = "background: url('queen.png'); background-size: cover";
    } else if (points5 == points.sort()[2]) {
        cardE.style.cssText = "background: url('queen.png'); background-size: cover";
    }
    if (points1 == points.sort()[1]) {
        cardA.style.cssText = "background: url('jack.png'); background-size: cover";
    } else if (points2 == points.sort()[1]) {
        cardB.style.cssText = "background: url('jack.png'); background-size: cover";
    } else if (points3 == points.sort()[1]) {
        cardC.style.cssText = "background: url('jack.png'); background-size: cover";
    } else if (points4 == points.sort()[1]) {
        cardD.style.cssText = "background: url('jack.png'); background-size: cover";
    } else if (points5 == points.sort()[1]) {
        cardE.style.cssText = "background: url('jack.png'); background-size: cover";
    }
    if (points1 == points.sort()[0]) {
        cardA.style.cssText = "background: url('ten.png'); background-size: cover";
    } else if (points2 == points.sort()[0]) {
        cardB.style.cssText = "background: url('ten.png'); background-size: cover";
    } else if (points3 == points.sort()[0]) {
        cardC.style.cssText = "background: url('ten.png'); background-size: cover";
    } else if (points4 == points.sort()[0]) {
        cardD.style.cssText = "background: url('ten.png'); background-size: cover";
    } else if (points5 == points.sort()[0]) {
        cardE.style.cssText = "background: url('ten.png'); background-size: cover";
    }
})