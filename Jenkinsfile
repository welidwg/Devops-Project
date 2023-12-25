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
                        withNodeJS(nodeJSInstallationName: 'node15') {  
                            sh 'npm install'  
                        }
                    }
                    
                    // Install backend dependencies
                    dir(backendPath) {
                        withNodeJS(nodeJSInstallationName: 'node15') { 
                            sh 'npm install'  
                        }
                    }
                }
            }
        }
        stage('Build') {
            steps {
                dir('client') {
                   withNodeJS(nodeJSInstallationName: 'node15') { 
                        sh 'npm run build'
                   }
                    
                }
            }
        }
        stage('Test') {
            steps {
                dir('backend') {
                    withNodeJS(nodeJSInstallationName: 'node15') { 
                        sh 'npm test'
                    }
                   
                }
            }
        }
    }
}