# Registration Form with Validation

A comprehensive registration form with real-time validation, responsive design, and user-friendly features.

## Features

### Form Fields
- First Name (minimum 5 characters)
- Last Name
- Surname/Family Name
- Email (must contain "@")
- Password (minimum 8 characters with one uppercase)
- Confirm Password (must match password)
- Gender (radio buttons - horizontal layout)
- Country (dropdown with extensive country list)
- Terms and Conditions (checkbox)

### Validation Features
- Real-time validation as users type
- Visual feedback with color-coded borders (green for valid, red for invalid)
- Detailed error messages under each field
- Submit button disabled until all fields are valid
- Form submission with `event.preventDefault()`
- Summary screen after successful submission
- Back button to return to form from summary

### User Experience
- Responsive design that works on all devices
- Horizontal gender selection for better UX
- Comprehensive country list with South Asian countries (Pakistan, India) at the top
- Smooth scrolling and transitions
- "Back to Form" button from summary screen

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Proper form labeling and accessibility
- Responsive container with clean styling

### CSS Styling
- Modern, clean design with appropriate spacing
- Flexbox for horizontal radio button layout
- Responsive design with media queries
- Visual feedback for form states (valid/invalid)
- Professional color scheme

### JavaScript Functionality
- Real-time validation using DOM events
- DOM manipulation for error messages
- Form state management
- Summary screen generation
- Back button functionality

### Validation Rules
1. **First Name**: At least 5 characters
2. **Email**: Must contain "@" symbol
3. **Password**: At least 8 characters with one uppercase letter
4. **Confirm Password**: Must match the password field
5. **Gender**: One option must be selected
6. **Country**: Must not be the default option
7. **Terms**: Checkbox must be checked

## Files Structure

```
form_validation/
├── index.html          # Main HTML file with form structure
├── script.js           # JavaScript validation and functionality
├── style.css           # CSS styling (external)
└── README.md           # This documentation file
```

## How to Use

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Fill out the form with valid information
4. The submit button will enable when all validations pass
5. After submission, a summary screen will appear
6. Use the "Back to Form" button to make changes if needed

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Adding More Validation Rules
Edit `script.js` to add additional validation functions and update the validation state object.

### Styling Changes
Modify `style.css` to change colors, spacing, or other visual elements.

### Country List
The country dropdown in `index.html` can be modified to add or remove countries as needed.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (DOM Manipulation, Event Handling)

## Responsive Design

The form is fully responsive and adapts to different screen sizes:
- Desktop: Full horizontal layout
- Mobile: Stacked layout with appropriate spacing
- Gender radio buttons stack vertically on mobile for better touch targets

## Accessibility

- Proper form labeling
- Semantic HTML structure
- Keyboard navigable
- Screen reader friendly

## License

This project is open source and available under the MIT License.