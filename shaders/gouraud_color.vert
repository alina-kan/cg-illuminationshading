#version 300 es

precision highp float;

in vec3 vertex_position; // [r, g, b]
in vec3 vertex_normal; // surface normal

uniform vec3 light_ambient; // use as Ia, use to calculate L?
uniform vec3 light_position[10]; // find L, where L points to light source
uniform vec3 light_color[10]; // use as Ip
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
    vec3 changed_vertex_normal = normalize(transpose(inverse(mat3(model_matrix))) * vertex_normal);
    vec3 changed_vertex_position = vec3(model_matrix * vec4(vertex_position, 1.0));
    vec3 N = normalize(changed_vertex_normal);

    diffuse;
    specular;
    for(int i = 0; i<10; i++){
        vec3 L = normalize(light_position[i] - changed_vertex_position);
        vec3 R = reflect(-L, N);
        float ln = dot(N, L);
        if (ln < 0.0){
         ln = 0.0;
        }
        vec3 intensity = light_color[i]; //Ip
        diffuse = diffuse + (intensity * ln);
        vec3 V = normalize(camera_position - changed_vertex_position);
        float rv = dot(R, V);
        if (rv < 0.0){
            rv = 0.0;
        }
        specular = specular + (intensity * pow(rv, material_shininess));
    }
    ambient = light_ambient;
    //specular = intensity * pow(rv, material_shininess);
}
