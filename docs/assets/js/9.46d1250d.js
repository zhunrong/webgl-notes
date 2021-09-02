(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{374:function(a,t,v){"use strict";v.r(t);var _=v(45),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"通用函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用函数"}},[a._v("#")]),a._v(" 通用函数")]),a._v(" "),v("blockquote",[v("p",[a._v("注意：下列函数签名中 "),v("em",[v("strong",[a._v("T")])]),a._v(" 可表示 "),v("em",[v("strong",[a._v("float, vec2, vec3, vec4")])])])]),a._v(" "),v("h2",{attrs:{id:"abs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#abs"}},[a._v("#")]),a._v(" abs")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T abs(T x)")])])]),a._v(" "),v("li",[a._v("作用：返回绝对值")])]),a._v(" "),v("h2",{attrs:{id:"sign"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sign"}},[a._v("#")]),a._v(" sign")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T sign(T x)")])])]),a._v(" "),v("li",[a._v("作用：返回 -1.0, 0.0, 1.0")]),a._v(" "),v("li",[a._v("描述：x < 0.0, 返回 -1.0; x == 0.0, 返回 0.0; x > 0.0, 返回 1.0;")])]),a._v(" "),v("h2",{attrs:{id:"floor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#floor"}},[a._v("#")]),a._v(" floor")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T floor(T x)")])])]),a._v(" "),v("li",[a._v("作用：向下取整")])]),a._v(" "),v("h2",{attrs:{id:"ceil"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ceil"}},[a._v("#")]),a._v(" ceil")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T ceil(T x)")])])]),a._v(" "),v("li",[a._v("作用：向上取整")])]),a._v(" "),v("h2",{attrs:{id:"fract"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fract"}},[a._v("#")]),a._v(" fract")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T fract(T x)")])])]),a._v(" "),v("li",[a._v("作用：返回小数部分")]),a._v(" "),v("li",[a._v("描述：等价于 x - floor(x)")])]),a._v(" "),v("h2",{attrs:{id:"mod"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mod"}},[a._v("#")]),a._v(" mod")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T mod(T x, T y)")])])]),a._v(" "),v("li",[a._v("作用：返回 x 对 y 取模的值")])]),a._v(" "),v("h2",{attrs:{id:"min"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#min"}},[a._v("#")]),a._v(" min")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T min(T x, T y)")])])]),a._v(" "),v("li",[a._v("作用：最小值")])]),a._v(" "),v("h2",{attrs:{id:"max"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[a._v("#")]),a._v(" max")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T max(T x, T y)")])])]),a._v(" "),v("li",[a._v("作用：最大值")])]),a._v(" "),v("h2",{attrs:{id:"clamp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clamp"}},[a._v("#")]),a._v(" clamp")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T clamp(T x, T minVal, T maxVal)")])])]),a._v(" "),v("li",[a._v("作用：使返回值限定在 [minVal, maxVal] 区间里")]),a._v(" "),v("li",[a._v("描述：x < minVal, 返回 minVal; minVal < x < maxVal, 返回 x; x > maxVal, 返回 maxVal")])]),a._v(" "),v("h2",{attrs:{id:"mix"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mix"}},[a._v("#")]),a._v(" mix")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T mix(T x, T y, T a)")])])]),a._v(" "),v("li",[a._v("作用：返回 x * (1 - a) + y * a")])]),a._v(" "),v("h2",{attrs:{id:"step"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#step"}},[a._v("#")]),a._v(" step")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T step(T edge, T x)")])])]),a._v(" "),v("li",[a._v("作用：阶梯函数，返回 0.0, 1.0")]),a._v(" "),v("li",[a._v("描述：x < edge, 返回 0.0; 否则返回 1.0")])]),a._v(" "),v("h2",{attrs:{id:"smoothstep"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smoothstep"}},[a._v("#")]),a._v(" smoothstep")]),a._v(" "),v("ul",[v("li",[a._v("签名："),v("em",[v("strong",[a._v("T smoothstep(T edge0, T edge1, T x)")])])]),a._v(" "),v("li",[a._v("作用：光滑阶梯函数")]),a._v(" "),v("li",[a._v("描述：x ≤ edge0, 返回 0.0; x ≥ edge1, 返回 1.0; edge0 < x < edge1, 返回 Hermite 插值")])])])}),[],!1,null,null,null);t.default=s.exports}}]);