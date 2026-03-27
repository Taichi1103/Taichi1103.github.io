const profile = {
    name: "仲野 太智 / Taichi Nakano",
    title: "",
    research: [
        "次世代の小型直流遮断技術の研究",
    ],
    awards: [
        { date: "2025/03", name: "工学部長賞 研究最優秀" },
        { date: "2025/03", name: "工学部電気電子工学科 優秀論文賞" },
        { date: "2024/11", name: "IEEE IES Students and Young Professions Award" }
    ],
    Domestc_conferences : [
        { date: "2025/12", name: "工学部長賞 研究最優秀" },
        { date: "2025/9", name: "工学部電気電子工学科 優秀論文賞" }
    ], 
    International_conferences : [
        { date: "2025/12", name: "工学部長賞 研究最優秀" },
        { date: "2025/9", name: "工学部電気電子工学科 優秀論文賞" }
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