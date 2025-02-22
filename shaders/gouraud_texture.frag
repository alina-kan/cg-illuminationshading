#version 300 es

precision mediump float;

in vec3 ambient;
in vec3 diffuse;
in vec3 specular;
in vec2 frag_texcoord;

uniform vec3 material_color;    // Ka and Kd
uniform vec3 material_specular; // Ks
uniform sampler2D image;        // use in conjunction with Ka and Kd

out vec4 FragColor;

void main() {
    vec3 materialColor = texture(image, frag_texcoord).rgb * material_color;
    vec3 final = ambient * materialColor + diffuse * materialColor + specular * materialColor;
    if (final.x >= 1.0){
        final.x = 1.0;
    } else if (final.y >= 1.0){
        final.y = 1.0;
    } else if (final.z >= 1.0){
        final.z = 1.0;
    }
    FragColor = vec4(final, 1.0);
}
