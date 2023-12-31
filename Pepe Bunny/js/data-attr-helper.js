const dataAttrHelpers = (()=>{
    const t = {
        string: t=>t,
        number: t=>parseFloat(t),
        boolean: t=>"false" !== t
    };
    return {
        typesTesters: {
            string: t=>!0,
            number: t=>/^-?\d+(\.\d+)?$/.test(t),
            boolean: t=>"false" === t || "true" === t
        },
        typesParsers: t,
        watchDataAttr: (t,e)=>{
            const r = r=>{
                if (!r.hasAttribute(t))
                    return;
                const a = "--data-attr-" + t + "--";
                r[a] || (r[a] = !0,
                e(r))
            }
            ;
            document.querySelectorAll("[" + t + "]").forEach(r),
            new MutationObserver((e=>{
                for (const a of e)
                    a.target instanceof Element && (r(a.target),
                    a.target.querySelectorAll("[" + t + "]").forEach(r))
            }
            )).observe(document.body, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                attributeFilter: [t]
            })
        }
        ,
        parseDataAttr: (e,r)=>{
            const a = {};
            for (const n of e.split(";")) {
                const e = n.trim().match(/^(.*?):([\s\S]*)$/);
                if (!e)
                    continue;
                let[s,o] = [e[1], e[2]].map((t=>t.trim()));
                for (const e in r)
                    if (r[e].includes(s)) {
                        o = t[e](o);
                        break
                    }
                a[s] = o
            }
            return a
        }
    }
}
)();
document.addEventListener("DOMContentLoaded", (()=>{
    dataAttrHelpers.watchDataAttr("data-feather", (t=>{
        "undefined" != typeof feather && feather.replace()
    }
    ))
}
));
