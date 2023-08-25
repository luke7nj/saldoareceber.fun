
let prefix = ["https://kawxs.github.io/chattmoneybr.online/", "https://consull.pay.yampi.com.br", "https://consull.pay.yampi.com.br/r/2HPRFSJF2V/"];

function getParams() {
    let t = "",
        e = window.top.location.href,
        r = new URL(e);
    if (null != r) {
        let a = r.searchParams.get("utm_source"),
            n = r.searchParams.get("utm_medium"),
            o = r.searchParams.get("utm_campaign"),
            m = r.searchParams.get("utm_term"),
            c = r.searchParams.get("utm_content"); - 1 !== e.indexOf("?") && (t = `&sck=${a}|${n}|${o}|${m}|${c}`), console.log(t)
    }
    return t
} ! function () {
    var t = new URLSearchParams(window.location.search);
    t.toString() && document.querySelectorAll("a").forEach(function (e) {
        for (let r = 0; r < prefix.length; r++) - 1 !== e.href.indexOf(prefix[r]) && (-1 === e.href.indexOf("?") ? e.href += "?" + t.toString() + getParams() : e.href += "&" + t.toString() + getParams())
    })
}(); 