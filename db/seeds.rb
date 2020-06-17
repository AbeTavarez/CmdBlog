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
@user1 = User.create!({username: "Melanie", email: "mel1@gmail.com",password: "123456"})
p "#{User.count} user(s) created"

#Create some Categories for our category table
@programming = Category.create!({name: "Programming"})
@hacking = Category.create!({name: "Hacking"})
@cybersecurity = Category.create!({name: "Cybersecurity"})
@datastructures = Category.create!({name: "Data Structures"})

#Articles
@pythonHack = Article.create!({title: "HackingWithPython", description: "This live map in the norsecorp website gives you real-time information of which countries are currently being cyber-attacked! This is just one of those avenues to understand how the importance of enhancing cybersecurity in everything we build is the need of the hour — rather, need of the minute! Now that we have made a little sense of why cybersecurity is important, let us dive into our first lesson! In this lesson, we will learn about why Python is one of the most in-demand skills among cybersecurity recruits and also try to learn and understand the fundamentals of the language.",image_path: "https://i.morioh.com/a961469f8b.png", topic: "coding", user_id: @user.id, category_id: @hacking.id})

  @comment1 = Comment.create!(content: "Great article", user: @user0, article: @pythonHack)
  @comment2 = Comment.create!(content: "Thanks", user: @user, article: @pythonHack)
  @comment3 = Comment.create!(content: "Amazing", user: @user1, article: @pythonHack)


@rubyDatastructures = Article.create!({title: "Ruby Data Structures", description: "Imagine you want to store the integer 1 in a variable. But maybe now you want to store 2. And 3, 4, 5 . Do I have another way to store all integers that I want, but not in millions variables? If I asked this question, it probably has another way to store it. Array is a collection that can be used to store a list of values (Like these integers that you want). So let’s use it!",image_path: "https://tavvy.com/article/wp-content/uploads/2019/12/programming.jpg", topic: "Data Structures", user_id: @user.id, category_id: @cybersecurity.id})

@comment4 = Comment.create!(content: "Great article", user: @user0, article:@rubyDatastructures)
@comment5 = Comment.create!(content: "Thanks", user: @user, article: @rubyDatastructures)

@swiftdev = Article.create!({title: "App Dev With Swift", description: "A cheat sheet can be a handy tool to quickly reference Xcode, Swift or iOS logic from a compact overview. Ideally, you can print them out and lay them down on your desk. This makes it really easy to access and use them often. Therefore, I’ll show you a few useful cheat sheets which you can use during development.Assert, precondition or fatalError Marcin Krzyzanowski created a great blog post called Swift asserts — the missing manual about the differences between assert, precondition, and fatalError. He explains each of them and what the impact is in terms of termination when using each in a production app without a debugger attached.",image_path: "https://miro.medium.com/max/2560/1*sMryEXZVPKFjGNcfSzE8Mw.jpeg", topic: "app dev", user_id: @user0.id, category_id: @programming.id})

  @comment6 = Comment.create!(content: "Super!!!", user: @user1, article: @pythonHack)

  @pythonNew = Article.create!({title:"New Features in Python 3.9", description: "This one is more of an out-of-sight change but has the potential of being one of the most significant changes for the future evolution of Python. Python currently uses a predominantly LL(1)-based grammar, which in turn can be parsed by a LL(1) parser — which parses code top-down, left-to-right, with a lookahead of just one token. Now, I have almost no idea of how this works — but I can give you a few of the current issues in Python due to the use of this method:Python contains non-LL(1) grammar; because of this, some parts of the current grammar use workarounds, creating unnecessary complexity.LL(1) creates limitations in the Python syntax (without possible workarounds). This issue highlights that the following code simply cannot be implemented using the current parser (raising a SyntaxError):",image_path: "https://i.morioh.com/2020/03/07/6c7bae688a0e.jpg", topic: "Python Programming", user_id: @user0.id, category_id: @programming.id})

    @appideas = Article.create!({title: "15 App Ideas to Build and Level Up your Coding Skills", description: "We all know that it can be hard sometimes to find new application ideas that you could build in order to either improve or learn a new programming language or framework. We divided these app ideas into three tiers based on the knowledge and experience required to complete them. The tiers are: Beginner, Intermediate and Advanced.",image_path: "https://appinventiv.com/wp-content/uploads/sites/1/2018/08/Reasons-Why-Use-React-Native-for-Mobile-App-Development.png", topic:"Programming", user_id: @user0.id ,category_id: @programming.id})

    @productivity = Article.create!({title: "Top 12 Things That Destroy Developer Productivity", description: "A lot of articles address the role of tech leads and engineering managers. One common theme we often come across is how to increase a team’s productivity. But before you focus your energy trying to increase their productivity, you might first want to consider what’s destroying it, to have a sound base on which you can build. Unfortunately, even though Peopleware was published almost 30 years ago, we see lots of teams suffering from huge productivity loss in some (negatively) remarkable ways! No one expects a programmer to get work done without access to a computer, but there are many companies that expect programmers to get work done without access to their mind. This is equally unrealistic.So let’s deep dive into our list of 12 things that prevent your developers from getting “into the zone” and being productive. I will try to prioritize this list from most to least impactful. Feel free to comment!If you’re wondering if all this is worth the investment, just consider the developer’s salaries. Even 10% more productivity is a LOT!",image_path: "https://hackernoon.com/drafts/6t8232hs.png", topic: "productivity", user_id:@user.id, category_id: @programming.id})

  
p "#{Category.count} categories created"
p "#{Article.count} article(s) created"