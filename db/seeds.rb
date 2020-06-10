# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Article.destroy_all

Category.destroy_all

#create default user
@user = User.create!({username: "Abe", email: "abe@gmail.com",password: "123456"})

p "#{User.count} user(s) created"

#Create some Categories for our category table
@programming = Category.create!({name: "Programming"})
@hacking = Category.create!({name: "Hacking"})
@cybersecurity = Category.create!({name: "Cybersecurity"})

Article.create!({title: "HackingWithPython", description: "Write scripts in python", topic: "coding", user_id: @user.id, category_id: @hacking.id})

p "#{Category.count} categories created"
p "#{Article.count} article(s) created"