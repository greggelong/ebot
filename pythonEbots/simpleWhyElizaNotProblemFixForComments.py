import random
# fix the not problem by not allowign for it and not checking for all negatives which would and
# but this doesnt allow adverbs buy using t
# problem with negitive I would like to say negitve thngs  but 
# Function to generate a 'why' question based on the user's response.# take off because
# check for i feel i i like i hope
# if not rewrite

def has_feeling(response):
    # check that it has feeling words
    tlang = ["I feel","i feel"] 
    for ph in tlang:
        if ph in response:
            #print("true")
            return True
        ## no in 
    return False

def has_feeling2(response):
    # allows for adverbs #but creates problems with negatives 
    rtest = response.lower().split()
    if "i" in rtest and "feel" in rtest:
        return True
    else:
        return False

    

def generate_why_question(response):
    # split into a list
    rlist = response.lower().strip().split()
    #check for refering to bot, as it is difficult to replace I to you and then you to me
    refertobot = ["you","yours"]
    for i in refertobot:
        if i in rlist:
            return "Please don't bring me into this.  I am concerned with you."
#     #check for negitaves in answers
#     negs = ["dont","don't", "not"]
#     for i in negs:
#         if i in rlist:
#             return "Please don't use negative language, like: I don't or I do not"
    # replace dictionary
    
    replaceit = {
        "i":"you",
        "am":"are",
        "me":"you",
        "mine":"yours",
        "my":"your",
        "myself":"yourself",
        "because": "",
        }
    for word in replaceit.keys():
        # use list comprehension
        rlist = [replaceit.get(word) if item == word else item for item in rlist]
    # list to string
    resultPart = " ".join(rlist)
    return f"Why do {resultPart.strip()}?" # the you is already .strip to take out white space from because




# Function to emulate ELIZA's behavior.
def eliza():
    print('''ELIZA: Hello, I'm ELIZA. Please tell me something, and I will respond with a 'why' question.
           for example "I feel sad"
        ''')
    while True:
        user_input = input("You: ")
        if user_input.lower() == "quit":
            print("ELIZA: Goodbye!")
            break
        else:
            if has_feeling(user_input):
                why_question = generate_why_question(user_input)
                print(f"ELIZA: {why_question}")
            else:
                print("Please state your answer in the form of 'I feel'. Dont use the negative 'I don't/do not feel'. I really want you to feel")

# Run the ELIZA program.
eliza()