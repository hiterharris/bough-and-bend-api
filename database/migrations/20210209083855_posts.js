
exports.up = function(knex) {
  return knex.schema.createTable('posts', posts => {
    posts.increments()

    posts
        .string('date')
        .notNullable()
    
    posts  
        .string('title')
        .notNullable()

    posts
        .string('content')
        .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
};
