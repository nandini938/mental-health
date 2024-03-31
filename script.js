const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;

    if (userMessage.trim() !== '') {
        displayMessage(userMessage, 'user');

        const botResponse = generateBotResponse(userMessage);

        displayMessage(botResponse, 'bot');

        userInput.value = ''; 
    }
});

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
}

function generateBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes('fever')) {
        return 'If you have a fever, it\'s important to rest, stay hydrated, and monitor your temperature. If your fever persists or worsens, consult a healthcare professional for advice and evaluation.';
    }
    else if (userMessage.toLowerCase().includes('headache')) {
        return 'I\'m sorry to hear that you have a headache. Here are some tips that may help:\n\n1. Rest in a quiet, dark room.\n2. Drink plenty of water to stay hydrated.\n3. Apply a cold or warm compress to your forehead.\n4. Consider over-the-counter pain relievers (follow the label instructions).\n5. Try relaxation techniques like deep breathing or meditation.\n\nIf your headache persists or worsens, it\'s important to consult a healthcare professional for further evaluation.';
    }
    else if (userMessage.toLowerCase().includes('anxiety')) {
        return 'I\'m sorry to hear that you\'re feeling anxious. Anxiety is a common experience, and there are strategies that can help:\n\n1. Practice deep breathing exercises to calm your nervous system.\n2. Engage in regular physical activity to reduce stress and anxiety.\n3. Try mindfulness meditation to focus on the present moment.\n4. Avoid excessive caffeine and alcohol, which can worsen anxiety.\n5. Set realistic goals and prioritize tasks to reduce overwhelming feelings.\n6. Consider talking to a mental health professional for support and guidance.\n\nRemember, managing anxiety is possible, and you don\'t have to go through it alone. Seeking help and support is a positive step.\n\nbooks:At Last a Life,Dare,Declutter Your Mind';
    }
    else if (userMessage.toLowerCase().includes('inattention')) {
        return 'ADHD, or Attention Deficit Hyperactivity Disorder, is a complex neurodevelopmental disorder. If you suspect you or someone you know may have ADHD, it\'s essential to work with a healthcare professional, such as a psychiatrist or psychologist, for a proper evaluation. Treatment options may include behavioral therapy, medications, or a combination of both. A qualified healthcare professional can provide personalized advice and treatment recommendations.\n\n books:Order from Chaos,Thriving with Adult ADHD';
    }
    else if (userMessage.toLowerCase().includes('hyperactivity')) {
        return 'ADHD, or Attention Deficit Hyperactivity Disorder, is a complex neurodevelopmental disorder. If you suspect you or someone you know may have ADHD, it\'s essential to work with a healthcare professional, such as a psychiatrist or psychologist, for a proper evaluation. Treatment options may include behavioral therapy, medications, or a combination of both. A qualified healthcare professional can provide personalized advice and treatment recommendations.\n\n books:Order from Chaos,Thriving with Adult ADHD';
    }
    else if (userMessage.toLowerCase().includes('impulsivity')) {
        return 'ADHD, or Attention Deficit Hyperactivity Disorder, is a complex neurodevelopmental disorder. If you suspect you or someone you know may have ADHD, it\'s essential to work with a healthcare professional, such as a psychiatrist or psychologist, for a proper evaluation. Treatment options may include behavioral therapy, medications, or a combination of both. A qualified healthcare professional can provide personalized advice and treatment recommendations.\n\n books:Order from Chaos,Thriving with Adult ADHD';
    }
    else if (userMessage.toLowerCase().includes('depression')) {
        return 'I\'m sorry to hear that you\'re feeling this way. Dealing with depression can be challenging, but there are strategies that may help:\n\n1. Reach out to a mental health professional for support and treatment options.\n2. Talk to friends and family about your feelings; you don\'t have to go through this alone.\n3. Engage in regular physical activity and maintain a healthy diet.\n4. Practice relaxation techniques such as deep breathing or meditation.\n5. Set small, achievable goals for yourself each day.\n6. Try to maintain a regular sleep schedule.\n7. Consider participating in support groups or therapy.\n\nRemember, seeking professional help is essential when dealing with depression, and there are effective treatments available.\n\n books:Happiness Is an Inside Job,Where Feeling Good ,The Power of Positivity to Overcome Depression.';
    }
    else if (userMessage.toLowerCase().includes('hyper-energy')) {
        return 'Bipolar Disorder is a mental health condition characterized by extreme mood swings. Treatment may include mood stabilizers, therapy, and lifestyle adjustments. It\'s important to consult a mental health professional if you suspect you or someone you know has bipolar disorder.\n\n books:An Unquiet Mind,The Bipolar Disorder Survival Guide by David J. Miklowitz,Madness';
    }
    else if (userMessage.toLowerCase().includes('mood swings')) {
        return 'Bipolar Disorder is a mental health condition characterized by extreme mood swings. Treatment may include mood stabilizers, therapy, and lifestyle adjustments. It\'s important to consult a mental health professional if you suspect you or someone you know has bipolar disorder.\n\n books:An Unquiet Mind,The Bipolar Disorder Survival Guide by David J. Miklowitz,Madness';
    }
    else if (userMessage.toLowerCase().includes('low mood')) {
        return 'Bipolar Disorder is a mental health condition characterized by extreme mood swings. Treatment may include mood stabilizers, therapy, and lifestyle adjustments. It\'s important to consult a mental health professional if you suspect you or someone you know has bipolar disorder.\n\nbooks:An Unquiet Mind,The Bipolar Disorder Survival Guide by David J. Miklowitz,Madness';
    }
    else if (userMessage.toLowerCase().includes('disorganized thinking')) {
        return 'Schizophrenia is a complex mental disorder that may involve hallucinations, delusions, and disorganized thinking. Early diagnosis and treatment are critical. Consult a psychiatrist for evaluation and guidance.books:The Soloist By Steve Lopez,Hocus Bogus By Romain Gary';
    }
    else if (userMessage.toLowerCase().includes('delusion')) {
        return 'Schizophrenia is a complex mental disorder that may involve hallucinations, delusions, and disorganized thinking. Early diagnosis and treatment are critical. Consult a psychiatrist for evaluation and guidance.books:The Soloist By Steve Lopez,Hocus Bogus By Romain Gary';
    }
    else if (userMessage.toLowerCase().includes('checking compulsion')) {
        return 'Obsessive-Compulsive Disorder (OCD) is characterized by intrusive thoughts and repetitive behaviors. Cognitive-behavioral therapy and medications can help manage symptoms. Consult a mental health professional for an assessment.\n\n books:Freedom from Obsessive Compulsive Disorder by Jonathan Grayson,The Imp of the Mind';
    }
    else if (userMessage.toLowerCase().includes('loneliness')) {
        return 'I understand that loneliness can be challenging. It\'s important to connect with friends and loved ones, engage in activities you enjoy, and consider joining social groups or seeking support from a mental health professional. Remember, you are not alone, and there are people who care about you.\n\n books:Becoming Human by Jean Vanier,Hopecasting';
    }
    else if (userMessage.toLowerCase().includes('homesickness')) {
        return 'Homesickness is a common feeling when you are away from home. To cope with homesickness, try to stay connected with loved ones, establish a routine, and explore your new environment. It is okay to feel this way, and it often gets easier with time.\n\n books:An American Childhood by Annie Dillard,Swamplandia! by Karen Russell';
    }
    else if (userMessage.toLowerCase().includes('lonely')) {
        return 'I understand that loneliness can be challenging. It\'s important to connect with friends and loved ones, engage in activities you enjoy, and consider joining social groups or seeking support from a mental health professional. Remember, you are not alone, and there are people who care about you.\n\n books:Becoming Human by Jean Vanier,Hopecasting';
    }
    else {
        return 'I\'m here to provide information and support. How can I assist you today?';
    }
}
