# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# need to take the number as an argument and run it thru a conditional that checks if it is even or odd and return the expected statement
# I used the modulo by 2 to see if it is even or odd
def is_even num
  if num % 2 == 0
    p "#{num} is even"
  else 
    p "#{num} is odd"
  end
end
num1 = 7
p is_even num1
# if num1 % 2 != 0
#   p "#{num1} is odd"
# end
# it works
# Expected output: '7 is odd'
# same thing here
num2 = 42
p is_even num2
# if num2 % 2 == 0 
#   p "#{num2} is even"
# end
# it works
# Expected output: '42 is even'
# same thing here
num3 = 221
p is_even num3
# if num3 % 2 != 0
#   p "#{num3} is odd"
# end
# Expected output: '221 is odd'
# I'm not sure if there was anything else that was required here, so I'm just going to make it on conditional method and just plug it in to each num.
# Also not sure why I'm getting double prints.. but I'll rather be twice right then not at all?


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# after reviewing the link provided, i figured a method that will return the string while deleting the vowels will work
def vowel_del string
  p "#{string}".delete "AEIOUaeiou"
end

beatles_album1 = 'Rubber Soul'
p vowel_del beatles_album1
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
p vowel_del beatles_album2
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
p vowel_del beatles_album3
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# i think i need to make a method that takes the string, turns it all lower case and compares it to it's self reversed.
def pal_test string
  new_string = string.downcase
  if new_string == new_string.reverse
    p "#{string} is a palindrome"
  else p "#{string} is not a palindrome"
  end
end

palindrome_tester1 = 'Racecar'
p pal_test palindrome_tester1
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
p pal_test palindrome_tester2
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
p pal_test palindrome_tester2
# Expected output: 'Rotator is a palindrome'
