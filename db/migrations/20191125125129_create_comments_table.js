exports.up = function(knex) {
  return knex.schema.createTable('comments', commentsTable => {
    commentsTable.increments('comment_id').primary();
    commentsTable.string('author').notNullable();
    commentsTable.integer('article_id').notNullable();
    commentsTable.integer('votes').defaultsTo(0);
    commentsTable.timestamp('created_at').defaultsTo(knex.fn.now());
    commentsTable.string('body', 1000).notNullable();
    commentsTable
      .foreign('author')
      .references('username')
      .inTable('users');
    commentsTable
      .foreign('article_id')
      .references('article_id')
      .inTable('articles');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
