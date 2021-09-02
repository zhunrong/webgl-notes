#define PI 3.1415926

uniform vec3 u_LineColor;
uniform vec3 u_BgColor;
uniform vec3 u_AxisColor;
uniform vec2 u_Resolution;
uniform float u_Time;

struct Circle {
  float dist;
  float val;
  vec3 color;
};

float calc(float value) {
  return smoothstep(0.0, 1.0, abs(value));
}

vec2 getCenter() {
  return u_Resolution * 0.5;
}

Circle drawCircle(vec2 o) {
  vec2 st = gl_FragCoord.xy / u_Resolution - vec2(0.5);
  float dist = distance(st, o);
  float val = smoothstep(0.0, 0.05, 1.0 - sin(dist * 64.0 - u_Time));
  Circle circle;
  circle.dist = dist;
  circle.val = val;
  circle.color = vec3(st.x+0.5, st.y+0.5, sin(u_Time) * 0.5 + 0.5);
  return circle;
}

Circle drawCircle2(vec2 o) {
  vec2 center = getCenter();
  vec2 st = gl_FragCoord.xy / u_Resolution - vec2(0.5);
  vec2 coord = gl_FragCoord.xy;
  float dist = distance(coord, o);
  float value = min(u_Resolution.x, u_Resolution.y);
  float val = smoothstep(0.0, 2.0, abs(dist - 190.0));
  Circle circle;
  circle.dist = dist;
  circle.val = val;
  circle.color = vec3(st.x+0.5, st.y+0.5, sin(u_Time) * 0.5 + 0.5);
  return circle;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_Resolution - vec2(0.5);

  float val;
  vec3 color;

  // 画坐标轴
  val = calc(gl_FragCoord.x - u_Resolution.x * 0.5);
  val *= calc(gl_FragCoord.y - u_Resolution.y * 0.5);
  color = mix(u_AxisColor, u_BgColor, val);

  // 绘制圆
  Circle circle = drawCircle2(u_Resolution * 0.5);
  color = mix(circle.color, color, circle.val);

  gl_FragColor = vec4(color, 1.0);
}