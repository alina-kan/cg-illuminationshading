#version 300 es

precision mediump float;

in vec3 ambient;
in vec3 diffuse;
in vec3 specular;

uniform vec3 material_color;    // Ka and Kd
uniform vec3 material_specular; // Ks

out vec4 FragColor;

void main() {
    //FragColor = vec4(material_color, 1.0);
    vec3 I = ambient * material_color;
    I = I + (diffuse * material_color);
    I = I + (specular * material_specular);
    if (all(greaterThan(I, vec3(1.0)))){
        I = vec3(1.0, 1.0, 1.0);
    }
    FragColor = vec4(I, 1.0);
}
