pipeline {
    agent any
    stages {
        stage('Build dependencies') {
            steps {
                sh 'npm -v'
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