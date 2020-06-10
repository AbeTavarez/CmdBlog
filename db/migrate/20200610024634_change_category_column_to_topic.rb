class ChangeCategoryColumnToTopic < ActiveRecord::Migration[6.0]
  def change
    rename_column :articles, :category, :topic
  end
end
