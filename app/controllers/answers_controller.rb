class AnswersController < ApplicationController
  before_filter :set_answer, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def create
   @question = Question.find(params[:question])
   answer = params[:answer]
   correct = params[:correct] == "1"
   new = answer.create(:answer => answer, :correct => correct, :question_id => @question.id)
   
   if new.correct
    @question.answer = new
   end
   
   redirect_to question_path(@question)
  end
  
  def destroy
   @question = Question.find(params[:question])
   @answer = Answer.find(params[:answer])
   @answer.destroy
   redirect_to question_path(@question)
  end
  
end
