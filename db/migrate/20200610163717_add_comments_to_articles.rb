class AddCommentsToArticles < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :comments, null: false, foreign_key: true
  end
end
