class Player < ApplicationRecord
    has_many :rosters
    has_many :teams, through: :rosters

    # has_secure_password

    validates :email, uniqueness: {message: "email already in use"}
    validates :name, :password_digest, presence: {message: "must be present"}
    validates :name, uniqueness: {message: "name already in use"}


    # def Player.digest(string)
    #     cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    #     BCrypt::Password.create(string, cost: cost)
    # end
    def format_json
        {
            id: self.id,
            name: self.name,
            email: self.email,
            password_digest: self.password_digest,
            teams: self.teams.map do |team|
                {
                    id: team.id,
                    name: team.name,
                    image: team.image
                }
            end
        }
    end
end
