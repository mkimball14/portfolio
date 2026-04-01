param (
    [string]$Message = "Update project"
)

Write-Host "Adding all changes..."
git add .

Write-Host "Committing with message: $Message"
git commit -m "$Message"

Write-Host "Pushing to origin main..."
git push origin main

Write-Host "Done!"
