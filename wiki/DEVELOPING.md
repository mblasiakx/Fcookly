1. Clone git repo to your computer 
`git clone http://git.fcoolky.com/scm/fdr/fcoolky.git`
1. Create your own branch from `release.x.x`
1. After developing push your branch to `origin` 
1. Create Pull Request in bitbucket to see changes - merge target: `release.x.x` branch
1. After successful code review your branch will be merged
1. `release.x.x` branch will be merged into `master` at the end of sprint
1. Never push confidential data or credentials! You can add files containing sensitive data to `.gitignore` of your directory
1. Remember to test your code
1. Every `todo` report to Jira 
1. If your IDE adds some junk files (e.g. `.idea` directory in IntelliJ) then add it to `.gitignore`