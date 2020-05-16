pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
          sh 'chmod +x test.sh'
          sh './test.sh'
      }
    }
    stage('Build') {
      steps {
        sh 'chmod +x build.sh'
        sh './build.sh'
      }
    }
    stage('Dockerize app') {
      steps {
          sh 'chmod +x dockerize.sh'
          sh './dockerize.sh'
      }
    }
  }
}
