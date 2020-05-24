class RemoveColumnFromLegion < ActiveRecord::Migration[5.1]
  def change
    remove_column :legions, :god, :string, null:false
    remove_column :legions, :representative, :string
  end
end
