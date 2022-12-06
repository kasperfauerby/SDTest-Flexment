pipeline {
    agent any
    stages {
        dir('server'){
            stage('Build dependencies') {
                steps {
                    sh 'npm install'
                }
            }
            stage('Test and coverage'){
                steps{
                    sh 'npx jest --coverage'
                }
            }
        }
    }
}