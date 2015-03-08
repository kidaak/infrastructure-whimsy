# Install the Javascript dependencies
# Only needed if you're doing dev since we bundle these dependencies as part of
# the release process
task :bootstrap do
  puts `npm install`
  puts `bower install --allow-root`
  puts `jsx jsx public/js`
end
