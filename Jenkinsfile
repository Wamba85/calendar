pipeline {
  agent {
    label 'master'
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Install') {
      agent {
        docker {
          image 'node:latest'
          args '-p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock'
        }
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      agent {
        docker {
          image 'node:latest'
          args '-p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock'
        }
      }
      steps {
          sh 'chmod +x test.sh'
          sh './test.sh'
      }
    }
    stage('Build') {
      agent {
        docker {
          image 'node:latest'
          args '-p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock'
        }
      }
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
