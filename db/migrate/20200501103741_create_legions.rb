class CreateLegions < ActiveRecord::Migration[5.1]
  def change
    create_table :legions do |t|
      t.string :name, null:false
      t.string :representative
      t.string :god,  null:false
      t.string :image,  null:false
      t.string :quote,  null:false
      t.text :summary,  null:false
      t.string :hierarchy,  null:false

      t.timestamps
    end
  end
end
