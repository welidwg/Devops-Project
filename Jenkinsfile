pipeline {
    agent any
 
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    def frontendPath = 'client'
                    def backendPath = 'backend'
                    
                    // Install frontend dependencies
                    dir(frontendPath) {    
                            sh 'npm install'  
                    }
                    
                    // Install backend dependencies
                    dir(backendPath) {
                            sh 'npm install'  
                    }
                }
            }
        }
        stage('Build') {
            steps {
                dir('client') {
                   
                        sh 'npm run build'
                    
                }
            }
        }
        stage('Test') {
            steps {
                dir('backend') {
                    
                        sh 'npm test'
                   
                }
            }
        }
    }
}