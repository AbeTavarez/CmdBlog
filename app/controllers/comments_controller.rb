class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_article, only: [:index, :create]

  # GET /comments
  def index

    @article = Article.find(params[:article_id])
    @comments = Comment.where(article_id: @article.id)

    render json: @comments, include: {user: {only:[:id, :username]}}

    # render json: @comments.to_json(include: { article: { include: { user: { only: [:id, :username] } } } }), status: :ok
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end
  # Sets Article with the Article ID
  def set_article
    @article = Article.find(params[:article_id])
end

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit(:content, :user_id)
  end
end
