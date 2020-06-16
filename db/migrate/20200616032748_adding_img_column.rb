class AddingImgColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :image_path, :string
  end
end
