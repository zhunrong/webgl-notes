# 通用函数

> 注意：下列函数签名中 ***T*** 可表示 ***float, vec2, vec3, vec4***

## abs

- 签名：***T abs(T x)***
- 作用：返回绝对值

## sign

- 签名：***T sign(T x)***
- 作用：返回 -1.0, 0.0, 1.0
- 描述：x < 0.0, 返回 -1.0; x == 0.0, 返回 0.0; x > 0.0, 返回 1.0;

## floor

- 签名：***T floor(T x)***
- 作用：向下取整

## ceil

- 签名：***T ceil(T x)***
- 作用：向上取整

## fract

- 签名：***T fract(T x)***
- 作用：返回小数部分
- 描述：等价于 x - floor(x)

## mod

- 签名1：***T mod(T x, T y)***
- 签名2：***T mod(T x, float y)***
- 作用：返回 x 对 y 取模的值

## min

- 签名1：***T min(T x, T y)***
- 签名2：***T min(T x, float y)***
- 作用：最小值

## max

- 签名1：***T max(T x, T y)***
- 签名2：***T max(T x, float y)***
- 作用：最大值

## clamp

- 签名1：***T clamp(T x, T minVal, T maxVal)***
- 签名2：***T clamp(T x, float minVal, float maxVal)***
- 作用：使返回值限定在 [minVal, maxVal] 区间里
- 描述：x < minVal, 返回 minVal; minVal < x < maxVal, 返回 x; x > maxVal, 返回 maxVal

## mix

- 签名1：***T mix(T x, T y, T a)***
- 签名2：***T mix(T x, T y, float a)***
- 作用：返回 x * (1 - a) + y * a

## step

- 签名1：***T step(T edge, T x)***
- 签名2：***T step(float edge, T x)***
- 作用：阶梯函数，返回 0.0, 1.0
- 描述：x < edge, 返回 0.0; 否则返回 1.0

## smoothstep

- 签名1：***T smoothstep(T edge0, T edge1, T x)***
- 签名2：***T smoothstep(float edge0, float edge1, T x)***
- 作用：光滑阶梯函数
- 描述：x ≤ edge0, 返回 0.0; x ≥ edge1, 返回 1.0; edge0 < x < edge1, 返回 Hermite 插值