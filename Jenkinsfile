pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Build dependencies') {
            steps {
                dir('server'){
                    echo 'Building backend dependencies..'
                    bat 'npm install'
                }
                dir('client'){
                   echo 'Building frontend dependencies..'
                   bat 'npm install'
                }
            }
        }
        stage('Test and coverage'){
            steps{
                dir('server'){
                    echo 'Testing..'
                    echo 'CONNECTION_URI=mongodb+srv://user:user@cluster0.rjqaazc.mongodb.net/?retryWrites=true&w=majority > .env'
                    bat 'npx jest --coverage'
                }
            }
        }
    }
}
