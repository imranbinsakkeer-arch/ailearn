// This file contains the complete dataset for the AI Question Bank (Including All Duplicates)

const syllabusData = {
    "1": {
        "text": "Introduction \u2013 What is Artificial Intelligence(AI)? The Foundations of AI, History of AI, Applications of AI. Intelligent Agents \u2013 Agents and Environments, Good behavior: The concept of rationality, nature of Environments, Structure of Agents.",
        "topics": [
            "Introduction",
            "Intelligent Agents"
        ]
    },
    "2": {
        "text": "Solving Problems by searching-Problem solving Agents, Example problems, Searching for solutions, Uninformed search strategies, Informed search strategies, Heuristic functions.",
        "topics": [
            "Solving Problems by searching",
            "Uninformed search strategies",
            "Informed search strategies",
            "Heuristic functions"
        ]
    },
    "3": {
        "text": "Adversarial search - Games, Optimal decisions in games, The Minimax algorithm, Alpha-Beta pruning. Constraint Satisfaction Problems \u2013 Defining CSP, Constraint Propagation- inference in CSPs, Backtracking search for CSPs, Structure of CSP problems.",
        "topics": [
            "Adversarial search",
            "Constraint Satisfaction Problems"
        ]
    },
    "4": {
        "text": "Logical Agents \u2013 Knowledge based agents, Logic, Propositional Logic, Propositional Theorem proving, Agents based on Propositional Logic. First Order Predicate Logic \u2013 Syntax and Semantics of First Order Logic, Using First Order Logic, Knowledge representation in First Order Logic. Inference in First Order Logic \u2013 Propositional Vs First Order inference, Unification and Lifting, Forward chaining, Backward chaining, Resolution.",
        "topics": [
            "Logical Agents",
            "First Order Predicate Logic",
            "Inference in First Order Logic"
        ]
    },
    "5": {
        "text": "Learning from Examples \u2013 Forms of Learning, Supervised Learning, Learning Decision Trees, Evaluating and choosing the best hypothesis, Regression and classification with Linear models.",
        "topics": [
            "Learning from Examples",
            "Evaluating and choosing the best hypothesis",
            "Regression and classification with Linear models"
        ]
    }
};

const questions = [
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "Define artificial intelligence. (3)",
        "number": 1
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "What is Turing Test? Give its significance in the field of Artificial Intelligence. (3)",
        "number": 2
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "Describe in detail the four categories under which AI is classified with. (3)",
        "number": 3
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "Explain the significance of Turing test in the field of Artificial Intelligence. (3)",
        "number": 4
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "Discuss any three applications of Artificial Intelligence. (3)",
        "number": 5
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Explain the structure of an agent. (3)",
        "number": 6
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "What is a Rational agent? Explain. (3)",
        "number": 7
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Explain the terms Rationality, Omniscience and Autonomous. (3)",
        "number": 8
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "What is PEAS? Explain the PEAS description of an automated taxi driver. (3)",
        "number": 9
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Describe any two ways to represent states and the transitions between components in agent programs. (3)",
        "number": 10
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Define PEAS representation. Give the PEAS representation of a self-driving car. (3)",
        "number": 11
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Distinguish between episodic and sequential environment. (3)",
        "number": 12
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "For the following activities, give a PEAS description of the task environment: a) Interactive English tutor b) Part picking robot. (3)",
        "number": 13
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Describe in detail about different types of Agent programs with suitable figures. (8)",
        "number": 14
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the various type of agents. (8)",
        "number": 15
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the task environment PEAS for the following agents: a) Robots play soccer b) Netflix recommendation system c) Medical diagnosis expert system. (6)",
        "number": 16
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the various task environment types with examples. (8)",
        "number": 17
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Design a rational vacuum cleaner agent. Describe a rational agent function for the case in which each movement costs one point. (6)",
        "number": 18
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Introduction",
        "text": "Explain 6 applications of AI in detail. (6)",
        "number": 19
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Define PEAS in AI. For the following activities, give a PEAS description and characterize task environment properties: a) Medical Diagnosis system b) Bidding on an item at an auction. (7)",
        "number": 20
    },
    {
        "mod": 1,
        "part": "Part B (OR)",
        "topic": "Intelligent Agents",
        "text": "What are the properties of Task Environment? Explain. (7)",
        "number": 21
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the structure and Goal-based agents and Utility-based agents with the help of diagrams. (8)",
        "number": 22
    },
    {
        "mod": 1,
        "part": "Part B (OR)",
        "topic": "Introduction",
        "text": "How do we analyze that Artificial Intelligence is acting like a human? Elaborate the four concepts used in AI. (10)",
        "number": 23
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "With diagram compare model based reflex agent and simple reflex agent programs. (8)",
        "number": 24
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Introduction",
        "text": "Discuss the milestones in the history of Artificial Intelligence. (6)",
        "number": 25
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain learning agent with a neat diagram. (8)",
        "number": 26
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the components of a well-defined AI problem with an example. (6)",
        "number": 27
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "Define artificial intelligence. (3)",
        "number": 28
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "What is Turing Test? Give its significance. (3)",
        "number": 29
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Introduction",
        "text": "Explain the significance of Turing test. (3)",
        "number": 30
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Explain the structure of an agent. (3)",
        "number": 31
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "Explain the structure of an agent. (3)",
        "number": 32
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "What is PEAS? Give an example. (3)",
        "number": 33
    },
    {
        "mod": 1,
        "part": "Part A",
        "topic": "Intelligent Agents",
        "text": "What are the components of a well defined AI problem? (3)",
        "number": 34
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the various type of agents. (8)",
        "number": 35
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain learning agent with a neat diagram. (8)",
        "number": 36
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Intelligent Agents",
        "text": "Explain the various task environment types with examples. (8)",
        "number": 37
    },
    {
        "mod": 1,
        "part": "Part B",
        "topic": "Introduction",
        "text": "Discuss the milestones in the history of Artificial Intelligence. (6)",
        "number": 38
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Uninformed search strategies",
        "text": "List any three advantages of Depth First search. (3)",
        "number": 39
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Heuristic functions",
        "text": "Describe the difference between admissible heuristic and consistent heuristic with an example. (3)",
        "number": 40
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Solving Problems by searching",
        "text": "List the differences between tree search algorithm and graph search algorithm. (3)",
        "number": 41
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Uninformed search strategies",
        "text": "Differentiate between uninformed and informed search strategies. (3)",
        "number": 42
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Solving Problems by searching",
        "text": "Explain the terms a)Search b)Open Loop System c)Abstraction. (3)",
        "number": 43
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Heuristic functions",
        "text": "Define heuristic function? Give an example. (3)",
        "number": 44
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Solving Problems by searching",
        "text": "Describe the state space representation of 8-queens problem. (3)",
        "number": 45
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Solving Problems by searching",
        "text": "How do you evaluate the performance of a search algorithm? (3)",
        "number": 46
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Heuristic functions",
        "text": "Discuss the heuristic function. Explain how the heuristic function helps during search procedure. Explain with a suitable example. (7)",
        "number": 47
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Solving Problems by searching",
        "text": "Evaluate a problem as a state space search with an example. (7)",
        "number": 48
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Uninformed search strategies",
        "text": "Discuss any two uninformed search strategies in intelligent systems with examples. (9)",
        "number": 49
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Informed search strategies",
        "text": "Write A* algorithm and list the various observations about the algorithm. (5)",
        "number": 50
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Uninformed search strategies",
        "text": "Show the order in which nodes are explored, solution path and path cost for uniform cost search for the given graph. [Graph Referenced] (9)",
        "number": 51
    },
    {
        "mod": 2,
        "part": "Part B (OR)",
        "topic": "Informed search strategies",
        "text": "Perform A* search for the given graph. Show exploration order and path cost. [Graph Referenced] (9)",
        "number": 52
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Solving Problems by searching",
        "text": "Write the standard formulation of 8-puzzle problem. (7)",
        "number": 53
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Uninformed search strategies",
        "text": "Explain and compare BFS and Uniform cost search with evaluation strategies. (7)",
        "number": 54
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Informed search strategies",
        "text": "State the different conditions for optimality for A* search. (6)",
        "number": 55
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Informed search strategies",
        "text": "Explain Best First Search algorithm. Perform BFS on the given graph. [Graph Referenced] (14)",
        "number": 56
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Solving Problems by searching",
        "text": "Discuss the difference between Tree Search and Graph search strategies for finding solutions. (8)",
        "number": 57
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Uninformed search strategies",
        "text": "Differentiate informed and uninformed search. (3)",
        "number": 58
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Heuristic functions",
        "text": "Define heuristic function? Give an example. (3)",
        "number": 59
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Solving Problems by searching",
        "text": "How do you evaluate the performance of a search algorithm? (3)",
        "number": 60
    },
    {
        "mod": 2,
        "part": "Part A",
        "topic": "Solving Problems by searching",
        "text": "Describe the state space representation of 8-queens problem. (3)",
        "number": 61
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Informed search strategies",
        "text": "Explain Best First Search algorithm. Perform BFS on the given graph. [Graph Referenced] (14)",
        "number": 62
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Informed search strategies",
        "text": "Explain A* search with an example. (8)",
        "number": 63
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Uninformed search strategies",
        "text": "Discuss the difference between Tree Search and Graph search strategies. (8)",
        "number": 64
    },
    {
        "mod": 2,
        "part": "Part B",
        "topic": "Uninformed search strategies",
        "text": "Explain the working of Depth Limited Search with an example. (7)",
        "number": 65
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "What are the components of a Constraint Satisfaction Problem? Illustrate with an example. (3)",
        "number": 66
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Adversarial search",
        "text": "Define Alpha-Beta Pruning. (3)",
        "number": 67
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "How can you use arc consistency to reduce domain size? (3)",
        "number": 68
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Adversarial search",
        "text": "How do you formally define a game? (3)",
        "number": 69
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "Define node consistency with an example. (3)",
        "number": 70
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "Define the term least constraining value in CSP. (3)",
        "number": 71
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Adversarial search",
        "text": "Explain the properties of min-max algorithm. (3)",
        "number": 72
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "What is local consistency in CSP constraint propagation? Explain different types of local consistencies. (10)",
        "number": 73
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "Write an Arc-Consistency algorithm (AC-3). (4)",
        "number": 74
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Adversarial search",
        "text": "How and when heuristic is used in Minimax search technique? Illustrate with an example. Also describe the algorithm. [Minimax Tree Referenced] (8)",
        "number": 75
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "Solve the following Crypt arithmetic problem: i) EAT + THAT = APPLE ii) SEND + MORE = MONEY (6)",
        "number": 76
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Adversarial search",
        "text": "Explain Alpha-Beta Pruning. Perform it on the tree below. [Minimax Tree Referenced] (9)",
        "number": 77
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "Formulate Class scheduling as a CSP: professors, classrooms, classes, and time slots. (5)",
        "number": 78
    },
    {
        "mod": 3,
        "part": "Part B (OR)",
        "topic": "Constraint Satisfaction Problems",
        "text": "Explain Back Tracking Search in CSPs with an example. (7)",
        "number": 79
    },
    {
        "mod": 3,
        "part": "Part B (OR)",
        "topic": "Adversarial search",
        "text": "Explain Minimax algorithm. Compute values for each node in the game tree. [Tree Referenced] (7)",
        "number": 80
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "Solve SEND + MORE = MONEY using MRV and forward checking. (14)",
        "number": 81
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "How will you construct a tree from a given CSP graph? List steps and illustrate. (8)",
        "number": 82
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Adversarial search",
        "text": "Define Alpha-Beta Pruning. (3)",
        "number": 83
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Adversarial search",
        "text": "Explain the properties of min-max algorithm. (3)",
        "number": 84
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "What are the components of a Constraint Satisfaction Problem? (3)",
        "number": 85
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "Define node consistency with an example. (3)",
        "number": 86
    },
    {
        "mod": 3,
        "part": "Part A",
        "topic": "Constraint Satisfaction Problems",
        "text": "Define the term least constraining value in CSP. (3)",
        "number": 87
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "Solve SEND + MORE = MONEY using MRV and forward checking. (14)",
        "number": 88
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Constraint Satisfaction Problems",
        "text": "Solve SEND + MORE = MONEY using constraints satisfaction search procedure. (8)",
        "number": 89
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Adversarial search",
        "text": "Explain Minimax algorithm. Compute values for each node in the game tree. (8)",
        "number": 90
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Adversarial search",
        "text": "Explain Alpha-Beta Pruning. Perform it on the tree below. [Minimax Tree Referenced] (9)",
        "number": 91
    },
    {
        "mod": 3,
        "part": "Part B",
        "topic": "Adversarial search",
        "text": "Explain Alpha Beta pruning with an example. (6)",
        "number": 92
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "Give the definition of Propositional logic. (3)",
        "number": 93
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Inference in First Order Logic",
        "text": "Explain the term Skolemization. (3)",
        "number": 94
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Inference in First Order Logic",
        "text": "Find a most general unifier for W = {P(a, x, f(g(y))), P(z, f(z), f(u))}. (3)",
        "number": 95
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "Define horn clause and definite clause. (3)",
        "number": 96
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "What is a knowledge-based agent? How does it work? (3)",
        "number": 97
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "Explain Modus Ponens and Modus Tollens with an example. (3)",
        "number": 98
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "What do you mean by Conjunctive Normal Form? (3)",
        "number": 99
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Logical Agents",
        "text": "What is a knowledge-based agent? How does it work? Write an algorithm for Knowledge based agent. (7)",
        "number": 100
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "First Order Predicate Logic",
        "text": "Illustrate the use of First Order Logic to represent Knowledge. (7)",
        "number": 101
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Suppose knowledge base contains: S ^ T => (~P ^ R), ~S, T. Prove P is entailed using rules of inference. (5)",
        "number": 102
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Differentiate Forward Chaining and Backward Chaining with their algorithms. (9)",
        "number": 103
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Explain how backward chaining is used for inference in FOL. Determine whether hobbes is a tiger. [Rules Referenced] (8)",
        "number": 104
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "First Order Predicate Logic",
        "text": "What is a quantifier in FOL? Differentiate the two types with examples. (6)",
        "number": 105
    },
    {
        "mod": 4,
        "part": "Part B (OR)",
        "topic": "Inference in First Order Logic",
        "text": "Represent sentences in FOL: Jack, Curiosity, Cat, Tuna. Prove 'Did Curiosity kill the cat?' via resolution. (8)",
        "number": 106
    },
    {
        "mod": 4,
        "part": "Part B (OR)",
        "topic": "Logical Agents",
        "text": "Steps for converting propositional logic to CNF. Convert (P -> Q) -> ((Q -> R) -> (P -> R)). (6)",
        "number": 107
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "List six differences between Forward and Backward chaining. (6)",
        "number": 108
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Convert to CNF: Harry eats everything that Anil eats. [Fact set referenced] (8)",
        "number": 109
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Prove 'John likes Peanuts' using Resolution. [Knowledge base referenced] (10)",
        "number": 110
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "What do you mean by Conjunctive Normal Form? (3)",
        "number": 111
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Logical Agents",
        "text": "What is a knowledge-based agent? How does it work? (3)",
        "number": 112
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Inference in First Order Logic",
        "text": "Find a most general unifier for the set W. (3)",
        "number": 113
    },
    {
        "mod": 4,
        "part": "Part A",
        "topic": "Inference in First Order Logic",
        "text": "Explain the term Skolemization. (3)",
        "number": 114
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Differentiate Forward Chaining and Backward Chaining with their algorithms. (9)",
        "number": 115
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "List six differences between Forward and Backward chaining. (6)",
        "number": 116
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "First Order Predicate Logic",
        "text": "Illustrate the use of First Order Logic to represent Knowledge. (7)",
        "number": 117
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Logical Agents",
        "text": "What is a knowledge-based agent? Write an algorithm. (7)",
        "number": 118
    },
    {
        "mod": 4,
        "part": "Part B",
        "topic": "Inference in First Order Logic",
        "text": "Explain Unification Algorithm with an example. (7)",
        "number": 119
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "State and explain Occam's razor principle. (3)",
        "number": 120
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Learning from Examples",
        "text": "Explain about Supervised Learning. (3)",
        "number": 121
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "What is overfitting and underfitting? How does it affect generalization? (3)",
        "number": 122
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "How do you choose and evaluate the best hypothesis? (3)",
        "number": 123
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Learning from Examples",
        "text": "Describe the various forms of learning. (3)",
        "number": 124
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Regression and classification with Linear models",
        "text": "List out the difference between Classification and Regression. (3)",
        "number": 125
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Learning from Examples",
        "text": "Define Information Gain and Gini Index. (3)",
        "number": 126
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Give the significance of Learning from examples. Explain the various types of Learning. (7)",
        "number": 127
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "How do we evaluate and choose the best hypothesis that fits future data? Explain with a method. (7)",
        "number": 128
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Explain learning in Decision Tree with an example involving Sepal Length and Class. [Dataset Referenced] (8)",
        "number": 129
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Regression and classification with Linear models",
        "text": "What do you meant by Linear classification with logistic regression? Explain with the sigmoid function. (6)",
        "number": 130
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Explain Decision Tree Learning Algorithm. Perform splits for the binary input dataset. [Dataset Referenced] (8)",
        "number": 131
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Regression and classification with Linear models",
        "text": "Explain Multivariate linear regression in detail. (8)",
        "number": 132
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Regression and classification with Linear models",
        "text": "Construct a linear regression model for auto insurance premiums vs driving experience. [Table Referenced] (14)",
        "number": 133
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Use ID3 algorithm to find the best attribute to split at the root of a decision tree. [Table Referenced] (14)",
        "number": 134
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "Explain any 4 methods to prevent overfitting in Machine Learning. (8)",
        "number": 135
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Calculate information gain for attributes 'Pat' and 'Type'. [Table Referenced] (8)",
        "number": 136
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Regression and classification with Linear models",
        "text": "Differentiate univariate and multivariate linear regression. (6)",
        "number": 137
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Learning from Examples",
        "text": "Describe the various forms of learning. (3)",
        "number": 138
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "What is overfitting and underfitting? (3)",
        "number": 139
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Regression and classification with Linear models",
        "text": "List out the difference between Classification and Regression. (3)",
        "number": 140
    },
    {
        "mod": 5,
        "part": "Part A",
        "topic": "Regression and classification with Linear models",
        "text": "Differentiate univariate and multivariate linear regression. (3)",
        "number": 141
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Explain Decision Tree Learning Algorithm. (8)",
        "number": 142
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "Explain Decision Tree Learning Algorithm with the help of an example. (7)",
        "number": 143
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Regression and classification with Linear models",
        "text": "What do you meant by Linear classification with logistic regression? Explain. (10)",
        "number": 144
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Regression and classification with Linear models",
        "text": "Explain Multivariate linear regression in detail. (8)",
        "number": 145
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "Explain any 4 methods to prevent overfitting in Machine Learning. (8)",
        "number": 146
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Evaluating and choosing the best hypothesis",
        "text": "Explain the different ways to avoid overfitting. (7)",
        "number": 147
    },
    {
        "mod": 5,
        "part": "Part B",
        "topic": "Learning from Examples",
        "text": "List and explain the different types of learning. (6)",
        "number": 148
    }
];
