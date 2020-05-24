class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user 
  end

  def update
    current_user.update(user_params)
    render json: current_user
  end

  def user_params
    params.require(:user).permit(:id, :name, :email, :isActive)
  end
end