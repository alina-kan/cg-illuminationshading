#version 300 es

precision highp float;

in vec3 vertex_position; // [r, g, b]
in vec3 vertex_normal; // surface normal

uniform vec3 light_ambient; // use as Ia, use to calculate L?
uniform vec3 light_position; // find L, where L points to light source
uniform vec3 light_color; // use as Ip
uniform vec3 camera_position; // V
uniform float material_shininess; // n
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 ambient;
out vec3 diffuse;
out vec3 specular;

void main() {
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
    vec3 N = normalize(vertex_normal);
    vec3 L = normalize(light_position - vertex_position);
    vec3 R = reflect(L, N);
    float ln = dot(N, L);
    if (ln < 0.0){
        ln = 0.0;
    }
    vec3 intensity = light_color; //Ip
    ambient = light_ambient;
    diffuse = intensity * ln;
    vec3 V = normalize(camera_position - vertex_position);
    float rv = dot(R, V);
    if (rv < 0.0){
        rv = 0.0;
    }
    specular = intensity * pow(rv, material_shininess);
}
