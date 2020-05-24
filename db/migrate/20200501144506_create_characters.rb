class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.belongs_to :armor, foreign_key: true
      t.belongs_to :legion, foreign_key: true
      t.string :name, null:false, unique: true

      t.timestamps
    end
  end
end
