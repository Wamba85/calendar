pipeline {
  agent none
  environment {
    CI = 'true'
    HOME = '.'
  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:latest'
          args '-p 3000:3000'
        }
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      agent {
        docker {
          image 'node:latest'
          args '-p 3000:3000'
        }
      }
      steps {
          sh 'chmod +x test.sh'
          sh './test.sh'
      }
    }
    stage('Dockerize app') {
      agent any
      steps {
          sh 'chmod +x dockerize.sh'
          sh './dockerize.sh'
      }
    }
  }
}
