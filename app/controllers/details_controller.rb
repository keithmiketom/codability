class DetailsController < ApplicationController
  before_filter :set_detail, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @details = Detail.all
    respond_with(@details)
  end

  def show
    respond_with(@detail)
  end

  def new
    @detail = Detail.new
    respond_with(@detail)
  end

  def edit
  end

  def create
    @detail = Detail.new(params[:detail])
    @detail.save
    respond_with(@detail)
  end

  def update
    @detail.update_attributes(params[:detail])
    respond_with(@detail)
  end

  def destroy
    @detail.destroy
    respond_with(@detail)
  end

  private
    def set_detail
      @detail = Detail.find(params[:id])
    end
end
