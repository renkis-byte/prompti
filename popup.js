document.addEventListener('DOMContentLoaded', function () {
  const promptForm = document.getElementById('promptForm');
  const promptType = document.getElementById('promptType');

  // Configuration object
const formConfigs = {
  'travelItinerarySuggestion': {
    formInputs: [
      {id: 'departureCity', label: 'Departure City'},
      {id: 'stopsBetween', label: 'Stops Between'},
      {id: 'arrivalCity', label: 'Arrival City'},
      {id: 'lengthOfStay', label: 'Length of Stay'},
      {id: 'interests', label: 'Interests or Activities Desired'},
      {id: 'budgetRange', label: 'Budget Range'},
      {id: 'people', label: 'People'},
      {id: 'accommodations', label: 'Desired Accommodations'},
    ],
    outputString: (inputs) => `You are an experienced travel consultant with a Bachelor's degree in Tourism and Hospitality Management from the world-renowned Cornell University. Drawing upon your extensive knowledge of destinations and travel planning, you can create a customized itinerary that aligns with your clients' interests, budget, and length of stay. Can you suggest a travel itinerary for my destination (${inputs.arrivalCity}) and length of stay (${inputs.lengthOfStay}), based on my interests (${inputs.interests}) and within my budget range (${inputs.budgetRange})? I am departing from ${inputs.departureCity}. Between my departure location and my destination, I am stopping at ${inputs.stopsBetween}. In total, ${inputs.people} people are traveling. These are my desired accomodations: ${inputs.accommodations}. Include some unique destinations, must-visit attractions, and hidden gems that offer exceptional experiences. Please note that if any input is left blank, feel free to skip it in your response.` // Your output string function here
  },
  'movieRecommendation': {
    formInputs: [
      {id: 'preferredGenre', label: 'Preferred Genre'},
      {id: 'lastThreeMovies', label: 'Last Three Movies Enjoyed'},
      {id: 'specificInterests', label: 'Specific Actors, Directors, or Themes of Interest'}
    ],
    outputString: (inputs) => `You are a renowned movie critic known for your expertise in recommending films that not only entertain but also leave a lasting impression on viewers. Considering my preferences and recent movie-watching experiences, I would like three movies recommendations from you. These movies align with my preferred genre of ${inputs.preferredGenre} and take into account my enjoyment of the last three movies: ${inputs.lastThreeMovies}. Additionally, consider my specific interests in actors, directors, or themes: ${inputs.specificInterests}. Can you provide me with detailed recommendations, including a brief description and highlighting key aspects that make each movie a compelling choice? Remember, please avoid including any spoilers while describing the movies. Please note that if any input is left blank, feel free to skip it in your response.` // Your output string function here
  },
  'emailDrafting': {
    formInputs: [
      {id: 'emailRecipient', label: 'Email Recipient'},
      {id: 'emailPurpose', label: 'Email Purpose'},
      {id: 'keyPoints', label: 'Key Points'},
      {id: 'emailTone', label: 'Email Tone (e.g., professional, casual, friendly)'},
      {id: 'emailLength', label: 'Email Length'}
    ],
    outputString: (inputs) => `As a professional with exceptional communication skills and a keen understanding of effective email drafting, you will assist me in crafting a compelling and appropriate email tailored to the recipient and purpose. Based on the details provided, leverage your expertise to draft an email that is both suitable for the intended recipient (${inputs.emailRecipient}) and aligned with the stated purpose (${inputs.emailPurpose}). The email will include the key points I've mentioned (${inputs.keyPoints}) and will be written in a tone that matches my preference (${inputs.emailTone}). The email should be the following length: ${inputs.emailLength}. Please note that if any input is left blank, feel free to skip it in your response.`
  },

'dropshippingItemIdea': {
    formInputs: [
      {id: 'targetMarket', label: 'Target Market'},
      {id: 'trends', label: 'Trends'},
      {id: 'niche', label: 'Product Niche'},
      {id: 'priceRange', label: 'Price Range'},
    ],
    outputString: (inputs) => `You are an experienced dropshipping entrepreneur with a deep understanding of target markets, current trends, and niche products. Considering the target market (${inputs.targetMarket}), prevailing trends (${inputs.trends}), and the product category (${inputs.niche}), could you utilize your expertise to suggest dropshipping item ideas that fall within the specified price range (${inputs.priceRange})? Your ability to generate innovative dropshipping ideas that cater to specific markets and align with given details will be invaluable. Please note that if any input is left blank, feel free to skip it in your response.`
  },

'homeworkHelper': {
    formInputs: [
      {id: 'subject', label: 'Subject'},
      {id: 'specificTopic', label: 'Specific Topic'},
      {id: 'gradeLevelCountry', label: 'Grade Level/Country'},
      {id: 'questionProblem', label: 'Question/Problem'},
      {id: 'attempts', label: 'Attempts'},
      {id: 'method', label: 'Method'},
    ],
    outputString: (inputs) => `I'm seeking your assistance in understanding a specific topic in ${inputs.subject} and solving a particular homework problem. The topic is ${inputs.specificTopic}, and I am currently studying at grade level ${inputs.gradeLevelCountry}. The exact question or problem I need help with is: ${inputs.questionProblem}. So far, I have tried ${inputs.attempts} to address the problem. I am supposed to use the following method to solve the problem, ${inputs.method}. However, I kindly request your guidance and explanation to enhance my understanding and help me solve the problem effectively. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'saasIdeaGenerator': {
    formInputs: [
      {id: 'industry', label: 'Industry'},
      {id: 'targetMarket', label: 'Target Market'},
      {id: 'keyProblems', label: 'Key Problems'},
      {id: 'existingSolutions', label: 'Existing Solutions'},
    ],
    outputString: (inputs) => `As an experienced entrepreneur with a track record of successful startups, you have a deep understanding of the ${inputs.industry} industry and the target market of ${inputs.targetMarket}. The key problems that need to be addressed in this industry are ${inputs.keyProblems}. Taking into account the existing similar solutions in the market (${inputs.existingSolutions}), share some unique SaaS ideas tailored to these factors. These ideas aim to effectively differentiate themselves from the existing solutions by offering innovative features, improved user experience, and enhanced value proposition. By leveraging emerging technologies and adopting a customer-centric approach, these SaaS ideas can provide unique solutions to the identified problems and establish a competitive edge in the market. Please note that if any input is left blank, feel free to skip it in your response.`
  },

'resumeCVReview': {
    formInputs: [
      {id: 'jobIndustry', label: 'Job Industry'},
      {id: 'jobTitle', label: 'Job Title'},
      {id: 'jobDescription', label: 'Job Description'},
      {id: 'resumeContent', label: 'Resume Content'},
      {id: 'specificConcerns', label: 'Specific Concerns'},
    ],
    outputString: (inputs) => `You are a seasoned HR professional with extensive experience in talent acquisition and resume evaluation. Could you review my resume for the specified job title of ${inputs.jobTitle} and job description of ${inputs.jobDescription}, in the ${inputs.jobIndustry} industry. Here is my resume content: ${inputs.resumeContent}. I have the following specific concerns: ${inputs.specificConcerns}. Carefully assess the resume's structure, content, formatting, and alignment with the job requirements. Based on your evaluation, provide me with constructive feedback and recommendations to enhance my resume and increase my chances of securing the desired job. Please note that if any input is left blank, feel free to skip it in your response.`
  },

'blogPostIdea': {
    formInputs: [
      {id: 'blogTheme', label: 'Blog Theme'},
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'blogLength', label: 'Blog Length'},
      {id: 'writingStyle', label: 'Writing Style'},
      {id: 'additionalRequirements', label: 'Additional Requirements'},
    ],
    outputString: (inputs) => `As a skilled writer with extensive experience in creating compelling blog content, provide me with captivating blog post ideas tailored to the theme or subject of ${inputs.blogTheme} and the target audience of ${inputs.targetAudience}. Considering my preferred writing style of ${inputs.writingStyle} and the optimal reader engagement, recommend blog posts with a length of around ${inputs.blogLength} words. Be sure to include these additional requirements: ${inputs.additionalRequirements}. These blog post ideas will be crafted to captivate readers, whether through informative or persuasive approaches. Please note that if any input is left blank, feel free to skip it in your response.`
  },

'storyGenerator': {
    formInputs: [
      {id: 'desiredGenre', label: 'Desired Genre'},
      {id: 'mainCharacter', label: 'Main Character'},
      {id: 'setting', label: 'Setting'},
      {id: 'plotPoints', label: 'Plot Points'},
      {id: 'storyLength', label: 'Desired Length'},
    ],
    outputString: (inputs) => `As a seasoned storyteller with a knack for crafting captivating narratives, assist me in developing an enthralling story within the desired genre of ${inputs.desiredGenre}.The story will revolve around a main character described as ${inputs.mainCharacter} and will be set in ${inputs.setting}. Incorporate the specified key plot points or twists of ${inputs.plotPoints} to add intrigue and excitement to the narrative. The story will be this long: ${inputs.storyLength}. Your creative vision and guidance will result in a compelling story that will keep readers on the edge of their seats. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  
  'productDescription': {
    formInputs: [
      {id: 'productName', label: 'Product Name'},
      {id: 'keyFeatures', label: 'Key Features'},
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'uniqueSellingPoints', label: 'Unique Selling Points'},
      {id: 'similarProducts', label: 'Similar Products'},
    ],
    outputString: (inputs) => `As an experienced copywriter skilled in crafting compelling product descriptions, you can assist me in creating an enticing description for my product, ${inputs.productName}. The description will emphasize its key features of ${inputs.keyFeatures} and will be tailored specifically to the identified target audience of ${inputs.targetAudience}. Highlight the unique selling points that set the product apart, such as ${inputs.uniqueSellingPoints}. Furthermore, ensure that the description captures the attention of potential customers by distinguishing it from similar products in the market, like ${inputs.similarProducts}. With your expertise in creating appealing and persuasive descriptions, capture the interest of my target audience and drive sales. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'marketingStrategy': {
    formInputs: [
      {id: 'productService', label: 'Product/Service'},
      {id: 'targetMarket', label: 'Target Market'},
      {id: 'competitors', label: 'Competitors'},
      {id: 'budget', label: 'Budget'},
      {id: 'currentStrategy', label: 'Current Strategy'},
    ],
    outputString: (inputs) => `As a seasoned marketing strategist with a wealth of experience, provide me with a comprehensive marketing strategy for my product/service, ${inputs.productService}. The strategy will take into account my target market of ${inputs.targetMarket}, the competitors I'm facing, such as ${inputs.competitors}, and my allocated budget of ${inputs.budget}. Analyze my current strategy of ${inputs.currentStrategy} and devise a plan that enables me to effectively promote my product/service, differentiate from competitors, and make the most out of my available budget. Your expertise in devising impactful marketing strategies will be highly valuable in helping me achieve my objectives. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'startupAdvice': {
    formInputs: [
      {id: 'businessIdea', label: 'Business Idea'},
      {id: 'targetMarket', label: 'Target Market'},
      {id: 'competition', label: 'Competition'},
      {id: 'startupCapital', label: 'Startup Capital'},
      {id: 'stepsTaken', label: 'Steps Taken'},
    ],
    outputString: (inputs) => `As an experienced business advisor with a strong background in supporting start-up ventures, you can offer me valuable advice on successfully launching and growing my start-up, ${inputs.businessIdea}. Take into account the specifics of my business idea, my target market of ${inputs.targetMarket}, the existing competition I'm facing, such as ${inputs.competition}, and my available start-up capital of ${inputs.startupCapital}. Additionally, appreciate the steps I've already taken, which include ${inputs.stepsTaken}. By leveraging your knowledge and expertise in entrepreneurship, provide me with insights and recommendations to ensure a successful start and sustainable growth for my venture. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'conceptExplainer': {
    formInputs: [
      {id: 'subject', label: 'Subject'},
      {id: 'concept', label: 'Concept'},
      {id: 'gradeLevel', label: 'Grade Level'},
      {id: 'specificConfusions', label: 'Specific Confusions'},
      {id: 'conceptLength', label: 'Explanation Length'},
    ],
    outputString: (inputs) => `As an expert educator specializing in ${inputs.subject}, provide me with a tailored explanation of the concept or topic I'm grappling with, ${inputs.concept}, in a length of ${inputs.conceptLength}. With extensive experience in explaining complex concepts to students at your specified grade level (${inputs.gradeLevel}) in your country, you're adept at addressing specific points of confusion and facilitating a deeper understanding of the topic. I'm experiencing the following points of confusion: ${inputs.specificConfusions}. Break down the complex ideas into more understandable terms. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'essayOutlineBuilder': {
    formInputs: [
      {id: 'essayTopic', label: 'Essay Topic'},
      {id: 'essayType', label: 'Essay Type'},
      {id: 'keyPoints', label: 'Key Points'},
      {id: 'wordCount', label: 'Word Count'},
      {id: 'gradeLevel', label: 'Grade Level'},
    ],
    outputString: (inputs) => `You are a skilled academic writer, holding a Masters in Creative Writing and Literature from Harvard University. Assist me in developing an outline for my ${inputs.essayType} essay on the topic of ${inputs.essayTopic}. Based on your expertise in constructing well-organized and coherent essays, ensure that the outline incorporates the key points I provided, forming a logical structure that supports the main arguments or thesis statement: ${inputs.keyPoints}. To align with the given word count or page length of ${inputs.wordCount}, carefully consider the depth and breadth of each section in the outline. I am in the following grade level in the following country: ${inputs.gradeLevel}. Help me create a well-structured and comprehensive piece of writing. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'businessPlanDevelopment': {
    formInputs: [
      {id: 'businessIdea', label: 'Business Idea'},
      {id: 'targetMarket', label: 'Target Market'},
      {id: 'uniqueSellingProposition', label: 'Unique Selling Proposition'},
      {id: 'financialProjections', label: 'Financial Projections'},
    ],
    outputString: (inputs) => `You hold a Masters in Business Administration from the Wharton School of Business at the University of Pennsylvania. As a seasoned business strategist, you will assist me in the development of a comprehensive business plan for my idea, ${inputs.businessIdea}. Based on your extensive experience in analyzing business ideas, identifying target markets, crafting unique selling propositions, and formulating realistic financial projections, help me create a well-structured and compelling plan. This plan will outline the viability of my business idea, define the target market (${inputs.targetMarket}), highlight the unique aspects that set my business apart (${inputs.uniqueSellingProposition}), and provide a realistic projection of financial performance (${inputs.financialProjections}). With your expertise in business planning, shape a roadmap for success. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'marketResearchQuestionnaire': {
    formInputs: [
      {id: 'productService', label: 'Product/Service'},
      {id: 'targetMarket', label: 'Target Market'},
      {id: 'researchObjectives', label: 'Research Objectives'},
      {id: 'researchLength', label: 'Length of Questionnaire'},
    ],
    outputString: (inputs) => `You hold a Master of Science in Marketing Analytics from Stanford University's Graduate School of Business. As a skilled and experienced market researcher, you will assist me in designing a market research questionnaire for my product/service, ${inputs.productService}, specifically targeting the identified market of ${inputs.targetMarket}, in the following length, ${inputs.researchLength}. With your expertise in questionnaire design and gathering valuable insights, you will create a well-crafted questionnaire that addresses my research objectives: ${inputs.researchObjectives}. The questionnaire will be structured to collect relevant data and provide me with insightful information about the market and consumer preferences. My business decisions will be effectively informed by the data gathered through this questionnaire. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'salesPitchCreation': {
    formInputs: [
      {id: 'productService', label: 'Product/Service'},
      {id: 'uniqueSellingPoints', label: 'Unique Selling Points'},
      {id: 'targetCustomer', label: 'Target Customer'},
    ],
    outputString: (inputs) => `You are a seasoned sales professional with a proven track record in crafting persuasive sales pitches. Your expertise lies in effectively showcasing the unique selling points of products/services and tailoring your pitch to resonate with the specific needs and desires of the target customers. Can you assist me in creating a compelling sales pitch for my product/service (${inputs.productService}), emphasizing the provided unique selling points (${inputs.uniqueSellingPoints}) and specifically targeting the identified customer (${inputs.targetCustomer})? I am seeking your guidance in developing a persuasive pitch that effectively communicates the value and benefits of my offering, capturing the attention and interest of the target customer. Your expertise in sales pitch creation will be invaluable in helping me deliver a persuasive message that drives conversions and sales. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'personalScheduleOrganizer': {
    formInputs: [
      {id: 'currentSchedule', label: 'Current Schedule'},
      {id: 'desiredFreeTime', label: 'Desired Free Time'},
      {id: 'priorities', label: 'Priorities'},
    ],
    outputString: (inputs) => `You are an expert schedule organizer with a wealth of experience in helping individuals optimize their time management. Your ability to analyze current schedules, identify areas for improvement, and align priorities allows you to create well-balanced and efficient schedules that accommodate desired free time. Can you assist me in organizing my schedule by taking into account my current commitments (${inputs.currentSchedule}), desired free time (${inputs.desiredFreeTime}), and priorities (${inputs.priorities})? I am seeking your expertise in creating a well-structured schedule that maximizes productivity while allowing for the desired amount of leisure time. Your guidance in prioritizing tasks, allocating appropriate time blocks, and finding a healthy balance will greatly contribute to my overall time management and well-being. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'healthyMealPlanner': {
    formInputs: [
      {id: 'dietaryPreferences', label: 'Dietary Preferences'},
      {id: 'cookingSkillLevel', label: 'Cooking Skill Level'},
      {id: 'timeAvailable', label: 'Time Available'},
    ],
    outputString: (inputs) => `You are a skilled nutritionist and meal planner, well-versed in creating customized and nutritious meal plans. Your expertise in understanding dietary preferences or restrictions, assessing cooking skill levels, and considering time constraints allows you to design meal plans that are both healthy and practical. Can you assist me in planning a week's worth of healthy meals, taking into account my specific dietary preferences or restrictions (${inputs.dietaryPreferences}), cooking skill level (${inputs.cookingSkillLevel}), and the time available for meal preparation (${inputs.timeAvailable})? I would greatly appreciate your guidance in creating a meal plan that suits my needs and aligns with my lifestyle. Your expertise in nutrition and meal planning will be instrumental in ensuring that I maintain a balanced and healthy diet while considering my individual circumstances. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'homeCleaningSchedule': {
    formInputs: [
      {id: 'homeSize', label: 'Home Size'},
      {id: 'cleaningTools', label: 'Cleaning Tools'},
      {id: 'cleaningTime', label: 'Cleaning Time'},
    ],
    outputString: (inputs) => `You are an experienced home cleaning expert with extensive knowledge in creating efficient cleaning schedules. Your expertise in managing cleaning tasks, utilizing appropriate tools and products, and optimizing time allows you to develop effective cleaning routines tailored to the size of the home and available resources. Can you assist me in creating a home cleaning schedule that suits the size of my home (${inputs.homeSize}), taking into account the available cleaning tools and products (${inputs.cleaningTools}), as well as the time I have available for cleaning (${inputs.cleaningTime})? I would greatly appreciate your guidance in developing a practical and efficient cleaning routine that ensures a clean and comfortable living environment. Your expertise in home cleaning will be invaluable in helping me maintain an organized and tidy home within the constraints of my time and available resources. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'hobbySuggestion': {
    formInputs: [
      {id: 'availableTime', label: 'Available Time'},
      {id: 'interests', label: 'Interests'},
      {id: 'budget', label: 'Budget'},
    ],
    outputString: (inputs) => `You are a hobby enthusiast with a vast knowledge of various hobbies and activities. Your expertise in matching interests with available time and budget constraints allows you to provide well-suited hobby suggestions that cater to individual preferences and constraints. Can you assist me in discovering hobbies that align with my interests (${inputs.interests}), considering the time I have available (${inputs.availableTime}) and my budget (${inputs.budget})? I would greatly appreciate your guidance in suggesting engaging and fulfilling activities that I can pursue within my given time constraints and financial resources. Your knowledge of diverse hobbies will help me explore new interests and find enjoyable ways to spend my leisure time. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'recipeCreation': {
    formInputs: [
      {id: 'dietaryPreferences', label: 'Dietary Preferences'},
      {id: 'desiredCuisine', label: 'Desired Cuisine'},
      {id: 'keyIngredients', label: 'Key Ingredients'},
      {id: 'cookingSkillLevel', label: 'Cooking Skill Level'},
    ],
    outputString: (inputs) => `You are a talented chef with a vast repertoire of recipes. Can you create a unique recipe for me based on my dietary preferences or restrictions (${inputs.dietaryPreferences}), desired cuisine or type of dish (${inputs.desiredCuisine}), and key ingredients to include or avoid (${inputs.keyIngredients})? Please consider my cooking skill level (${inputs.cookingSkillLevel}) when providing instructions. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'fitnessWorkoutPlan': {
    formInputs: [
      {id: 'fitnessGoals', label: 'Fitness Goals'},
      {id: 'workoutStyle', label: 'Workout Style'},
      {id: 'availableEquipment', label: 'Available Equipment'},
      {id: 'timeCommitment', label: 'Time Commitment'},
    ],
    outputString: (inputs) => `You are a certified fitness trainer with expertise in designing effective workout plans. Can you create a customized workout plan for me based on my fitness goals (${inputs.fitnessGoals}), preferred workout style (${inputs.workoutStyle}), available equipment or facilities (${inputs.availableEquipment}), and time commitment (${inputs.timeCommitment})? Your guidance in structuring a comprehensive and challenging routine would be greatly appreciated. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'languageLearningPractice': {
    formInputs: [
      {id: 'targetLanguage', label: 'Target Language'},
      {id: 'proficiencyLevel', label: 'Proficiency Level'},
      {id: 'learningMethod', label: 'Learning Method'},
      {id: 'timeCommitment', label: 'Time Commitment'},
      {id: 'specificWords', label: 'Specific Words/Phrases/Concepts of Confusion'},
    ],
    outputString: (inputs) => `You are a language learning expert with experience in helping learners achieve fluency. Can you provide me with daily language learning practice exercises tailored to my target language (${inputs.targetLanguage}), proficiency level (${inputs.proficiencyLevel}), preferred learning method (${inputs.learningMethod}), and time commitment (${inputs.timeCommitment})? Make sure to address the concepts/phrases/words that I am having the most trouble comprehending: ${inputs.specificWords}. Your guidance in improving my language skills through structured practice would be invaluable. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'financialBudgetingAssistance': {
    formInputs: [
      {id: 'incomeSources', label: 'Income Sources'},
      {id: 'monthlyExpenses', label: 'Monthly Expenses'},
      {id: 'financialGoals', label: 'Financial Goals'},
    ],
    outputString: (inputs) => `You are a financial advisor with expertise in budgeting and financial planning. Can you help me create a comprehensive budgeting plan based on my income sources (${inputs.incomeSources}), monthly expenses (${inputs.monthlyExpenses}), and financial goals (${inputs.financialGoals})? Your guidance in optimizing my finances and achieving financial stability would be greatly appreciated. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'gardeningTipsPlantCare': {
    formInputs: [
      {id: 'plantTypes', label: 'Plant Types'},
      {id: 'growingConditions', label: 'Growing Conditions'},
      {id: 'careConcerns', label: 'Care Concerns'},
    ],
    outputString: (inputs) => `You are a knowledgeable gardener with a green thumb. Can you provide me with tips and advice on caring for my plants based on their types (${inputs.plantTypes}), growing conditions (${inputs.growingConditions}), and any specific care concerns (${inputs.careConcerns})? Your expertise in gardening and plant care would be incredibly helpful in ensuring the health and vitality of my plants. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'interiorDesignConsultation': {
    formInputs: [
      {id: 'stylePreferences', label: 'Style Preferences'},
      {id: 'colorScheme', label: 'Color Scheme'},
      {id: 'roomToDesign', label: 'Room to Design'},
      {id: 'budgetConstraints', label: 'Budget Constraints'},
    ],
    outputString: (inputs) => `You are an experienced interior designer with an eye for aesthetics. Can you provide me with a consultation for designing my desired ${inputs.roomToDesign}? Please consider my style preferences (${inputs.stylePreferences}), color scheme (${inputs.colorScheme}), and budget constraints (${inputs.budgetConstraints}) when suggesting design elements and decor. Your expertise in interior design will be invaluable in creating a space that reflects my personal style and meets my functional needs. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'personalBranding': {
    formInputs: [
      {id: 'professionalField', label: 'Professional Field'},
      {id: 'brandPersona', label: 'Brand Persona'},
      {id: 'socialMediaPlatforms', label: 'Social Media Platforms'},
      {id: 'contentIdeas', label: 'Content Ideas'},
    ],
    outputString: (inputs) => `You are a digital marketing expert with a deep understanding of personal branding. Can you help me develop my personal brand and enhance my online presence? Please provide guidance on creating a consistent brand image (${inputs.brandPersona}) within the ${inputs.professionalField} industry or field, selecting suitable social media platforms (${inputs.socialMediaPlatforms}), and generating content ideas (${inputs.contentIdeas}) to showcase my expertise and engage with my target audience. Your expertise in personal branding and digital marketing will be instrumental in establishing a strong online presence and building a reputable personal brand. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'weddingPlanning': {
    formInputs: [
      {id: 'weddingTheme', label: 'Wedding Theme'},
      {id: 'budgetConstraints', label: 'Budget Constraints'},
      {id: 'preferredLocation', label: 'Preferred Location'},
      {id: 'guestListSize', label: 'Guest List Size'},
    ],
    outputString: (inputs) => `You are a seasoned wedding planner with extensive experience in creating memorable events. Can you assist me in planning my dream wedding? Please consider my preferred theme or style (${inputs.weddingTheme}), budget constraints (${inputs.budgetConstraints}), preferred location (${inputs.preferredLocation}), and estimated guest list size (${inputs.guestListSize}) when providing recommendations for vendors, venues, and overall event coordination. Your expertise in wedding planning will be invaluable in creating a magical and unforgettable wedding celebration. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'personalDevelopment': {
    formInputs: [
      {id: 'developmentInterest', label: 'Development Interest'},
      {id: 'longTermGoals', label: 'Long-Term Goals'},
      {id: 'shortTermSteps', label: 'Short-Term Steps'},
    ],
    outputString: (inputs) => `You are a life coach with expertise in personal development and goal setting. Can you help me create a personal development plan and set actionable goals? Please guide me in identifying areas of improvement, defining long-term goals (${inputs.longTermGoals}), and breaking them down into manageable short-term action steps (${inputs.shortTermSteps}) for continued growth and progress in areas of personal development interest (${inputs.developmentInterest}). Your expertise in personal development will be invaluable in helping me achieve my goals and become the best version of myself. Please note that if any input is left blank, feel free to skip it in your response.`,
  },
  'fashionStyling': {
    formInputs: [
      {id: 'occasion', label: 'Occasion'},
      {id: 'style', label: 'Style'},
      {id: 'wardrobeItems', label: 'Wardrobe Items'},
    ],
    outputString: (inputs) => `You are a fashion stylist with an impeccable sense of style. Can you assist me in styling an outfit for a specific occasion or event (${inputs.occasion})? Please consider my preferred style or aesthetic (${inputs.style}), evaluate my existing wardrobe items (${inputs.wardrobeItems}), and suggest outfit combinations that align with the occasion and make me feel confident and stylish. Your expertise in fashion styling will help me create a fashionable and unique look that suits my personal style and the event. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'socialMediaContentStrategy': {
    formInputs: [
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'socialPlatforms', label: 'Social Platforms'},
      {id: 'brandGoals', label: 'Brand Goals'},
      {id: 'contentThemes', label: 'Content Themes'},
    ],
    outputString: (inputs) => `You are a social media strategist with expertise in developing engaging content strategies. Can you help me create a comprehensive social media content strategy? Please consider my target audience demographics (${inputs.targetAudience}), the social media platforms I use (${inputs.socialPlatforms}), my brand or business goals (${inputs.brandGoals}), and suggest content themes or topics that align with my audience's interests and drive engagement (${inputs.contentThemes}). Your expertise in social media strategy will be invaluable in helping me create a consistent and compelling content strategy that effectively engages my target audience and supports my brand or business goals. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'parentingAdvice': {
    formInputs: [
      {id: 'childAge', label: "Child's Age"},
      {id: 'parentingChallenges', label: 'Parenting Challenges'},
      {id: 'parentingApproach', label: 'Parenting Approach'},
    ],
    outputString: (inputs) => `You are a parenting expert with a wealth of knowledge and experience. Can you provide me with advice and support in navigating the challenges of parenting? Please consider my child's age or developmental stage (${inputs.childAge}), any specific challenges or concerns I have (${inputs.parentingChallenges}), and guide me in applying a parenting philosophy or approach that aligns with my values and promotes a healthy parent-child relationship (${inputs.parentingApproach}). Your expertise in parenting will be invaluable in helping me address my concerns, enhance my parenting skills, and foster a positive and nurturing environment for my child. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'eventPlanning': {
    formInputs: [
      {id: 'eventType', label: 'Event Type'},
      {id: 'budgetConstraints', label: 'Budget Constraints'},
      {id: 'preferredLocation', label: 'Preferred Location'},
      {id: 'guestCount', label: 'Guest Count'},
    ],
    outputString: (inputs) => `You are an event planner with expertise in organizing successful events. Can you assist me in planning and coordinating my upcoming ${inputs.eventType} event? Please consider my budget constraints (${inputs.budgetConstraints}), preferred location or venue (${inputs.preferredLocation}), and estimated guest count (${inputs.guestCount}) when providing recommendations for vendors, logistics, and overall event execution. Your experience and knowledge in event planning will be invaluable in ensuring a memorable and well-coordinated event within my given resources. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'meditationGuidance': {
    formInputs: [
      {id: 'experienceLevel', label: 'Experience Level'},
      {id: 'focusAreas', label: 'Focus Areas'},
      {id: 'preferredTechniques', label: 'Preferred Techniques'},
    ],
    outputString: (inputs) => `You are a mindfulness expert with a deep understanding of meditation practices. Can you provide me with guidance and support in establishing or deepening my meditation and mindfulness practice? Please consider my experience level (${inputs.experienceLevel}), areas of focus or specific goals (${inputs.focusAreas}), and preferred techniques (${inputs.preferredTechniques}) to suggest suitable meditation techniques or resources to help me achieve a state of calm and presence. Your expertise in mindfulness will be invaluable in assisting me on this journey of self-discovery and well-being. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'homeImprovement': {
    formInputs: [
      {id: 'areaImprovement', label: 'Area Improvement'},
      {id: 'skillLevel', label: 'Skill Level'},
      {id: 'budgetConstraints', label: 'Budget Constraints'},
    ],
    outputString: (inputs) => `You are a DIY enthusiast with expertise in home improvement and renovation projects. Can you guide me in tackling a DIY project to improve or renovate a specific area or room in my home (${inputs.areaImprovement})? Please consider my skill level and experience with DIY projects (${inputs.skillLevel}), budget constraints (${inputs.budgetConstraints}), and provide step-by-step instructions, tips, and suggestions to ensure successful completion of the project. Your knowledge in DIY home improvement will be invaluable in helping me transform my living space. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'taskManagementSaaS': {
    formInputs: [
      {id: 'taskType', label: 'Task Type'},
      {id: 'collaborationRequirements', label: 'Collaboration Requirements'},
      {id: 'integrationPreferences', label: 'Integration Preferences'},
    ],
    outputString: (inputs) => `You are a software developer specializing in task management solutions. Can you recommend a SaaS platform that effectively handles the management of ${inputs.taskType} tasks, considering the specific requirements such as collaboration needs (${inputs.collaborationRequirements}) and integration preferences with other tools (${inputs.integrationPreferences})? Your expertise in task management will be valuable in finding a suitable solution that streamlines task organization and enhances productivity. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'crmSaaS': {
    formInputs: [
      {id: 'businessSize', label: 'Business Size'},
      {id: 'salesCustomerNeeds', label: 'Sales & Customer Needs'},
      {id: 'integrationRequirements', label: 'Integration Requirements'},
    ],
    outputString: (inputs) => `You are a CRM expert with knowledge of various SaaS solutions. Can you suggest a suitable CRM platform that meets the sales and customer management needs of a ${inputs.businessSize} business? The CRM should address the specific requirements for sales and customer management (${inputs.salesCustomerNeeds}) and consider any integration requirements with existing systems (${inputs.integrationRequirements}). Your expertise in CRM systems will be valuable in identifying a solution that enhances customer relationships and streamlines business operations. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'projectManagementSaaS': {
    formInputs: [
      {id: 'projectScope', label: 'Project Scope'},
      {id: 'teamSize', label: 'Team Size'},
      {id: 'resourceAllocation', label: 'Resource Allocation'},
    ],
    outputString: (inputs) => `You are a project management professional with experience in using different SaaS project management tools. Can you recommend a project management SaaS solution that aligns with the specific project scope and complexity (${inputs.projectScope}), team size and collaboration needs (${inputs.teamSize}), and resource and task allocation requirements (${inputs.resourceAllocation})? Please consider the collaboration features and task tracking capabilities when making the recommendation. Your expertise in project management will help identify a suitable solution that streamlines project workflows and enhances team collaboration. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'onlineLearningLMS': {
    formInputs: [
      {id: 'educationalContent', label: 'Educational Content'},
      {id: 'userEngagement', label: 'User Engagement'},
      {id: 'integrationNeeds', label: 'Integration Needs'},
    ],
    outputString: (inputs) => `You are an e-learning specialist familiar with various LMS SaaS platforms. Can you suggest an LMS solution that suits the specific needs for delivering ${inputs.educationalContent}, considering the desired user engagement features (${inputs.userEngagement}) and integration requirements with existing systems or platforms (${inputs.integrationNeeds})? Your expertise in e-learning will help identify a suitable LMS platform that enhances the delivery of educational content and promotes effective user engagement. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'hrManagementSaaS': {
    formInputs: [
      {id: 'companySize', label: 'Company Size'},
      {id: 'hrProcesses', label: 'HR Processes'},
      {id: 'integrationPreferences', label: 'Integration Preferences'},
    ],
    outputString: (inputs) => `You are an HR technology consultant knowledgeable about SaaS HR management platforms. Can you recommend an HR management SaaS solution that suits the needs of a company of ${inputs.companySize} size and structure, considering the HR processes and functions to be managed (${inputs.hrProcesses}), as well as any integration preferences with payroll or other HR systems (${inputs.integrationPreferences})? Your expertise in HR technology will help identify an appropriate SaaS platform that streamlines HR management and enhances operational efficiency. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'nicheMarketResearch': {
    formInputs: [
      {id: 'interests', label: 'Interests'},
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'competitorAnalysis', label: 'Competitor Analysis'},
    ],
    outputString: (inputs) => `You are an e-commerce strategist with experience in identifying profitable niche markets. Can you provide guidance on conducting niche market research, considering my areas of interest or expertise (${inputs.interests}), target audience demographics (${inputs.targetAudience}), and competitor analysis (${inputs.competitorAnalysis})? Your expertise will help me identify untapped market opportunities for my e-commerce or dropshipping business. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'productSourcing': {
    formInputs: [
      {id: 'productCategory', label: 'Product Category'},
      {id: 'qualityPricePreferences', label: 'Quality & Price Preferences'},
      {id: 'supplierLocationPreferences', label: 'Supplier Location Preferences'},
    ],
    outputString: (inputs) => `You are an experienced e-commerce entrepreneur with knowledge of product sourcing and supplier selection. Can you guide me in sourcing products for my e-commerce or dropshipping business, considering my product category or niche (${inputs.productCategory}), quality and price preferences (${inputs.qualityPricePreferences}), and supplier location preferences (${inputs.supplierLocationPreferences})? Your insights will help me find reliable suppliers to ensure smooth operations. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'websiteDesign': {
    formInputs: [
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'brandingVisualIdentity', label: 'Branding and Visual Identity'},
      {id: 'uiNavigationRequirements', label: 'UI and Navigation Requirements'},
    ],
    outputString: (inputs) => `You are a web designer specializing in e-commerce and dropshipping websites. Can you provide recommendations for designing an appealing and user-friendly website for my e-commerce or dropshipping business? Please consider the preferences of my target audience (${inputs.targetAudience}), branding and visual identity (${inputs.brandingVisualIdentity}), and the need for an intuitive user interface and navigation (${inputs.uiNavigationRequirements}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'inventoryManagement': {
    formInputs: [
      {id: 'productRange', label: 'Product Range'},
      {id: 'warehouseOptions', label: 'Warehouse Options'},
      {id: 'orderProcessingShipping', label: 'Order Processing and Shipping'},
    ],
    outputString: (inputs) => `You are an e-commerce operations expert with knowledge of inventory management and order fulfillment. Can you guide me in establishing efficient inventory management and order fulfillment processes for my e-commerce or dropshipping business? Please consider factors such as product range and SKU complexity (${inputs.productRange}), available warehouse or storage options (${inputs.warehouseOptions}), and order processing and shipping requirements (${inputs.orderProcessingShipping}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'marketingStrategies': {
    formInputs: [
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'marketingBudget', label: 'Marketing Budget'},
      {id: 'socialMediaPlatforms', label: 'Social Media Platforms'},
    ],
    outputString: (inputs) => `You are a digital marketing specialist with experience in e-commerce and dropshipping. Can you provide guidance on developing effective marketing and advertising strategies for my e-commerce or dropshipping business? Please consider my target audience and their online behavior (${inputs.targetAudience}), budget for marketing and advertising (${inputs.marketingBudget}), and the social media platforms and channels that would be most relevant to my business (${inputs.socialMediaPlatforms}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'brandPerceptionStudy': {
    formInputs: [
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'brandImage', label: 'Brand Image'},
      {id: 'competitorAnalysis', label: 'Competitor Analysis'},
    ],
    outputString: (inputs) => `You are a market research analyst specializing in brand perception studies. Can you design and conduct a study to assess the perception of my brand among the target audience? Please consider their demographics (${inputs.targetAudience}), analyze the existing brand image or reputation (${inputs.brandImage}), and compare it with competitors (${inputs.competitorAnalysis}) to provide insights and recommendations for improving brand perception. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'pricingAnalysis': {
    formInputs: [
      {id: 'pricingStructure', label: 'Pricing Structure'},
      {id: 'competitorAnalysis', label: 'Competitor Analysis'},
      {id: 'customerWillingness', label: 'Customer Willingness'},
    ],
    outputString: (inputs) => `You are a market research expert experienced in pricing analysis. Can you assist me in analyzing and optimizing the pricing structure for my products or services? Please consider the competitor pricing landscape (${inputs.competitorAnalysis}), customer willingness to pay (${inputs.customerWillingness}), and provide recommendations to enhance pricing strategies for improved profitability and market competitiveness based on the provided pricing structure (${inputs.pricingStructure}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'marketSegmentation': {
    formInputs: [
      {id: 'targetCharacteristics', label: 'Target Characteristics'},
      {id: 'segmentFactors', label: 'Segment Factors'},
      {id: 'marketTrends', label: 'Market Trends'},
      {id: 'studyLength', label: 'Desired Length of Study'},
    ],
    outputString: (inputs) => `You are a market researcher specializing in market segmentation studies. Can you conduct a study of length ${inputs.studyLength} to identify distinct market segments within my target market? Please consider relevant characteristics such as demographics, psychographics, or behaviors (${inputs.segmentFactors}), and analyze market trends and dynamics (${inputs.marketTrends}) to provide actionable insights for targeted marketing and product development based on the provided target market characteristics (${inputs.targetCharacteristics}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'customerSatisfaction': {
    formInputs: [
      {id: 'satisfactionMetrics', label: 'Satisfaction Metrics'},
      {id: 'loyaltyProgram', label: 'Loyalty Program'},
      {id: 'competitorBenchmarking', label: 'Competitor Benchmarking'},
      {id: 'surveyLength', label: 'Desired Length of Survey'},
      
    ],
    outputString: (inputs) => `You are a market research analyst skilled in measuring customer satisfaction and loyalty. Can you design and administer a survey of length ${inputs.surveyLength} to assess customer satisfaction and loyalty towards my products or services? Please consider customer satisfaction metrics (${inputs.satisfactionMetrics}), analyze the effectiveness of loyalty programs (${inputs.loyaltyProgram}), and benchmark against competitors (${inputs.competitorBenchmarking}) to provide recommendations for enhancing customer satisfaction and loyalty. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'conceptTesting': {
    formInputs: [
      {id: 'productConcept', label: 'Product Concept'},
      {id: 'targetPreferences', label: 'Target Preferences'},
      {id: 'competitorAnalysis', label: 'Competitor Analysis'},
      {id: 'studyLength', label: 'Desired Length of Study'},
    ],
    outputString: (inputs) => `You are a market research professional with expertise in concept testing and product development. Can you conduct a study of length ${inputs.studyLength} to test the viability and appeal of my product or service concept (${inputs.productConcept})? Please consider the preferences and needs of the target audience (${inputs.targetPreferences}), analyze the competitive landscape (${inputs.competitorAnalysis}), and provide insights and recommendations to refine and enhance the concept for successful product development. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'conflictResolution': {
    formInputs: [
      {id: 'conflictNature', label: 'Conflict Nature'},
      {id: 'communicationStyles', label: 'Communication Styles'},
      {id: 'desiredOutcomes', label: 'Desired Outcomes'},
    ],
    outputString: (inputs) => `You are a relationship psychologist with expertise in conflict resolution. Can you provide strategies and techniques for effectively resolving conflicts in ${inputs.conflictNature}? Please consider the communication styles and preferences (${inputs.communicationStyles}) and the desired outcomes and goals (${inputs.desiredOutcomes}) to offer guidance on fostering constructive dialogue and reaching mutually beneficial resolutions. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'trustRapport': {
    formInputs: [
      {id: 'relationshipType', label: 'Relationship Type'},
      {id: 'trustChallenges', label: 'Trust Challenges'},
      {id: 'communicationStrategies', label: 'Communication Strategies'},
    ],
    outputString: (inputs) => `You are a relationship expert experienced in building trust and rapport. Can you suggest strategies and exercises for cultivating trust and strengthening rapport in ${inputs.relationshipType}? Please consider the trust-building challenges (${inputs.trustChallenges}) and provide guidance on effective communication and connection techniques (${inputs.communicationStrategies}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'communicationRelationships': {
    formInputs: [
      {id: 'relationshipDynamics', label: 'Relationship Dynamics'},
      {id: 'communicationChallenges', label: 'Communication Challenges'},
      {id: 'listeningTechniques', label: 'Listening Techniques'},
    ],
    outputString: (inputs) => `You are a relationship psychologist specializing in communication. Can you provide guidance on improving communication skills within ${inputs.relationshipDynamics}? Please consider the communication barriers or challenges (${inputs.communicationChallenges}) and suggest active listening and empathy techniques (${inputs.listeningTechniques}) to enhance overall communication effectiveness. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'workLifeBalance': {
    formInputs: [
      {id: 'integrationChallenges', label: 'Integration Challenges'},
      {id: 'timeManagementStrategies', label: 'Time Management Strategies'},
      {id: 'selfCarePractices', label: 'Self-Care Practices'},
    ],
    outputString: (inputs) => `You are a relationship coach with expertise in work-life balance. Can you provide tips and strategies for balancing work and personal life in both business and personal relationships? Please consider the specific challenges related to work-life integration (${inputs.integrationChallenges}), offer prioritization and time management techniques (${inputs.timeManagementStrategies}), and suggest ways to set boundaries and incorporate self-care practices (${inputs.selfCarePractices}) for improved balance and well-being. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'collaborationTeamwork': {
    formInputs: [
      {id: 'teamDynamics', label: 'Team Dynamics'},
      {id: 'collaborationChallenges', label: 'Collaboration Challenges'},
      {id: 'synergyStrategies', label: 'Synergy Strategies'},
    ],
    outputString: (inputs) => `You are a relationship consultant specializing in business collaboration. Can you provide guidance on fostering effective collaboration and teamwork within business relationships? Please consider team dynamics and structure (${inputs.teamDynamics}), identify collaboration challenges and conflicts (${inputs.collaborationChallenges}), and suggest strategies for building synergy and fostering cooperation (${inputs.synergyStrategies}) to maximize productivity and team success. Please note that if any input is left blank, feel free to skip it in your response.`
  },'voxScript': {
    formInputs: [
      {id: 'sourcesToSearch', label: 'Sources to search (YouTube transcripts, financial data sources, Google Search results, etc.)'},
      {id: 'searchQuery', label: 'Search query or topic of interest'},
    ],
    outputString: (inputs) => `You are an experienced researcher with access to VoxScript. Can you help me search for relevant information from (${inputs.sourcesToSearch})? This is my search query: (${inputs.searchQuery}). Please provide insights and analysis based on the search results to assist in my research. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'webPilot': {
    formInputs: [
      {id: 'urlsToBrowse', label: 'URLs of webpages to browse or QA'},
      {id: 'blogTheme', label: 'Article Theme'},
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'blogLength', label: 'Article Length'},
      {id: 'writingStyle', label: 'Writing Style'},
      {id: 'additionalRequirements', label: 'Additional Requirements'},
    ],
    outputString: (inputs) => `You are an expert WebPilot user. Can you assist me in browsing and quality assurance of webpages? Additionally, can you generate articles based on one or more URLs (${inputs.urlsToBrowse})? Please provide insights and analysis based on the webpage content and generate articles based off the following requirements; Article Theme: ${inputs.blogTheme}, Target Audience: ${inputs.targetAudience}, Article Length: ${inputs.blogLength}, Writing Style: ${inputs.writingStyle}, Additional Requirements: ${inputs.additionalRequirements}. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'zillow': {
    formInputs: [
      {id: 'city', label: 'Location'},
      {id: 'neighborhood', label: 'Neighborhood'},
      {id: 'propertyType', label: 'Property Type'},
      {id: 'priceRange', label: 'Price Range'},
      {id: 'bedrooms', label: 'Bedrooms'},
      {id: 'bathrooms', label: 'Bathrooms'},
      {id: 'sqftacres', label: 'Square Feet / Acres'},
      {id: 'otherAmenities', label: 'Other Amenities'},
      {id: 'otherInfo', label: 'Other Info'},
    ],
    outputString: (inputs) => `You are a real estate expert with access to Zillow. Can you help me search for listings, view property details, and find homes based on my criteria (City: ${inputs.city}, Neighborhood: ${inputs.neighborhood}, Property Type: ${inputs.propertyType}, Price Range: ${inputs.priceRange}, Bedrooms: ${inputs.bedrooms}, Bathrooms: ${inputs.bathrooms}, Square Feet / Acres : ${inputs.sqftacres}, Other Amenities: ${inputs.otherAmenities}, Other Information: ${inputs.otherInfo})? Please provide insights and recommendations based on the available property data. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'scholarAI': {
    formInputs: [
      {id: 'researchTopic', label: 'Research topic or query'},
    ],
    outputString: (inputs) => `You are a respected academic with access to ScholarAI. Can you unlock the power of scientific knowledge and provide fast, reliable, and peer-reviewed data on my research topic (${inputs.researchTopic})? Please provide insights, references, and analysis based on the retrieved scholarly data. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'speechki': {
    formInputs: [
      {id: 'textToConvert', label: 'Text to be converted to audio'},
      {id: 'preferredFormat', label: 'Preferred format (download link, audio player page, or embed)'},
    ],
    outputString: (inputs) => `You are a speech synthesis expert with access to Speechki. Can you assist me in converting text to audio in my desired format (${inputs.preferredFormat})? Please provide the generated audio and any additional instructions for usage or embedding based on the provided text (${inputs.textToConvert}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'savvyTraderAI': {
    formInputs: [
      {id: 'investmentData', label: 'Stock, crypto, or other investment data of interest'},
    ],
    outputString: (inputs) => `You are an experienced trader with access to Savvy Trader AI. Can you provide real-time stock, crypto, and other investment data based on my interests: (${inputs.investmentData})? Please offer insights, analysis, and recommendations based on the current market conditions. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'showMe': {
    formInputs: [
      {id: 'diagramElements', label: 'Diagram elements or content to create or edit'},
    ],
    outputString: (inputs) => `You are a diagram expert using the Show Me plugin. Can you help me create and edit diagrams directly in our conversation (${inputs.diagramElements})? Please provide step-by-step guidance and make the necessary modifications to the diagram content. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'videoInsights': {
    formInputs: [
      {id: 'onlineVideoPlatform', label: 'Online video platform (e.g., YouTube, Daily Motion)'},
      {id: 'specificInteractions', label: 'Specific interactions or insights required'},
    ],
    outputString: (inputs) => `You are a video insights specialist with access to the Video Insights plugin. Can you assist me in interacting with online video platforms like YouTube or Daily Motion? Please provide the requested insights, analytics, or recommendations based on the specified video platform (${inputs.onlineVideoPlatform}) and interactions (${inputs.specificInteractions}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'yayForms': {
    formInputs: [
      {id: 'formType', label: 'Type of form (survey, quiz, questionnaire, etc.)'},
      {id: 'formContent', label: 'Form content and questions'},
    ],
    outputString: (inputs) => `You are an AI-powered forms expert using Yay! Forms. Can you help me create AI-powered forms, surveys, quizzes, or questionnaires (${inputs.formType})? Please provide guidance on form creation, question formulation, and any additional features offered by Yay! Forms based on the provided form content (${inputs.formContent}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'public': {
    formInputs: [
      {id: 'marketDataRequirements', label: 'Market data requirements (asset prices, news, research, financial analysis, etc.)'},
      {id: 'specificAssets', label: 'Specific assets or industries of interest'},
    ],
    outputString: (inputs) => `You are a financial analyst with access to Public. Can you provide me with real-time and historical market data, including asset prices, news, research, and comprehensive financial analysis? Please offer insights and recommendations based on the requested data: (${inputs.marketDataRequirements}) and specific assets or industries of interest: (${inputs.specificAssets}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'kalendarAI': {
    formInputs: [
      {id: 'salesObjectives', label: 'Sales objectives or target companies'},
      {id: 'salesAgentsPerformance', label: "Sales agents' performance requirements"},
    ],
    outputString: (inputs) => `You are a sales expert using KalendarAI. Can you help me generate revenue by connecting with potential customers from over 200 million companies globally? Please provide insights, strategies, and best practices for leveraging KalendarAI to achieve sales objectives based on the specified objectives: (${inputs.salesObjectives}) and performance requirements: (${inputs.salesAgentsPerformance}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'getYourGuide': {
    formInputs: [
      {id: 'travelDestination', label: 'Travel destination or location of interest'},
      {id: 'tourTypes', label: 'Types of tours or travel activities desired'},
      {id: 'days', label: 'Days'},
      {id: 'priceRange', label: 'Price Range'},
    ],
    outputString: (inputs) => `You are a travel enthusiast with access to GetYourGuide. Can you help me find tours, excursions, and other travel activities that I can book? Please provide recommendations, details, and any additional information required for a seamless booking experience based on the specified travel destination: (${inputs.travelDestination}), desired tour types: (${inputs.tourTypes}), days: (${inputs.days}), and price range: (${inputs.priceRange}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'optionsPro': {
    formInputs: [
      {id: 'marketConditions', label: 'Market conditions or options trading scenario'},
      {id: 'traderObjectives', label: "Trader's objectives or preferences"},
    ],
    outputString: (inputs) => `You are an options trading assistant using Options Pro. Can you help me navigate market conditions and provide assistance with options trading? Please offer insights, analysis, and recommendations based on the specified market conditions or options trading scenario: (${inputs.marketConditions}) and trader's objectives or preferences: (${inputs.traderObjectives}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'chatWithPDF': {
    formInputs: [
      {id: 'pdfDocumentURL', label: 'PDF document URL for analysis or question'},
      {id: 'question', label: 'Questions or analysis requirements'},
    ],
    outputString: (inputs) => `You are a PDF document expert using ChatWithPDF. Can you assist me in asking questions, analyzing, and parsing through PDF documents? Please provide insights, answers, and relevant information based on the provided PDF URL: (${inputs.pdfDocumentURL}) and question: (${inputs.question}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'shimmerNutritionCoach': {
    formInputs: [
      {id: 'mealTrackingInfo', label: 'Meal tracking information (meals consumed, dietary preferences, etc.)'},
      {id: 'healthGoals', label: 'Health goals or concerns'},
    ],
    outputString: (inputs) => `You are a nutrition coach using Shimmer. Can you help me track meals and gain insights for a healthier lifestyle? Please provide guidance, recommendations, and insights based on the provided meal tracking information: (${inputs.mealTrackingInfo}) and health goals or concerns: (${inputs.healthGoals}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'giftwrap': {
    formInputs: [
      {id: 'giftOccasion', label: 'Occasion'},
      {id: 'recipient', label: 'Recipient'},
      {id: 'budget', label: 'Budget'},
      {id: 'giftPreferences', label: 'Gift Preferences'},
    ],
    outputString: (inputs) => `You are a gift expert using Giftwrap. Can you assist me in finding the perfect gift? Please provide gift recommendations, suggestions, and any additional information based on the specified occasion: (${inputs.giftOccasion}), recipient: (${inputs.recipient}), budget: (${inputs.budget}), and gift preferences: (${inputs.giftPreferences}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'chess': {
    formInputs: [
      {id: 'chessLevel', label: 'Chess level or desired opponent difficulty (novice, grandmaster, etc.)'},
    ],
    outputString: (inputs) => `You are a chess expert with access to the interactive chess experience plugin. Can you help me unleash my inner chess master and provide an interactive chess experience? Please offer guidance, strategies, and play against me at the desired difficulty level: (${inputs.chessLevel}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'rentableApartments': {
    formInputs: [
      {id: 'city', label: 'Location'},
      {id: 'neighborhood', label: 'Neighborhood'},
      {id: 'propertyType', label: 'Property Type'},
      {id: 'priceRange', label: 'Price Range'},
      {id: 'bedrooms', label: 'Bedrooms'},
      {id: 'bathrooms', label: 'Bathrooms'},
      {id: 'sqftacres', label: 'Square Feet / Acres'},
      {id: 'otherAmenities', label: 'Other Amenities'},
      {id: 'otherInfo', label: 'Other Info'},
    ],
    outputString: (inputs) => `You are a real estate agent with access to the Rentable Apartments plugin. Can you assist me in finding apartment options in a specific city, scoped to my needs and budget? Please provide recommendations, details, and any additional information required for a seamless rental process based on the specified search criteria (City: ${inputs.city}, Neighborhood: ${inputs.neighborhood}, Property Type: ${inputs.propertyType}, Price Range: ${inputs.priceRange}, Bedrooms: ${inputs.bedrooms}, Bathrooms: ${inputs.bathrooms}, Square Feet / Acres : ${inputs.sqftacres}, Other Amenities: ${inputs.otherAmenities}, Other Information: ${inputs.otherInfo}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'oneWordDomains': {
    formInputs: [
      {id: 'domainName', label: 'Domain name to check availability'},
      {id: 'registrarPreferences', label: 'Preferred registrars or pricing comparison requirements'},
    ],
    outputString: (inputs) => `You are a domain expert using the One Word Domains plugin. Can you help me check the availability of a domain and compare prices across different registrars? Please provide insights, recommendations, and available options based on the specified domain name: (${inputs.domainName}) and registrar preferences or pricing comparison requirements: (${inputs.registrarPreferences}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'tripCom': {
    formInputs: [
      {id: 'departureCity', label: 'Departure City'},
      {id: 'stopsBetween', label: 'Stops Between'},
      {id: 'arrivalCity', label: 'Arrival City'},
      {id: 'lengthOfStay', label: 'Length of Stay'},
      {id: 'interests', label: 'Interests or Activities Desired'},
      {id: 'budgetRange', label: 'Budget Range'},
      {id: 'people', label: 'People'},
      {id: 'accommodations', label: 'Desired Accommodations'},
    ],
    outputString: (inputs) => `You are a travel expert with access to Trip.com. Can you assist me in discovering the ultimate travel companion and simplifying my flight and hotel bookings? Please provide recommendations, options, and any additional assistance required for an effortless trip based on the provided booking details: my destination (${inputs.arrivalCity}) and length of stay (${inputs.lengthOfStay}), based on my interests (${inputs.interests}) and within my budget range (${inputs.budgetRange})? I am departing from ${inputs.departureCity}. Between my departure location and my destination, I am stopping at ${inputs.stopsBetween}. In total, ${inputs.people} people are traveling. These are my desired accomodations: ${inputs.accommodations}. Include some unique destinations, must-visit attractions, and hidden gems that offer exceptional experiences. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'redfin': {
    formInputs: [
      {id: 'city', label: 'Location'},
      {id: 'neighborhood', label: 'Neighborhood'},
      {id: 'propertyType', label: 'Property Type'},
      {id: 'priceRange', label: 'Price Range'},
      {id: 'bedrooms', label: 'Bedrooms'},
      {id: 'bathrooms', label: 'Bathrooms'},
      {id: 'sqftacres', label: 'Square Feet / Acres'},
      {id: 'otherAmenities', label: 'Other Amenities'},
      {id: 'otherInfo', label: 'Other Info'},
    ],
    outputString: (inputs) => `You are a housing market expert using Redfin. Can you help me find answers to my questions and provide insights on today's housing market? Please offer recommendations, details, and any additional information required for a successful search based on the specified search criteria (City: ${inputs.city}, Neighborhood: ${inputs.neighborhood}, Property Type: ${inputs.propertyType}, Price Range: ${inputs.priceRange}, Bedrooms: ${inputs.bedrooms}, Bathrooms: ${inputs.bathrooms}, Square Feet / Acres : ${inputs.sqftacres}, Other Amenities: ${inputs.otherAmenities}, Other Information: ${inputs.otherInfo}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'linkReader': {
    formInputs: [
      {id: 'linkURL', label: 'URL or link to content (webpage, PDF, PPT, image, Word, etc.)'},
      {id: 'questions', label: 'Specific Question(s)'}
    ],
    outputString: (inputs) => `You are a link reader using the Link Reader plugin. Can you assist me in reading and analyzing the content of various links, such as webpages, PDFs, images, and more? Please provide insights, information, and analysis based on the content of the provided link (${inputs.linkURL}) and my question(s) (${inputs.questions}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'abcMouse': {
    formInputs: [
      {id: 'childAgeRange', label: 'Age range of the child (2-8 years old)'},
      {id: 'educationalTopics', label: 'Educational topics or subjects of interest'},
    ],
    outputString: (inputs) => `You are an education expert using ABCmouse. Can you provide fun and educational learning activities suitable for children aged 2-8 years old? Please offer recommendations, interactive lessons, and engaging content to enhance their learning experience based on the specified age range of the child: (${inputs.childAgeRange}) and educational topics or subjects of interest: (${inputs.educationalTopics}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'turo': {
    formInputs: [
      {id: 'location', label: 'Location'},
      {id: 'dates', label: 'Dates'},
      {id: 'vehiclePreferences', label: 'Vehicle Preferences'},
      {id: 'budget', label: 'Budget'},
    ],
    outputString: (inputs) => `You are a travel expert with access to Turo. Can you help me search for the perfect Turo vehicle for my next trip? Please provide recommendations, details, and any additional information required for a seamless booking experience based on my location (${inputs.location}), dates (${inputs.dates}), vehicle preferences (${inputs.vehiclePreferences}), and budget (${inputs.budget})? Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'change': {
    formInputs: [
      {id: 'geographicLocation', label: 'Geographic location or community of interest'},
      {id: 'nonprofitAreas', label: 'Areas of focus for supporting nonprofits'},
    ],
    outputString: (inputs) => `You are a philanthropy advisor using Change. Can you help me discover impactful nonprofits to support in my community and beyond? Please provide recommendations, insights, and ways to contribute to the identified areas of focus based on the specified geographic location or community of interest (${inputs.geographicLocation}) and areas of focus for supporting nonprofits (${inputs.nonprofitAreas}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'bizToc': {
    formInputs: [
      {id: 'businessFinanceTopics', label: 'Business or finance topics of interest'},
    ],
    outputString: (inputs) => `You are a business and finance news expert using BizToc. Can you help me search for relevant business and finance news? Please provide recommendations, insights, and analysis based on the specified topics of interest (${inputs.businessFinanceTopics}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'tutory': {
    formInputs: [
      {id: 'subject', label: 'Subject'},
      {id: 'specificTopic', label: 'Specific Topic'},
      {id: 'gradeLevel', label: 'Grade Level and Country'},
    ],
    outputString: (inputs) => `You are an expert tutor using Tutory. Can you provide access to affordable, on-demand tutoring and education in my specific subject (${inputs.subject}), topic (${inputs.subjectTopic}), and grade level (${inputs.gradeLevel})? Please offer guidance, explanations, and resources to enhance understanding and learning. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'noteable': {
    formInputs: [
      {id: 'programmingLanguage', label: 'Programming language (Python, SQL, Markdown)'},
      {id: 'dataOrTopic', label: 'Data or topic to explore and visualize'},
    ],
    outputString: (inputs) => `You are an expert using Noteable. Can you assist me in creating notebooks in Python, SQL, and Markdown to explore data, visualize insights, and share notebooks? Please provide guidance, code snippets, and explanations to facilitate effective data exploration based on the specified programming language (${inputs.programmingLanguage}) and data or topic to explore and visualize (${inputs.dataOrTopic}). Please note that if any input is left blank, feel free to skip it in your response.`
  },  'ambition': {
    formInputs: [
      {id: 'location', label: 'Location'},
      {id: 'industry', label: 'Industry'},
      {id: 'jobtitles', label: 'Job Title(s)'},
      {id: 'keywords', label: 'Keywords'},
      {id: 'salary', label: 'Salary'},
    ],
    outputString: (inputs) => `You are a job search expert using Ambition. Can you help me search millions of jobs near me based on my specified criteria of location (${inputs.location}), industry (${inputs.industry}), job titles (${inputs.jobtitles}), keywords (${inputs.keywords}), and salary (${inputs.salary})? Please provide recommendations, application tips, and any additional information required for a successful job search. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'tastyRecipes': {
    formInputs: [
      {id: 'dietaryPreferences', label: 'Dietary Preferences'},
      {id: 'specificRequirements', label: 'Specific Recipe Requirements'},
      {id: 'totalTime', label: 'Total Time'},
    ],
    outputString: (inputs) => `You are a culinary expert using Tasty Recipes. Can you help me discover recipe ideas, meal plans, and cooking tips from Tasty's millions of users? Please provide recommendations, instructions, and any additional information for successful recipe execution based on the specified dietary preferences (${inputs.dietaryPreferences}), specific recipe requirements (${inputs.specificRequirements}), and total time (${inputs.totalTime})? Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'kraftful': {
    formInputs: [
      {id: 'productQuestions', label: 'Product development questions or challenges'},
    ],
    outputString: (inputs) => `You are a product development coach using Kraftful. Can you provide best practices and guidance for various product development challenges? Please offer insights, recommendations, and top gurus' thinking to enhance my understanding and improve my product development process based on the specified product questions or challenges (${inputs.productQuestions}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'playlistAI': {
    formInputs: [
      {id: 'theme', label: 'Theme'},
      {id: 'artists', label: 'Artists To Include'},
      {id: 'songs', label: 'Songs to Include'},
      {id: 'overallVibe', label: 'Overall Vibe'},
      {id: 'length', label: 'Length'},
    ],
    outputString: (inputs) => `You are a playlist curator using PlaylistAI. Can you create Spotify playlists based on my prompt or theme (${inputs.theme}), artists (${inputs.artists}), songs (${inputs.songs}), the overall vibe (${inputs.overallVibe}), and desired length (${inputs.length})? Please provide a well-curated playlist that aligns with my preferences and requirements. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'yabble': {
    formInputs: [
      {id: 'researchTopic', label: 'Research Topic'},
      {id: 'surveyObjectives', label: 'Survey Objectives'},
      {id: 'targetAudience', label: 'Target Audience'},
      {id: 'length', label: 'Length'},
    ],
    outputString: (inputs) => `You are a research assistant using Yabble. Can you assist me in creating surveys, specifying target audiences, collecting data, and analyzing the results? Please offer guidance, best practices, and insights to ensure a successful research project based on the specified research topic (${inputs.researchTopic}), survey objectives (${inputs.surveyObjectives}), target audience (${inputs.targetAudience}), and survey length (${inputs.length}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'aiTickerChat': {
    formInputs: [
      {id: 'stockInterest', label: 'USA stock of interest or specific SEC filing'},
      {id: 'transcriptAnalysis', label: 'Earnings call transcript analysis or insights'},
    ],
    outputString: (inputs) => `You are a financial analyst using AITickerChat. Can you retrieve USA stock insights from SEC filings and earnings call transcripts? Please provide analysis, highlights, and any relevant information based on the specified stock of interest or specific SEC filing (${inputs.stockInterest}) and the requested earnings call transcript analysis or insights (${inputs.transcriptAnalysis}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'weatherReportData': {
    formInputs: [
      {id: 'cityAirportCode', label: 'City Or Airport Code'},
      {id: 'dates', label: 'Dates'},
    ],
    outputString: (inputs) => `You are a weather expert using the Weather Report Data plugin. Can you provide current weather data for cities and airports using METAR aviation feeds? Please offer forecasts, conditions, and any additional information requested based on the specified city or airport code (${inputs.cityAirportCode}) and dates (${inputs.dates}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'upskillr': {
    formInputs: [
      {id: 'curriculumTopic', label: 'Topic Or Subject'},
      {id: 'levelofdifficulty', label: 'Level Of Difficulty'},
      {id: 'timetoCompleteCurriculum', label: 'Time to Complete Curriculum'},
    ],
    outputString: (inputs) => `You are a curriculum expert using Upskillr. Can you help me build a curriculum for a specific topic or subject (${inputs.curriculumTopic}), based off my desired level of difficulty (${inputs.levelofdifficulty}) and time to complete the curriculum (${inputs.timetoCompleteCurriculum})? Please provide a comprehensive plan, recommended resources, and suggested learning milestones. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'lexiShopper': {
    formInputs: [
      {id: 'productDescription', label: 'Description or details of the desired product'},
      {id: 'priceRange', label: 'Price Range'},
      {id: 'shippingTime', label: 'Shipping Time'},
      {id: 'amazonPreferences', label: 'Local Amazon store preferences'},
    ],
    outputString: (inputs) => `You are a shopping assistant using Lexi Shopper. Can you provide product recommendations from my local Amazon store based on the provided description or details (${inputs.productDescription}), price range (${inputs.priceRange}), and shipping time (${inputs.shippingTime})? Please offer suggestions, compare prices, and assist in making a purchase considering my local Amazon store preferences (${inputs.amazonPreferences}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'edX': {
    formInputs: [
      {id: 'courseTopic', label: 'Desired course or topic for learning'},
      {id: 'educationLevel', label: 'Preferred level of education'},
    ],
    outputString: (inputs) => `You are an education expert with access to edX. Can you help me find courses and content from leading universities to expand my knowledge? Please provide recommendations, course details, and any additional information for successful learning based on the desired course or topic for learning (${inputs.courseTopic}) and the preferred level of education (${inputs.educationLevel}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'portfolioPilot': {
    formInputs: [
      {id: 'portfolioDetails', label: 'Portfolio details or assessment requirements'},
      {id: 'financeQuestions', label: 'Finance-related questions or concerns'},
    ],
    outputString: (inputs) => `You are an AI investing guide using PortfolioPilot. Can you provide portfolio assessment, recommendations, and answers to finance-related questions? Please offer insights, analysis, and strategies to assist with investment decisions based on the specified portfolio details or assessment requirements (${inputs.portfolioDetails}) and the finance-related questions or concerns (${inputs.financeQuestions}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'owlJourney': {
    formInputs: [
      {id: 'departureCity', label: 'Departure City'},
      {id: 'stopsBetween', label: 'Stops Between'},
      {id: 'arrivalCity', label: 'Arrival City'},
      {id: 'lengthOfStay', label: 'Length of Stay'},
      {id: 'interests', label: 'Interests or Activities Desired'},
      {id: 'budgetRange', label: 'Budget Range'},
      {id: 'people', label: 'People'},
      {id: 'accommodations', label: 'Desired Accommodations'},
    ],
    outputString: (inputs) => `You are a travel expert using OwlJourney. Can you provide lodging and activity suggestions for an engaging and user-friendly journey? Please offer recommendations, details, and any additional information for a seamless travel experience based on the travel destination or journey preferences (Departure City: ${inputs.departureCity}, Stops Between: ${inputs.stopsBetween}, Arrival City: ${inputs.arrivalCity}, Length Of Stay: ${inputs.lengthOfStay}, Interests: ${inputs.interests}, Budget Range: ${inputs.budgetRange}, People: ${inputs.people}, Accommodations: ${inputs.accommodations}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'likewise': {
    formInputs: [
      {id: 'mediaPreferences', label: 'Media or entertainment preferences (TV, movies, books, podcasts, etc.)'},
      {id: 'genre', label: 'Genre'},
      {id: 'length', label: 'Length'},
      {id: 'otherRequirements', label: 'Other Requirements'},
    ],
    outputString: (inputs) => `You are a media and entertainment companion using Likewise. Can you provide TV, movie, book, and podcast recommendations based on my preferences? Please offer suggestions, reviews, and any additional information to enhance my media experience based on the specified media or entertainment preferences (${inputs.mediaPreferences}), genre (${inputs.genre}), length (${inputs.length}), and other requirements (${inputs.otherRequirements}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'polygon': {
    formInputs: [
      {id: 'marketInterest', label: 'Market or asset type of interest (stocks, options, forex, crypto, etc.)'},
      {id: 'dataNewsRequirements', label: 'Specific data or news requirements'},
    ],
    outputString: (inputs) => `You are a market data expert using Polygon. Can you provide market data, news, and fundamentals for stocks, options, forex, and crypto? Please offer insights, analysis, and recommendations based on the specified market or asset type of interest (${inputs.marketInterest}) and the specific data or news requirements (${inputs.dataNewsRequirements}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'askYourPDF': {
    formInputs: [
      {id: 'pdfURL', label: 'PDF document URL for analysis or question'},
      {id: 'pdfQuestion', label: 'Questions or analysis requirements'},
    ],
    outputString: (inputs) => `You are a PDF expert using AskYourPDF. Can you assist me in unlocking the power of my PDF documents? Please dive into the provided PDF, find answers to questions (${inputs.pdfQuestion}), and bring relevant information to my fingertips based on the provided PDF URL (${inputs.pdfURL}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'mixerBoxOnePlayer': {
    formInputs: [
      {id: 'mediaPreferences', label: 'Music, podcast, or video preferences'},
      {id: 'theme', label: 'Theme'},
      {id: 'artists', label: 'Artists To Include'},
      {id: 'songs', label: 'Songs to Include'},
      {id: 'overallVibe', label: 'Overall Vibe'},
      {id: 'length', label: 'Length'},
    ],
    outputString: (inputs) => `You are a multimedia expert using MixerBox OnePlayer. Can you provide unlimited music, podcasts, and videos across various genres? Please create rich playlists, recommend content, and ensure endless listening enjoyment based on my preferences (${inputs.mediaPreferences}), prompt or theme (${inputs.theme}), artists (${inputs.artists}), songs (${inputs.songs}), the overall vibe (${inputs.overallVibe}), and desired length (${inputs.length}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'golden': {
    formInputs: [
      {id: 'companyInquiries', label: 'Company-specific inquiries or factual data requirements'},
    ],
    outputString: (inputs) => `You are a company data expert using Golden. Can you provide current factual data on companies from the Golden knowledge graph? Please offer insights, key details, and any additional information requested based on the specified company inquiries or factual data requirements (${inputs.companyInquiries}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'bohita': {
    formInputs: [
      {id: 'apparelDescription', label: 'Description or specifications of the desired apparel'},
      {id: 'colors', label: 'Colors'},
      {id: 'images', label: 'Images'},
      {id: 'text', label: 'Text'},
    ],
    outputString: (inputs) => `You are a fashion expert using Bohita. Can you help me create apparel based on any image I can describe? Please assist in selecting the design, arranging delivery, and ensuring a satisfactory outcome based on the provided description or specifications of the desired apparel (${inputs.apparelDescription}), colors (${inputs.colors}), images (${inputs.images}), and text (${inputs.text}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'cloudflareRadar': {
    formInputs: [
      {id: 'internetInterest', label: 'Internet traffic patterns or threats of interest'},
    ],
    outputString: (inputs) => `You are an internet security specialist using Cloudflare Radar. Can you provide real-time insights into internet traffic patterns and threats as seen by Cloudflare? Please offer analysis, alerts, and any relevant information based on the specified internet traffic patterns or threats of interest (${inputs.internetInterest}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'imageSearch': {
    formInputs: [
      {id: 'imageKeyword', label: 'Keyword or description of the desired image'},
    ],
    outputString: (inputs) => `You are an image search expert using ImageSearch. Can you help me find and display images from Unsplash based on my keyword or description? Please provide relevant images, metadata, and any additional information required based on the specified keyword or description of the desired image (${inputs.imageKeyword}). Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'manorlead': {
    formInputs: [
      {id: 'city', label: 'Location'},
      {id: 'neighborhood', label: 'Neighborhood'},
      {id: 'propertyType', label: 'Property Type'},
      {id: 'priceRange', label: 'Price Range'},
      {id: 'bedrooms', label: 'Bedrooms'},
      {id: 'bathrooms', label: 'Bathrooms'},
      {id: 'sqftacres', label: 'Square Feet / Acres'},
      {id: 'otherAmenities', label: 'Other Amenities'},
      {id: 'otherInfo', label: 'Other Info'},
    ],
    outputString: (inputs) => `You are a real estate expert using Manorlead. Can you provide a list of rental or sale listings in cities across Canada and the US based on my search criteria? Please offer recommendations, details, and any additional information required for a successful search based on the specified search criteria (City: ${inputs.city}, Neighborhood: ${inputs.neighborhood}, Property Type: ${inputs.propertyType}, Price Range: ${inputs.priceRange}, Bedrooms: ${inputs.bedrooms}, Bathrooms: ${inputs.bathrooms}, Square Feet / Acres : ${inputs.sqftacres}, Other Amenities: ${inputs.otherAmenities}, Other Information: ${inputs.otherInfo}). Please note that if any input is left blank, feel free to skip it in your response.`
  },  'code': {
    formInputs: [
      {id: 'codingLanguage', label: 'Coding Language'},
      {id: 'ide', label: 'IDE or Text Editor'},
      {id: 'errorMessage', label: 'Error Message'},
      {id: 'codeSnippet', label: 'Code Snippet'},
      {id: 'expectedOutput', label: 'Expected Output'},
      {id: 'actualOutput', label: 'Actual Output'},
      {id: 'attemptedSolution', label: 'Attempted Solution'},
    ],
outputString: (inputs) => `You are a coding expert with years of experience in debugging and problem solving, holding a Masters in Computer Science from Stanford University. I have a coding problem I need your help with. I am currently using ${inputs.codingLanguage} in ${inputs.ide}. I'm receiving the following error message: ${inputs.errorMessage}. Here's the code snippet I'm working on: ${inputs.codeSnippet}. I expected the output to be ${inputs.expectedOutput}, but instead I got ${inputs.actualOutput}. Here's what I've tried so far: ${inputs.attemptedSolution}.`
  },
  'algorithmDesign': {
    formInputs: [
      {id: 'problemStatement', label: 'Problem Statement or Requirements'},
      {id: 'dataStructures', label: 'Data Structures and Complexity Considerations'},
      {id: 'constraints', label: 'Constraints or Specific Rules'},
    ],outputString: (inputs) => `You are a renowned computer scientist specializing in algorithm design and analysis. Can you provide guidance on designing an efficient algorithm to solve the given problem? Drawing upon your expertise in data structures and complexity considerations, can you recommend the optimal approach to tackle the problem? Please consider the problem statement or requirements (${inputs.problemStatement}), data structures and complexity considerations (${inputs.dataStructures}), and any constraints or specific rules (${inputs.constraints}). Please note that if any input is left blank, feel free to skip it in your response.`

  },
  'codeRefactoring': {
    formInputs: [
      {id: 'existingCode', label: 'Existing Code Snippet or Function'},
      {id: 'improvements', label: 'Desired Improvements or Goals'},
      {id: 'concerns', label: 'Performance or Readability Concerns'},
    ],
outputString: (inputs) => `You are an experienced software engineer with a track record of optimizing and refactoring code for improved performance and maintainability. Can you help the coder improve the given code snippet or function by providing guidance on refactoring techniques and best practices? Please consider the existing code snippet or function: ${inputs.existingCode} and provide recommendations for desired improvements or goals: ${inputs.improvements}, keeping in mind any performance or readability concerns: ${inputs.concerns}. Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'TDDExercise': {
    formInputs: [
      {id: 'problemStatement', label: 'Problem Statement or Feature Requirements'},
      {id: 'testCases', label: 'Test Cases or Specifications'},
      {id: 'constraints', label: 'Implementation Constraints'},
    ],

outputString: (inputs) => `You are a seasoned coding instructor well-versed in test-driven development (TDD) practices. Can you guide the coder through the process of writing test cases first and then implementing the corresponding code to fulfill the requirements? Please consider the problem statement or feature requirements: ${inputs.problemStatement} and provide guidance on writing effective test cases or specifications: ${inputs.testCases} while keeping in mind any implementation constraints: ${inputs.constraints} Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'dataManipulation': {
    formInputs: [
      {id: 'dataFormat', label: 'Input Data Format or Structure'},
      {id: 'transformationGoals', label: 'Desired Output or Transformation Goals'},
      {id: 'constraints', label: 'Constraints or Specific Requirements'},
    ],
outputString: (inputs) => `You are a data engineering expert with extensive experience in data manipulation and transformation. Can you assist the coder in transforming the given data from the specified input format or structure to achieve the desired output goals? Please consider the input data format or structure: ${inputs.dataFormat} and provide guidance on achieving the desired output or transformation goals: ${inputs.transformationGoals} while keeping in mind any constraints or specific requirements: ${inputs.constraints} Please note that if any input is left blank, feel free to skip it in your response.`
  },
  'oodDesign': {
    formInputs: [
      {id: 'systemRequirements', label: 'System Requirements or Use Cases'},
      {id: 'classesRelationships', label: 'Classes and Relationships to Consider'},
      {id: 'designPrinciples', label: 'Design Patterns or Principles to Follow'},
    ],
outputString: (inputs) => `You are a distinguished software architect specializing in object-oriented design principles. Can you guide the coder in designing an object-oriented system to fulfill the specified requirements or use cases? Please consider the system requirements or use cases: ${inputs.systemRequirements} and provide guidance on considering the classes and relationships: ${inputs.classesRelationships} while following the design patterns or principles: ${inputs.designPrinciples} Please note that if any input is left blank, feel free to skip it in your response.`
  },
    'techTroubleshooting': {
      formInputs: [
        {id: 'deviceOrSoftware', label: 'Device or Software Having Issues'},
        {id: 'problemDescription', label: 'Description of the Problem'},
        {id: 'stepsTaken', label: 'Steps Already Taken to Resolve the Issue'},
        {id: 'errorMessages', label: 'Error Messages Received, if Any'},
      ],
      outputString: (inputs) => `You are a skilled technical support specialist with a background in computer science and a Master's degree in Information Technology. I'm experiencing issues with my ${inputs.deviceOrSoftware}. The problem can be described as ${inputs.problemDescription}. I have already taken the following steps to resolve the issue: ${inputs.stepsTaken}. If any error messages were received, they are as follows: ${inputs.errorMessages}. Could you help me troubleshoot the problem based on these inputs? Please note that if any input is left blank, feel free to skip it in your response.`
    },'latex': {
      formInputs: [
      {id: 'journalName', label: 'Journal Name'},
      {id: 'articleTitle', label: 'Article Title'},
      {id: 'authors', label: 'Authors'},
      {id: 'abstract', label: 'Abstract'},
      {id: 'introduction', label: 'Introduction'},
      {id: 'methods', label: 'Methods'},
      {id: 'results', label: 'Results'},
      {id: 'discussion', label: 'Discussion'},
      {id: 'conclusion', label: 'Conclusion'},
      {id: 'references', label: 'References'},
      {id: 'figuresTables', label: 'Figures and Tables'},
      {id: 'equations', label: 'Equations'},
      {id: 'acknowledgments', label: 'Acknowledgments'},
      {id: 'fundingInformation', label: 'Funding Information'},
      {id: 'supplementaryMaterial', label: 'Supplementary Material'},
      ],
      outputString: (inputs) => `You are using the LaTeX Journal Formatting Assistant to help format my research article according to the requirements of (${inputs.journalName}). Here is the necessary information for each section of my research article, as indicated below:
      
      Article Title: (${inputs.articleTitle})
      Authors: (${inputs.authors})
      Abstract: (${inputs.abstract})
      Introduction: (${inputs.introduction})
      Methods: (${inputs.methods})
      Results: (${inputs.results})
      Discussion: (${inputs.discussion})
      Conclusion: (${inputs.conclusion})
      References: (${inputs.references})
      Figures and Tables: (${inputs.figuresTables})
      Equations: (${inputs.equations})
      Acknowledgments: (${inputs.acknowledgments})
      Funding Information: (${inputs.fundingInformation})
      Supplementary Material: (${inputs.supplementaryMaterial})
      
      Please ensure accuracy, clarity, and adherence to the guidelines and formatting style of the target journal. You will assist me in generating a LaTeX document with the correctly formatted article.
      
      Note: I understand that I will need to compile the final document using a LaTeX compiler such as TeX Live or MiKTeX by myself. Yet, please guide me in formatting the content of me research article using LaTeX`
      },  taskAutomation: {
        formInputs: [
          { id: 'triggerApp', label: 'Trigger application or event' },
          { id: 'actionApp', label: 'Action application or task' },
          { id: 'actionData', label: 'Data or parameters needed for the action' },
        ],
        outputString: inputs =>
          `You are an automation expert using Zapier. Can you help me automate tasks by connecting (${inputs.triggerApp}) and (${inputs.actionApp})? This is the data or parameters needed: (${inputs.actionData}). Use the provided guidance, inputs, and any additional information required for seamless task automation. Please note that if any input is left blank, feel free to skip it in your response.`,
      },
      dataIntegration: {
        formInputs: [
          { id: 'sourceApp', label: 'Source application or platform' },
          { id: 'destinationApp', label: 'Destination application or platform' },
          { id: 'dataMapping', label: 'Data mapping or transformation requirements' },
          { id: 'syncFrequency', label: 'Frequency or schedule for data synchronization' },
        ],
        outputString: inputs =>
          `You are a data integration specialist using Zapier. Can you assist me in integrating data between (${inputs.sourceApp}) and (${inputs.destinationApp})? These are the data mapping or transformation requirements: (${inputs.dataMapping}). The synchronization should happen (${inputs.syncFrequency}). Use the provided inputs, mappings, and any additional information needed for seamless data synchronization. Please note that if any input is left blank, feel free to skip it in your response.`,
      },
      notificationAutomation: {
        formInputs: [
          { id: 'notificationEvent', label: 'Event or trigger for the notification' },
          { id: 'notificationRecipient', label: 'Recipient or channel for the notification (email, SMS, Slack, etc.)' },
          { id: 'notificationContent', label: 'Content or message of the notification' },
        ],
        outputString: inputs =>
          `You are a notification automation expert using Zapier. Can you help me automate notifications based on (${inputs.notificationEvent})? The recipient or channel should be (${inputs.notificationRecipient}). This is the content or message: (${inputs.notificationContent}). Use the provided inputs, recipient details, message content, and any additional information required for effective notification automation. Please note that if any input is left blank, feel free to skip it in your response.`,
      },
      crmIntegration: {
        formInputs: [
          { id: 'crmPlatform', label: 'CRM platform or system' },
          { id: 'dataTransfer', label: 'Data import or export requirements' },
          { id: 'fieldMapping', label: 'Custom fields or data mapping' },
        ],
        outputString: inputs =>
          `You are a CRM integration specialist using Zapier. Can you assist me in integrating my CRM platform (${inputs.crmPlatform}) or system with other applications or databases? These are the data import or export requirements: (${inputs.dataTransfer}). The custom fields or data mapping should be: (${inputs.fieldMapping}). Use the provided inputs, data requirements, custom field mappings, and any additional information needed for seamless CRM integration. Please note that if any input is left blank, feel free to skip it in your response.`,
      },
      ecommerceAutomation: {
        formInputs: [
          { id: 'ecommercePlatform', label: 'E-commerce platform (e.g., Shopify, WooCommerce)' },
          { id: 'triggerEvent', label: 'Trigger event (e.g., new order, abandoned cart)' },
          { id: 'action', label: 'Action to be taken (e.g., send confirmation email, update inventory)' },
          { id: 'actionData', label: 'Additional data or parameters for the action' },
        ],
        outputString: inputs =>
          `You are an e-commerce automation expert using Zapier. Can you help me automate various tasks and processes in my e-commerce workflow? This is the e-commerce platform: (${inputs.ecommercePlatform}). The trigger event is: (${inputs.triggerEvent}). The action to be taken is: (${inputs.action}). These are the additional data or parameters: (${inputs.actionData}). Use the provided inputs, triggers, actions, and any additional information required for efficient e-commerce automation. Please note that if any input is left blank, feel free to skip it in your response.`,
      },
  
  

};

// Function to generate forms and formInputsMap
function generateFormsAndInputsMap(formConfigs) {
  const forms = {};
  const formInputsMap = {};

  for (let key in formConfigs) {
    let formInputs = formConfigs[key].formInputs;
    let outputString = formConfigs[key].outputString;

    let template = '';
    let formInputsList = [];

    formInputs.forEach(input => {
      template += `
      <label for="${input.id}">${input.label}:</label>
      <input type="text" id="${input.id}" name="${input.id}">
      `;
      formInputsList.push(input.id);
    });

    forms[key] = { template };
    formInputsMap[key] = { formInputs: formInputsList, outputString };
  }

  return { forms, formInputsMap };
}

const { forms, formInputsMap } = generateFormsAndInputsMap(formConfigs);

  

  chrome.storage.local.get(['selectedOption', 'formInputs'], function (data) {
      const selectedOption = data.selectedOption;
      const formInputs = data.formInputs || {};

      if (selectedOption) {
          document.getElementById('promptType').value = selectedOption;
          loadForm(selectedOption, formInputs[selectedOption]);
      }

      // Initialize Select2 after setting the value
      $(document).ready(function () {
          $('#promptType').select2();
      });

      // Trigger change event to load the saved form fields
      $('#promptType').trigger('change');
  });

  $('#promptType').on('select2:select', function (e) {
      // Clear out any previous form fields
      promptForm.innerHTML = '';

      let selectedValue = $(this).val();  // Get the selected value
      chrome.storage.local.set({ selectedOption: selectedValue });

      loadForm(selectedValue);
  });

  function loadForm(formType, formValues = {}) {
      if (forms[formType]) {
          promptForm.innerHTML = forms[formType].template;
          for (let field in formValues) {
              if (formValues.hasOwnProperty(field)) {
                  document.getElementById(field).value = formValues[field];
              }
          }
      }
  }

  promptForm.addEventListener('input', function (e) {
      if (e.target.name) {
          const inputValue = e.target.value;
          chrome.storage.local.get(['formInputs'], function (data) {
              const formInputs = data.formInputs || {};
              const selectedForm = formInputs[promptType.value] || {};
              selectedForm[e.target.name] = inputValue;
              formInputs[promptType.value] = selectedForm;
              chrome.storage.local.set({ formInputs: formInputs });
          });
      }
  });

  function retrievePreviousPrompts() {
    chrome.storage.local.get('previousPrompts', function(data) {
      const previousPrompts = data.previousPrompts || [];
      const previousPromptsDiv = document.getElementById('previousPrompts');
      previousPromptsDiv.innerHTML = ''; // Clear previous prompts before adding new ones
  
      previousPrompts.forEach(function(prompt) {
        const p = document.createElement('p');
        p.textContent = prompt;
        previousPromptsDiv.appendChild(p);
      });
    });
  }
  
  // Copy button listener
  document.getElementById('copyButton').addEventListener('click', function() {
    const promptTypeValue = promptType.value;
    let output = '';
  
    if (formInputsMap[promptTypeValue]) {
      const formInputs = formInputsMap[promptTypeValue].formInputs;
      const outputString = formInputsMap[promptTypeValue].outputString;
  
      const inputs = {};
      formInputs.forEach(function(inputId) {
        inputs[inputId] = document.getElementById(inputId).value;
      });
  
      output = outputString(inputs);
    }
  
    navigator.clipboard.writeText(output);
    chrome.storage.local.get('previousPrompts', function(data) {
      const previousPrompts = data.previousPrompts || [];
      previousPrompts.unshift(output);
      chrome.storage.local.set({ previousPrompts: previousPrompts }, retrievePreviousPrompts);
    });
  });
  
  // Clear button listener
  document.getElementById('clearButton').addEventListener('click', function() {
    chrome.storage.local.set({ previousPrompts: [] }, retrievePreviousPrompts);
  });
  
  // Call retrievePreviousPrompts on extension load
  retrievePreviousPrompts();
});