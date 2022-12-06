pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Build dependencies') {
            steps {
                dir('server'){
                    sh 'npm install'
                }
            }
        }
        stage('Test and coverage'){
            steps{
                dir('server'){
                    sh 'npx jest --coverage'
                }
            }
        }
    }
}