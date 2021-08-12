class Player < ApplicationRecord
    # belongs_to :team
    has_many :rosters
    has_many :teams, through: :rosters

    # has_secure_password

    validates :email, uniqueness: true
    # validates :password, presence: true

    # def Player.digest(string)
    #     cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    #     BCrypt::Password.create(string, cost: cost)
    # end

    
end
