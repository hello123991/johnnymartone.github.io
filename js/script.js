function addLens(title, desc, image, link) {
    var d = document.createElement("div")
    d.className = "item"
    d.id = title.toLowerCase()
    d.innerHTML = `
        <h1 class="label">
            ${title}
        </h1>
        <h3 class="label">
            ${desc}
        </h3>
        <img class="icon" src=${image}>
        <h1> </h1>
    `
    d.addEventListener("click",() => {
        window.open(link, "_blank")
    })
    var holder = document.getElementById('lenses')
    holder.appendChild(d)
}
addLens("Long Chin", "Views: <b>1,348,640</b><br>Plays: <b>1,220,238</b>", "https://lens-storage.storage.googleapis.com/png/0288aa5b92ff4c4799d1d33456bb973d", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f4aaddr1vyh3ysu2rl4q2llq80sptvk3hftr8xen8dc73kdc3ezlqngpqtaye")
addLens("Very long face", "Views: <b>646,519</b><br>Plays: <b>595,413</b>", "Images/VeryLongFace.png", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8a9d3bccfc1743e19fe4d2c215449819&metadata=01")
addLens("What animal am I", "Views: <b>532,949</b><br>Plays: <b>488,927</b>", "https://lens-storage.storage.googleapis.com/png/21482161b82847909ec4dcea80572b8a", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=67018a2794b14344ae07c8559eea9072&metadata=01")
addLens("Rainbow Hair", "Views: <b>380,363</b><br>Plays: <b>371,085</b>", "https://lens-storage.storage.googleapis.com/png/3d14b3c210834fbd87fea54866f9eabe", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=44d167c739074d9abf5d3ec1bea6bfba&metadata=01")
addLens("some kinda monkey", "Views: <b>355,117</b><br>Plays: <b>334,367</b>", "https://lens-storage.storage.googleapis.com/png/29b606962ac5442991968aea34c3e2b2", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5f20223650c6472f911538866d2010af&metadata=01")
addLens("What cat am I", "Views: <b>333,432</b><br>Plays: <b>315,108</b>", "https://lens-storage.storage.googleapis.com/png/75eba68feeda493ea268fc9ad621ba98", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=55b44b469afe43738ba3bc55d46d3384&metadata=01")
addLens("What dog am I", "Views: <b>301,186</b><br>Plays: <b>282,228</b>", "https://lens-storage.storage.googleapis.com/png/82addfd76f154c31a39e1b24ed5c4dfd", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9e84a886ca2f409b9d3b0ba6da6d786f&metadata=01")
addLens("Triangle Head", "Views: <b>250,182</b><br>Plays: <b>237,126</b>", "https://lens-storage.storage.googleapis.com/png/10e69611045a40948fa3be5a214e9555", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=909928132c4a4fb19d017e671a424aad&metadata=01")
addLens("What fish am I", "Views: <b>190,723</b><br>Plays: <b>177,912</b>", "https://lens-storage.storage.googleapis.com/png/3b91ffe22d1249ba96e33e0fadf10072", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b0f9615710c04ca490e0cdc7cd33dcb7&metadata=01")
addLens("What bird am I", "Views: <b>142,884</b><br>Plays: <b>137,380</b>", "https://lens-storage.storage.googleapis.com/png/5109389d746e4786b539932d409bdbe1", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dd3c108d465248bca8d7e8a17854bcd1&metadata=01")
addLens("Cartoon Face", "Views: <b>61,559</b><br>Plays: <b>59,178</b>", "https://lens-storage.storage.googleapis.com/png/143e67da484d470a8c3b1abf350f5e2c", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=86d780e0d1b249868cb5d9e515c30d65&metadata=01")
addLens("Green Hologram", "Views: <b>49,280</b><br>Plays: <b>47,448</b>", "https://lens-storage.storage.googleapis.com/png/b107357efca6456691b0f93252deb87b", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=40558a7462cd49ad93c86923888b99e7&metadata=01")
addLens("Reaction Time Test", "Views: <b>4,859</b><br>Plays: <b>4,156</b>", "https://lens-storage.storage.googleapis.com/png/0181d22a93454d46b045252974b7583f", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=79d74b845ec04fe8bfc9d96cfb22adec&metadata=01")
addLens("Happy 4th Of July", "Views: <b>7,871</b><br>Plays: <b>4,143</b>", "https://lens-storage.storage.googleapis.com/png/f878d729dadf4941b27ba7cb3af70e1a", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9adf910136e845989361da5b9d834849&metadata=01")
addLens("Square Head", "Views: <b>8,456</b><br>Plays: <b>3,547</b>", "https://lens-storage.storage.googleapis.com/png/3ddbf017624c4e47829e382fd84fe7ad", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1c4072beacf849edba5061fdcb911084&metadata=01")
addLens("Long Nose", "Views: <b>2,025</b><br>Plays: <b>1,538</b>", "https://lens-storage.storage.googleapis.com/png/7c75b20ebbab428ba2f3edad8dc1785e", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=06a570f47234495da5cd6be48410b6b2&metadata=01")
addLens("Smooth Pink Tint", "Views: <b>667</b><br>Plays: <b>373</b>", "https://lens-storage.storage.googleapis.com/png/7a536d7446904132832008ed14af6f28", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=17f6581d585d4139a1fb4abf24c110a1&metadata=01")
addLens("idk lol", "Views: <b>294</b><br>Plays: <b>265</b>", "https://lens-storage.storage.googleapis.com/png/b44b7ba8815e46cf8c1d1a24550a02fe", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f0c48e9fe52b445aa9c930aa48d31392&metadata=01")
addLens("Mouth Open Counter", "Views: <b>259</b><br>Plays: <b>220</b>", "https://lens-storage.storage.googleapis.com/png/b39a9865ebd94cf2bbd5084b210162a9", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ad1a546f5b2a4887a23bfcdb3b623679&metadata=01")
addLens("idk", "Views: <b>409</b><br>Plays: <b>210</b>", "https://lens-storage.storage.googleapis.com/png/867bfd37950f4f98ae6689de63ce1863", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ff7515eb19db4f348b403e969a48a566&metadata=01")
addLens("Many Eyes", "Views: <b>218</b><br>Plays: <b>139</b>", "https://lens-storage.storage.googleapis.com/png/d4d891dac4424a2690bdcb44a88eb400", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=90ffadd835a64444b82aae6751767bf5&metadata=01")
addLens("Red Hologram", "Views: <b>96</b><br>Plays: <b>91</b>", "https://lens-storage.storage.googleapis.com/png/82cb0cf385ae491f86f255b327d82ade", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=4b561b6d58dd41ea98513356b4a2e582&metadata=01")
addLens("Album Cover", "Views: <b>155</b><br>Plays: <b>86</b>", "https://lens-storage.storage.googleapis.com/png/d271af59b6e247aea90244a80870b4e2", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aa6f2e2af85a459cb2802eb97d1c2707&metadata=01")
addLens("Blue Hologram", "Views: <b>82</b><br>Plays: <b>80</b>", "https://lens-storage.storage.googleapis.com/png/84bc120ad7414dcca36fc39bb21317b8", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=52e45717b13e447c87e5c338ab092ed8&metadata=01")
addLens("Blob", "Views: <b>59</b><br>Plays: <b>57</b>", "https://lens-storage.storage.googleapis.com/png/86d3ac27aad14a8dbce79ee6f1ef095c", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d31973d4019446e6b7337c4c10896c44&metadata=01")
addLens("Blue Blur", "Views: <b>42</b><br>Plays: <b>42</b>", "https://lens-storage.storage.googleapis.com/png/eb955a72fda74b54901a6752b9a4a92d", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=15f5f7727253430fbb158f3fd0463bc1&metadata=01")
addLens("Today", "Views: <b>7</b><br>Plays: <b>7</b>", "https://lens-storage.storage.googleapis.com/png/a7f8cca723a04a8a92ff61b31a29e072", "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=063e0dc2e9ac4823bbc56391b2de58e7&metadata=01")
function getDocumentOffsetPosition(el) {
    let top = 0, left = 0;
    while (el !== null) {
        top += el.offsetTop;
        left += el.offsetLeft;
        el = el.offsetParent;
    }
    return {top, left};
}
var ll = document.getElementById("lensesl")
var al = document.getElementById("aboutmel")
var lensesNav = document.getElementById("navlenses")
lensesNav.addEventListener("click",() => {
    var pos = getDocumentOffsetPosition(ll)
    window.scroll({
        top: pos['top'], 
        left: pos['left'],
        behavior: "smooth"
    })
})
var HomeNav = document.getElementById("navhome")
HomeNav.addEventListener("click",() => {
    window.scroll({
        top: 0, 
        behavior: "smooth"
    })
})
var AboutMeNav = document.getElementById("navabtme")
AboutMeNav.addEventListener("click",() => {
    var pos = getDocumentOffsetPosition(al)
    window.scroll({
        top: pos['top'], 
        left: pos['left'],
        behavior: "smooth"
    })
})
var i = 0
var speed = 50
function typeWriter(obj, txt) {
    if (i < txt.length) {
      obj.innerHTML += txt.charAt(i);
      i++;
      setTimeout(function(){typeWriter(obj, txt)}, speed);
    }
}
window.onload = function(){
    var s = document.getElementById("maintitle")
    s.innerHTML = ""
    typeWriter(s, "My Portfolio!")
}
