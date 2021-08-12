require 'faker'

puts "Clearing old data..."
Player.destroy_all
Player.reset_pk_sequence
Team.destroy_all
Team.reset_pk_sequence
Roster.destroy_all
Roster.reset_pk_sequence
Game.destroy_all
Game.reset_pk_sequence

puts "Seeding Players"

20.times do
    Player.create(
        name: Faker::FunnyName.name,
        email: Faker::Internet.email,
        password_digest: 1234
    )
end

puts "Seeding Teams"

    Team.create(
        name: "Frisbros",
        image: "https://media.istockphoto.com/photos/red-frisbee-on-a-plain-white-background-picture-id171375061?s=612x612"
    )

    Team.create(
        name: "Throwbocop",
        image: "https://media.istockphoto.com/photos/red-frisbee-on-a-plain-white-background-picture-id171375061?s=612x612"
    )

    Team.create(
        name: "Church of Skyentology",
        image: "https://media.istockphoto.com/photos/red-frisbee-on-a-plain-white-background-picture-id171375061?s=612x612"
    )

    Team.create(
        name: "Sky Me a River",
        image: "https://media.istockphoto.com/photos/red-frisbee-on-a-plain-white-background-picture-id171375061?s=612x612"
    )

puts "Seeding Rosters"

20.times do
    Roster.create(player_id: Player.ids.sample, team_id: Team.ids.sample)
end

puts "Seeding Games"

10.times do
    Game.create(team_id: Team.ids.sample, opponent_id: Team.ids.sample, date: Date.parse("08/12/2021"))
end
