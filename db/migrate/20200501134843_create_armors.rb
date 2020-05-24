class CreateArmors < ActiveRecord::Migration[5.1]
  def change
    create_table :armors do |t|
      t.belongs_to :faction, foreign_key: true
      t.string :name, null:false
      t.string :rank, null:false
      t.boolean :available, null:false, default: true 

      t.timestamps
    end
  end
end
