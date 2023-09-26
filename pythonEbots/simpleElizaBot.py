import random
# much more simple but works better
# only works for declaritive sentences
# goof on questions




def generate_why_question(response):
    # split into a list
    rlist = response.lower().strip().split()
    #check for refering to bot, as it is difficult to replace I to you and then you to me
    refertobot = ["you","yours"]
    for i in refertobot:
        if i in rlist:
            return "Please don't bring me into this.  I am concerned with you."
    #check for questions words in interogative positions only 
    qwords = ["do","what", "how","why","when"]
    for i in qwords:
        if i in rlist[0]:
            return "I am asking the questions here!!!"
    
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
    return f"Why do you think {resultPart.strip()}?" # the you is already .strip to take out white space from because




# Function to emulate ELIZA's behavior.
def eliza():
    print('''ELIZA: Hello, I'm ELIZA. Please tell me something, and I will respond with a 'why' question.
           for example "I feel sad", "I like chocolate", "I love myself"
           "He looks lonely" 
        ''')
    while True:
        user_input = input("You: ")
        if user_input.lower() == "quit":
            print("ELIZA: Goodbye!")
            break
        else:
            why_question = generate_why_question(user_input)
            print(f"ELIZA: {why_question}")
             

# Run the ELIZA program.
eliza()