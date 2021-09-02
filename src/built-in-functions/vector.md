# 向量函数

> 注意：下列函数签名中 
>
> ***vec*** 表示 ***vec2, vec3, vec4***
>
> ***bvec*** 表示 ***bvec2, bvec3, bvec4***
>
> ***ivec*** 表示 ***ivec2, ivec3, ivec4***
>
> ***T*** 表示 ***vec*** 与 ***ivec*** 的并集

## lessThan

- 签名：***bvec lessThan(T x, T y)***
- 作用：对应分量小于

## lessThanEqual

- 签名：***bvec lessThanEqual(T x, T y)***
- 作用：对应分量小于等于

## greaterThan

- 签名：***bvec greaterThan(T x, T y)***
- 作用：对应分量大于

## greaterThanEqual

- 签名：***bvec greaterThanEqual(T x, T y)***
- 作用：对应分量大于等于

## equal

- 签名1：***bvec equal(T x, T y)***
- 签名2：***bvec equal(bvec x, bvec y)***
- 作用：对应分量相等

## notEqual

- 签名1：***bvec notEqual(T x, T y)***
- 签名2：***bvec notEqual(bvec x, bvec y)***
- 作用：对应分量不相等

## any

- 签名：***bool any(bvec x)***
- 作用：判断是否任意分量为true

## all

- 签名：***bool all(bvec x)***
- 作用：判断是否所有分量为true

## not

- 签名：***bvec not(bvec x)***
- 作用：对应分量取反