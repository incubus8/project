class CreateRosters < ActiveRecord::Migration[6.1]
  def change
    create_table :rosters do |t|
      t.string :player_id
      t.string :team_id

      t.timestamps
    end
  end
end
