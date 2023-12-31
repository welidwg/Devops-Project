pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'node18'
        PATH="${NODEJS_HOME}/bin:${PATH}"
        DOCKERHUB_CREDENTIALS = credentials('dh_cred')
    }
 
    stages {
        /*stage('Install Dependencies') {
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
        }*/

        /*stage('Build') {
            steps {
                dir('client') {         
                        sh 'CI=false npm run build'     
                }
            }
        }*/

        stage('Init docker'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Build docker'){
            steps{
               
                 dir('app') {         
                    sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/cars-image:$BUILD_ID .'   
                }          
            }
        }

        stage('Deliver docker'){
            steps{
               
                dir('backend') {         
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/cars-image:$BUILD_ID'   
                }      
            }
        }

        stage('Cleanup docker'){
            steps{
                // dir('client') {         
                //     sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/client:$BUILD_ID'   
                // }
                dir('backend') {         
                    sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/cars-image:$BUILD_ID'   
                }  
                sh 'docker logout'
            }
        }

    }
}