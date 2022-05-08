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

    //console.log(vertices.length);
    //console.log(normals.length);
    //console.log(indices.length);
    
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

    //let center = vec3.fromValues(1.0, 5.0, 1.0);
    let radius = 1.0;
    let height = 3.0;
    let sides = 8.0;

    let circle_x = 1.0;
    let circle_y_bottom = 5.0 - (height/2.0);
    let circle_y_top = 5.0 + (height/2.0);
    let circle_z = 1.0;

    let top_x = 0.0;
    let top_z = 0.0;
    let top_norm_x = 0.0;
    let top_norm_z = 0.0;
    let bottom_x = 0.0;
    let bottom_z = 0.0;
    let bottom_norm_x = 0.0;
    let bottom_norm_z = 0.0;
    let radians = 0.0;
    
    let circle_top_rim_vertices = [];
    let circle_bottom_rim_vertices = [];
    let circle_top_cover_vertices = [];
    let circle_bottom_cover_vertices = []; 

    let vertices = [];
    let normals = [];
    let texcoords = [];

    //vertices of circles
    //center pt top rim = circle_x, circle_y_top, circle_z
    //center pt bottom rim = circle_x, circle_y_bottom, circle_z
    //center pt top cover = circle_x, circle_y_top, circle_z
    //center pt bottom cover = circle_x, circle_y_bottom, circle_z

    // * top circle: (x, y + 1/2*height, z), rim
    circle_top_rim_vertices.push(circle_x, circle_y_top, circle_z);
    normals.push(0.0, 1.0, 0.0);
    for (let i = 0; i < sides; i++){
        radians = radians + ((Math.PI * 2)/sides);
        top_x = circle_x + radius * (Math.cos(radians));
        top_z = circle_z + radius * (Math.sin(radians));

        top_norm_x = radius * (Math.cos(radians));
        top_norm_z = radius * (Math.sin(radius));

        circle_top_rim_vertices.push(top_x, circle_y_top, top_z);
        normals.push(top_norm_x, 0.0, top_norm_z);
    }
    //console.log(circle_top_rim_vertices.length);
    //console.log(normals.length);

    // * bottom circle: (x, y - 1/2*height, z), rim
    circle_bottom_rim_vertices.push(circle_x, circle_y_bottom, circle_z);
    normals.push(0.0, -1.0, 0.0);
    for (let i = 0; i < sides; i++){
        //create each vertex
        radians = radians + ((Math.PI * 2)/sides);
        bottom_x = circle_x + radius * (Math.cos(radians));
        bottom_z = circle_z + radius * (Math.sin(radians));

        bottom_norm_x = radius * (Math.cos(radians));
        bottom_norm_z = radius * (Math.sin(radius));

        circle_bottom_rim_vertices.push(bottom_x, circle_y_bottom, bottom_z);
        normals.push(bottom_norm_x, 0.0, bottom_norm_z);
    }

    // * top circle: (x, y + 1/2*height, z), cover
    circle_top_cover_vertices.push(circle_x, circle_y_top, circle_z);
    normals.push(0.0, 1.0, 0.0);
    for (let i = 0; i < sides; i++){
        //create each vertex
        radians = radians + ((Math.PI * 2)/sides);
        top_x = circle_x + radius * (Math.cos(radians));
        top_z = circle_z + radius * (Math.sin(radians));

        circle_top_cover_vertices.push(top_x, circle_y_top, top_z);
        normals.push(0.0, 1.0, 0.0);
    }

    // * bottom circle: (x, y - 1/2*height, z), rim
    circle_bottom_cover_vertices.push(circle_x, circle_y_bottom, circle_z);
    normals.push(0.0, -1.0, 0.0);
    for (let i = 0; i < sides; i++){
        //create each vertex
        radians = radians + ((Math.PI * 2)/sides);
        bottom_x = circle_x + radius * (Math.cos(radians));
        bottom_z = circle_z + radius * (Math.sin(radians));

        circle_bottom_cover_vertices.push(bottom_x, circle_y_bottom, bottom_z);
        normals.push(0.0, -1.0, 0.0);
    }

    //now that 4 different vertex arrays have been created, combine
    // into one vertices array
    for (let i = 0; i < circle_top_rim_vertices.length; i++){
        vertices.push(circle_top_rim_vertices[i]);
    }

    for (let i = 0; i < circle_bottom_rim_vertices.length; i++){
        vertices.push(circle_bottom_rim_vertices[i]);
    }

    for (let i = 0; i < circle_top_cover_vertices.length; i++){
        vertices.push(circle_top_cover_vertices[i]);
    }

    for (let i = 0; i < circle_bottom_cover_vertices.length; i++){
        vertices.push(circle_bottom_cover_vertices[i]);
    }

    console.log(vertices.length/3);
    //console.log(normals);

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
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    // bottom coordinates based on circle rim
    let bottom_v = 0.1;
    let bottom_u = 0.0;
    // top coordinates based on circle rim
    let top_v = 0.9;
    let top_u = 1.0;
    //console.log(1.0/sides);
    texcoords.push(bottom_u, bottom_v);
    for (let i = 1; i < sides; i++){
        //recalculate u, dumby
        bottom_u = bottom_u + (1.0/(sides-1));
        texcoords.push(bottom_u, bottom_v);
    }
    console.log(texcoords);

    texcoords.push(top_u, top_v);
    for (let i = 1; i < sides; i++){
        //recalculate u, dumby
        top_u = top_u - (1.0/(sides-1));
        texcoords.push(top_u, top_v);
    }
    console.log(texcoords.length);

    let top_rim_center_v = 0.95;
    let top_rim_center_u = 0.5;
    let bottom_rim_center_v = 0.05;
    let bottom_rim_center_u = 0.5;

    texcoords.push(top_rim_center_u, top_rim_center_v);
    texcoords.push(bottom_rim_center_u, bottom_rim_center_v);

    //circles - both rim and covers
    let top_cover_center_v = 0.95;
    let top_cover_center_u = 0.5;
    let bottom_cover_center_v = 0.05;
    let bottom_cover_center_u = 0.5;

    //bottom rim circle texture coordinates
    texcoords.push(bottom_cover_center_u, bottom_cover_center_v);
    texcoords.push(bottom_cover_center_u, 0.0);
    texcoords.push(1.0, 0.0);
    texcoords.push(1.0, 0.05);
    texcoords.push(1.0, 0.1);
    texcoords.push(0.5, 0.1);
    texcoords.push(0.0, 0.1);
    texcoords.push(0.0, 0.05);
    texcoords.push(0.0, 0.0);

    //top rim circle texture coordinates
    texcoords.push(top_cover_center_u, top_cover_center_v);
    texcoords.push(top_cover_center_u, 0.9);
    texcoords.push(1.0, 0.9);
    texcoords.push(1.0, 0.95);
    texcoords.push(1.0, 1.0);
    texcoords.push(0.5, 1.0);
    texcoords.push(0.0, 1.0);
    texcoords.push(0.0, 0.95);
    texcoords.push(0.0, 0.9);

    /*
    //bottom cover circle texture coordinates
    texcoords.push(bottom_cover_center_u, bottom_cover_center_v);
    texcoords.push(bottom_cover_center_u, 0.0);
    texcoords.push(1.0, 0.0);
    texcoords.push(1.0, 0.05);
    texcoords.push(1.0, 0.1);
    texcoords.push(0.5, 0.1);
    texcoords.push(0.0, 0.1);
    texcoords.push(0.0, 0.05);
    texcoords.push(0.0, 0.0);

    //top cover circle texture coordinates
    texcoords.push(top_cover_center_u, top_cover_center_v);
    texcoords.push(top_cover_center_u, 0.9);
    texcoords.push(1.0, 0.9);
    texcoords.push(1.0, 0.95);
    texcoords.push(1.0, 1.0);
    texcoords.push(0.5, 1.0);
    texcoords.push(0.0, 1.0);
    texcoords.push(0.0, 0.95);
    texcoords.push(0.0, 0.9); */

    console.log(texcoords.length);
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
    // edges - we are only concerned about the rim vertices, so up to sides*2
    let indices = [];
    let ring_offset = sides + 1;
    // sides = 8 -> ring_offset = 9
    // bottom to top coutner clock
    for (let i = 1; i < sides + 1; i++){
        // vertices 1 - 9
        if (i == sides){
            indices.push(ring_offset+1, i + ring_offset, sides);
            // for sides = 8 -> push(9+1= 10, 8+9= 17, 8)
        } else {
            indices.push(i+ring_offset+1, i + ring_offset, i);
            // for sides = 8, start i = 1 -> push(1+9+1= 11, 1+9= 10, 1)
        }
    }
    //console.log(indices);

    // top to bottom counter clock
    for (let i = 1; i < sides + 1; i++){
        // vertices 1 - 9
        if (i == sides){
            indices.push(ring_offset+1, 1, sides);
            // for sides = 8 -> push(9+1= 10, 1, 8)
        } else {
            indices.push(i+ring_offset+1, i + 1, i);
            // for sides = 8, start i = 1 -> push(1+9+1= 11, 1+1= 2, 1)
        }
    }
    //console.log(indices);

    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);

    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;

    // return created Vertex Array Object
    return vertex_array;
}
