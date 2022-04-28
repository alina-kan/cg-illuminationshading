#version 300 es

precision mediump float;

//ins are 1 to 1 matches with vertex out variables
//uniforms are constants for a given model
//out (only have one) is the pixel's color

//this is called once per pixel per every polygon in the model


in vec3 frag_pos; 
in vec3 frag_normal; //used for N

uniform vec3 light_ambient; //Ia
uniform vec3 light_position; //use to find  L
uniform vec3 light_color; //Ip
uniform vec3 camera_position; //V?
uniform vec3 material_color;      // Ka and Kd
uniform vec3 material_specular;   // Ks
uniform float material_shininess; // n

out vec4 FragColor;

void main() {
    vec3 N = normalize(frag_normal);
    vec3 L = normalize(light_position - frag_pos);
    vec3 V = normalize(camera_position - frag_pos);
    vec3 R = 2.0*(dot(N, L))*N - L; 

    vec4 ambient = vec4(light_ambient * material_color, 1.0);
    vec4 diffuse = vec4(light_color * material_color *max(dot(N, L), 0.0), 1.0);
    vec4 specular = vec4( light_color * material_specular* pow( max(dot(R, V), 0.0), material_shininess) , 1.0); 

    FragColor = vec4(ambient + diffuse + specular); 
}


//get texture coordinates per vertex, an image associated with it, and sample that in
