# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Article.destroy_all
Category.destroy_all
User.destroy_all


#create default user
@user = User.create!({username: "Abe", email: "abe@gmail.com",password: "123456"})
@user0 = User.create!({username: "Abraham", email: "abraham@gmail.com",password: "123456"})

p "#{User.count} user(s) created"

#Create some Categories for our category table
@programming = Category.create!({name: "Programming"})
@hacking = Category.create!({name: "Hacking"})
@cybersecurity = Category.create!({name: "Cybersecurity"})
@datastructures = Category.create!({name: "Data Structures"})

#Articles
@pythonHack = Article.create!({title: "HackingWithPython", description: "This live map in the norsecorp website gives you real-time information of which countries are currently being cyber-attacked! This is just one of those avenues to understand how the importance of enhancing cybersecurity in everything we build is the need of the hour — rather, need of the minute!
  Now that we have made a little sense of why cybersecurity is important, let us dive into our first lesson!
  In this lesson, we will learn about why Python is one of the most in-demand skills among cybersecurity recruits and also try to learn and understand the fundamentals of the language.", topic: "coding", user_id: @user.id, category_id: @hacking.id})

@rubyDatastructures = Article.create!({title: "Ruby Data Structures", description: "Imagine you want to store the integer 1 in a variable. But maybe now you want to store 2. And 3, 4, 5 . Do I have another way to store all integers that I want, but not in millions variables? If I asked this question, it probably has another way to store it. Array is a collection that can be used to store a list of values (Like these integers that you want). So let’s use it!", topic: "Data Structures", user_id: @user.id, category_id: @cybersecurity.id})

@swiftdev = Article.create!({title: "App Dev With Swift", description: "A cheat sheet can be a handy tool to quickly reference Xcode, Swift or iOS logic from a compact overview. Ideally, you can print them out and lay them down on your desk. This makes it really easy to access and use them often. Therefore, I’ll show you a few useful cheat sheets which you can use during development.
  Assert, precondition or fatalError Marcin Krzyzanowski created a great blog post called Swift asserts — the missing manual about the differences between assert, precondition, and fatalError. He explains each of them and what the impact is in terms of termination when using each in a production app without a debugger attached.", topic: "app dev", user_id: @user0.id, category_id: @programming.id})

  @comment1 = Comment.create!(content: "great article", user: @user0, article: @pythonHack, category: hacking)

p "#{Category.count} categories created"
p "#{Article.count} article(s) created"