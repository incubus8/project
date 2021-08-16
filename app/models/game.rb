class Game < ApplicationRecord
    belongs_to :home, class_name: 'Team'
    belongs_to :away, class_name: 'Team'

    has_many :home_users, foreign_key: 'home_id', class_name: 'Team'
    has_many :away_users, through: :home_users

    has_many :away_users, foreign_key: 'away_id', class_name: 'Team'
    has_many :home_users, through: :away_users

    def format
    
    end
end
