class CreateFactions < ActiveRecord::Migration[5.1]
  def change
    create_table :factions do |t|
      t.belongs_to :legion, foreign_key: true
      t.string :name, null:false
      t.text :description, null:false

      t.timestamps
    end
  end
end
