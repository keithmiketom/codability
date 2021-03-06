class Question < ActiveRecord::Base
  attr_accessible :question
  
  has_many :answers
  accepts_nested_attributes_for :answers
  
  def answer
   uncorrect
   answers.select {|c| c.correct}[0]
  end 
  
  def uncorrect
   answers.each {|c| c.correct = false}
  end
  
  def answer= answer
   if !answer.nil?
    answer.correct = false
   end
   
   if answers.include? answer
    answer.correct = true
   else
    answers << answer
    answer.correct = true
   end
  end


  
end
