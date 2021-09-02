# 几何函数

> 注意：下列函数签名中 ***T*** 可表示 ***float, vec2, vec3, vec4***

## length

- 签名：***float length(T x)***
- 作用：求向量长度

## distance

- 签名：***float distance(T p0, T p1)***
- 作用：求两点间距离

## dot

- 签名：***float dot(T x, T y)***
- 作用：求向量点积

## cross

- 签名：***vec3 cross(vec3 x, vec3 y)***
- 作用：求向量叉积

## normalize

- 签名：***T normalize(T x)***
- 作用：归一化向量

## faceforward

- 签名：***T faceforward(T N, T I, T Nref)***
- 作用：如果 dot(I, Nref) < 0, 返回 N, 否则返回 -N
- 描述：to do

## reflect

- 签名：***T reflect(T I, T N)***
- 作用：求反射向量
- 描述：求向量 I 在面（法向量是 N ）上的反射向量

## refract

- 签名：***T refract(T I, T N, float eta)***
- 作用：折射向量
- 描述：求向量 I 在面（法向量是 N ） 上的折射向量