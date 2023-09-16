var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:art-i-solution/PHYWE-Login.git', // Update to point to your repository
        user: {
            name: 'art-i-solution', // update to use your name
            email: 'ph@artisolution.de' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)