#version 300 es

precision highp float;

in vec3 vertex_position; //vertex attributes (different per vertex) only worry about this specific one
in vec3 vertex_normal; 

uniform mat4 model_matrix; //constants for a given model (for one draw call, this will be the same for all vertices) - can update uniform in between draw calls to change something
uniform mat4 view_matrix; 
uniform mat4 projection_matrix; 

out vec3 frag_pos; //attribute to pass onto fragment shader - they will be interpolated
out vec3 frag_normal; 


void main() {
    frag_normal = normalize(transpose(inverse(mat3(model_matrix))) * vertex_normal); //will need to add inverse of transpose for non-uniform scaling

    frag_pos = vec3(model_matrix * vec4(vertex_position, 1.0));

    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
    
}

//vertex shader is calculating once per vertex