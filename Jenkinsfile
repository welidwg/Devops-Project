pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'node16'
        PATH="${NODEJS_HOME}/bin:${PATH}"
        DOCKERHUB_CREDENTIALS = credentials('dh_cred')
    }
 
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    def frontendPath = 'client'
                    def backendPath = 'backend'
                    
                 
                    dir(frontendPath) {  
                        
                            sh 'npm install'  
                        
                    }
                    
                   
                    dir(backendPath) {
                        
                            sh 'npm install'  
                        
                    }
                }
            }
        }
        stage('Build') {
            steps {
                dir('client') {         
                        sh 'CI=false npm run build'     
                }
            }
        }

        stage('Init docker'){
            steps{

                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Build docker'){
            steps{
                sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/devops-project:$BUILD_ID .'
            }
        }

        stage('Deliver docker'){
            steps{
                sh 'docker push $DOCKERHUB_CREDENTIALS_USR/devops-project:$BUILD_ID'
            }
        }

        stage('Cleanup docker'){
            steps{
                sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/devops-project:$BUILD_ID'
                sh 'docker logout'
            }
        }


    }
}