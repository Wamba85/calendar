pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'sudo chown -R 996:994 "/.npm"'
                sh 'npm install'
            }
        }
    }
}
