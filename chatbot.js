window.onload = function() {
    // Get the tenantId from the script element
    var tenantId = document.currentScript.getAttribute('tenantId');

    // Create a new script element
    var script = document.createElement('script');

    // Set the src attribute to the URL of the chatbot script
    script.src = 'https://bot.orimon.ai/deploy/index.js';

    // Set the tenantId attribute
    script.setAttribute('tenantId', tenantId);

    // Append the script element to the body of the document
    document.body.appendChild(script);
};
