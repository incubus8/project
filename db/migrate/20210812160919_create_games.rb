class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :home_id
      t.string :away_id
      t.date :date
      t.integer :home_score
      t.integer :away_score
      t.string :result

      t.timestamps
    end
  end
end


# final score!!
# final result!!