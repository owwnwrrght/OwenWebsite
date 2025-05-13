#!/bin/bash

# Replace the following URL with the URL of your GitHub repository
# Example: https://github.com/yourusername/portfolio.git
GITHUB_REPO_URL="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"

# Navigate to your website directory
cd /Users/owenwright/Desktop/OwenWebsite

# Set up the remote repository
git remote add origin $GITHUB_REPO_URL

# Push your code to GitHub
git push -u origin main

echo "Repository has been pushed to GitHub!"
echo "To set up GitHub Pages, go to:"
echo "  GitHub Repository > Settings > Pages"
echo "  Under 'Source', select 'main' branch"
echo "  Click 'Save'"
echo "Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
echo ""
echo "To use your custom domain (owen-wright.com):"
echo "  Create a file named 'CNAME' in your repository with the content: owen-wright.com"
echo "  Configure your domain according to DOMAIN_SETUP.md"