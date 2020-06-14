class ArticlesController < ApplicationController
  before_action :authorize_request, only: [:userArticles,:create, :update, :destroy]
  before_action :set_article, only: [:show, :update, :destroy]

  # GET /articles
  def index

    @articles = Article.all

    render json: @articles, include: {user: {only: [:id, :username]}}
  end

  #Article by Userid
  def userArticles 

    render json: @current_user.articles

    # @user = User.find(params[:user_id])
    # @articles = Article.where(user_id: @user.id)
    # render json: @articles
  end

  # GET /articles/1
  def show
    render json: @article, include: :comments
  end

  # POST /articles
  def create
    @article = Article.new(article_params)
    puts @article
    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end
    # Set current user to article
    # def set_user
    #   @article = @current_user.articles.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    #Bug origin category chaged to topic
    def article_params
      params.require(:article).permit(:title, :description, :topic)
    end
end
