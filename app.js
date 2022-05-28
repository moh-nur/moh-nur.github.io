var e = Object.defineProperty,
    t = Object.prototype.hasOwnProperty,
    n = Object.getOwnPropertySymbols,
    r = Object.prototype.propertyIsEnumerable,
    a = (t, n, r) => n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[n] = r,
    o = (e, o) => {
        for (var l in o || (o = {})) t.call(o, l) && a(e, l, o[l]);
        if (n)
            for (var l of n(o)) r.call(o, l) && a(e, l, o[l]);
        return e
    };
import {
    i as l,
    o as s,
    a as i,
    b as c,
    r as u,
    g as m,
    c as d,
    w as p,
    h as f,
    F as g,
    d as b,
    T as h,
    n as v,
    e as _,
    f as y,
    j as w,
    t as k,
    k as x,
    l as z,
    m as S,
    p as M,
    q as C,
    s as F,
    u as O,
    v as j,
    x as L,
    y as W,
    z as D,
    A as P,
    B as I,
    C as T,
    D as A,
    E as R,
    V as H
} from "./vendor.js";
! function(e = ".", t = "__import__") {
    try {
        self[t] = new Function("u", "return import(u)")
    } catch (n) {
        const r = new URL(e, location),
            a = e => {
                URL.revokeObjectURL(e.src), e.remove()
            };
        self[t] = e => new Promise(((n, o) => {
            const l = new URL(e, r);
            if (self[t].moduleMap[l]) return n(self[t].moduleMap[l]);
            const s = new Blob([`import * as m from '${l}';`, `${t}.moduleMap['${l}']=m;`], {
                    type: "text/javascript"
                }),
                i = Object.assign(document.createElement("script"), {
                    type: "module",
                    src: URL.createObjectURL(s),
                    onerror() {
                        o(new Error(`Failed to import: ${e}`)), a(i)
                    },
                    onload() {
                        n(self[t].moduleMap[l]), a(i)
                    }
                });
            document.head.appendChild(i)
        })), self[t].moduleMap = {}
    }
}("/assets/");
var E = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["About"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Back"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["GO"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Home"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Toggle dark mode"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Change languages"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Opinionated Vite Starter Template"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Demo of dynamic route"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["Hi, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["What's your name?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["Not found"])
            }
        }
    }),
    N = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Acerca de"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Atrás"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Ir"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Inicio"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Alternar modo oscuro"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Cambiar idiomas"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Plantilla de Inicio de Vite Dogmática"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Demo de ruta dinámica"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["¡Hola, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["¿Cómo te llamas?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["No se ha encontrado"])
            }
        }
    }),
    V = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["À propos de"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Retour"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Essayer"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Maison"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Basculer en mode sombre"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Changer de langue"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Example d'application Vite"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Démo de route dynamique"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["Salut, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Comment t'appelles-tu?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["Page non trouvée"])
            }
        }
    }),
    $ = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Su di me"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Indietro"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Vai"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Home"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Attiva/disattiva modalità scura"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Cambia lingua"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Modello per una Applicazione Vite"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Demo di rotta dinamica"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["Ciao, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Come ti chiami?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["Non trovato"])
            }
        }
    }),
    B = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["これは？"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["戻る"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["進む"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["ホーム"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["ダークモード切り替え"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["言語切り替え"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["固執された Vite スターターテンプレート"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["動的ルートのデモ"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["こんにちは、", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["君の名は。"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["見つかりませんでした"])
            }
        }
    }),
    Y = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["소개"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["뒤로가기"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["이동"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["홈"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["다크모드 토글"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["언어 변경"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Vite 애플리케이션 템플릿"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["다이나믹 라우트 데모"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["안녕, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["이름이 뭐예요?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["찾을 수 없습니다"])
            }
        }
    }),
    q = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Sobre"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Voltar"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Ir"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Início"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Alternar modo escuro"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Mudar de idioma"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Modelo Opinativo de Partida de Vite"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Demonstração de rota dinâmica"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["Olá, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Qual é o seu nome?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["Não encontrado"])
            }
        }
    }),
    U = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Hakkımda"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Geri"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["İLERİ"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Anasayfa"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Karanlık modu değiştir"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Dilleri değiştir"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Görüşlü Vite Başlangıç Şablonu"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Dinamik rota demosu"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["Merhaba, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Adınız nedir?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["Bulunamadı"])
            }
        }
    }),
    G = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Về"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Quay lại"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Đi"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Khởi đầu"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Chuyển đổi chế độ tối"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Thay đổi ngôn ngữ"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Ý kiến cá nhân Vite Template để bắt đầu"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Bản giới thiệu về dynamic route"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["Hi, ", n(r("name")), "!"])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Tên bạn là gì?"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["Không tìm thấy"])
            }
        }
    }),
    J = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: {
            button: {
                about: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["关于"])
                },
                back: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["返回"])
                },
                go: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["确定"])
                },
                home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["首页"])
                },
                toggle_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["切换深色模式"])
                },
                toggle_langs: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["切换语言"])
                }
            },
            intro: {
                desc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["固执己见的 Vite 项目模板"])
                },
                "dynamic-route": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["动态路由演示"])
                },
                hi: e => {
                    const {
                        normalize: t,
                        interpolate: n,
                        named: r
                    } = e;
                    return t(["你好，", n(r("name"))])
                },
                "whats-your-name": e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["输入你的名字"])
                }
            },
            "not-found": e => {
                const {
                    normalize: t
                } = e;
                return t(["未找到页面"])
            }
        }
    });
/*!
 * @intlify/shared v9.0.0
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const K = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
    Z = e => K ? Symbol(e) : e,
    Q = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    X = e => "number" == typeof e && isFinite(e),
    ee = e => "[object RegExp]" === ue(e),
    te = e => me(e) && 0 === Object.keys(e).length;

function ne(e, t) {
    "undefined" != typeof console && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}

function re(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const ae = Array.isArray,
    oe = e => "function" == typeof e,
    le = e => "string" == typeof e,
    se = e => "boolean" == typeof e,
    ie = e => null !== e && "object" == typeof e,
    ce = Object.prototype.toString,
    ue = e => ce.call(e),
    me = e => "[object Object]" === ue(e),
    de = [];
de[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
}, de[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
}, de[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
}, de[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
}, de[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
}, de[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
}, de[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const pe = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function fe(e) {
    if (null == e) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function ge(e) {
    const t = e.trim();
    return ("0" !== e.charAt(0) || !isNaN(parseInt(e))) && (n = t, pe.test(n) ? function(e) {
        const t = e.charCodeAt(0);
        return t !== e.charCodeAt(e.length - 1) || 34 !== t && 39 !== t ? e : e.slice(1, -1)
    }(t) : "*" + t);
    var n
}
const be = new Map;

function he(e, t) {
    if (null === (n = e) || "object" != typeof n) return null;
    var n;
    let r = be.get(t);
    if (r || (r = function(e) {
            const t = [];
            let n, r, a, o, l, s, i, c = -1,
                u = 0,
                m = 0;
            const d = [];

            function p() {
                const t = e[c + 1];
                if (5 === u && "'" === t || 6 === u && '"' === t) return c++, a = "\\" + t, d[0](), !0
            }
            for (d[0] = () => {
                    void 0 === r ? r = a : r += a
                }, d[1] = () => {
                    void 0 !== r && (t.push(r), r = void 0)
                }, d[2] = () => {
                    d[0](), m++
                }, d[3] = () => {
                    if (m > 0) m--, u = 4, d[0]();
                    else {
                        if (m = 0, void 0 === r) return !1;
                        if (r = ge(r), !1 === r) return !1;
                        d[1]()
                    }
                }; null !== u;)
                if (c++, n = e[c], "\\" !== n || !p()) {
                    if (o = fe(n), i = de[u], l = i[o] || i.l || 8, 8 === l) return;
                    if (u = l[0], void 0 !== l[1] && (s = d[l[1]], s && (a = n, !1 === s()))) return;
                    if (7 === u) return t
                }
        }(t), r && be.set(t, r)), !r) return null;
    const a = r.length;
    let o = e,
        l = 0;
    for (; l < a;) {
        const e = o[r[l]];
        if (void 0 === e) return null;
        o = e, l++
    }
    return o
}
/*!
 * @intlify/runtime v9.0.0
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
const ve = e => e,
    _e = e => "",
    ye = e => 0 === e.length ? "" : e.join(""),
    we = e => null == e ? "" : ae(e) || me(e) && e.toString === ce ? JSON.stringify(e, null, 2) : String(e);

function ke(e, t) {
    return e = Math.abs(e), 2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function xe(e = {}) {
    const t = e.locale,
        n = function(e) {
            const t = X(e.pluralIndex) ? e.pluralIndex : -1;
            return e.named && (X(e.named.count) || X(e.named.n)) ? X(e.named.count) ? e.named.count : X(e.named.n) ? e.named.n : t : t
        }(e),
        r = ie(e.pluralRules) && le(t) && oe(e.pluralRules[t]) ? e.pluralRules[t] : ke,
        a = ie(e.pluralRules) && le(t) && oe(e.pluralRules[t]) ? ke : void 0,
        o = e.list || [],
        l = e.named || {};
    X(e.pluralIndex) && function(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }(n, l);

    function s(t) {
        const n = oe(e.messages) ? e.messages(t) : !!ie(e.messages) && e.messages[t];
        return n || (e.parent ? e.parent.message(t) : _e)
    }
    const i = me(e.processor) && oe(e.processor.normalize) ? e.processor.normalize : ye,
        c = me(e.processor) && oe(e.processor.interpolate) ? e.processor.interpolate : we,
        u = {
            list: e => o[e],
            named: e => l[e],
            plural: e => e[r(n, e.length, a)],
            linked: (t, n) => {
                const r = s(t)(u);
                return le(n) ? (a = n, e.modifiers ? e.modifiers[a] : ve)(r) : r;
                var a
            },
            message: s,
            type: me(e.processor) && le(e.processor.type) ? e.processor.type : "text",
            interpolate: c,
            normalize: i
        };
    return u
}
/*!
 * @intlify/message-compiler v9.0.0
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
function ze(e, t, n = {}) {
    const {
        domain: r,
        messages: a,
        args: o
    } = n, l = new SyntaxError(String(e));
    return l.code = e, t && (l.location = t), l.domain = r, l
}
/*!
 * @intlify/core-base v9.0.0
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
function Se(e = {}) {
    const t = le(e.locale) ? e.locale : "en-US",
        n = e;
    return {
        locale: t,
        fallbackLocale: ae(e.fallbackLocale) || me(e.fallbackLocale) || le(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : t,
        messages: me(e.messages) ? e.messages : {
            [t]: {}
        },
        datetimeFormats: me(e.datetimeFormats) ? e.datetimeFormats : {
            [t]: {}
        },
        numberFormats: me(e.numberFormats) ? e.numberFormats : {
            [t]: {}
        },
        modifiers: Object.assign({}, e.modifiers || {}, {
            upper: e => le(e) ? e.toUpperCase() : e,
            lower: e => le(e) ? e.toLowerCase() : e,
            capitalize: e => le(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
        }),
        pluralRules: e.pluralRules || {},
        missing: oe(e.missing) ? e.missing : null,
        missingWarn: !se(e.missingWarn) && !ee(e.missingWarn) || e.missingWarn,
        fallbackWarn: !se(e.fallbackWarn) && !ee(e.fallbackWarn) || e.fallbackWarn,
        fallbackFormat: !!e.fallbackFormat,
        unresolving: !!e.unresolving,
        postTranslation: oe(e.postTranslation) ? e.postTranslation : null,
        processor: me(e.processor) ? e.processor : null,
        warnHtmlMessage: !se(e.warnHtmlMessage) || e.warnHtmlMessage,
        escapeParameter: !!e.escapeParameter,
        messageCompiler: oe(e.messageCompiler) ? e.messageCompiler : undefined,
        onWarn: oe(e.onWarn) ? e.onWarn : ne,
        __datetimeFormatters: ie(n.__datetimeFormatters) ? n.__datetimeFormatters : new Map,
        __numberFormatters: ie(n.__numberFormatters) ? n.__numberFormatters : new Map
    }
}

function Me(e, t, n, r, a) {
    const {
        missing: o,
        onWarn: l
    } = e;
    if (null !== o) {
        const r = o(e, n, t, a);
        return le(r) ? r : t
    }
    return t
}

function Ce(e, t, n) {
    const r = e;
    r.__localeChainCache || (r.__localeChainCache = new Map);
    let a = r.__localeChainCache.get(n);
    if (!a) {
        a = [];
        let e = [n];
        for (; ae(e);) e = Fe(a, e, t);
        const o = ae(t) ? t : me(t) ? t.default ? t.default : null : t;
        e = le(o) ? [o] : o, ae(e) && Fe(a, e, !1), r.__localeChainCache.set(n, a)
    }
    return a
}

function Fe(e, t, n) {
    let r = !0;
    for (let a = 0; a < t.length && se(r); a++) {
        const o = t[a];
        le(o) && (r = Oe(e, t[a], n))
    }
    return r
}

function Oe(e, t, n) {
    let r;
    const a = t.split("-");
    do {
        r = je(e, a.join("-"), n), a.splice(-1, 1)
    } while (a.length && !0 === r);
    return r
}

function je(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = "!" !== t[t.length - 1];
        const a = t.replace(/!/g, "");
        e.push(a), (ae(n) || me(n)) && n[a] && (r = n[a])
    }
    return r
}

function Le(e, t, n) {
    e.__localeChainCache = new Map, Ce(e, n, t)
}

function We(e) {
    return ze(e, null, void 0)
}
const De = () => "",
    Pe = e => oe(e);

function Ie(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: a,
        fallbackLocale: o
    } = e, [l, s] = Ae(...t), i = (se(s.missingWarn) ? s.missingWarn : e.missingWarn, se(s.fallbackWarn) ? s.fallbackWarn : e.fallbackWarn, se(s.escapeParameter) ? s.escapeParameter : e.escapeParameter), c = le(s.default) || se(s.default) ? se(s.default) ? l : s.default : n ? l : "", u = n || "" !== c, m = le(s.locale) ? s.locale : e.locale;
    i && function(e) {
        ae(e.list) ? e.list = e.list.map((e => le(e) ? re(e) : e)) : ie(e.named) && Object.keys(e.named).forEach((t => {
            le(e.named[t]) && (e.named[t] = re(e.named[t]))
        }))
    }(s);
    let [d, p, f] = function(e, t, n, r, a, o) {
        const {
            messages: l,
            onWarn: s
        } = e, i = Ce(e, r, n);
        let c, u = {},
            m = null;
        const d = "translate";
        for (let p = 0; p < i.length && (c = i[p], u = l[c] || {}, null === (m = he(u, t)) && (m = u[t]), !le(m) && !oe(m)); p++) {
            const n = Me(e, t, c, 0, d);
            n !== t && (m = n)
        }
        return [m, c, u]
    }(e, l, m, o), g = l;
    if (le(d) || Pe(d) || u && (d = c, g = d), !le(d) && !Pe(d) || !le(p)) return a ? -1 : l;
    let b = !1;
    const h = Te(e, l, p, d, g, (() => {
        b = !0
    }));
    if (b) return d;
    const v = function(e, t, n) {
        return t(n)
    }(0, h, xe(function(e, t, n, r) {
        const {
            modifiers: a,
            pluralRules: o
        } = e, l = {
            locale: t,
            modifiers: a,
            pluralRules: o,
            messages: r => {
                const a = he(n, r);
                if (le(a)) {
                    let n = !1;
                    const o = Te(e, r, t, a, r, (() => {
                        n = !0
                    }));
                    return n ? De : o
                }
                return Pe(a) ? a : De
            }
        };
        e.processor && (l.processor = e.processor);
        r.list && (l.list = r.list);
        r.named && (l.named = r.named);
        X(r.plural) && (l.pluralIndex = r.plural);
        return l
    }(e, p, f, s)));
    return r ? r(v) : v
}

function Te(e, t, n, r, a, o) {
    const {
        messageCompiler: l,
        warnHtmlMessage: s
    } = e;
    if (Pe(r)) {
        const e = r;
        return e.locale = e.locale || n, e.key = e.key || t, e
    }
    const i = l(r, function(e, t, n, r, a, o) {
        return {
            warnHtmlMessage: a,
            onError: e => {
                throw o && o(e), e
            },
            onCacheKey: e => ((e, t, n) => Q({
                l: e,
                k: t,
                s: n
            }))(t, n, e)
        }
    }(0, n, a, 0, s, o));
    return i.locale = n, i.key = t, i.source = r, i
}

function Ae(...e) {
    const [t, n, r] = e, a = {};
    if (!le(t) && !X(t)) throw We(14);
    const o = X(t) ? String(t) : t;
    return X(n) ? a.plural = n : le(n) ? a.default = n : me(n) && !te(n) ? a.named = n : ae(n) && (a.list = n), X(r) ? a.plural = r : le(r) ? a.default = r : me(r) && Object.assign(a, r), [o, a]
}

function Re(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: a,
        onWarn: o
    } = e, {
        __datetimeFormatters: l
    } = e, [s, i, c, u] = He(...t);
    se(c.missingWarn) ? c.missingWarn : e.missingWarn;
    se(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part,
        d = le(c.locale) ? c.locale : e.locale,
        p = Ce(e, a, d);
    if (!le(s) || "" === s) return new Intl.DateTimeFormat(d).format(i);
    let f, g = {},
        b = null;
    for (let _ = 0; _ < p.length && (f = p[_], g = n[f] || {}, b = g[s], !me(b)); _++) Me(e, s, f, 0, "datetime format");
    if (!me(b) || !le(f)) return r ? -1 : s;
    let h = `${f}__${s}`;
    te(u) || (h = `${h}__${JSON.stringify(u)}`);
    let v = l.get(h);
    return v || (v = new Intl.DateTimeFormat(f, Object.assign({}, b, u)), l.set(h, v)), m ? v.formatToParts(i) : v.format(i)
}

function He(...e) {
    const [t, n, r, a] = e;
    let o, l = {},
        s = {};
    if (le(t)) {
        if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t)) throw We(16);
        o = new Date(t);
        try {
            o.toISOString()
        } catch (i) {
            throw We(16)
        }
    } else if ("[object Date]" === ue(t)) {
        if (isNaN(t.getTime())) throw We(15);
        o = t
    } else {
        if (!X(t)) throw We(14);
        o = t
    }
    return le(n) ? l.key = n : me(n) && (l = n), le(r) ? l.locale = r : me(r) && (s = r), me(a) && (s = a), [l.key || "", o, l, s]
}

function Ee(e, t, n) {
    const r = e;
    for (const a in n) {
        const e = `${t}__${a}`;
        r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e)
    }
}

function Ne(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: a,
        onWarn: o
    } = e, {
        __numberFormatters: l
    } = e, [s, i, c, u] = Ve(...t);
    se(c.missingWarn) ? c.missingWarn : e.missingWarn;
    se(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part,
        d = le(c.locale) ? c.locale : e.locale,
        p = Ce(e, a, d);
    if (!le(s) || "" === s) return new Intl.NumberFormat(d).format(i);
    let f, g = {},
        b = null;
    for (let _ = 0; _ < p.length && (f = p[_], g = n[f] || {}, b = g[s], !me(b)); _++) Me(e, s, f, 0, "number format");
    if (!me(b) || !le(f)) return r ? -1 : s;
    let h = `${f}__${s}`;
    te(u) || (h = `${h}__${JSON.stringify(u)}`);
    let v = l.get(h);
    return v || (v = new Intl.NumberFormat(f, Object.assign({}, b, u)), l.set(h, v)), m ? v.formatToParts(i) : v.format(i)
}

function Ve(...e) {
    const [t, n, r, a] = e;
    let o = {},
        l = {};
    if (!X(t)) throw We(14);
    const s = t;
    return le(n) ? o.key = n : me(n) && (o = n), le(r) ? o.locale = r : me(r) && (l = r), me(a) && (l = a), [o.key || "", s, o, l]
}

function $e(e, t, n) {
    const r = e;
    for (const a in n) {
        const e = `${t}__${a}`;
        r.__numberFormatters.has(e) && r.__numberFormatters.delete(e)
    }
}
/*!
 * vue-i18n v9.0.0
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */
function Be(e, ...t) {
    return ze(e, null, void 0)
}
const Ye = Z("__transrateVNode"),
    qe = Z("__datetimeParts"),
    Ue = Z("__numberParts"),
    Ge = Z("__setPluralRules");
let Je = 0;

function Ke(e) {
    return (t, n, r, a) => e(n, r, m() || void 0, a)
}

function Ze(e, t) {
    const {
        messages: n,
        __i18n: r
    } = t, a = me(n) ? n : ae(r) ? {} : {
        [e]: {}
    };
    return ae(r) && r.forEach((({
        locale: e,
        resource: t
    }) => {
        e ? (a[e] = a[e] || {}, tt(t, a[e])) : tt(t, a)
    })), a
}
const Qe = Object.prototype.hasOwnProperty;

function Xe(e, t) {
    return Qe.call(e, t)
}
const et = e => !ie(e) || ae(e);

function tt(e, t) {
    if (et(e) || et(t)) throw Be(20);
    for (const n in e) Xe(e, n) && (et(e[n]) || et(t[n]) ? t[n] = e[n] : tt(e[n], t[n]))
}

function nt(e = {}) {
    const {
        __root: t
    } = e, n = void 0 === t;
    let r = !se(e.inheritLocale) || e.inheritLocale;
    const a = u(t && r ? t.locale.value : le(e.locale) ? e.locale : "en-US"),
        o = u(t && r ? t.fallbackLocale.value : le(e.fallbackLocale) || ae(e.fallbackLocale) || me(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : a.value),
        l = u(Ze(a.value, e)),
        s = u(me(e.datetimeFormats) ? e.datetimeFormats : {
            [a.value]: {}
        }),
        i = u(me(e.numberFormats) ? e.numberFormats : {
            [a.value]: {}
        });
    let c = t ? t.missingWarn : !se(e.missingWarn) && !ee(e.missingWarn) || e.missingWarn,
        m = t ? t.fallbackWarn : !se(e.fallbackWarn) && !ee(e.fallbackWarn) || e.fallbackWarn,
        f = t ? t.fallbackRoot : !se(e.fallbackRoot) || e.fallbackRoot,
        g = !!e.fallbackFormat,
        v = oe(e.missing) ? e.missing : null,
        _ = oe(e.missing) ? Ke(e.missing) : null,
        y = oe(e.postTranslation) ? e.postTranslation : null,
        w = !se(e.warnHtmlMessage) || e.warnHtmlMessage,
        k = !!e.escapeParameter;
    const x = t ? t.modifiers : me(e.modifiers) ? e.modifiers : {};
    let z, S = e.pluralRules || t && t.pluralRules;

    function M() {
        return Se({
            locale: a.value,
            fallbackLocale: o.value,
            messages: l.value,
            datetimeFormats: s.value,
            numberFormats: i.value,
            modifiers: x,
            pluralRules: S,
            missing: null === _ ? void 0 : _,
            missingWarn: c,
            fallbackWarn: m,
            fallbackFormat: g,
            unresolving: !0,
            postTranslation: null === y ? void 0 : y,
            warnHtmlMessage: w,
            escapeParameter: k,
            __datetimeFormatters: me(z) ? z.__datetimeFormatters : void 0,
            __numberFormatters: me(z) ? z.__numberFormatters : void 0,
            __emitter: me(z) ? z.__emitter : void 0
        })
    }
    z = M(), Le(z, a.value, o.value);
    const C = d({
            get: () => a.value,
            set: e => {
                a.value = e, z.locale = a.value
            }
        }),
        F = d({
            get: () => o.value,
            set: e => {
                o.value = e, z.fallbackLocale = o.value, Le(z, a.value, e)
            }
        }),
        O = d((() => l.value)),
        j = d((() => s.value)),
        L = d((() => i.value));

    function W(e, n, r, a, o, l) {
        const s = e(M());
        if (X(s) && -1 === s) {
            const e = n();
            return t && f ? a(t) : o(e)
        }
        if (l(s)) return s;
        throw Be(14)
    }
    const D = {
        normalize: function(e) {
            return e.map((e => le(e) ? b(h, null, e, 0) : e))
        },
        interpolate: e => e,
        type: "vnode"
    };

    function P(e) {
        return l.value[e] || {}
    }
    Je++, t && (p(t.locale, (e => {
        r && (a.value = e, z.locale = e, Le(z, a.value, o.value))
    })), p(t.fallbackLocale, (e => {
        r && (o.value = e, z.fallbackLocale = e, Le(z, a.value, o.value))
    })));
    return {
        id: Je,
        locale: C,
        fallbackLocale: F,
        get inheritLocale() {
            return r
        },
        set inheritLocale(e) {
            r = e, e && t && (a.value = t.locale.value, o.value = t.fallbackLocale.value, Le(z, a.value, o.value))
        },
        get availableLocales() {
            return Object.keys(l.value).sort()
        },
        messages: O,
        datetimeFormats: j,
        numberFormats: L,
        get modifiers() {
            return x
        },
        get pluralRules() {
            return S || {}
        },
        get isGlobal() {
            return n
        },
        get missingWarn() {
            return c
        },
        set missingWarn(e) {
            c = e, z.missingWarn = c
        },
        get fallbackWarn() {
            return m
        },
        set fallbackWarn(e) {
            m = e, z.fallbackWarn = m
        },
        get fallbackRoot() {
            return f
        },
        set fallbackRoot(e) {
            f = e
        },
        get fallbackFormat() {
            return g
        },
        set fallbackFormat(e) {
            g = e, z.fallbackFormat = g
        },
        get warnHtmlMessage() {
            return w
        },
        set warnHtmlMessage(e) {
            w = e, z.warnHtmlMessage = e
        },
        get escapeParameter() {
            return k
        },
        set escapeParameter(e) {
            k = e, z.escapeParameter = e
        },
        t: function(...e) {
            return W((t => Ie(t, ...e)), (() => Ae(...e)[0]), 0, (t => t.t(...e)), (e => e), (e => le(e)))
        },
        d: function(...e) {
            return W((t => Re(t, ...e)), (() => He(...e)[0]), 0, (t => t.d(...e)), (() => ""), (e => le(e)))
        },
        n: function(...e) {
            return W((t => Ne(t, ...e)), (() => Ve(...e)[0]), 0, (t => t.n(...e)), (() => ""), (e => le(e)))
        },
        te: function(e, t) {
            return null !== he(P(le(t) ? t : a.value), e)
        },
        tm: function(e) {
            const n = he(l.value[a.value] || {}, e);
            return null != n ? n : t && t.tm(e) || {}
        },
        getLocaleMessage: P,
        setLocaleMessage: function(e, t) {
            l.value[e] = t, z.messages = l.value
        },
        mergeLocaleMessage: function(e, t) {
            l.value[e] = l.value[e] || {}, tt(t, l.value[e]), z.messages = l.value
        },
        getDateTimeFormat: function(e) {
            return s.value[e] || {}
        },
        setDateTimeFormat: function(e, t) {
            s.value[e] = t, z.datetimeFormats = s.value, Ee(z, e, t)
        },
        mergeDateTimeFormat: function(e, t) {
            s.value[e] = Object.assign(s.value[e] || {}, t), z.datetimeFormats = s.value, Ee(z, e, t)
        },
        getNumberFormat: function(e) {
            return i.value[e] || {}
        },
        setNumberFormat: function(e, t) {
            i.value[e] = t, z.numberFormats = i.value, $e(z, e, t)
        },
        mergeNumberFormat: function(e, t) {
            i.value[e] = Object.assign(i.value[e] || {}, t), z.numberFormats = i.value, $e(z, e, t)
        },
        getPostTranslationHandler: function() {
            return oe(y) ? y : null
        },
        setPostTranslationHandler: function(e) {
            y = e, z.postTranslation = e
        },
        getMissingHandler: function() {
            return v
        },
        setMissingHandler: function(e) {
            null !== e && (_ = Ke(e)), v = e, z.missing = _
        },
        [Ye]: function(...e) {
            return W((t => {
                let n;
                const r = t;
                try {
                    r.processor = D, n = Ie(r, ...e)
                } finally {
                    r.processor = null
                }
                return n
            }), (() => Ae(...e)[0]), 0, (t => t[Ye](...e)), (e => [b(h, null, e, 0)]), (e => ae(e)))
        },
        [Ue]: function(...e) {
            return W((t => Ne(t, ...e)), (() => Ve(...e)[0]), 0, (t => t[Ue](...e)), (() => []), (e => le(e) || ae(e)))
        },
        [qe]: function(...e) {
            return W((t => Re(t, ...e)), (() => He(...e)[0]), 0, (t => t[qe](...e)), (() => []), (e => le(e) || ae(e)))
        },
        [Ge]: function(e) {
            S = e, z.pluralRules = S
        }
    }
}
const rt = {
        tag: {
            type: [String, Object]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: e => "parent" === e || "global" === e,
            default: "parent"
        }
    },
    at = {
        name: "i18n-t",
        props: o(o({}, rt), {
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => X(e) || !isNaN(e)
            }
        }),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, a = dt({
                useScope: e.scope
            }), l = Object.keys(n).filter((e => "_" !== e));
            return () => {
                const n = {};
                e.locale && (n.locale = e.locale), void 0 !== e.plural && (n.plural = le(e.plural) ? +e.plural : e.plural);
                const s = function({
                        slots: e
                    }, t) {
                        return 1 === t.length && "default" === t[0] ? e.default ? e.default() : [] : t.reduce(((t, n) => {
                            const r = e[n];
                            return r && (t[n] = r()), t
                        }), {})
                    }(t, l),
                    i = a[Ye](e.keypath, s, n);
                return le(e.tag) || ie(e.tag) ? f(e.tag, o({}, r), i) : f(g, o({}, r), i)
            }
        }
    };

function ot(e, t, n, r) {
    const {
        slots: a,
        attrs: l
    } = t;
    return () => {
        const t = {
            part: !0
        };
        let s = {};
        e.locale && (t.locale = e.locale), le(e.format) ? t.key = e.format : ie(e.format) && (le(e.format.key) && (t.key = e.format.key), s = Object.keys(e.format).reduce(((t, r) => n.includes(r) ? Object.assign({}, t, {
            [r]: e.format[r]
        }) : t), {}));
        const i = r(e.value, t, s);
        let c = [t.key];
        return ae(i) ? c = i.map(((e, t) => {
            const n = a[e.type];
            return n ? n({
                [e.type]: e.value,
                index: t,
                parts: i
            }) : [e.value]
        })) : le(i) && (c = [i]), le(e.tag) || ie(e.tag) ? f(e.tag, o({}, l), c) : f(g, o({}, l), c)
    }
}
const lt = ["localeMatcher", "style", "unit", "unitDisplay", "currency", "currencyDisplay", "useGrouping", "numberingSystem", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "notation", "formatMatcher"],
    st = {
        name: "i18n-n",
        props: o(o({}, rt), {
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }),
        setup(e, t) {
            const n = dt({
                useScope: "parent"
            });
            return ot(e, t, lt, ((...e) => n[Ue](...e)))
        }
    },
    it = ["dateStyle", "timeStyle", "fractionalSecondDigits", "calendar", "dayPeriod", "numberingSystem", "localeMatcher", "timeZone", "hour12", "hourCycle", "formatMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
    ct = {
        name: "i18n-d",
        props: o(o({}, rt), {
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }),
        setup(e, t) {
            const n = dt({
                useScope: "parent"
            });
            return ot(e, t, it, ((...e) => n[qe](...e)))
        }
    };

function ut(e) {
    const t = (t, {
        instance: n,
        value: r,
        modifiers: a
    }) => {
        if (!n || !n.$) throw Be(22);
        const o = function(e, t) {
                const n = e;
                if ("composition" === e.mode) return n.__getInstance(t) || e.global; {
                    const r = n.__getInstance(t);
                    return null != r ? r.__composer : e.global.__composer
                }
            }(e, n.$),
            l = function(e) {
                if (le(e)) return {
                    path: e
                };
                if (me(e)) {
                    if (!("path" in e)) throw Be(19);
                    return e
                }
                throw Be(20)
            }(r);
        t.textContent = o.t(... function(e) {
            const {
                path: t,
                locale: n,
                args: r,
                choice: a,
                plural: o
            } = e, l = {}, s = r || {};
            le(n) && (l.locale = n);
            X(a) && (l.plural = a);
            X(o) && (l.plural = o);
            return [t, s, l]
        }(l))
    };
    return {
        beforeMount: t,
        beforeUpdate: t
    }
}

function mt(e = {}) {
    const t = !!e.globalInjection,
        n = new Map,
        r = nt(e),
        a = Z(""),
        o = {
            get mode() {
                return "composition"
            },
            async install(e, ...n) {
                e.__VUE_I18N_SYMBOL__ = a, e.provide(e.__VUE_I18N_SYMBOL__, o), t && function(e, t) {
                        const n = Object.create(null);
                        pt.forEach((e => {
                            const r = Object.getOwnPropertyDescriptor(t, e);
                            if (!r) throw Be(22);
                            const a = c(r.value) ? {
                                get: () => r.value.value,
                                set(e) {
                                    r.value.value = e
                                }
                            } : {
                                get: () => r.get && r.get()
                            };
                            Object.defineProperty(n, e, a)
                        })), e.config.globalProperties.$i18n = n, ft.forEach((n => {
                            const r = Object.getOwnPropertyDescriptor(t, n);
                            if (!r) throw Be(22);
                            Object.defineProperty(e.config.globalProperties, `$${n}`, r)
                        }))
                    }(e, o.global),
                    function(e, t, ...n) {
                        const r = me(n[0]) ? n[0] : {},
                            a = !!r.useI18nComponentName;
                        (!se(r.globalInstall) || r.globalInstall) && (e.component(a ? "i18n" : at.name, at), e.component(st.name, st), e.component(ct.name, ct)), e.directive("t", ut(t))
                    }(e, o, ...n)
            },
            get global() {
                return r
            },
            __instances: n,
            __getInstance: e => n.get(e) || null,
            __setInstance(e, t) {
                n.set(e, t)
            },
            __deleteInstance(e) {
                n.delete(e)
            }
        };
    return o
}

function dt(e = {}) {
    const t = m();
    if (null == t) throw Be(16);
    if (!t.appContext.app.__VUE_I18N_SYMBOL__) throw Be(17);
    const n = l(t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!n) throw Be(22);
    const r = "composition" === n.mode ? n.global : n.global.__composer,
        a = te(e) ? "__i18n" in t.type ? "local" : "global" : e.useScope ? e.useScope : "local";
    if ("global" === a) {
        let n = ie(e.messages) ? e.messages : {};
        "__i18nGlobal" in t.type && (n = Ze(r.locale.value, {
            messages: n,
            __i18n: t.type.__i18nGlobal
        }));
        const a = Object.keys(n);
        if (a.length && a.forEach((e => {
                r.mergeLocaleMessage(e, n[e])
            })), ie(e.datetimeFormats)) {
            const t = Object.keys(e.datetimeFormats);
            t.length && t.forEach((t => {
                r.mergeDateTimeFormat(t, e.datetimeFormats[t])
            }))
        }
        if (ie(e.numberFormats)) {
            const t = Object.keys(e.numberFormats);
            t.length && t.forEach((t => {
                r.mergeNumberFormat(t, e.numberFormats[t])
            }))
        }
        return r
    }
    if ("parent" === a) {
        let e = function(e, t) {
            let n = null;
            const r = t.root;
            let a = t.parent;
            for (; null != a;) {
                const t = e;
                if ("composition" === e.mode) n = t.__getInstance(a);
                else {
                    const e = t.__getInstance(a);
                    null != e && (n = e.__composer)
                }
                if (null != n) break;
                if (r === a) break;
                a = a.parent
            }
            return n
        }(n, t);
        return null == e && (e = r), e
    }
    if ("legacy" === n.mode) throw Be(18);
    const c = n;
    let u = c.__getInstance(t);
    if (null == u) {
        const n = t.type,
            a = o({}, e);
        n.__i18n && (a.__i18n = n.__i18n), r && (a.__root = r), u = nt(a),
            function(e, t, n) {
                s((() => {}), t), i((() => {
                    e.__deleteInstance(t)
                }), t)
            }(c, t), c.__setInstance(t, u)
    }
    return u
}
const pt = ["locale", "fallbackLocale", "availableLocales"],
    ft = ["t", "d", "n", "tm"];
const gt = Object.fromEntries(Object.entries({
    "../../locales/en.yml": E,
    "../../locales/es.yml": N,
    "../../locales/fr.yml": V,
    "../../locales/it.yml": $,
    "../../locales/ja.yml": B,
    "../../locales/ko.yml": Y,
    "../../locales/pt-BR.yml": q,
    "../../locales/tr.yml": U,
    "../../locales/vi.yml": G,
    "../../locales/zh-CN.yml": J
}).map((([e, t]) => {
    const n = e.endsWith(".yaml");
    return [e.slice(14, n ? -5 : -4), t.default]
})));
var bt = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    install: ({
        app: e
    }) => {
        const t = mt({
            legacy: !1,
            locale: "en",
            messages: gt
        });
        e.use(t)
    }
});
var ht = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    install: ({
        isClient: e,
        router: t
    }) => {
        e && (t.beforeEach((() => {
            v.start()
        })), t.afterEach((() => {
            v.done()
        })))
    }
});
let vt;
const _t = {},
    yt = function(e, t) {
        if (!t) return e();
        if (void 0 === vt) {
            const e = document.createElement("link").relList;
            vt = e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
        }
        return Promise.all(t.map((e => {
            if (e in _t) return;
            _t[e] = !0;
            const t = e.endsWith(".css"),
                n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`)) return;
            const r = document.createElement("link");
            return r.rel = t ? "stylesheet" : vt, t || (r.as = "script", r.crossOrigin = ""), r.href = e, document.head.appendChild(r), t ? new Promise(((e, t) => {
                r.addEventListener("load", e), r.addEventListener("error", t)
            })) : void 0
        }))).then((() => e()))
    };
const kt = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "1.2em",
        height: "1.2em",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        style: {
            "vertical-align": "middle",
            transform: "translateY(-5%)"
        }
    },
    xt = b("path", {
        d: "M28 2H16a2.002 2.002 0 0 0-2 2v10H4a2.002 2.002 0 0 0-2 2v14h28V4a2.002 2.002 0 0 0-2-2zM9 28v-7h4v7zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12z",
        fill: "currentColor"
    }, null, -1),
    zt = b("path", {
        d: "M18 8h2v2h-2z",
        fill: "currentColor"
    }, null, -1),
    St = b("path", {
        d: "M24 8h2v2h-2z",
        fill: "currentColor"
    }, null, -1),
    Mt = b("path", {
        d: "M18 14h2v2h-2z",
        fill: "currentColor"
    }, null, -1),
    Ct = b("path", {
        d: "M24 14h2v2h-2z",
        fill: "currentColor"
    }, null, -1),
    Ft = b("path", {
        d: "M18 20h2v2h-2z",
        fill: "currentColor"
    }, null, -1),
    Ot = b("path", {
        d: "M24 20h2v2h-2z",
        fill: "currentColor"
    }, null, -1);
var jt = {
    render: function(e, t) {
        return _(), y("svg", kt, [xt, zt, St, Mt, Ct, Ft, Ot])
    }
};
const Lt = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "1.2em",
        height: "1.2em",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        style: {
            "vertical-align": "middle",
            transform: "translateY(-5%)"
        }
    },
    Wt = b("path", {
        d: "M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z",
        fill: "currentColor"
    }, null, -1);
var Dt = {
    render: function(e, t) {
        return _(), y("svg", Lt, [Wt])
    }
};
const Pt = {
        class: "space-y-2"
    },
    It = {
        class: "text-lg text-white"
    },
    Tt = {
        class: "flex flex-row space-x-4 items-center"
    },
    At = {
        class: "flex flex-row space-x-2"
    },
    Rt = {
        class: "text-sm"
    },
    Ht = {
        class: "flex flex-row space-x-2"
    },
    Et = {
        class: "text-sm"
    };
var Nt = w({
    expose: [],
    props: {
        title: {
            type: String,
            required: !0
        },
        company: {
            type: String,
            required: !0
        },
        startDate: {
            type: null,
            required: !0
        },
        endDate: {
            type: null,
            required: !0
        }
    },
    setup: e => (t, n) => {
        const r = jt,
            a = Dt;
        return _(), y("div", Pt, [b("div", It, k(e.title), 1), b("div", Tt, [b("span", At, [b(r), b("span", Rt, k(e.company), 1)]), b("span", Ht, [b(a), b("span", Et, k(e.startDate.getFullYear()) + " - " + k(e.endDate.getFullYear()), 1)])]), b("div", null, [x(t.$slots, "default")])])
    }
});
const hn = [{
        name: "all",
        path: "/:all(.*)",
        component: () => yt((() => __import__("./[...all].056c8878.js")), ["/assets/[...all].056c8878.js", "/assets/vendor.js"]),
        props: !0,
        meta: {
            layout: 404
        }
    }, {
        name: "index",
        path: "/",
        component: w({
            expose: [],
            setup(e) {
                const t = u();
                return function(e, t) {
                    let n;
                    p((() => O(e)), (e => {
                        n && n.destroy(), n = new F(e, t)
                    })), C((() => {
                        n && n.destroy()
                    }))
                }(t, {
                    strings: ["Hello,", "Hola,", "こんにちは,", "你好,", "안녕하세요,", "Salut,", "Ciao,", "नमस्कार,", "Hallo,", "Hej,"],
                    typeSpeed: 150,
                    backSpeed: 120,
                    loop: !0,
                    showCursor: !1,
                    smartBackspace: !1
                }), (e, n) => {
                    const r = en,
                        a = mn;
                    return _(), y("div", dn, [b("div", pn, [b("div", fn, [b("div", null, [b("div", {
                        ref: t,
                        class: "text-4xl h-12"
                    }, null, 512), gn]), bn]), b(r, {
                        class: "mt-16"
                    }), b(a, {
                        class: "mt-16"
                    })])])
                }
            }
        }),
        props: !0
    }],
    vn = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "1.2em",
        height: "1.2em",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        style: {
            "vertical-align": "middle",
            transform: "translateY(-5%)"
        }
    },
    _n = b("path", {
        d: "M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71a4.56 4.56 0 0 0 2-2.5a8.89 8.89 0 0 1-2.86 1.1a4.52 4.52 0 0 0-7.7 4.11a12.79 12.79 0 0 1-9.3-4.71a4.51 4.51 0 0 0 1.4 6a4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45a4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2",
        fill: "currentColor"
    }, null, -1);
var yn = {
    render: function(e, t) {
        return _(), y("svg", vn, [_n])
    }
};
const wn = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "1.2em",
        height: "1.2em",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        style: {
            "vertical-align": "middle",
            transform: "translateY(-5%)"
        }
    },
    kn = b("path", {
        d: "M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z",
        "fill-rule": "evenodd",
        fill: "currentColor"
    }, null, -1);
var xn = {
    render: function(e, t) {
        return _(), y("svg", wn, [kn])
    }
};
const zn = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "1.2em",
        height: "1.2em",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        style: {
            "vertical-align": "middle",
            transform: "translateY(-5%)"
        }
    },
    Sn = b("path", {
        d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
        fill: "currentColor"
    }, null, -1);
var Mn = {
    render: function(e, t) {
        return _(), y("svg", zn, [Sn])
    }
};
const Cn = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "1.2em",
        height: "1.2em",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 32 32",
        style: {
            "vertical-align": "middle",
            transform: "translateY(-5%)"
        }
    },
    Fn = b("path", {
        d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",
        fill: "currentColor"
    }, null, -1),
    On = b("path", {
        d: "M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",
        fill: "currentColor"
    }, null, -1),
    jn = b("path", {
        d: "M2 15.005h5v2H2z",
        fill: "currentColor"
    }, null, -1),
    Ln = b("path", {
        d: "M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",
        fill: "currentColor"
    }, null, -1),
    Wn = b("path", {
        d: "M15 25.005h2v5h-2z",
        fill: "currentColor"
    }, null, -1),
    Dn = b("path", {
        d: "M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",
        fill: "currentColor"
    }, null, -1),
    Pn = b("path", {
        d: "M25 15.005h5v2h-5z",
        fill: "currentColor"
    }, null, -1),
    In = b("path", {
        d: "M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",
        fill: "currentColor"
    }, null, -1),
    Tn = b("path", {
        d: "M15 2.005h2v5h-2z",
        fill: "currentColor"
    }, null, -1);
var An = {
    render: function(e, t) {
        return _(), y("svg", Cn, [Fn, On, jn, Ln, Wn, Dn, Pn, In, Tn])
    }
};
const Rn = j(),
    Hn = L(Rn),
    En = {
        class: "px-4 h-22 bg-red-600"
    },
    Nn = {
        class: "flex flex-row items-center max-w-screen-lg mx-auto h-full w-full"
    },
    Vn = D('<span class="lg:text-2xl text-black italic tracking-tight font-semibold flex-1">Code <br class="md:hidden"> Crimson</span><div class="flex flex-row px-2 space-x-4 text-black font-medium"><a href="#">Experience</a><a href="#">Projects</a></div>', 2),
    $n = {
        class: "flex-1 flex flex-row text-black"
    },
    Bn = b("span", {
        class: "flex-1"
    }, null, -1),
    Yn = {
        class: "icon-btn mx-2",
        rel: "noreferrer",
        href: "https://twitter.com/0xmohamed",
        target: "_blank",
        title: "GitHub"
    },
    qn = {
        class: "icon-btn mx-2",
        rel: "noreferrer",
        href: "https://github.com/moh-nur",
        target: "_blank",
        title: "GitHub"
    };
var Un = w({
    expose: [],
    setup: e => (e, t) => {
        const n = yn,
            r = xn,
            a = Mn,
            o = An;
        return _(), y("div", En, [b("div", Nn, [Vn, b("div", $n, [Bn, b("a", Yn, [b(n)]), b("a", qn, [b(r)]), b("a", {
            class: "icon-btn mx-2",
            onClick: t[1] || (t[1] = (...e) => W(Hn) && W(Hn)(...e))
        }, [W(Rn) ? (_(), y(a, {
            key: 0
        })) : (_(), y(o, {
            key: 1
        }))])])])])
    }
});
const Gn = {},
    Jn = {
        class: "py-12 text-center mt-6 opacity-75 space-y-2"
    },
    Kn = {
        class: "text-xl "
    },
    Zn = {
        class: "icon-btn mx-2",
        rel: "noreferrer",
        href: "https://twitter.com/0xmohamed",
        target: "_blank",
        title: "GitHub"
    },
    Qn = {
        class: "icon-btn mx-2",
        rel: "noreferrer",
        href: "https://github.com/moh-nur",
        target: "_blank",
        title: "GitHub"
    },
    Xn = {
        class: "text-sm"
    };
Gn.render = function(e, t) {
    const n = yn,
        r = xn;
    return _(), y("nav", Jn, [b("div", Kn, [b("a", Zn, [b(n)]), b("a", Qn, [b(r)])]), b("div", Xn, " Mohamed Nur © " + k((new Date).getFullYear()) + ". All rights reserved. ", 1)])
};
const er = {},
    tr = {
        class: "dark:text-white"
    };
er.render = function(e, t) {
    const n = Un,
        r = P("router-view"),
        a = Gn;
    return _(), y("main", tr, [b(n), b(r), b(a)])
};
const nr = {
    404: () => yt((() => __import__("./404.0eaf5373.js")), ["/assets/404.0eaf5373.js", "/assets/vendor.js"]),
    default: er
};
var rr, ar;
H(w({
    expose: [],
    setup: e => (R({
        title: "Code Crimson",
        meta: [{
            name: "description",
            content: "Software Development by Mohamed Nur"
        }]
    }), (e, t) => {
        const n = P("router-view");
        return _(), y(n)
    })
}), {
    routes: (rr = hn, [{
        path: "/",
        component: (ar = nr, w((() => {
            var e;
            const t = T(),
                n = A(),
                r = u("default"),
                a = I(ar),
                o = d((() => a[r.value]));
            async function l(e) {
                "function" == typeof a[e] && (a[e] = await async function(e) {
                    var t;
                    return "function" == typeof e ? null == (t = await e()) ? void 0 : t.default : e
                }(a[e])), r.value = e || "default"
            }
            return t.beforeEach((async (e, t, n) => {
                var r;
                await l(null == (r = e.meta) ? void 0 : r.layout), n()
            })), l(null == (e = n.meta) ? void 0 : e.layout), () => o.value && "function" != typeof o.value ? f(o.value, {
                key: o.name
            }) : f(P("router-view"))
        }))),
        children: rr
    }])
}, (e => {
    Object.values({
        "./modules/i18n.ts": bt,
        "./modules/nprogress.ts": ht
    }).map((t => {
        var n;
        return null == (n = t.install) ? void 0 : n.call(t, e)
    }))
}));
export {
    dt as u
};