class LearnsController < ApplicationController
  before_filter :set_learn, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @learns = Learn.all
    respond_with(@learns)
  end

  def show
    respond_with(@learn)
  end

  def new
    @learn = Learn.new
    respond_with(@learn)
  end

  def edit
  end

  def create
    @learn = Learn.new(params[:learn])
    @learn.save
    respond_with(@learn)
  end

  def update
    @learn.update_attributes(params[:learn])
    respond_with(@learn)
  end

  def destroy
    @learn.destroy
    respond_with(@learn)
  end

  private
    def set_learn
      @learn = Learn.find(params[:id])
    end
end
