# Regex Validation Tool

A modern web application for validating different types of data using regular expressions. This tool helps validate:

- Email addresses
- URLs
- Phone numbers
- Credit card numbers

## Features

- Clean, modern UI built with React and Tailwind CSS
- Real-time validation feedback
- Support for multiple data formats
- TypeScript for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. Select the type of data you want to validate from the dropdown menu
2. Enter the data in the input field
3. Click "Validate" to check if the input matches the expected format
4. The result will be displayed below the input field

## Supported Formats

### Email Addresses
- user@example.com
- firstname.lastname@company.co.uk

### URLs
- https://www.example.com
- https://subdomain.example.org/page

### Phone Numbers
- (123) 456-7890
- 123-456-7890
- 123.456.7890

### Credit Card Numbers
- 1234 5678 9012 3456
- 1234-5678-9012-3456

## Project Structure

```
src/
  ├── components/
  │   └── RegexValidator.tsx  # Main validation component
  ├── App.tsx                 # Main application component
  ├── index.tsx              # Application entry point
  └── index.css              # Global styles
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Regular Expressions (Regex)

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript template.
