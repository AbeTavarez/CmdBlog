class AddNewColumn < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :category, null: false
    add_foreign_key :articles, :categories
  end
end
