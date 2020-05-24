class CreateLegionGeneralities < ActiveRecord::Migration[5.1]
  def change
    create_table :legion_generalities do |t|
      t.belongs_to :legion, foreign_key: true
      t.text :generality, null:false

      t.timestamps
    end
  end
end
