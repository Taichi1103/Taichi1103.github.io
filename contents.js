const profile = {
    name: "仲野 太智 / Taichi Nakano",
    title: "日本学術振興会 特別研究員 (DC1)",
    research: [
        "ハイブリッド直流遮断技術の研究",
    ],
    awards: [
        { date: "2025/03", name: "工学部長賞" }
    ]
};

// 画面に反映させる処理
document.getElementById('name').innerText = profile.name;
document.getElementById('title').innerText = profile.title;

let html = "<h3>Research</h3><ul>";
profile.research.forEach(item => { html += `<li>${item}</li>`; });
html += "</ul><h3>Awards</h3><ul>";
profile.awards.forEach(item => { html += `<li><strong>${item.date}</strong>: ${item.name}</li>`; });
html += "</ul>";

document.getElementById('main-content').innerHTML = html;