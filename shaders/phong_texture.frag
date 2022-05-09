#version 300 es

precision mediump float;

in vec3 frag_pos;
in vec3 frag_normal;
in vec2 frag_texcoord;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform vec3 material_color;      // Ka and Kd
uniform vec3 material_specular;   // Ks
uniform float material_shininess; // n
uniform sampler2D image;          // use in conjunction with Ka and Kd

out vec4 FragColor;

void main() {

  vec3 N = normalize(frag_normal);
  //vec3 L = normalize(light_position[0] - frag_pos);
  //vec3 V = normalize(camera_position - frag_pos);
  // vec3 R = 2.0*(dot(N, L))*N - L; 

  vec4 diffuse;
  vec4 specular;
  for(int i = 0; i <10; i++){
  //console.log("light ")
    vec3 L = normalize(light_position[i] - frag_pos);
    vec3 V = normalize(camera_position - frag_pos);
    vec3 R = 2.0*(dot(N, L))*N - L; 
    vec4 diffuse_temp = vec4(light_color[i] * material_color *max(dot(N, L), 0.0), 1.0);
    vec4 specular_temp = vec4( light_color[i] * material_specular* pow( max(dot(R, V), 0.0), material_shininess) , 1.0);
    diffuse = diffuse + diffuse_temp;
    specular = specular + specular_temp; 
  }

  vec4 ambient = vec4(light_ambient * material_color, 1.0);
  //vec4 diffuse = vec4(light_color[0] * material_color *max(dot(N, L), 0.0), 1.0);
  //vec4 specular = vec4( light_color[0] * material_specular* pow( max(dot(R, V), 0.0), material_shininess) , 1.0); 

  // FragColor = vec4(ambient + diffuse + specular); 

  vec3 matColor = texture(image, frag_texcoord).rgb * material_color;
  vec4 final = ambient * vec4(matColor, 1.0) + diffuse * vec4(matColor, 1.0) + specular * vec4(matColor, 1.0);
  if (final.x > 1.0){
    final.x = 1.0;
  } else if (final.y > 1.0) {
    final.y = 1.0;
  } else if (final.z > 1.0) {
    final.z = 1.0;
  }
  FragColor = final;
  // FragColor = vec4(material_color, 1.0) * texture(image, frag_texcoord);
}
