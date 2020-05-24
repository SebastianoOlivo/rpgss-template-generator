class LegionsController < ApplicationController
  before_action :set_legion, only: [:show, :update, :destroy]
  def index
    puts 'all'
    legions = Legion.all
    render json: legions, :except => [:created_at, :updated_at]
  end

  def show
    render json: @legion, :except => [:created_at, :updated_at]
  end

  def create
    legion = Legion.create!(legion_params)
    render json: legion, status: :created
  end

  def update
    puts 'update'
    @legion.update(legion_params)
    render json: @legion
  end

  def destroy
    @legion.destroy
    head :no_content
  end

  private
  def set_legion
    @legion = Legion.find(params[:id])
  end
  def legion_params
    params.require(:legion).permit(:id, :name, :image, :quote, :summary, :hierarchy)
  end
end