class ArticlesController < ApplicationController
  # before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_article, only: [:show, :update, :destroy]

  # GET /articles
  def index

    @articles = Article.all

    render json: @articles, include: {user: {only: [:id, :username]}}
  end

  #Article by Userid
  def userArticles 
    @user = User.find(params[:user_id])
    @articles = Article.where(user_id: @user.id)
  end

  # GET /articles/1
  def show
    render json: @article, include: :comments
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

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

    # Only allow a trusted parameter "white list" through.
    def article_params
      params.require(:article).permit(:title, :description, :category)
    end
end
