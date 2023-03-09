

## Deploying a build

### Run the build (update the dist)
`npm run deploy`
### Force add dist folder
`git add dist -f`
### Add a commit message 
`git commit -m "adding dist"`
### Push to the gh-pages subtree
`git subtree push --prefix dist origin gh-pages`