class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :team_id
      t.string :opponent_id
      t.date :date

      t.timestamps
    end
  end
end
