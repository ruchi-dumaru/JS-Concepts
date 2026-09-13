# MERN Stack
- **JS Basics**
  - js syntax
   - js basic syntax
   - variables and constants
   - scope
   - commenting   
  - data types
   - Primitive
   - Derived
  - Operators and Control statements
  - Function
   - async/
   - sync
  - OOP
  - Es

- **Git**
  - Opeartions
  - Push
  - Pull
  - Merge
  - Conflict resolution
 - General Commands
 - Version
 - Project Management perspective

- **Nodejs with Express**
 - Nodejs
 - Package manager/Dependency management
 - Usages
- **Express**
 - MVC pattern
 - Software Architecture
 - SOLID Principle of Software Development

- **Mongodb**
 - CRUD usages
 - CLI/Compass usages
 - Integration API/BE   
- **SQL Server**
 - Postgresql
 - Integration (CRUD with express)----------> API server

- **Frontend**
- **HTML BASICS**
- **CSS Basics**
 - tailwindcss
- **DOM Manipulation using JS**
- **Typescript**
- **React Js**
- **Nextjs** 

## Comments
```js
//  console.info("info")
// console.error("err")
// console.warn("warn")
// console.table("table")
// console.group("Group Start")
// console.log("I am in group")
// console.groupEnd("Group End")
// console.timeStamp("Start time");
// console.timeStamp("End time")


```

### Fetch all data from database --> pool --> Algorithm run --> Data seperate


## Working Machine (local SetUp)
## Online resource(Online repo->github or gitlab,bitbucket)

# Devloper - code mainataience
# devops - automatiion
# project manager - project tracking

### Tree structure
- main/trunk(main/master) ---> default branch
- 


- Node js github
- Git use two account type: pre and premium
- pre:ruleset can be defined
- premium:have to pay

# SSH Setup
- ssh-keygen enter
- id_ed519 (file)
- enter password:enter
- re-enter:enter
- it will create two file i.e id_ed519 and id_ed519.pub
- open that folder (folder c:drive)
- user(folder) .ssh-->c:/Users/Profile/.ssh/
- two file(type-file and type-microsoft publisher-->right click ,open    with, more apps [vs-code])

- for mac
 - cat ~/.ssh/id_ed519.pub
 - enter then copy the content-->ssh-ed25519 AAA
 - go to github profile and settings and then go to SSH and GpG keys
 - new SSH key click
 - paste the copied content in key box
 - click add ssh key 
 - done
 - do u want to add github as known host:type y

// codes/mern/js-basics/git

//mern/js-basics ma janu parea--> cd folderName
//mern --> cd ../
//directly--> cd mern/js-basics/
// ***  cd /d/mern/js-basics

# Git set up command
- git init
- git remote add origin (paste SSH)
- git add .
- git commit -m "Initial setup"
- Please tell me whou are:
- run :
  - git config --global user.name "Ruchi Dumaru"
  - git config --global user.email "ruchi@gmail.com"
  - git commit -m "Initial setup"


# Before git push and pull 
- run :
 - git status
 - git push origin main 
- clone :
 - git clone (paste url)
 - no need to init

## **Git commands**
- **To setup git**
  - `git init`

- ** To link with remote repo**
 - `git remote add <origin> <url>`

- ** Git general comands **
 - **Git status check**
  - `git status`
 - **Git branch listing**
  - `git branch`
 - **Git create new branch**
  - `git checkout -b <branchName>`
 - **Switching to existing branch**
  - `git checkout main`
 - **making branch**
  - `git push origin ruchi:std `
 - **Merge the code to main branch**
  - `git pull origin std`
 - **Changing coneent in main branch in git**
  - commit it it will be change only in gitub not in local disk
  - `git pull origin main`
  - conflict will be created so manually resolve the conflict
 - **Conflict** 
  - Inside readme.md <<<`HEAD to ===== is your code`
  - `==== to >>>> is incoming code`
  - Accept current|Accept incoming| Accept combination
- **After resolving conflict**
 - Commit the codes
  - `git add .`---tracks/kkeps record of all the changes
  - `git commit -m "Merge conflict resolved"` -- commit
  - `git status`

- **push command**
 - `git push origin <localbranch>[:<remoteBranch>]`  
- **Pull command**
 - first stage/commit your changes
 - `git pull origin <remoteBranchName` 

# To push code from one branch to another:
- ` git clone <url>`
- `git checkout -b ruchi`
- change code
- `git commit -m "Added git command" `
- `git push origin ruchi`
- create new pull request

# Git tracking management
- Jira,Trello,Frabicator,Red panda,clickup,Aasana

# validation/Registeration/Activation/login/Access
