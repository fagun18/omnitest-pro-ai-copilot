
import { useEffect } from 'react';

const FormspreeScript = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://formspree.io/js/formbutton-v1.min.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    // Initialize formbutton once the script is loaded
    script.onload = () => {
      if (window.formbutton) {
        window.formbutton("create", {
          action: "https://formspree.io/f/mldbwqdv",
          title: "How can we help?",
          fields: [
            { 
              type: "email", 
              label: "Email:", 
              name: "email",
              required: true,
              placeholder: "your@email.com"
            },
            {
              type: "textarea",
              label: "Message:",
              name: "message",
              placeholder: "What's on your mind?",
            },
            { type: "submit" }      
          ],
          styles: {
            title: {
              backgroundColor: "#4C63B6"  // Using the omnitest color instead of gray
            },
            button: {
              backgroundColor: "#FF7D35"  // Using the highlight color
            }
          }
        });
      }
    };

    // Clean up
    return () => {
      document.body.removeChild(script);
      // Remove the formbutton if it exists
      if (window.formbutton && document.querySelector('.formbutton-container')) {
        window.formbutton("destroy");
      }
    };
  }, []);

  return null;
};

export default FormspreeScript;
