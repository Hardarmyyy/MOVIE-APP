pipeline {
    agent any

    tools {
        nodejs 'node-18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo 'Build successful! Artifacts archived.'
        }
        failure {
            echo 'Build failed. Check the logs for details.'
        }
    }
}