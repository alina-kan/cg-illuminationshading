function createPlaneVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);

    
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        -0.5, 0.0,  0.5,
         0.5, 0.0,  0.5,
         0.5, 0.0, -0.5,
        -0.5, 0.0, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
         0,  1,  2,      0,  2,  3,
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}


function createCubeVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);

    
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        // Front face
        -0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
         0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,

        // Back face
         0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5,  0.5, -0.5,
         0.5,  0.5, -0.5,

        // Top face
        -0.5,  0.5,  0.5,
         0.5,  0.5,  0.5,
         0.5,  0.5, -0.5,
        -0.5,  0.5, -0.5,

        // Bottom face
         0.5, -0.5,  0.5,
        -0.5, -0.5,  0.5,
        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,

        // Right face
         0.5, -0.5,  0.5,
         0.5, -0.5, -0.5,
         0.5,  0.5, -0.5,
         0.5,  0.5,  0.5,

        // Left face
        -0.5, -0.5, -0.5,
        -0.5, -0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        // Front
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,

        // Back
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        // Top
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,

        // Bottom
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        // Right
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,

        // Left
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        // Front
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Back
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Top
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Bottom
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Right
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Left
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
         0,  1,  2,      0,  2,  3,   // Front
         4,  5,  6,      4,  6,  7,   // Back
         8,  9, 10,      8, 10, 11,   // Top
        12, 13, 14,     12, 14, 15,   // Bottom
        16, 17, 18,     16, 18, 19,   // Right
        20, 21, 22,     20, 22, 23    // Left
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}


function createSphereVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // calculate vertices, normals, texture coordinate, and faces
    let slices = 36;
    let stacks = 18;

    let phi = 0;
    let delta_phi = 2 * Math.PI / slices;
    let theta = Math.PI / 2;
    let delta_theta = -Math.PI / stacks;

    let vertices = [];
    let normals = [];
    let texcoords = [];
    for (let i = 0; i <= slices; i++) {
        let cos_phi = Math.cos(phi);
        let sin_phi = Math.sin(phi);
        theta = Math.PI / 2;
        for (let j = 0; j <= stacks; j++) {
            let cos_theta = Math.cos(theta);
            let sin_theta = Math.sin(theta);
            let x = cos_theta * cos_phi;
            let y = sin_theta;
            let z = cos_theta * -sin_phi;
            vertices.push(x/2, y/2, z/2);
            normals.push(x, y, z);
            texcoords.push(i / slices, 1.0 - j / stacks);

            theta += delta_theta;
        }
        phi += delta_phi;
    }

    let indices = [];
    for (let i = 0; i < slices; i++) {
        let k1 = i * (stacks + 1);
        let k2 = (i + 1) * (stacks + 1);
        for (let j = 0; j < stacks; j++) {
            indices.push(k1, k1 + 1, k2);
            indices.push(k1 + 1, k2 + 1, k2);
            k1++;
            k2++;
        }
    }

    
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}

//
// TODO: create a custom 3D model
//         - minimum of 16 vertices
//
function createCustomVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);

    // calculate vertices, normals, texture coordinate, and faces

    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)

    let center = vec3.fromValues(12, 10, -49);
    let radius = 5;
    let height = 3;
    let sides = 8;

    let circle_x = center.x;
    let circle_y_bottom = center.y - (height/2);
    let circle_y = center.y;
    let circle_y_top = center.y + (height/2);
    let circle_z = center.z;

    let top_x = 0;
    let top_z = 0;
    let bottom_x = 0;
    let bottom_z = 0;
    let radians = 0;
    let pt = vec4.fromValues((circle_x + radius), circle_y, circle_z, 1.0);
    let verts = [];
    let circle_top_vertices = [];
    let circle_bottom_vertices = [];

    //vertices of circles
    // * top circle: (x, y + 1/2*height, z)
    let center_pt_top = vec4.fromValues(circle_x, circle_y_top, circle_z, 1.0);
    circle_top_vertices.push(center_pt_top);
    for (let i = 0; i < sides; i++){
        //create each vertex
        radians = radians + ((Math.PI * 2)/sides);
        top_x = circle_x + radius * (Math.cos(radians));
        top_z = circle_z + radius * (Math.sin(radians));

        pt = vec4.fromValues(top_x, circle_y_top, top_z, 1.0);

        circle_top_vertices.push(pt);
    }
    
    // * bottom circle
    let center_pt_bottom = vec4.fromValues(circle_x, circle_y_bottom, circle_z, 1.0);
    circle_bottom_vertices.push(center_pt_bottom);
    for (let i = 0; i < sides; i++){
        //create each vertex
        radians = radians + ((Math.PI * 2)/sides);
        bottom_x = circle_x + radius * (Math.cos(radians));
        bottom_z = circle_z + radius * (Math.sin(radians));

        pt = vec4.fromValues(bottom_x, circle_y_bottom, bottom_z, 1.0);

        circle_bottom_vertices.push(pt);
    }

    //console.log(circle_top_vertices);
    //console.log(circle_bottom_vertices);
    for (let i = 0; i < circle_top_vertices.length; i++){
        verts.push(circle_top_vertices[i]);

    }
    for (let i = 0; i < circle_bottom_vertices.length; i++){
        verts.push(circle_bottom_vertices[i]);
    }

    let vertices = verts;
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);

    
    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

     // create buffer to store faces of the triangle
     let vertex_index_buffer = gl.createBuffer();
     // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
     // create array of vertex indices (each set of 3 represents a triangle)
     //edges
    let indices = [
        //top circle fan
        0, 1, 2,
        0, 2, 3,
        0, 3, 4,
        0, 4, 5,
        0, 5, 6,
        0, 6, 7,
        0, 7, 1,
        //sides
        1, 9, 2,
        9, 2, 10,
        2, 10, 3,
        10, 3, 11,
        3, 11, 4,
        11, 4, 12,
        4, 12, 5,
        12, 5, 13,
        5, 13, 6,
        13, 6, 14,
        6, 14, 7,
        14, 7, 15,
        //bottom circle fan
        8, 9, 10,
        8, 10, 11,
        8, 11, 12,
        8, 12, 13,
        8, 13, 14,
        8, 14, 15,
        8, 15, 9
    ];
     // store array of vertex indices in the vertex_index_buffer
     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
 
     // no longer modifying our Vertex Array Object, so deselect
     gl.bindVertexArray(null);

    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;

    // return created Vertex Array Object
    return vertex_array;
}
