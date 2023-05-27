
let myleads = [];
// myleads=JSON.parse(myleads);
// myleads.push("www.ayush.com");
// myleads=JSON.stringify(myleads);
// console.log(typeof myleads);
// localStorage.clear();
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const savebtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("savetab-btn");
// const tabs = [{ url: "https://www.linkedin.com/in/ayush-tibrewala-6044281b9/" }];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
const deleteBtn = document.getElementById("delete-btn");
if (leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage;
    render(myleads);
}
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myleads = [];
    render(myleads);
});
savebtn.addEventListener("click", function () {
    myleads.push(inputEl.value);
    localStorage.setItem("myleads", JSON.stringify(myleads));
    inputEl.value = "";
    // console.log(localStorage.getItem("myleads"));
    render(myleads);
});
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myleads));
        render(myleads);
    });
});
function render(leads) {
    let listitems = "";
    for (let i = 0; i < leads.length; i++) {
        listitems +=
            `
        <li>
        <a href='${leads[i]}' target='_blank'>
        ${leads[i]}
        </a>
        </li>
        `;
        // console.log(listitems);
        // let li=document.createElement("li");
        // li.textContent=myleads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listitems;
}
let recipient = "Bhumi";
let email = `
Hey ${recipient} How's it going? Cheers Ayush! 
`
console.log(typeof location.href);
console.log(email);


